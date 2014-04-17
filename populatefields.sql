-- phpMyAdmin SQL Dump
-- version 4.0.6
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 17, 2014 at 07:56 PM
-- Server version: 5.5.33
-- PHP Version: 5.5.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `populatefields`
--

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id_city` int(4) NOT NULL AUTO_INCREMENT,
  `id_state` int(2) NOT NULL,
  `cityName` varchar(255) NOT NULL,
  PRIMARY KEY (`id_city`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id_city`, `id_state`, `cityName`) VALUES
(1, 1, 'Dakar'),
(2, 1, 'Saint-Louis'),
(3, 4, 'Cape Town'),
(4, 4, 'Johannesburg'),
(5, 7, 'Shanghai'),
(6, 7, 'Hong Kong'),
(7, 8, 'Tokyo'),
(8, 8, 'Yokohama'),
(9, 9, 'Paris'),
(10, 9, 'Lyon'),
(11, 10, 'London'),
(12, 10, 'Cambridge'),
(13, 11, 'Raleigh'),
(14, 11, 'Charlotte'),
(15, 12, 'Albany'),
(16, 12, 'Batavia');

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE `states` (
  `id_state` int(4) NOT NULL AUTO_INCREMENT,
  `stateName` varchar(255) NOT NULL,
  `country_id` int(4) NOT NULL,
  PRIMARY KEY (`id_state`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `states`
--

INSERT INTO `states` (`id_state`, `stateName`, `country_id`) VALUES
(1, 'Senegal', 1),
(4, 'South Africa', 1),
(7, 'China', 2),
(8, 'Japan', 2),
(9, 'France', 3),
(10, 'England', 3),
(11, 'North Carolina', 4),
(12, 'New York', 4);
