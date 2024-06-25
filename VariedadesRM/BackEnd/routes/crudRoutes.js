const express = require('express');
const router = express.Router();

module.exports = (db) => { 

  // Usuario en el Login
  // Ruta para verificar las credenciales y obtener el rol del usuario
  router.post('/login', (req, res) => {
    const { nombre_Usuario, contraseña } = req.body;

    if (!nombre_Usuario || !contraseña) {
      return res.status(400).json({ error: 'Nombre de usuario y contraseña son obligatorios' });
    }

    const sql = `SELECT Rol FROM usuario WHERE nombre_Usuario = ? AND contraseña = ?`;
    db.query(sql, [nombre_Usuario, contraseña], (err, result) => {
      if (err) {
        console.error('Error al verificar credenciales:', err);
        return res.status(500).json({ error: 'Error al verificar credenciales' });
      }

      if (result.length === 1) {
        const { Rol } = result[0];
        res.json({ Rol });
      } else {
        res.status(401).json({ error: 'Credenciales incorrectas' });
      }
    });
  });

  // Cliente
  // Ruta para obtener todos los clientes
  router.get('/getClientes', (req, res) => {
    const sql = `SELECT * FROM Cliente`;
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error al obtener clientes:', err);
        res.status(500).json({ error: 'Error al obtener clientes de la tabla Cliente' });
      } else {
        res.status(200).json(results);
      }
    });
  });

  // Ruta para crear un nuevo cliente
  router.post('/createCliente', (req, res) => {
    const { nombre, apellido, telefono, nombre_Usuario, contraseña, Rol } = req.body;

    if (!nombre || !apellido || !telefono || !nombre_Usuario || !contraseña || !Rol) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const sql = 'INSERT INTO Usuario (nombre_Usuario, contraseña, Rol) VALUES (?, ?, ?)';
    const usuarioValues = [nombre_Usuario, contraseña, Rol];

    db.query(sql, usuarioValues, (err, usuarioResult) => {
      if (err) {
        console.error('Error al insertar un usuario:', err);
        return res.status(500).json({ error: 'Error al insertar un usuario en la tabla Usuario' });
      }

      const idUsuarioInsertado = usuarioResult.insertId;
      const insertClienteSQL = 'INSERT INTO Cliente (id_Usuario, nombre, apellido, telefono) VALUES (?, ?, ?, ?)';
      const clienteValues = [idUsuarioInsertado, nombre, apellido, telefono];

      db.query(insertClienteSQL, clienteValues, (err, clienteResult) => {
        if (err) {
          console.error('Error al insertar un cliente:', err);
          return res.status(500).json({ error: 'Error al insertar un cliente en la tabla Cliente' });
        }

        res.status(201).json({ message: 'Cliente agregado exitosamente' });
      });
    });
  });

  // Ruta para actualizar un cliente
  router.put('/updateCliente/:id', (req, res) => {
    const id_cliente = req.params.id;
    const { nombre, apellido, telefono } = req.body;

    if (!nombre || !apellido) {
      return res.status(400).json({ error: 'Los campos "nombre" y "apellido" son obligatorios' });
    }

    const sql = `UPDATE Cliente SET nombre = ?, apellido = ?, telefono = ? WHERE id_cliente = ?`;
    const values = [nombre, apellido, telefono, id_cliente];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al actualizar el cliente:', err);
        res.status(500).json({ error: 'Error al actualizar el cliente en la tabla Cliente' });
      } else {
        res.status(200).json({ message: 'Cliente actualizado exitosamente' });
      }
    });
  });

  // Ruta para eliminar un cliente
  router.delete('/deleteCliente/:id', (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM cliente WHERE id_cliente = ?`;

    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error('Error al eliminar el cliente:', err);
        res.status(500).json({ error: 'Error al eliminar el cliente de la tabla Cliente' });
      } else {
        res.status(200).json({ message: 'Cliente eliminado exitosamente' });
      }
    });
  });

  // Categoria
  // Ruta para leer registros de la tabla categoria
  router.get('/readCategoria', (req, res) => {
    const sql = 'SELECT * FROM categoria';

    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error al leer registros de la tabla categoria:', err);
        res.status(500).json({ error: 'Error al leer registros de la tabla categoria' });
      } else {
        res.status(200).json(result);
      }
    });
  });

  // Ruta para crear un nuevo registro en la tabla Categoria
  router.post('/createCategoria', (req, res) => {
    const { nombre } = req.body;

    if (!nombre) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const sql = `INSERT INTO Categoria (nombre) VALUES (?)`;
    const values = [nombre];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar registro en la tabla categoria:', err);
        res.status(500).json({ error: 'Error al insertar registro en la tabla categoria' });
      } else {
        res.status(200).json({ message: 'Registro agregado exitosamente' });
      }
    });
  });

  // Ruta para actualizar un registro existente por ID
  router.put('/updateCategoria/:id_categoria', (req, res) => {
    const id_categoria = req.params.id_categoria;
    const { nombre } = req.body;

    if (!nombre) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const sql = `
      UPDATE categoria
      SET nombre = ?
      WHERE id_categoria = ?`;

    const values = [nombre, id_categoria];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al actualizar el registro:', err);
        res.status(500).json({ error: 'Error al actualizar el registro' });
      } else {
        res.status(200).json({ message: 'Registro actualizado con éxito' });
      }
    });
  });

  // Ruta para eliminar un registro existente por ID en la tabla Categoria
  router.delete('/deleteCategoria/:id_categoria', (req, res) => {
    const id_categoria = req.params.id_categoria;
    const sql = 'DELETE FROM categoria WHERE id_categoria = ?';

    db.query(sql, [id_categoria], (err, result) => {
      if (err) {
        console.error('Error al eliminar el registro:', err);
        res.status(500).json({ error: 'Error al eliminar el registro de la tabla Categoria' });
      } else {
        res.status(200).json({ message: 'Registro eliminado con éxito' });
      }
    });
  });

  // Producto
  // Ruta para leer registros de la tabla producto
  router.get('/readproducto', (req, res) => {
    const sql = 'SELECT * FROM Producto';

    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error al leer registros de la tabla categotia:', err);
        res.status(500).json({ error: 'Error al leer registros de la tabla Categoria' });
      } else {
        res.status(200).json(result);
      }
    });
  });

  // Ruta para crear un nuevo producto
  router.post('/createProducto', (req, res) => {
    const { id_categoria, descripcion, nombreProducto, precio, Stock, imagen } = req.body;

    if (!id_categoria || !descripcion || !nombreProducto || !precio || !Stock || !imagen) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const sql = `INSERT INTO Producto (id_categoria, descripcion, nombreProducto, precio, Stock, imagen) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [id_categoria, descripcion, nombreProducto, precio, Stock, imagen];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al insertar un producto:', err);
        res.status(500).json({ error: 'Error al insertar un producto en la tabla Producto' });
      } else {
        res.status(201).json({ message: 'Producto agregado exitosamente' });
      }
    });
  });

  // Ruta para actualizar un producto
  router.put('/updateProducto/:id_producto', (req, res) => {
    const id_producto = req.params.id_producto;
    const { id_categoria, descripcion, nombreProducto, precio, Stock, imagen } = req.body;

    if (!id_categoria || !descripcion || !nombreProducto || !precio || !Stock || !imagen) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const sql = `UPDATE Producto SET id_categoria = ?, descripcion = ?, nombreProducto = ?, precio = ?, Stock = ?, imagen = ? WHERE id_producto = ?`;
    const values = [id_categoria, descripcion, nombreProducto, precio, Stock, imagen, id_producto];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al actualizar el producto:', err);
        res.status(500).json({ error: 'Error al actualizar el producto en la tabla Producto' });
      } else {
        res.status(200).json({ message: 'Producto actualizado exitosamente' });
      }
    });
  });

  // Ruta para eliminar un producto
  router.delete('/deleteProducto/:id_producto', (req, res) => {
    const id_producto = req.params.id_producto;
    const sql = `DELETE FROM Producto WHERE id_producto = ?`;

    db.query(sql, [id_producto], (err, result) => {
      if (err) {
        console.error('Error al eliminar el producto:', err);
        res.status(500).json({ error: 'Error al eliminar el producto de la tabla Producto' });
      } else {
        res.status(200).json({ message: 'Producto eliminado exitosamente' });
      }
    });
  });

  // Ventas
  // Ruta para registrar una venta
  router.post('/createVenta', (req, res) => {
    const { id_cliente, fecha, productos } = req.body;

    if (!id_cliente || !fecha || !Array.isArray(productos) || productos.length === 0) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const ventaSQL = `INSERT INTO Venta (id_cliente, fecha) VALUES (?, ?)`;
    const ventaValues = [id_cliente, fecha];

    db.query(ventaSQL, ventaValues, (err, ventaResult) => {
      if (err) {
        console.error('Error al registrar la venta:', err);
        return res.status(500).json({ error: 'Error al registrar la venta' });
      }

      const idVentaInsertada = ventaResult.insertId;
      const detalleVentaSQL = `INSERT INTO DetalleVenta (id_venta, id_producto, cantidad) VALUES ?`;
      const detalleVentaValues = productos.map(producto => [idVentaInsertada, producto.id_producto, producto.cantidad]);

      db.query(detalleVentaSQL, [detalleVentaValues], (err, detalleResult) => {
        if (err) {
          console.error('Error al registrar los detalles de la venta:', err);
          return res.status(500).json({ error: 'Error al registrar los detalles de la venta' });
        }

        res.status(201).json({ message: 'Venta registrada exitosamente' });
      });
    });
  });

  // Ruta para obtener todas las ventas
  router.get('/getVentas', (req, res) => {
    const sql = `SELECT * FROM Venta`;
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error al obtener las ventas:', err);
        res.status(500).json({ error: 'Error al obtener las ventas' });
      } else {
        res.status(200).json(results);
      }
    });
  });

  // Ruta para actualizar una venta
  router.put('/updateVenta/:id', (req, res) => {
    const id_venta = req.params.id;
    const { id_cliente, fecha } = req.body;

    if (!id_cliente || !fecha) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const sql = `UPDATE Venta SET id_cliente = ?, fecha = ? WHERE id_venta = ?`;
    const values = [id_cliente, fecha, id_venta];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al actualizar la venta:', err);
        res.status(500).json({ error: 'Error al actualizar la venta' });
      } else {
        res.status(200).json({ message: 'Venta actualizada exitosamente' });
      }
    });
  });

  // Ruta para eliminar una venta
  router.delete('/deleteVenta/:id', (req, res) => {
    const id_venta = req.params.id;
    const sql = `DELETE FROM Venta WHERE id_venta = ?`;

    db.query(sql, [id_venta], (err, result) => {
      if (err) {
        console.error('Error al eliminar la venta:', err);
        res.status(500).json({ error: 'Error al eliminar la venta' });
      } else {
        res.status(200).json({ message: 'Venta eliminada exitosamente' });
      }
    });
  });

  // Ruta para obtener el gráfico de ventas por mes y año
  router.get('/getVentasGrafico', (req, res) => {
    const sql = `
      SELECT 
        DATE_FORMAT(fecha, '%Y-%m') AS mes,
        COUNT(*) AS ventas_mensuales,
        SUM(DV.cantidad * P.precio) AS total_mensual
      FROM Venta V
      JOIN DetalleVenta DV ON V.id_venta = DV.id_venta
      JOIN Producto P ON DV.id_producto = P.id_producto
      GROUP BY mes
      ORDER BY mes;
    `;

    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error al obtener las ventas para el gráfico:', err);
        res.status(500).json({ error: 'Error al obtener las ventas para el gráfico' });
      } else {
        res.status(200).json(results);
      }
    });
  });

  return router;
};
