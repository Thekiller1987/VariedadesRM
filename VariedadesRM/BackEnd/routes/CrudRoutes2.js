const express = require('express');
const router = express.Router();

module.exports = (db) => {
  // Ruta para calcular la tasa de ventas por mes
  router.get('/TasaVentasPorMes', (req, res) => {
    const sql = `
      SELECT Mes,
        COUNT(hv.id_venta) AS NumeroTotalVentas,
        (COUNT(hv.id_venta) / (SELECT COUNT(*) FROM dim_tiempo WHERE Mes = dt.Mes)) * 100 AS TasaVentasPorMes
      FROM dim_tiempo dt
      JOIN h_venta hv ON dt.id_Tiempo = hv.id_Tiempo
      GROUP BY Mes
      LIMIT 0, 1000;
    `;

    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error al calcular la tasa de ventas por mes:', err);
        res.status(500).json({ error: 'Error al calcular la tasa de ventas por mes' });
      } else {
        res.status(200).json(result);
      }
    });
  });

  // Ruta para obtener el total de ventas por cliente
  router.get('/TotalVentasPorCliente', (req, res) => {
    const sql = `
      SELECT CONCAT(dc.nombre, ' ', dc.apellido) AS Nombre_Completo,
        SUM(hv.Total_Venta) AS TotalVentas
      FROM dim_cliente dc
      JOIN h_venta hv ON dc.id_Cliente = hv.id_Cliente
      GROUP BY Nombre_Completo
      LIMIT 0, 1000;
    `;

    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error al calcular el total de ventas por cliente:', err);
        res.status(500).json({ error: 'Error al calcular el total de ventas por cliente' });
      } else {
        res.status(200).json(result);
      }
    });
  });

  // Ruta para obtener el total de ventas por empleado
  router.get('/TotalVentasPorEmpleado', (req, res) => {
    const sql = `
      SELECT CONCAT(de.nombre, ' ', de.apellido) AS Nombre_Completo,
        SUM(hv.Total_Venta) AS TotalVentas
      FROM dim_empleado de
      JOIN h_venta hv ON de.id_Empleado = hv.id_Empleado
      GROUP BY Nombre_Completo
      LIMIT 0, 1000;
    `;

    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error al calcular el total de ventas por empleado:', err);
        res.status(500).json({ error: 'Error al calcular el total de ventas por empleado' });
      } else {
        res.status(200).json(result);
      }
    });
  });

  // Ruta para obtener el total de ventas por año
  router.get('/TotalVentasPorAnio', (req, res) => {
    const sql = `
      SELECT Anyos AS Anio,
        SUM(hv.Total_Venta) AS TotalVentas
      FROM dim_tiempo dt
      JOIN h_venta hv ON dt.id_Tiempo = hv.id_Tiempo
      GROUP BY Anio
      LIMIT 0, 1000;
    `;

    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error al calcular el total de ventas por año:', err);
        res.status(500).json({ error: 'Error al calcular el total de ventas por año' });
      } else {
        res.status(200).json(result);
      }
    });
  });

  // Ruta para obtener el promedio de ventas por producto
  router.get('/PromedioVentasPorProducto', (req, res) => {
    const sql = `
      SELECT dp.nombre AS Nombre_Producto,
        AVG(hv.Total_Venta) AS PromedioVentas
      FROM dim_producto dp
      JOIN h_venta hv ON dp.id_Producto = hv.id_Producto
      GROUP BY Nombre_Producto
      LIMIT 0, 1000;
    `;

    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error al calcular el promedio de ventas por producto:', err);
        res.status(500).json({ error: 'Error al calcular el promedio de ventas por producto' });
      } else {
        res.status(200).json(result);
      }
    });
  });

  // Ruta para obtener el número de ventas por producto
  router.get('/NumeroVentasPorProducto', (req, res) => {
    const sql = `
      SELECT dp.nombre AS Nombre_Producto,
        COUNT(hv.id_venta) AS NumeroVentas
      FROM dim_producto dp
      JOIN h_venta hv ON dp.id_Producto = hv.id_Producto
      GROUP BY Nombre_Producto
      ORDER BY NumeroVentas DESC
      LIMIT 0, 1000;
    `;

    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error al calcular el número de ventas por producto:', err);
        res.status(500).json({ error: 'Error al calcular el número de ventas por producto' });
      } else {
        res.status(200).json(result);
      }
    });
  });

  // Ruta para obtener el total de ventas por categoría de producto
  router.get('/TotalVentasPorCategoria', (req, res) => {
    const sql = `
      SELECT dp.Categoria,
        SUM(hv.Total_Venta) AS TotalVentas
      FROM dim_producto dp
      JOIN h_venta hv ON dp.id_Producto = hv.id_Producto
      GROUP BY dp.Categoria
      LIMIT 0, 1000;
    `;

    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error al calcular el total de ventas por categoría de producto:', err);
        res.status(500).json({ error: 'Error al calcular el total de ventas por categoría de producto' });
      } else {
        res.status(200).json(result);
      }
    });
  });

  return router;
};