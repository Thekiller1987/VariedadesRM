-- Inserciones para la tabla `categoria`
INSERT INTO `categoria` (`nombre`) VALUES 
('Electrónica'), 
('Ropa'), 
('Hogar'), 
('Juguetes'), 
('Libros'), 
('Deportes'), 
('Automotriz'), 
('Belleza'), 
('Alimentos'), 
('Jardinería');

-- Inserciones para la tabla `usuario`
INSERT INTO `usuario` (`nombre_Usuario`, `contraseña`, `Rol`) VALUES 
('usuario1', 'pass1234', 'Admin'), 
('usuario2', 'pass1234', 'Cliente'), 
('usuario3', 'pass1234', 'Cliente'), 
('usuario4', 'pass1234', 'Cliente'), 
('usuario5', 'pass1234', 'Cliente'), 
('usuario6', 'pass1234', 'Cliente'), 
('usuario7', 'pass1234', 'Cliente'), 
('usuario8', 'pass1234', 'Cliente'), 
('usuario9', 'pass1234', 'Cliente'), 
('usuario10', 'pass1234', 'Cliente');

-- Inserciones para la tabla `cliente`
INSERT INTO `cliente` (`id_Usuario`, `nombre`, `apellido`, `telefono`) VALUES 
(2, 'Juan', 'Pérez', '12345678'), 
(3, 'María', 'López', '23456789'), 
(4, 'Carlos', 'García', '34567890'), 
(5, 'Ana', 'Martínez', '45678901'), 
(6, 'Luis', 'Rodríguez', '56789012'), 
(7, 'Laura', 'Hernández', '67890123'), 
(8, 'Pedro', 'González', '78901234'), 
(9, 'Marta', 'Sánchez', '89012345'), 
(10, 'Jorge', 'Ramírez', '90123456');

INSERT INTO `venta` (`id_cliente`, `fecha`) VALUES (1, '2024-01-01');
INSERT INTO `venta` (`id_cliente`, `fecha`) VALUES (2, '2024-01-02');
INSERT INTO `venta` (`id_cliente`, `fecha`) VALUES (3, '2024-01-03');
INSERT INTO `venta` (`id_cliente`, `fecha`) VALUES (4, '2024-01-04');
INSERT INTO `venta` (`id_cliente`, `fecha`) VALUES (5, '2024-01-05');
INSERT INTO `venta` (`id_cliente`, `fecha`) VALUES (6, '2024-01-06');
INSERT INTO `venta` (`id_cliente`, `fecha`) VALUES (7, '2024-01-07');
INSERT INTO `venta` (`id_cliente`, `fecha`) VALUES (8, '2024-01-08');
INSERT INTO `venta` (`id_cliente`, `fecha`) VALUES (9, '2024-01-09');


-- Inserciones para la tabla `producto`
INSERT INTO `producto` (`id_categoria`, `descripcion`, `nombreProducto`, `precio`, `Stock`, `imagen`) VALUES 
(1, 'Teléfono móvil de última generación', 'Smartphone', 599.99, 100, NULL), 
(2, 'Camiseta de algodón', 'Camiseta', 19.99, 200, NULL), 
(3, 'Sofá de tres plazas', 'Sofá', 299.99, 50, NULL), 
(4, 'Muñeca de colección', 'Muñeca', 49.99, 150, NULL), 
(5, 'Novela bestseller', 'Libro', 14.99, 300, NULL), 
(6, 'Pelota de fútbol', 'Balón', 25.99, 100, NULL), 
(7, 'Llantas para coche', 'Llanta', 89.99, 80, NULL), 
(8, 'Set de maquillaje', 'Maquillaje', 39.99, 120, NULL), 
(9, 'Caja de cereales', 'Cereal', 4.99, 400, NULL), 
(10, 'Tijeras para podar', 'Tijeras', 12.99, 70, NULL);

INSERT INTO `detalle` (`id_venta`, `id_producto`, `cantidad`) VALUES 
(11, 1, 2), 
(12, 2, 3), 
(13, 3, 1), 
(14, 4, 5), 
(15, 5, 4), 
(16, 6, 6), 
(17, 7, 1), 
(18, 8, 2), 
(19, 9, 3);


-- Inserciones para la tabla `bitacora`
INSERT INTO `bitacora` (`transaccion`, `usuario`, `fecha`, `tabla`) VALUES 
('INSERT', 'usuario1', '2024-01-01 12:00:00', 'categoria'), 
('INSERT', 'usuario1', '2024-01-01 12:05:00', 'usuario'), 
('INSERT', 'usuario2', '2024-01-02 13:00:00', 'cliente'), 
('INSERT', 'usuario2', '2024-01-02 13:05:00', 'venta'), 
('INSERT', 'usuario3', '2024-01-03 14:00:00', 'producto'), 
('INSERT', 'usuario3', '2024-01-03 14:05:00', 'detalle'), 
('INSERT', 'usuario4', '2024-01-04 15:00:00', 'categoria'), 
('INSERT', 'usuario4', '2024-01-04 15:05:00', 'usuario'), 
('INSERT', 'usuario5', '2024-01-05 16:00:00', 'cliente'), 
('INSERT', 'usuario5', '2024-01-05 16:05:00', 'venta');
