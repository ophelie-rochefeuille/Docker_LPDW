-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : db:3306
-- Généré le : jeu. 16 sep. 2021 à 13:42
-- Version du serveur : 10.6.4-MariaDB-1:10.6.4+maria~focal
-- Version de PHP : 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `app_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `camions`
--

CREATE TABLE IF NOT EXISTS `camions` (
  `plaque` varchar(9) NOT NULL,
  PRIMARY KEY (`plaque`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `entrepots`
--

CREATE TABLE IF NOT EXISTS `entrepots` (
  `nom_entrepot` varchar(200) NOT NULL,
  `ville` varchar(200) NOT NULL,
  PRIMARY KEY (`nom_entrepot`),
  KEY `ville` (`ville`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `trajets`
--

CREATE TABLE IF NOT EXISTS `trajets` (
  `id_trajet` int(11) NOT NULL,
  `longitude` float NOT NULL,
  `latitude` float NOT NULL,
  `temperature` float NOT NULL,
  `plaque` varchar(9) NOT NULL,
  `date` datetime NOT NULL,
  KEY `plaque` (`plaque`),
  KEY `id_trajet` (`id_trajet`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `transactions`
--

CREATE TABLE IF NOT EXISTS `transactions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(200) NOT NULL,
  `num_camion` varchar(9) NOT NULL,
  `poulet` int(11) NOT NULL,
  `entrepot` varchar(200) NOT NULL,
  `ville` varchar(200) NOT NULL,
  `type` varchar(7) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `num_camion` (`num_camion`),
  KEY `user` (`user`),
  KEY `ville` (`ville`),
  KEY `entrepot` (`entrepot`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE IF NOT EXISTS `utilisateurs` (
  `login` varchar(200) NOT NULL,
  `nom` varchar(200) NOT NULL,
  `prenom` varchar(200) NOT NULL,
  `mdp` text NOT NULL,
  PRIMARY KEY (`login`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `villes`
--

CREATE TABLE IF NOT EXISTS `villes` (
  `nom_ville` varchar(200) NOT NULL,
  PRIMARY KEY (`nom_ville`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `entrepots`
--
ALTER TABLE `entrepots`
  ADD CONSTRAINT `entrepots_ibfk_1` FOREIGN KEY (`ville`) REFERENCES `villes` (`nom_ville`);

--
-- Contraintes pour la table `trajets`
--
ALTER TABLE `trajets`
  ADD CONSTRAINT `trajets_ibfk_1` FOREIGN KEY (`plaque`) REFERENCES `camions` (`plaque`),
  ADD CONSTRAINT `trajets_ibfk_2` FOREIGN KEY (`id_trajet`) REFERENCES `transactions` (`id`);

--
-- Contraintes pour la table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`num_camion`) REFERENCES `camions` (`plaque`),
  ADD CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`user`) REFERENCES `utilisateurs` (`login`),
  ADD CONSTRAINT `transactions_ibfk_3` FOREIGN KEY (`ville`) REFERENCES `villes` (`nom_ville`),
  ADD CONSTRAINT `transactions_ibfk_4` FOREIGN KEY (`entrepot`) REFERENCES `entrepots` (`nom_entrepot`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
