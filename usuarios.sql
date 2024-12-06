-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-12-2024 a las 17:43:14
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `usuarios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contactosmodel`
--

CREATE TABLE `contactosmodel` (
  `nombre` varchar(20) DEFAULT NULL,
  `correo` varchar(20) DEFAULT NULL,
  `comentario` varchar(2000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=armscii8 COLLATE=armscii8_general_ci;

--
-- Volcado de datos para la tabla `contactosmodel`
--

INSERT INTO `contactosmodel` (`nombre`, `correo`, `comentario`) VALUES
('wdncwasjd', 'eggman@gmail.com', 'ascwjciwskciakwc'),
('wdncwasjd', 'eggman@gmail.com', 'ascwjciwskciakwc'),
('wdncwasjd', 'eggman@gmail.com', 'eggman\r\n'),
('jkbku', 'skcwqk@gmail.com', 'sdvsdc'),
(NULL, NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
