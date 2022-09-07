-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 07-09-2022 a las 22:44:06
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `sitioweb_literario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `literariosocios`
--

CREATE TABLE IF NOT EXISTS `literariosocios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `literariosocios`
--

INSERT INTO `literariosocios` (`id`, `usuario`, `password`) VALUES
(1, 'castellijavier', '2a8e892308e5e8412b9a6eb73fea8f45');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `miembrosclub`
--

CREATE TABLE IF NOT EXISTS `miembrosclub` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  `apellido` varchar(250) NOT NULL,
  `instagram` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Volcado de datos para la tabla `miembrosclub`
--

INSERT INTO `miembrosclub` (`id`, `nombre`, `apellido`, `instagram`) VALUES
(1, 'Javier', 'Castelli', '@castellijavier'),
(2, 'Marcia', 'Galarza', '@marciagalarza'),
(3, 'Matias', 'Kremser', '@kremsermatias'),
(4, 'Danisa', 'Luna', '@lunadanisa'),
(5, 'Jacqueline', 'Cinalli', '@cinallinovelas');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
