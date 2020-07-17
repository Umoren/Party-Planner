-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 17, 2020 at 09:05 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `party-planner`
--

-- --------------------------------------------------------

--
-- Table structure for table `capture`
--

CREATE TABLE `capture` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `capture`
--

INSERT INTO `capture` (`id`, `email`) VALUES
(1, 'superadmin@classtivities.com'),
(2, 'newuser@gmail.com'),
(3, 'samuelumoren365@gmail.com'),
(4, 'samuelumoren365@gmail.com'),
(5, 'samuelumoren365@gmail.com'),
(6, 'superadmin@classtivities.com'),
(7, 'superadmin@classtivities.com'),
(8, 'samuelumoren365@gmail.com'),
(9, 'trashemail@mial.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `capture`
--
ALTER TABLE `capture`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `capture`
--
ALTER TABLE `capture`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
