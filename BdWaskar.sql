CREATE DATABASE   `bdvariedades_juliesk`;
USE `bdvariedades_juliesk`;


CREATE TABLE `categoria` (
  `id_categoria` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  PRIMARY KEY (`id_categoria`)
);

CREATE TABLE `usuario` (
  `id_Usuario` int NOT NULL AUTO_INCREMENT,
  `nombre_Usuario` varchar(20) NOT NULL,
  `contraseña` varchar(8) NOT NULL,
  `Rol` varchar(20) NOT NULL,
  PRIMARY KEY (`id_Usuario`)
);

CREATE TABLE `cliente` (
  `id_cliente` int NOT NULL AUTO_INCREMENT,
  `id_Usuario` int NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `telefono` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`id_cliente`),
  KEY `id_Usuario` (`id_Usuario`),
  CONSTRAINT `cliente_ibfk_1` FOREIGN KEY (`id_Usuario`) REFERENCES `usuario` (`id_Usuario`)
);

CREATE TABLE `venta` (
  `id_venta` int NOT NULL AUTO_INCREMENT,
  `id_cliente` int NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`id_venta`),
  KEY `id_cliente` (`id_cliente`),
  CONSTRAINT `venta_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id_cliente`)
);

CREATE TABLE `producto` (
  `id_producto` int NOT NULL AUTO_INCREMENT,
  `id_categoria` int NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `nombreProducto` varchar(30) NOT NULL,
  `precio` float NOT NULL,
  `Stock` int NOT NULL,
  `imagen` longtext,
  PRIMARY KEY (`id_producto`),
  KEY `id_categoria` (`id_categoria`),
  CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`)
);


CREATE TABLE `detalle` (
  `id_detalle` int NOT NULL AUTO_INCREMENT,
  `id_venta` int NOT NULL,
  `id_producto` int NOT NULL,
  `cantidad` int NOT NULL,
  PRIMARY KEY (`id_detalle`),
  KEY `id_venta` (`id_venta`),
  KEY `id_producto` (`id_producto`),
  CONSTRAINT `detalle_ibfk_1` FOREIGN KEY (`id_venta`) REFERENCES `venta` (`id_venta`),
  CONSTRAINT `detalle_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`)
);

CREATE TABLE `bitacora` (
  `id_bitacora` int NOT NULL AUTO_INCREMENT,
  `transaccion` varchar(10) NOT NULL,
  `usuario` varchar(40) NOT NULL,
  `fecha` datetime NOT NULL,
  `tabla` varchar(20) NOT NULL,
  PRIMARY KEY (`id_bitacora`)
);

