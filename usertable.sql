# Host: localhost  (Version: 5.5.53)
# Date: 2018-12-11 21:59:40
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "usertable"
#

CREATE TABLE `usertable` (
  `username` varchar(20) NOT NULL,
  `userpass` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "usertable"
#

INSERT INTO `usertable` VALUES ('天天','123456'),('姚奇','456789'),('姚妮','11111'),('姚明','123456');
