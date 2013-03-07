CREATE TABLE IF NOT EXISTS `inscrit` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `famille` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `cp` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `ecole_prec` varchar(255) DEFAULT NULL,
  `classe_desiree` varchar(255) DEFAULT NULL,
  `fraterie` varchar(255) DEFAULT NULL,
  `implicationcation` varchar(255) DEFAULT NULL,
  `points` varchar(255) DEFAULT NULL,
  `eval` decimal(16,2) NOT NULL DEFAULT '0.00',
  `multi_inscrit` int(11) NOT NULL,
  `dt_saisie` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `dt_rdv` date DEFAULT '1900-01-01',
  `hr_rdv` time DEFAULT '09:00:00',
  `dt_naissance` date NOT NULL DEFAULT '1900-01-01',
  `statut` varchar(255) NOT NULL DEFAULT '''EN ATTENTE''',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=120 DEFAULT CHARSET=utf8 AUTO_INCREMENT=120 ;
