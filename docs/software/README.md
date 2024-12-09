# Реалізація інформаційного та програмного забезпечення

## Короткий зміст

- [Реалізація інформаційного та програмного забезпечення](#реалізація-інформаційного-та-програмного-забезпечення)
  - [SQL-скрипт для створення та початкового наповнення бази даних](#sql-скрипт-для-створення-та-початкового-наповнення-бази-даних)
  - [RESTful сервіс для управління даними](#restful-сервіс-для-управління-даними)

## SQL-скрипт для створення та початкового наповнення бази даних

```SQL
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Role` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `account_creation_date` DATETIME NOT NULL,
  `last_login_date` DATETIME NULL,
  `Role_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `Role_id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_User_Role_idx` (`Role_id` ASC) VISIBLE,
  CONSTRAINT `fk_User_Role`
    FOREIGN KEY (`Role_id`)
    REFERENCES `mydb`.`Role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Category` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Data`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Data` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `content` VARCHAR(255) NOT NULL,
  `upload_date` DATETIME NOT NULL,
  `last_edit_date` DATETIME NULL,
  `Category_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `Category_id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  INDEX `fk_Data_Category1_idx` (`Category_id` ASC) VISIBLE,
  CONSTRAINT `fk_Data_Category1`
    FOREIGN KEY (`Category_id`)
    REFERENCES `mydb`.`Category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Comment` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `content` VARCHAR(255) NOT NULL,
  `creation_date` DATETIME NOT NULL,
  `User_id` INT UNSIGNED NOT NULL,
  `Data_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Comment_User1_idx` (`User_id` ASC) VISIBLE,
  INDEX `fk_Comment_Data1_idx` (`Data_id` ASC) VISIBLE,
  CONSTRAINT `fk_Comment_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `mydb`.`User` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Comment_Data1`
    FOREIGN KEY (`Data_id`)
    REFERENCES `mydb`.`Data` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Permission`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Permission` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NULL,
  `Role_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `Role_id`),
  INDEX `fk_Permission_Role1_idx` (`Role_id` ASC) VISIBLE,
  CONSTRAINT `fk_Permission_Role1`
    FOREIGN KEY (`Role_id`)
    REFERENCES `mydb`.`Role` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Session`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Session` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `login_time` DATETIME NOT NULL,
  `logout_time` DATETIME NOT NULL,
  `User_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `User_id`),
  INDEX `fk_Session_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_Session_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `mydb`.`User` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Log`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Log` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `action_type` VARCHAR(45) NOT NULL,
  `action_date` DATETIME NOT NULL,
  `User_id` INT UNSIGNED NOT NULL,
  `Data_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Log_User1_idx` (`User_id` ASC) VISIBLE,
  INDEX `fk_Log_Data1_idx` (`Data_id` ASC) VISIBLE,
  CONSTRAINT `fk_Log_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `mydb`.`User` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Log_Data1`
    FOREIGN KEY (`Data_id`)
    REFERENCES `mydb`.`Data` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Access`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Access` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `access_type` VARCHAR(45) NOT NULL,
  `User_id` INT UNSIGNED NOT NULL,
  `Data_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Access_User1_idx` (`User_id` ASC) VISIBLE,
  INDEX `fk_Access_Data1_idx` (`Data_id` ASC) VISIBLE,
  CONSTRAINT `fk_Access_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `mydb`.`User` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Access_Data1`
    FOREIGN KEY (`Data_id`)
    REFERENCES `mydb`.`Data` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `mydb`.`Role`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Role` (`id`, `name`, `description`) VALUES (1, 'admin', 'responsible for managing and publishing data, can import new data, organize it into sets, add metadata, and publish it for other users to access');
INSERT INTO `mydb`.`Role` (`id`, `name`, `description`) VALUES (2, 'user', 'creates tools and APIs to integrate data with the system, develops and tests modules for working with data and ensure compatibility with other services');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`User`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`User` (`id`, `name`, `password`, `email`, `account_creation_date`, `last_login_date`, `Role_id`) VALUES (1, 'Dmytro_Kulyk', 'abcdefgh', 'kulyk.dmytro@lll.kpi.ua', '2024-10-17 12:28:24', '2024-11-03 10:07:42', 1);
INSERT INTO `mydb`.`User` (`id`, `name`, `password`, `email`, `account_creation_date`, `last_login_date`, `Role_id`) VALUES (2, 'Yulianna_Vakhnina', 'abcdefghij', 'vakhnina.yulianna@lll.kpi.ua', '2024-10-27 13:42:21', '2024-11-03 10:11:42', 1);
INSERT INTO `mydb`.`User` (`id`, `name`, `password`, `email`, `account_creation_date`, `last_login_date`, `Role_id`) VALUES (3, 'Artem_Balabas', '12345678', 'balabas.artem@lll.kpi.ua', '2024-11-01 11:28:55', '2024-11-03 09:11:42', 2);
INSERT INTO `mydb`.`User` (`id`, `name`, `password`, `email`, `account_creation_date`, `last_login_date`, `Role_id`) VALUES (4, 'Lev_Bereza', '87654321', 'bereza.lev@lll.kpi.ua', '2024-11-01 13:15:37', NULL, 2);
INSERT INTO `mydb`.`User` (`id`, `name`, `password`, `email`, `account_creation_date`, `last_login_date`, `Role_id`) VALUES (5, 'Yaroslav_Kantur', '546846sd', 'kantur.yaroslav@lll.kpi.ua', '2024-10-28 15:53:12', NULL, 2);
INSERT INTO `mydb`.`User` (`id`, `name`, `password`, `email`, `account_creation_date`, `last_login_date`, `Role_id`) VALUES (6, 'Danylo_Pistriuha', '09876543', 'pistriuha.danylo@lll.kpi.ua', '2024-11-01 12:33:28', '2024-11-02 14:15:11', 2);
INSERT INTO `mydb`.`User` (`id`, `name`, `password`, `email`, `account_creation_date`, `last_login_date`, `Role_id`) VALUES (7, 'Volodymyr_Shkarban', '34567890', 'shkarban.volodymyr@lll.kpi.ua', '2024-11-01 18:45:01', NULL, 2);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`Category`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Category` (`id`, `name`, `description`) VALUES (1, 'Science', 'Information related to science');
INSERT INTO `mydb`.`Category` (`id`, `name`, `description`) VALUES (2, 'Technology', 'Technological and societal data');
INSERT INTO `mydb`.`Category` (`id`, `name`, `description`) VALUES (3, 'Environment', 'Environmental and health studies');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`Data`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Data` (`id`, `name`, `content`, `upload_date`, `last_edit_date`, `Category_id`) VALUES (1, 'Climate Change Impact', 'Global warming data 1990-2020', '2023-02-26 10:26:54', '2023-03-12 12:24:28', 3);
INSERT INTO `mydb`.`Data` (`id`, `name`, `content`, `upload_date`, `last_edit_date`, `Category_id`) VALUES (2, 'Population by Country 2023', 'Population numbers by country', '2023-05-12 19:15:12', NULL, 1);
INSERT INTO `mydb`.`Data` (`id`, `name`, `content`, `upload_date`, `last_edit_date`, `Category_id`) VALUES (3, 'COVID-19 Vaccination Statistics', 'Vaccination data from 2020 onwards', '2023-11-30 16:17:29', '2024-10-16 17:30:56', 3);
INSERT INTO `mydb`.`Data` (`id`, `name`, `content`, `upload_date`, `last_edit_date`, `Category_id`) VALUES (4, 'Renewable Energy Usage 2022', 'Energy data by source, 2022', '2023-01-12 17:26:17', NULL, 3);
INSERT INTO `mydb`.`Data` (`id`, `name`, `content`, `upload_date`, `last_edit_date`, `Category_id`) VALUES (5, 'World Education Index 2023', 'Education index for countries worldwide', '2024-04-08 08:54:54', NULL, 1);
INSERT INTO `mydb`.`Data` (`id`, `name`, `content`, `upload_date`, `last_edit_date`, `Category_id`) VALUES (6, 'Tech Innovations 2023', 'Key tech breakthroughs of the year', '2024-03-15 11:49:02', NULL, 2);
INSERT INTO `mydb`.`Data` (`id`, `name`, `content`, `upload_date`, `last_edit_date`, `Category_id`) VALUES (7, 'Global Health Spending', 'Health expenditure by country', '2022-08-16 13:23:16', '2024-06-09 12:17:53', 3);
INSERT INTO `mydb`.`Data` (`id`, `name`, `content`, `upload_date`, `last_edit_date`, `Category_id`) VALUES (8, 'Employment Rates by Sector', 'Employment data by economic sector', '2022-12-20 20:28:32', '2023-01-19 14:01:12', 1);
INSERT INTO `mydb`.`Data` (`id`, `name`, `content`, `upload_date`, `last_edit_date`, `Category_id`) VALUES (9, 'Cultural Heritage Sites', 'UNESCO heritage sites worldwide', '2023-05-04 09:41:32', '2024-08-01 17:23:15', 1);
INSERT INTO `mydb`.`Data` (`id`, `name`, `content`, `upload_date`, `last_edit_date`, `Category_id`) VALUES (10, 'Food Production Statistics', 'Global food production by type', '2023-10-26 11:11:11', '2024-05-07 16:15:45', 3);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`Comment`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Comment` (`id`, `content`, `creation_date`, `User_id`, `Data_id`) VALUES (1, 'Details by country would make this more useful', '2024-11-05 08:32:14', 2, 1);
INSERT INTO `mydb`.`Comment` (`id`, `content`, `creation_date`, `User_id`, `Data_id`) VALUES (2, 'Good to see updated info! Thanks', '2024-11-05 14:23:52', 2, 3);
INSERT INTO `mydb`.`Comment` (`id`, `content`, `creation_date`, `User_id`, `Data_id`) VALUES (3, 'Nice index! More info on remote regions would help', '2024-11-08 13:32:55', 5, 5);
INSERT INTO `mydb`.`Comment` (`id`, `content`, `creation_date`, `User_id`, `Data_id`) VALUES (4, 'Perfect for analysis. Add pandemic funding data?', '2024-11-08 08:18:34', 7, 7);
INSERT INTO `mydb`.`Comment` (`id`, `content`, `creation_date`, `User_id`, `Data_id`) VALUES (5, 'Thanks for this! More on IT and healthcare would help', '2024-11-06 09:38:27', 4, 8);
INSERT INTO `mydb`.`Comment` (`id`, `content`, `creation_date`, `User_id`, `Data_id`) VALUES (6, 'More photos and history of each site would be cool', '2024-11-07 14:16:32', 6, 9);
INSERT INTO `mydb`.`Comment` (`id`, `content`, `creation_date`, `User_id`, `Data_id`) VALUES (7, 'Could it include data on organic vs. conventional farming?', '2024-11-07 13:27:14', 3, 10);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`Permission`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Permission` (`id`, `name`, `description`, `Role_id`) VALUES (1, 'read', 'for admin', 1);
INSERT INTO `mydb`.`Permission` (`id`, `name`, `description`, `Role_id`) VALUES (2, 'edit', 'for admin', 1);
INSERT INTO `mydb`.`Permission` (`id`, `name`, `description`, `Role_id`) VALUES (3, 'upload', 'for admin', 1);
INSERT INTO `mydb`.`Permission` (`id`, `name`, `description`, `Role_id`) VALUES (4, 'download', 'for admin', 1);
INSERT INTO `mydb`.`Permission` (`id`, `name`, `description`, `Role_id`) VALUES (5, 'delete', 'for admin', 1);
INSERT INTO `mydb`.`Permission` (`id`, `name`, `description`, `Role_id`) VALUES (6, 'read', 'for user', 2);
INSERT INTO `mydb`.`Permission` (`id`, `name`, `description`, `Role_id`) VALUES (7, 'edit', 'for user', 2);
INSERT INTO `mydb`.`Permission` (`id`, `name`, `description`, `Role_id`) VALUES (8, 'upload', 'for uses', 2);
INSERT INTO `mydb`.`Permission` (`id`, `name`, `description`, `Role_id`) VALUES (9, 'download', 'for user', 2);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`Session`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Session` (`id`, `login_time`, `logout_time`, `User_id`) VALUES (1, '2024-11-03 10:07:42', '2024-11-03 11:12:32', 1);
INSERT INTO `mydb`.`Session` (`id`, `login_time`, `logout_time`, `User_id`) VALUES (2, '2024-11-03 10:11:42', '2024-11-03 11:01:41', 2);
INSERT INTO `mydb`.`Session` (`id`, `login_time`, `logout_time`, `User_id`) VALUES (3, '2024-11-03 09:11:42', '2024-11-03 10:35:13', 3);
INSERT INTO `mydb`.`Session` (`id`, `login_time`, `logout_time`, `User_id`) VALUES (4, '2024-11-02 14:15:11', '2024-11-02 15:17:19', 6);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`Log`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Log` (`id`, `action_type`, `action_date`, `User_id`, `Data_id`) VALUES (1, 'upload', '2023-02-26 10:26:54', 7, 1);
INSERT INTO `mydb`.`Log` (`id`, `action_type`, `action_date`, `User_id`, `Data_id`) VALUES (2, 'edit', '2023-03-12 12:24:28', 7, 1);
INSERT INTO `mydb`.`Log` (`id`, `action_type`, `action_date`, `User_id`, `Data_id`) VALUES (3, 'upload', '2023-05-12 19:15:12', 5, 2);
INSERT INTO `mydb`.`Log` (`id`, `action_type`, `action_date`, `User_id`, `Data_id`) VALUES (4, 'upload', '2023-11-30 16:17:29', 2, 3);
INSERT INTO `mydb`.`Log` (`id`, `action_type`, `action_date`, `User_id`, `Data_id`) VALUES (5, 'edit', '2024-10-16 17:30:56', 6, 3);
INSERT INTO `mydb`.`Log` (`id`, `action_type`, `action_date`, `User_id`, `Data_id`) VALUES (6, 'upload', '2023-01-12 17:26:17', 1, 4);
INSERT INTO `mydb`.`Log` (`id`, `action_type`, `action_date`, `User_id`, `Data_id`) VALUES (7, 'upload', '2024-04-08 08:54:54', 1, 5);
INSERT INTO `mydb`.`Log` (`id`, `action_type`, `action_date`, `User_id`, `Data_id`) VALUES (8, 'upload', '2024-03-15 11:49:02', 3, 6);
INSERT INTO `mydb`.`Log` (`id`, `action_type`, `action_date`, `User_id`, `Data_id`) VALUES (9, 'upload', '2022-08-16 13:23:16', 3, 7);
INSERT INTO `mydb`.`Log` (`id`, `action_type`, `action_date`, `User_id`, `Data_id`) VALUES (10, 'edit', '2024-06-09 12:17:53', 3, 7);
INSERT INTO `mydb`.`Log` (`id`, `action_type`, `action_date`, `User_id`, `Data_id`) VALUES (11, 'upload', '2022-12-20 20:28:32', 4, 8);
INSERT INTO `mydb`.`Log` (`id`, `action_type`, `action_date`, `User_id`, `Data_id`) VALUES (12, 'edit', '2023-01-19 14:01:12', 5, 8);
INSERT INTO `mydb`.`Log` (`id`, `action_type`, `action_date`, `User_id`, `Data_id`) VALUES (13, 'upload', '2023-05-04 09:41:32', 6, 9);
INSERT INTO `mydb`.`Log` (`id`, `action_type`, `action_date`, `User_id`, `Data_id`) VALUES (14, 'edit', '2024-08-01 17:23:15', 6, 9);
INSERT INTO `mydb`.`Log` (`id`, `action_type`, `action_date`, `User_id`, `Data_id`) VALUES (15, 'upload', '2023-10-26 11:11:11', 2, 10);
INSERT INTO `mydb`.`Log` (`id`, `action_type`, `action_date`, `User_id`, `Data_id`) VALUES (16, 'edit', '2024-05-07 16:15:45', 1, 10);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`Access`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Access` (`id`, `access_type`, `User_id`, `Data_id`) VALUES (1, 'read', 1, 3);
INSERT INTO `mydb`.`Access` (`id`, `access_type`, `User_id`, `Data_id`) VALUES (2, 'edit', 1, 3);
INSERT INTO `mydb`.`Access` (`id`, `access_type`, `User_id`, `Data_id`) VALUES (3, 'delete', 1, 3);
INSERT INTO `mydb`.`Access` (`id`, `access_type`, `User_id`, `Data_id`) VALUES (4, 'read', 4, 7);
INSERT INTO `mydb`.`Access` (`id`, `access_type`, `User_id`, `Data_id`) VALUES (5, 'edit', 4, 7);
INSERT INTO `mydb`.`Access` (`id`, `access_type`, `User_id`, `Data_id`) VALUES (6, 'read', 5, 4);
INSERT INTO `mydb`.`Access` (`id`, `access_type`, `User_id`, `Data_id`) VALUES (7, 'edit', 5, 4);

COMMIT;
```

## RESTful сервіс для управління даними

## Сервер & Підключення до БД
**app.js**
``` javascript
import express from "express"
import userRouter from "./routes/UserRoutes.js";
import sessionRouter from "./routes/SessionRoutes.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use("/api", userRouter);
app.use("/api", sessionRouter);
app.use(errorHandler)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

```

**db.js**
```js
import mysql from "mysql2/promise"
import dotenv from "dotenv";

dotenv.config();

const pool = await mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

export default pool;
```
## Маршрути
**UserRoutes.js** 
```js
import {Router} from "express";
import userController from "../controllers/UserController.js";

const router = Router();

router.post("/users", userController.createUser)
router.get("/users", userController.getUsers)
router.get("/users/:id", userController.getOneUser)
router.put("/users", userController.updateUser)
router.delete("/users/:id", userController.deleteUser)

export default router;
```

**SessionRoutes.js**
```js
import {Router} from "express";
import sessionController from "../controllers/SessionController.js";

const router = Router();

router.post("/sessions", sessionController.createSession)
router.get("/sessions", sessionController.getSessions)
router.get("/sessions/:id", sessionController.getOneSession)
router.put("/sessions", sessionController.updateSession)
router.delete("/sessions/:id", sessionController.deleteSession)

export default router;
```
## Контролери
**UserController.js**
```js
import asyncHandler from "../utils/asyncHandler.js"
import UserService from "../services/UserService.js"
import ApiError from "../utils/apiError.js";
import transformData from "../utils/transformUserData.js";
import Validator from "../utils/Validator.js";

class UserController {
    createUser = asyncHandler(async (req, res) => {
        const data = transformData(req.body);
        const {id, email, roleId} = Validator.validateUserData(data);

        const userById = await UserService.getOneUserById(id);
        if (userById) {
            throw new ApiError("User already exists", 400)
        }

        await Validator.validateEmail(UserService.getOneUserByEmail, email)
        await Validator.validateRole(UserService.roleExists, roleId)

        await UserService.createUser(data);
        res.status(201).json(`User with ID ${id} successfully created`);
    });

    getUsers = asyncHandler(async (req, res) => {
        const users = await UserService.getUsers();
        if (!users || users.length === 0) {
            throw new ApiError('No users found', 404);
        }
        res.status(200).json(users)
    })

    getOneUser = asyncHandler(async (req, res) => {
        const id = Validator.validateId(req.params.id);
        const user = await Validator.checkEntityById(UserService.getOneUserById, id, "User");
        res.status(200).json(user);
    })

    updateUser = asyncHandler(async (req, res) => {
        const data = transformData(req.body);
        const {id, email, roleId} = Validator.validateUserData(data)

        await Validator.checkEntityById(UserService.getOneUserById, id, "User");
        await Validator.validateEmail(UserService.getOneUserByEmail, email)
        await Validator.validateRole(UserService.roleExists, roleId)

        await UserService.updateUser(data);
        res.status(200).json(`User with ID ${id} successfully updated`);
    })

    deleteUser = asyncHandler(async (req, res) => {
        const id = Validator.validateId(req.params.id);

        await Validator.checkEntityById(UserService.getOneUserById, id, "User");

        await UserService.deleteUser(id);
        res.status(200).json(`User with ID ${id} successfully deleted`);
    })
}

export default new UserController();
```

**SessionController.js**
```js
import asyncHandler from "../utils/asyncHandler.js"
import SessionService from "../services/SessionService.js";
import Validator from "../utils/Validator.js";
import ApiError from "../utils/apiError.js";

class SessionController {
    createSession = asyncHandler(async (req, res) => {
        const data = req.body;
        const {id, User_id} = Validator.validateSessionData(data);

        const session = await SessionService.getOneSession(id);
        if (session) {
            throw new ApiError("Session already exists", 400)
        }

        await Validator.validateUser(SessionService.userExists, User_id)
        await SessionService.createSession(data);
        res.status(201).json(`Session with ID ${id} successfully created`);
    });

    getSessions = asyncHandler(async (req, res) => {
        const sessions = await SessionService.getSessions();
        if (!sessions || sessions.length === 0) {
            throw new ApiError('No sessions found', 404);
        }
        res.status(200).json(sessions)
    })

    getOneSession = asyncHandler(async (req, res) => {
        const id = Validator.validateId(req.params.id);
        const session = await Validator.checkEntityById(SessionService.getOneSession, id, "Session");
        res.status(200).json(session);
    })

    updateSession = asyncHandler(async (req, res) => {
        const data = req.body;
        const {id, User_id} = Validator.validateSessionData(data)

        await Validator.validateUser(SessionService.userExists, User_id)
        await Validator.checkEntityById(SessionService.getOneSession, id, "Session");

        await SessionService.updateSession(data);
        res.status(200).json(`Session with ID ${id} successfully updated`);
    })

    deleteSession = asyncHandler(async (req, res) => {
        const id = Validator.validateId(req.params.id);

        await Validator.checkEntityById(SessionService.getOneSession, id, "Session");
        await SessionService.deleteSession(id);
        res.status(200).json(`Session with ID ${id} successfully deleted`);
    })
}

export default new SessionController();
```
## Сервіси для роботи з БД
**UserService.js**
```js
import pool from "../db.js"

class UserService {
    async createUser(data) {
        const {id, name, password, email, creationDate, lastLoginDate, roleId} = data;
        const values = [id, name, password, email, creationDate, lastLoginDate, roleId];
        const query = `INSERT INTO User (id, name, password, email, account_creation_date, last_login_date, Role_id)
                       VALUES (?, ?, ?, ?, ?, ?, ?)`;
        return pool.query(query, values);
    }

    async getUsers() {
        const [dataRows] = await pool.query('SELECT * FROM User');
        return dataRows;
    }

    async getOneUserById(id) {
        const [dataRow] = await pool.query('SELECT * FROM User WHERE id = ?', [id]);
        return dataRow[0];
    }

    async getOneUserByEmail(email) {
        const [dataRow] = await pool.query('SELECT * FROM User WHERE email = ?', [email]);
        return dataRow[0];
    }

    async updateUser(data) {
        const {id, name, password, email, lastLoginDate, roleId} = data;
        const values = [name, password, email, lastLoginDate, roleId, id];
        const query = `UPDATE User
                       SET name            = ?,
                           password        = ?,
                           email           = ?,
                           last_login_date = ?,
                           Role_id         = ?
                       WHERE id = ?`;
        return pool.query(query, values);
    }

    async deleteUser(id) {
        return pool.query('DELETE FROM User WHERE id = ?', [id]);
    }

    async roleExists(id) {
        const [dataRow] = await pool.query('SELECT * FROM Role WHERE id = ?', [id]);
        return dataRow.length > 0;
    }
}

export default new UserService();
```

**SessionService.js**
```js
import pool from "../db.js";

class SessionService {
    async createSession(data) {
        const {id, login_time, logout_time, User_id} = data;
        const values = [id, login_time, logout_time, User_id];
        const query = `INSERT INTO Session (id, login_time, logout_time, User_id)
                       VALUES (?, ?, ?, ?)`;
        return pool.query(query, values);
    }

    async getSessions() {
        const [dataRows] = await pool.query('SELECT * FROM Session');
        return dataRows;
    }

    async getOneSession(id) {
        const [dataRow] = await pool.query('SELECT * FROM Session WHERE id = ?', [id]);
        return dataRow[0];
    }

    async updateSession(data) {
        const {id, login_time, logout_time, User_id} = data;
        const values = [login_time, logout_time, User_id, id];
        const query = `UPDATE Session
                       SET login_time  = ?,
                           logout_time = ?,
                           User_id     = ?
                       WHERE id = ?`;
        return pool.query(query, values);
    }

    async deleteSession(id) {
        return pool.query('DELETE FROM Session WHERE id = ?', [id]);
    }

    async userExists(id) {
        const [dataRow] = await pool.query('SELECT * FROM User WHERE id = ?', [id]);
        return dataRow.length > 0;
    }
}

export default new SessionService();
```

## Клас для помилок програми
**apiError.js**
```js
export default class ApiError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}

```
## Асинхронний обробник
**asyncHandler.js**
```js
const asyncUtil = fn =>
    function asyncUtilWrap(...args) {
        const fnReturn = fn(...args)
        const next = args[args.length - 1]
        return Promise.resolve(fnReturn).catch(next)
    }

export default asyncUtil;
```
## Трансформація даних користувача
**transformUserData.js**
```js
const transformUserData = (data) => {
    return {
        id: data.id,
        name: data.name,
        password: data.password,
        email: data.email,
        creationDate: data.account_creation_date,
        lastLoginDate: data.last_login_date,
        roleId: data.Role_id
    };
};

export default transformUserData;
```
## Валідатор даних
**Validator.js**
```js
import ApiError from "./apiError.js";

class Validator {
    validateId = function (id) {
        if (!id || isNaN(id) || id <= 0) {
            throw new ApiError('Invalid or missing user ID', 400);
        }
        return id;
    };

    validateUserData = function (data) {
        const {id, name, password, email, creationDate, lastLoginDate, roleId} = data;
        if (!id || !name || !password || !email || !creationDate || !lastLoginDate || !roleId) {
            throw new ApiError("All required fields must be provided", 400);
        }
        return {id, name, password, email, creationDate, lastLoginDate, roleId};
    };

    validateSessionData = function (data) {
        const {id, login_time, logout_time, User_id} = data;
        if (!id || !login_time || !logout_time || !User_id) {
            throw new ApiError("All required fields must be provided", 400);
        }
        return {id, login_time, logout_time, User_id};
    }

    async validateEmail(serviceMethod, email) {
        const userByEmail = await serviceMethod(email);
        if (userByEmail) {
            throw new ApiError("Email already in use", 400);
        }
    }

    async validateRole(serviceMethod, role) {
        const roleExists = await serviceMethod(role);
        if (!roleExists) {
            throw new ApiError("Role does not exist", 400);
        }
    }

    async validateUser(serviceMethod, user) {
        const userExists = await serviceMethod(user);
        if (!userExists) {
            throw new ApiError("User does not exist", 400);
        }
    }

    async checkEntityById(serviceMethod, id, entityName = "Entity") {
        const entity = await serviceMethod(id);
        if (!entity) {
            throw new ApiError(`${entityName} with ID ${id} not found`, 404);
        }
        return entity;
    };
}

export default new Validator();
```
