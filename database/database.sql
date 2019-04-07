-- -----------------------------------------------------
-- Schema to_do_list_DB
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `to_do_list_DB` ;

-- -----------------------------------------------------
-- Schema to_do_list_DB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `to_do_list_DB` DEFAULT CHARACTER SET utf8 ;
SHOW WARNINGS;
USE `to_do_list_DB` ;

-- -----------------------------------------------------
-- Table `status`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `status` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `status` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `tasks`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tasks` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `tasks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(100) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `status_id` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `people`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `people` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `people` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `tasks_has_people`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tasks_has_people` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `tasks_has_people` (
  `tasks_id` INT NOT NULL,
  `people_id` INT NOT NULL,
  PRIMARY KEY (`tasks_id`, `people_id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Data for table `status`
-- -----------------------------------------------------
START TRANSACTION;
USE `to_do_list_DB`;
INSERT INTO `status` (`id`, `description`) VALUES (1, 'Open');
INSERT INTO `status` (`id`, `description`) VALUES (2, 'In Progress');
INSERT INTO `status` (`id`, `description`) VALUES (3, 'Completed');
INSERT INTO `status` (`id`, `description`) VALUES (4, 'Archived');

COMMIT;

