-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema checkpoint4_portfolio
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema checkpoint4_portfolio
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `checkpoint4_portfolio` DEFAULT CHARACTER SET utf8 ;
USE `checkpoint4_portfolio` ;

-- -----------------------------------------------------
-- Table `checkpoint4_portfolio`.`project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `checkpoint4_portfolio`.`project` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `short_description` VARCHAR(255) NOT NULL,
  `long_description` VARCHAR(512) NULL,
  `url_github_front` VARCHAR(45) NULL,
  `url_github_back` VARCHAR(45) NULL,
  `url_deployed` VARCHAR(45) NULL,
  `screenshot` VARCHAR(45) NOT NULL,
  `techno` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
