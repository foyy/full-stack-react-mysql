
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
DROP DATABASE IF EXISTS Albums;

CREATE DATABASE Albums;

USE Albums;



DROP TABLE IF EXISTS `User`;
		
CREATE TABLE `User` (
  `id` INTEGER  AUTO_INCREMENT,
  `username` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `Review`;
		
CREATE TABLE `Review` (
  `id` INTEGER AUTO_INCREMENT ,
  `5StarRating` INTEGER NULL DEFAULT NULL,
  `Text Review` VARCHAR(500) NULL DEFAULT NULL,
  `id_Album` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `Album`;
		
CREATE TABLE `Album` (
  `id` INTEGER AUTO_INCREMENT,
  `name` INTEGER NULL DEFAULT NULL,
  `artwork` INTEGER NULL DEFAULT NULL,
  `release date` INTEGER NULL DEFAULT NULL,
  `label` INTEGER NULL DEFAULT NULL,
  `genre` INTEGER NULL DEFAULT NULL,
  `artist` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `User-Review`;
		
CREATE TABLE `User-Review` (
  `id` INTEGER AUTO_INCREMENT,
  `id_User` INTEGER NULL DEFAULT NULL,
  `id_Review` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE `Review` ADD FOREIGN KEY (id_Album) REFERENCES `Album` (`id`);
ALTER TABLE `User-Review` ADD FOREIGN KEY (id_User) REFERENCES `User` (`id`);
ALTER TABLE `User-Review` ADD FOREIGN KEY (id_Review) REFERENCES `Review` (`id`);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
