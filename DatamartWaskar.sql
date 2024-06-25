CREATE DATABASE IF NOT EXISTS `dtvariedadesrm`;
USE `dtvariedadesrm`;

CREATE TABLE `dim_categorias` (
  `id_Categoria` int NOT NULL AUTO_INCREMENT,
  `nombre_C` varchar(30) DEFAULT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_Categoria`)
);

CREATE TABLE `dim_clientes` (
  `id_Cliente` int NOT NULL AUTO_INCREMENT,
  `cedula` varchar(16) DEFAULT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `apellido` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id_Cliente`)
);

CREATE TABLE `dim_fecha` (
  `id_Fecha` date NOT NULL,
  PRIMARY KEY (`id_Fecha`)
);

CREATE TABLE `dim_marcas` (
  `id_Marca` int NOT NULL AUTO_INCREMENT,
  `nombre_Marca` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id_Marca`)
);

CREATE TABLE `dim_modospago` (
  `id_ModoPago` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_ModoPago`)
);

CREATE TABLE `dim_productos` (
  `id_Producto` int NOT NULL AUTO_INCREMENT,
  `id_Categoria` int DEFAULT NULL,
  `id_Marca` int DEFAULT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `precio` decimal(12,2) DEFAULT NULL,
  PRIMARY KEY (`id_Producto`),
  KEY `id_Categoria` (`id_Categoria`),
  KEY `id_Marca` (`id_Marca`),
  CONSTRAINT `dim_productos_ibfk_1` FOREIGN KEY (`id_Categoria`) REFERENCES `dim_categorias` (`id_Categoria`),
  CONSTRAINT `dim_productos_ibfk_2` FOREIGN KEY (`id_Marca`) REFERENCES `dim_marcas` (`id_Marca`)
);

CREATE TABLE `hecho` (
  `cod_Venta` int NOT NULL AUTO_INCREMENT,
  `id_Cliente` int DEFAULT NULL,
  `id_ModoPago` int DEFAULT NULL,
  `id_Fecha` date DEFAULT NULL,
  `Estado` varchar(50) DEFAULT NULL,
  `TipoVentas` varchar(20) DEFAULT NULL,
  `Direccion_Envio` varchar(50) DEFAULT NULL,
  `Total_Venta` decimal(12,2) DEFAULT NULL,
  PRIMARY KEY (`cod_Venta`),
  KEY `id_Cliente` (`id_Cliente`),
  KEY `id_ModoPago` (`id_ModoPago`),
  KEY `id_Fecha` (`id_Fecha`),
  CONSTRAINT `hecho_ibfk_1` FOREIGN KEY (`id_Cliente`) REFERENCES `dim_clientes` (`id_Cliente`),
  CONSTRAINT `hecho_ibfk_2` FOREIGN KEY (`id_ModoPago`) REFERENCES `dim_modospago` (`id_ModoPago`),
  CONSTRAINT `hecho_ibfk_3` FOREIGN KEY (`id_Fecha`) REFERENCES `dim_fecha` (`id_Fecha`)
);

CREATE TABLE `fact_detalleventa` (
  `cod_Venta` int DEFAULT NULL,
  `id_producto` int DEFAULT NULL,
  `cantidad` int DEFAULT NULL,
  `PrecioUnitario` decimal(12,2) DEFAULT NULL,
  `TotalDetalle` decimal(12,2) DEFAULT NULL,
  KEY `cod_Venta` (`cod_Venta`),
  KEY `id_producto` (`id_producto`),
  CONSTRAINT `fact_detalleventa_ibfk_1` FOREIGN KEY (`cod_Venta`) REFERENCES `hecho` (`cod_Venta`),
  CONSTRAINT `fact_detalleventa_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `dim_productos` (`id_Producto`)
);

CREATE TABLE `fact_reseñas` (
  `id_Reseña` int NOT NULL AUTO_INCREMENT,
  `id_Producto` int DEFAULT NULL,
  `calificacion` int DEFAULT NULL,
  `comentario` varchar(200) DEFAULT NULL,
  `id_Fecha` date DEFAULT NULL,
  PRIMARY KEY (`id_Reseña`),
  KEY `id_Producto` (`id_Producto`),
  KEY `id_Fecha` (`id_Fecha`),
  CONSTRAINT `fact_reseñas_ibfk_1` FOREIGN KEY (`id_Producto`) REFERENCES `dim_productos` (`id_Producto`),
  CONSTRAINT `fact_reseñas_ibfk_2` FOREIGN KEY (`id_Fecha`) REFERENCES `dim_fecha` (`id_Fecha`)
);
