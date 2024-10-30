-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: supplychainmanagementsystem
-- ------------------------------------------------------
-- Server version	8.0.38

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `CartID` int NOT NULL AUTO_INCREMENT,
  `CustomerID` int NOT NULL,
  PRIMARY KEY (`CartID`),
  KEY `CustomerID` (`CustomerID`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`CustomerID`) REFERENCES `customer` (`CustomerID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (5,16),(6,17),(7,18),(8,19),(9,20),(10,23);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_items`
--

DROP TABLE IF EXISTS `cart_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_items` (
  `CartItemID` int NOT NULL AUTO_INCREMENT,
  `CartID` int NOT NULL,
  `ProductID` int NOT NULL,
  `Quantity` int NOT NULL,
  PRIMARY KEY (`CartItemID`),
  KEY `CartID` (`CartID`),
  KEY `ProductID` (`ProductID`),
  CONSTRAINT `cart_items_ibfk_1` FOREIGN KEY (`CartID`) REFERENCES `cart` (`CartID`),
  CONSTRAINT `cart_items_ibfk_2` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ProductID`),
  CONSTRAINT `cart_items_chk_1` CHECK ((`Quantity` > 0))
) ENGINE=InnoDB AUTO_INCREMENT=166 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_items`
--

LOCK TABLES `cart_items` WRITE;
/*!40000 ALTER TABLE `cart_items` DISABLE KEYS */;
INSERT INTO `cart_items` VALUES (126,6,32,1),(127,6,31,1);
/*!40000 ALTER TABLE `cart_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `citytrainallocation`
--

DROP TABLE IF EXISTS `citytrainallocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `citytrainallocation` (
  `CityTrainAllocationID` int NOT NULL AUTO_INCREMENT,
  `StoreID` int NOT NULL,
  `TrainScheduleID` int NOT NULL,
  `AllocatedCapacity` int NOT NULL,
  PRIMARY KEY (`CityTrainAllocationID`),
  KEY `StoreID` (`StoreID`),
  KEY `TrainScheduleID` (`TrainScheduleID`),
  CONSTRAINT `citytrainallocation_ibfk_1` FOREIGN KEY (`StoreID`) REFERENCES `store` (`StoreID`),
  CONSTRAINT `citytrainallocation_ibfk_2` FOREIGN KEY (`TrainScheduleID`) REFERENCES `trainschedule` (`TrainScheduleID`),
  CONSTRAINT `citytrainallocation_chk_1` CHECK ((`AllocatedCapacity` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `citytrainallocation`
--

LOCK TABLES `citytrainallocation` WRITE;
/*!40000 ALTER TABLE `citytrainallocation` DISABLE KEYS */;
INSERT INTO `citytrainallocation` VALUES (11,17,1,300),(12,18,1,200),(15,19,2,200),(16,20,2,250),(17,23,3,300),(18,21,4,150),(19,22,5,200),(20,24,4,200);
/*!40000 ALTER TABLE `citytrainallocation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `CustomerID` int NOT NULL AUTO_INCREMENT,
  `CustomerName` varchar(250) NOT NULL,
  `Address` varchar(250) NOT NULL,
  `PhoneNumber` varchar(20) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Hash_Password` varchar(250) NOT NULL,
  PRIMARY KEY (`CustomerID`),
  UNIQUE KEY `Email` (`Email`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (16,'Nimesh Chandula','test','0783780037','nimeshcha123@gmail.com','$2b$10$ZNdqOrjHLC7BXx7yLv9yDuDmn5mKWlOI1./uVU5as3o8lFTeur2kG'),(17,'amarabandu','testing','1111111111','nimeeeesh@123.com','$2b$10$jjTNfGJ.crqrtjjvdv5XKO/5YOHCwwBebouQOqtQGKfPDUkLh0.66'),(18,'sgggg','stfygwyahjs','1111111111','fg777gsh@fgh.com','$2b$10$.54r.ry9M0HhcfZBBc5eQeOSphZGF5uIJLH8sjk2SM6WSjKzfPEB.'),(19,'edfghjk','edrfty','1111111111','fghjjk@fghj.com','$2b$10$Eicqi0F0vZ7KCt25vokcR.Gl0HqvEeo.gAKi2lxlAbJ87dcJNocqy'),(20,'Nimesh Chandula','test','0783780037','nimeshcha1234@gmail.com','$2b$10$DsHfZwxC4XsyEbYvx4jv0O5xwX5k1FwM92jrFKpZZ.tBQHdBN19D.'),(23,'amarabandu rupasinghe','polonnaruwa','0771111111','amarabandu@rupe.com','$2b$10$bcQznFFk7lutii0AkXjv5uhUKGoZZgJG6cA0Uwruuz671ZtnEb/l.');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `after_customer_insert` AFTER INSERT ON `customer` FOR EACH ROW BEGIN
    INSERT INTO cart (CustomerID) VALUES (NEW.CustomerID);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `after_order_updates` AFTER UPDATE ON `customer` FOR EACH ROW BEGIN
    -- Check if the cart for the customer already exists
    IF NOT EXISTS (
        SELECT 1 FROM cart WHERE CustomerID = NEW.CustomerID
    ) THEN
        -- Insert a new cart for the customer
        INSERT INTO cart (CustomerID) VALUES (NEW.CustomerID);
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Temporary view structure for view `delivereddata`
--

DROP TABLE IF EXISTS `delivereddata`;
/*!50001 DROP VIEW IF EXISTS `delivereddata`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `delivereddata` AS SELECT 
 1 AS `CustomerName`,
 1 AS `PhoneNumber`,
 1 AS `OrderID`,
 1 AS `DeliveryAddress`,
 1 AS `DeliveryDate`,
 1 AS `City`,
 1 AS `RouteDescription`,
 1 AS `TruckNumber`,
 1 AS `CurrentStatus`,
 1 AS `DriverID`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `driver`
--

DROP TABLE IF EXISTS `driver`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `driver` (
  `DriverID` int NOT NULL AUTO_INCREMENT,
  `EmployeeID` int NOT NULL,
  `StoreID` int NOT NULL,
  `WeeklyWorkHours` time DEFAULT NULL,
  `update_count` int DEFAULT '0',
  `buttonstatus` enum('started','ended') DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `END_TIME` datetime DEFAULT NULL,
  `TIMEDIFFERENCE` time NOT NULL DEFAULT '00:00:00',
  PRIMARY KEY (`DriverID`),
  KEY `Employee_ID` (`EmployeeID`),
  KEY `StoreID` (`StoreID`),
  CONSTRAINT `driver_ibfk_1` FOREIGN KEY (`EmployeeID`) REFERENCES `employee` (`EmployeeID`),
  CONSTRAINT `driver_ibfk_2` FOREIGN KEY (`StoreID`) REFERENCES `store` (`StoreID`),
  CONSTRAINT `driver_chk_1` CHECK ((`WeeklyWorkHours` >= '00:00:00'))
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `driver`
--

LOCK TABLES `driver` WRITE;
/*!40000 ALTER TABLE `driver` DISABLE KEYS */;
INSERT INTO `driver` VALUES (1,5,20,'00:00:00',0,NULL,NULL,NULL,'00:00:00'),(2,6,17,'00:00:00',0,NULL,NULL,NULL,'00:00:00'),(3,8,17,'00:00:00',5,'ended',NULL,NULL,'00:00:08');
/*!40000 ALTER TABLE `driver` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `driverassistant`
--

DROP TABLE IF EXISTS `driverassistant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `driverassistant` (
  `AssistantID` int NOT NULL AUTO_INCREMENT,
  `EmployeeID` int NOT NULL,
  `StoreID` int NOT NULL,
  `WeeklyWorkHours` time DEFAULT NULL,
  `update_count` int DEFAULT '0',
  `buttonstatus` enum('started','ended') DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `END_TIME` datetime DEFAULT NULL,
  `TIMEDIFFERENCE` time DEFAULT NULL,
  PRIMARY KEY (`AssistantID`),
  KEY `Employee_ID` (`EmployeeID`),
  KEY `StoreID` (`StoreID`),
  CONSTRAINT `driverassistant_ibfk_1` FOREIGN KEY (`EmployeeID`) REFERENCES `employee` (`EmployeeID`),
  CONSTRAINT `driverassistant_ibfk_2` FOREIGN KEY (`StoreID`) REFERENCES `store` (`StoreID`),
  CONSTRAINT `driverassistant_chk_1` CHECK ((`WeeklyWorkHours` >= '00:00:00'))
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `driverassistant`
--

LOCK TABLES `driverassistant` WRITE;
/*!40000 ALTER TABLE `driverassistant` DISABLE KEYS */;
INSERT INTO `driverassistant` VALUES (1,7,17,'00:00:00',0,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `driverassistant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `EmployeeID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(150) NOT NULL,
  `PhoneNumber` varchar(20) NOT NULL,
  `Address` varchar(250) NOT NULL,
  `Role` varchar(50) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Hash_Password` varchar(250) NOT NULL,
  PRIMARY KEY (`EmployeeID`),
  UNIQUE KEY `Email` (`Email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (3,'test','2222222222','qwerty','Company Manager','nimesh@123.com','$2b$10$2noqR6pCPX52XyjxbKh4nO3jaHYAu2.pAtBRumTn4Kwmw6pHRT2e.'),(4,'testing','1111111111','qwerty','Store Manager','boss@bossmail.com','$2b$10$eV3bT1/AXkVqLhxloOquOeBw8UP.8ZZXq/6pFBZRuwk1G/jGeQgqi'),(5,'tttt','eeee','wwww','Driver','drive@drive.com','$2b$10$y3qoSbQtTEPSGy5vBAU/hOyIDeN3zglMnMQGUxqJE9uIxAxZH6uHi'),(6,'drive','0000000000','weryui','Driver','sdfg@123.com','$2b$10$Q0t4xPIiEkC//plGjS/Ase8J1R0Filcth4BJScnRUpDXZJHuF8WDm'),(7,'wesdfghj','1111111111','fgh','Driver Assistant','wqeer@123.com','$2b$10$Sd28NeNKy8xgJTS2RiGN8OpcYDO73rxMMKbLDz.6Ey2UAh4Egq0.m'),(8,'eshin','1111111111','qwerty','Driver','eshin@123.com','$2b$10$OSTR7xYkpRjWQmupvMqzq.k4S.vTaBkGnXNyp2KZmyPDJ7LbVGRCi');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `finalorderdetails`
--

DROP TABLE IF EXISTS `finalorderdetails`;
/*!50001 DROP VIEW IF EXISTS `finalorderdetails`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `finalorderdetails` AS SELECT 
 1 AS `CustomerName`,
 1 AS `PhoneNumber`,
 1 AS `OrderID`,
 1 AS `DeliveryAddress`,
 1 AS `DeliveryDate`,
 1 AS `City`,
 1 AS `RouteDescription`,
 1 AS `TruckNumber`,
 1 AS `CurrentStatus`,
 1 AS `DriverID`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `order_product`
--

DROP TABLE IF EXISTS `order_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_product` (
  `OrderDetailID` int NOT NULL AUTO_INCREMENT,
  `OrderID` int NOT NULL,
  `ProductID` int NOT NULL,
  `Quantity` int NOT NULL,
  PRIMARY KEY (`OrderDetailID`),
  KEY `OrderID` (`OrderID`),
  KEY `ProductID` (`ProductID`),
  CONSTRAINT `order_product_ibfk_1` FOREIGN KEY (`OrderID`) REFERENCES `orders` (`OrderID`),
  CONSTRAINT `order_product_ibfk_2` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ProductID`),
  CONSTRAINT `order_product_chk_1` CHECK ((`Quantity` > 0))
) ENGINE=InnoDB AUTO_INCREMENT=138 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_product`
--

LOCK TABLES `order_product` WRITE;
/*!40000 ALTER TABLE `order_product` DISABLE KEYS */;
INSERT INTO `order_product` VALUES (92,47,31,5),(93,47,33,8),(94,47,36,7),(95,48,32,1),(96,48,37,1),(97,48,38,1),(98,49,32,1),(99,49,31,1),(101,50,27,2),(102,50,30,1),(104,54,26,1),(105,54,29,1),(106,54,31,1),(107,55,32,1),(108,55,35,1),(109,56,31,1),(110,56,32,1),(111,56,36,1),(112,57,32,1),(113,57,31,1),(114,57,33,1),(115,58,26,1),(116,59,26,1),(117,59,27,1),(119,60,31,1),(120,60,32,1),(121,60,33,1),(122,61,31,1),(123,61,33,1),(124,61,36,1),(125,62,31,99),(126,62,33,1),(128,63,26,6),(129,63,32,1),(130,63,29,1),(131,63,36,1),(135,64,31,1),(136,64,32,1);
/*!40000 ALTER TABLE `order_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_schedule`
--

DROP TABLE IF EXISTS `order_schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_schedule` (
  `OrderScheduleID` int NOT NULL AUTO_INCREMENT,
  `OrderID` int DEFAULT NULL,
  `ScheduleID` int DEFAULT NULL,
  PRIMARY KEY (`OrderScheduleID`),
  KEY `OrderID` (`OrderID`),
  KEY `ScheduleID` (`ScheduleID`),
  CONSTRAINT `order_schedule_ibfk_1` FOREIGN KEY (`OrderID`) REFERENCES `orders` (`OrderID`),
  CONSTRAINT `order_schedule_ibfk_2` FOREIGN KEY (`ScheduleID`) REFERENCES `truckschedule` (`ScheduleID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_schedule`
--

LOCK TABLES `order_schedule` WRITE;
/*!40000 ALTER TABLE `order_schedule` DISABLE KEYS */;
INSERT INTO `order_schedule` VALUES (4,47,1),(5,48,1),(6,50,1),(7,49,7),(8,54,7),(9,50,8),(10,48,8),(11,63,9);
/*!40000 ALTER TABLE `order_schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderassignment`
--

DROP TABLE IF EXISTS `orderassignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderassignment` (
  `CityTrainAllocationID` int NOT NULL AUTO_INCREMENT,
  `StoreID` int DEFAULT NULL,
  `TrainScheduleID` int DEFAULT NULL,
  `AllocatedCapacity` int DEFAULT NULL,
  PRIMARY KEY (`CityTrainAllocationID`),
  KEY `StoreID` (`StoreID`),
  KEY `TrainScheduleID` (`TrainScheduleID`),
  CONSTRAINT `orderassignment_ibfk_1` FOREIGN KEY (`StoreID`) REFERENCES `store` (`StoreID`),
  CONSTRAINT `orderassignment_ibfk_2` FOREIGN KEY (`TrainScheduleID`) REFERENCES `trainschedule` (`TrainScheduleID`),
  CONSTRAINT `orderassignment_chk_1` CHECK ((`AllocatedCapacity` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderassignment`
--

LOCK TABLES `orderassignment` WRITE;
/*!40000 ALTER TABLE `orderassignment` DISABLE KEYS */;
INSERT INTO `orderassignment` VALUES (9,17,1,300),(10,18,1,200),(11,19,2,200),(12,20,2,250),(13,23,3,300),(14,21,4,150),(15,22,5,200),(16,24,4,200);
/*!40000 ALTER TABLE `orderassignment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `orderdetails`
--

DROP TABLE IF EXISTS `orderdetails`;
/*!50001 DROP VIEW IF EXISTS `orderdetails`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `orderdetails` AS SELECT 
 1 AS `OrderID`,
 1 AS `CustomerID`,
 1 AS `OrderDate`,
 1 AS `City`,
 1 AS `TrainCapacityConsumption`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `OrderID` int NOT NULL AUTO_INCREMENT,
  `CustomerID` int NOT NULL,
  `OrderDate` date NOT NULL,
  `DeliveryDate` date DEFAULT NULL,
  `RouteID` int NOT NULL,
  `DeliveryAddress` varchar(250) NOT NULL,
  `CurrentStatus` enum('Pending','Rescheduled','In Transit to Store','At Distribution Center','Out for Final Delivery','Delivered') NOT NULL,
  `City` varchar(100) DEFAULT NULL,
  `Amount` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`OrderID`),
  KEY `CustomerID` (`CustomerID`),
  KEY `RouteID` (`RouteID`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`CustomerID`) REFERENCES `customer` (`CustomerID`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`RouteID`) REFERENCES `route` (`RouteID`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (47,18,'2024-07-28',NULL,1,'sdg','Out for Final Delivery','Colombo',52800.00),(48,19,'2024-11-28',NULL,1,'sdxfgchjk','Out for Final Delivery','Colombo',11500.00),(49,19,'2024-05-28',NULL,4,'wesrdrt','In Transit to Store','Colombo',11000.00),(50,19,'2023-03-28',NULL,1,'stfygwyahjs','Out for Final Delivery','Colombo',12200.00),(54,19,'2023-10-28','2024-10-30',4,'sdfghjk','Delivered','Colombo',355800.00),(55,16,'2024-10-28',NULL,6,'eawrtyu','In Transit to Store','Matara',6000.00),(56,16,'2024-10-30',NULL,6,'saadewd','In Transit to Store','Matara',6000.00),(57,16,'2024-10-30',NULL,39,'fghj','In Transit to Store','Anuradhapura',6000.00),(58,16,'2024-10-30',NULL,38,'ertyu','In Transit to Store','Anuradhapura',6000.00),(59,16,'2024-10-30',NULL,33,'stfygwyahjs','In Transit to Store','Badulla',6000.00),(60,16,'2024-10-30',NULL,8,'dsfghj','In Transit to Store','Negombo',6000.00),(61,16,'2024-10-30',NULL,18,'995,galle road, Hakmana ','In Transit to Store','Matara',7900.00),(62,20,'2024-10-30',NULL,27,'Nilaweli road, thangamalai','In Transit to Store','Trincomalee',300500.00),(63,20,'2024-10-30','2024-10-30',4,'Church road, colombo','Delivered','Colombo',51700.00),(64,23,'2024-10-30',NULL,12,'esdrtfyguhjiko','Pending','Galle',11000.00);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `ProductID` int NOT NULL AUTO_INCREMENT,
  `ProductName` varchar(100) NOT NULL,
  `TrainCapacityConsumption` int NOT NULL,
  `Price` decimal(10,2) NOT NULL,
  `ProductURL` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`ProductID`),
  CONSTRAINT `product_chk_1` CHECK ((`TrainCapacityConsumption` >= 0)),
  CONSTRAINT `product_chk_2` CHECK ((`Price` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (26,'Backpack',25,6300.00,'../../Backpack.jpg'),(27,'Bluetooth Speaker',10,6000.00,'../../Bluetooth Speaker.jpg'),(28,'Digital Watch',2,1200.00,'../../Digital Watch.jpg'),(29,'Earbuds',2,4500.00,'../../Earbuds.jpg'),(30,'Note Book',5,200.00,'../../Note Book.png'),(31,'Table Lamp',15,3000.00,'../../Table Lamp.png'),(32,'FX-991EX Calculator',5,8000.00,'../../FX-991EX Calculator.jpg'),(33,'Hand Bag',20,3500.00,'../../Hand Bag.png'),(34,'Sneakers',18,4500.00,'../../Sneakers.jpg'),(35,'Water Bottle',15,1700.00,'../../Water Bottle.jpg'),(36,'Wireless Gaming Mouse',5,1400.00,'../../Wireless Gaming Mouse.jpg'),(37,'Wireless Headphone',10,2000.00,'../../Wireless Headphone.jpg'),(38,'Wall Clock',12,1500.00,'../../Wall Clock.jpg');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `rescheduledorderdetails`
--

DROP TABLE IF EXISTS `rescheduledorderdetails`;
/*!50001 DROP VIEW IF EXISTS `rescheduledorderdetails`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `rescheduledorderdetails` AS SELECT 
 1 AS `OrderID`,
 1 AS `CustomerID`,
 1 AS `OrderDate`,
 1 AS `City`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `resettraindetails`
--

DROP TABLE IF EXISTS `resettraindetails`;
/*!50001 DROP VIEW IF EXISTS `resettraindetails`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `resettraindetails` AS SELECT 
 1 AS `CityName`,
 1 AS `AllocatedCapacity`,
 1 AS `Capacity`,
 1 AS `Description`,
 1 AS `TrainScheduleID`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `route`
--

DROP TABLE IF EXISTS `route`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `route` (
  `RouteID` int NOT NULL AUTO_INCREMENT,
  `StoreID` int NOT NULL,
  `RouteDescription` varchar(250) NOT NULL,
  `MaxTimeHrs` int NOT NULL,
  PRIMARY KEY (`RouteID`),
  KEY `StoreID` (`StoreID`),
  CONSTRAINT `route_ibfk_1` FOREIGN KEY (`StoreID`) REFERENCES `store` (`StoreID`),
  CONSTRAINT `route_chk_1` CHECK ((`MaxTimeHrs` > 0))
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `route`
--

LOCK TABLES `route` WRITE;
/*!40000 ALTER TABLE `route` DISABLE KEYS */;
INSERT INTO `route` VALUES (1,17,'Colombo -> Kollupitiya -> Galkissa -> Moratuwa -> Panadura',2),(2,17,'Colombo -> Kelaniya -> Kiribathgoda -> Kadawatha -> Ragama',2),(3,17,'Colombo -> Nugegoda -> Maharagama -> Homagama -> Padukka',2),(4,17,'Colombo -> Borella -> Rajagiriya -> Battaramulla -> Malabe',1),(5,17,'Colombo -> Peliyagoda -> Ja-Ela -> Negombo',2),(6,18,'Negombo -> Katunayake -> Seeduwa -> Kandana -> Wattala',2),(7,18,'Negombo -> Kochchikade -> Wennappuwa -> Chilaw -> Madampe',3),(8,18,'Negombo -> Dankotuwa -> Nattandiya -> Marawila -> Naththandiya',2),(9,18,'Negombo -> Pitipana -> Talahena -> Dalupotha -> Kurana',1),(10,18,'Negombo -> Katana -> Minuwangoda -> Gampaha -> Yakkala',2),(11,19,'Galle -> Unawatuna -> Habaraduwa -> Koggala -> Ahangama',1),(12,19,'Galle -> Weligama -> Mirissa -> Polwathumodara -> Matara',2),(13,19,'Galle -> Hikkaduwa -> Ambalangoda -> Balapitiya -> Ahungalla',2),(14,19,'Galle -> Karapitiya -> Baddegama -> Wakwella -> Karandeniya',2),(15,19,'Galle -> Akmeemana -> Yakkalamulla -> Imaduwa -> Neluwa',2),(16,20,'Matara -> Weligama -> Kamburugamuwa -> Mirissa -> Dickwella',2),(17,20,'Matara -> Akuressa -> Deniyaya -> Morawaka -> Urubokka',3),(18,20,'Matara -> Hakmana -> Thihagoda -> Kamburupitiya -> Kekanadura',2),(19,20,'Matara -> Dondra -> Devinuwara -> Gandara -> Beliatta',2),(20,20,'Matara -> Weligama -> Ahangama -> Midigama -> Koggala',2),(21,21,'Jaffna -> Chavakachcheri -> Kodikamam -> Pallai -> Kilinochchi',3),(22,21,'Jaffna -> Nallur -> Kopay -> Atchuveli -> Point Pedro',2),(23,21,'Jaffna -> Vaddukoddai -> Ponnalai -> Velanai -> Kayts',2),(24,21,'Jaffna -> Karainagar -> Pungudutivu -> Nainativu -> Delft',3),(25,21,'Jaffna -> Chankanai -> Sandilipay -> Tellippalai -> Kankesanthurai',2),(26,22,'Trincomalee -> Kinniya -> Muttur -> Seruwila -> Kantale',3),(27,22,'Trincomalee -> Nilaveli -> Kuchchaveli -> Pulmoddai -> Mullaitivu',4),(28,22,'Trincomalee -> Uppuveli -> Thampalakamam -> Gomarankadawala -> Morawewa',2),(29,22,'Trincomalee -> China Bay -> Thiriyai -> Pulmoddai -> Kokkilai',3),(30,22,'Trincomalee -> Kinniya -> Thoppur -> Muttur -> Verugal',3),(31,23,'Badulla -> Hali-Ela -> Bandarawela -> Diyatalawa -> Haputale',2),(32,23,'Badulla -> Ella -> Demodara -> Passara -> Lunugala',3),(33,23,'Badulla -> Mahiyanganaya -> Girandurukotte -> Hasalaka -> Bibile',4),(34,23,'Badulla -> Meegahakivula -> Kandeketiya -> Uva Paranagama -> Welimada',2),(35,23,'Badulla -> Keppetipola -> Nuwara Eliya -> Walapane -> Ragala',3),(36,24,'Anuradhapura -> Mihintale -> Kekirawa -> Maradankadawala -> Dambulla',3),(37,24,'Anuradhapura -> Nochchiyagama -> Thambuttegama -> Galgamuwa -> Maho',3),(38,24,'Anuradhapura -> Eppawala -> Talawa -> Rajanganaya -> Kalawewa',2),(39,24,'Anuradhapura -> Medawachchiya -> Rambewa -> Vavuniya -> Omanthai',3),(40,24,'Anuradhapura -> Padaviya -> Horowpathana -> Kebithigollewa -> Welioya',3);
/*!40000 ALTER TABLE `route` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `store`
--

DROP TABLE IF EXISTS `store`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `store` (
  `StoreID` int NOT NULL AUTO_INCREMENT,
  `Address` varchar(250) NOT NULL,
  `ContactNumber` varchar(20) NOT NULL,
  `RailwayStationContact` varchar(20) DEFAULT NULL,
  `CityName` varchar(100) NOT NULL,
  PRIMARY KEY (`StoreID`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `store`
--

LOCK TABLES `store` WRITE;
/*!40000 ALTER TABLE `store` DISABLE KEYS */;
INSERT INTO `store` VALUES (17,'123 Colombo Road','011-2456789','011-2456790','Colombo'),(18,'45 Negombo Street','031-2256789','031-2256790','Negombo'),(19,'78 Galle Fort Road','091-2256789','091-2256790','Galle'),(20,'98 Matara Avenue','041-2256789','041-2256790','Matara'),(21,'101 Jaffna Main Road','021-2256789','021-2256790','Jaffna'),(22,'56 Trincomalee Bay Street','026-2256789','026-2256790','Trincomalee'),(23,'33 Badulla Station Road','055-2256789','055-2256790','Badulla'),(24,'12 Anuradhapura Temple Road','025-2256789','025-2256790','Anuradhapura');
/*!40000 ALTER TABLE `store` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `store_details`
--

DROP TABLE IF EXISTS `store_details`;
/*!50001 DROP VIEW IF EXISTS `store_details`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `store_details` AS SELECT 
 1 AS `Address`,
 1 AS `ContactNumber`,
 1 AS `RailwayStationContact`,
 1 AS `CityName`,
 1 AS `Name`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `storemanager`
--

DROP TABLE IF EXISTS `storemanager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `storemanager` (
  `ManagerID` int NOT NULL AUTO_INCREMENT,
  `StoreID` int NOT NULL,
  `EmployeeID` int NOT NULL,
  PRIMARY KEY (`ManagerID`),
  KEY `StoreID` (`StoreID`),
  KEY `Employee_ID` (`EmployeeID`),
  CONSTRAINT `storemanager_ibfk_1` FOREIGN KEY (`StoreID`) REFERENCES `store` (`StoreID`),
  CONSTRAINT `storemanager_ibfk_2` FOREIGN KEY (`EmployeeID`) REFERENCES `employee` (`EmployeeID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storemanager`
--

LOCK TABLES `storemanager` WRITE;
/*!40000 ALTER TABLE `storemanager` DISABLE KEYS */;
INSERT INTO `storemanager` VALUES (4,17,4);
/*!40000 ALTER TABLE `storemanager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `traindetails`
--

DROP TABLE IF EXISTS `traindetails`;
/*!50001 DROP VIEW IF EXISTS `traindetails`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `traindetails` AS SELECT 
 1 AS `CityName`,
 1 AS `AllocatedCapacity`,
 1 AS `TrainDate`,
 1 AS `Capacity`,
 1 AS `Description`,
 1 AS `TrainScheduleID`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `trainschedule`
--

DROP TABLE IF EXISTS `trainschedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trainschedule` (
  `TrainScheduleID` int NOT NULL AUTO_INCREMENT,
  `TrainDate` date NOT NULL,
  `Capacity` int NOT NULL,
  `Description` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`TrainScheduleID`),
  CONSTRAINT `trainschedule_chk_1` CHECK ((`Capacity` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trainschedule`
--

LOCK TABLES `trainschedule` WRITE;
/*!40000 ALTER TABLE `trainschedule` DISABLE KEYS */;
INSERT INTO `trainschedule` VALUES (1,'2024-10-22',500,'Kandy to Colombo'),(2,'2024-10-22',450,'Kandy to Matara'),(3,'2024-10-22',300,'Colombo to Badulla'),(4,'2024-10-22',350,'Kandy to Jaffna'),(5,'2024-10-22',200,'Kandy to Trincomalee');
/*!40000 ALTER TABLE `trainschedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `truck`
--

DROP TABLE IF EXISTS `truck`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `truck` (
  `TruckID` int NOT NULL AUTO_INCREMENT,
  `StoreID` int NOT NULL,
  `TruckNumber` varchar(50) NOT NULL,
  `Capacity` int NOT NULL,
  `Condition_` enum('Good','Not Suited') NOT NULL,
  PRIMARY KEY (`TruckID`),
  KEY `StoreID` (`StoreID`),
  CONSTRAINT `truck_ibfk_1` FOREIGN KEY (`StoreID`) REFERENCES `store` (`StoreID`),
  CONSTRAINT `truck_chk_1` CHECK ((`Capacity` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `truck`
--

LOCK TABLES `truck` WRITE;
/*!40000 ALTER TABLE `truck` DISABLE KEYS */;
INSERT INTO `truck` VALUES (1,17,'TX-1001',650,'Good'),(2,18,'TX-1002',1000,'Not Suited'),(3,20,'TX-1003',500,'Good'),(4,21,'TX-1004',875,'Good'),(5,22,'TX-1005',900,'Good'),(6,23,'TX-1006',950,'Good'),(7,24,'TX-1007',750,'Good'),(8,19,'TX-1008',900,'Good'),(9,17,'TX-1009',1000,'Good'),(10,22,'TX-1010',650,'Good'),(11,23,'TX-1011',975,'Good'),(12,19,'TX-1012',750,'Good'),(13,17,'TX-1013',800,'Not Suited');
/*!40000 ALTER TABLE `truck` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `truckschedule`
--

DROP TABLE IF EXISTS `truckschedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `truckschedule` (
  `ScheduleID` int NOT NULL AUTO_INCREMENT,
  `TruckID` int NOT NULL,
  `RouteID` int NOT NULL,
  `DriverID` int NOT NULL,
  `AssistantID` int DEFAULT NULL,
  `ScheduleDate` date NOT NULL,
  `StartTime` time DEFAULT NULL,
  `EndTime` time DEFAULT NULL,
  PRIMARY KEY (`ScheduleID`),
  KEY `TruckID` (`TruckID`),
  KEY `RouteID` (`RouteID`),
  KEY `DriverID` (`DriverID`),
  KEY `AssistantID` (`AssistantID`),
  CONSTRAINT `truckschedule_ibfk_1` FOREIGN KEY (`TruckID`) REFERENCES `truck` (`TruckID`),
  CONSTRAINT `truckschedule_ibfk_2` FOREIGN KEY (`RouteID`) REFERENCES `route` (`RouteID`),
  CONSTRAINT `truckschedule_ibfk_3` FOREIGN KEY (`DriverID`) REFERENCES `driver` (`DriverID`),
  CONSTRAINT `truckschedule_ibfk_4` FOREIGN KEY (`AssistantID`) REFERENCES `driverassistant` (`AssistantID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `truckschedule`
--

LOCK TABLES `truckschedule` WRITE;
/*!40000 ALTER TABLE `truckschedule` DISABLE KEYS */;
INSERT INTO `truckschedule` VALUES (1,12,1,2,1,'2024-10-22',NULL,NULL),(2,10,2,2,1,'2024-10-15',NULL,NULL),(3,10,1,3,1,'2024-10-15',NULL,NULL),(4,11,1,1,1,'2024-10-20',NULL,NULL),(5,9,2,3,1,'2024-10-25',NULL,NULL),(6,9,2,2,1,'2024-10-31',NULL,NULL),(7,1,4,3,1,'2024-10-31',NULL,NULL),(8,1,1,2,1,'2024-10-31',NULL,NULL),(9,9,4,3,1,'2024-10-31',NULL,NULL);
/*!40000 ALTER TABLE `truckschedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'supplychainmanagementsystem'
--
/*!50003 DROP FUNCTION IF EXISTS `add_customer` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `add_customer`(name varchar(50), adress varchar(250), phone varchar(20),
                                                   mail varchar(100), password varchar(250)) RETURNS json
    DETERMINISTIC
begin
        declare customerID INT;
        declare email varchar(100);
        declare result json;
        INSERT INTO Customer (CustomerName, Address, PhoneNumber, Email, Hash_Password)
        VALUES (name, adress, phone, mail, password);

        set customerID = last_insert_id();


        set email = mail;
        IF customerID > 0 THEN
            SET result = JSON_OBJECT('customerID', customerID, 'email', email);
            RETURN result;
        ELSE
            RETURN JSON_OBJECT('error', 'Not found');
        END IF;

    end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `check_email` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `check_email`(email VARCHAR(100)) RETURNS varchar(250) CHARSET utf8mb4
    DETERMINISTIC
BEGIN
    DECLARE password VARCHAR(250);

    SELECT Hash_Password INTO password
    FROM customer
    WHERE Customer.Email = email;

    IF password IS NOT NULL THEN
        RETURN password;
    ELSE
        RETURN NULL;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `check_Employee_email` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `check_Employee_email`(email varchar(100)) RETURNS json
    DETERMINISTIC
BEGIN
    DECLARE password VARCHAR(250);
    DECLARE ID INT;
    DECLARE role VARCHAR(50);
    DECLARE result JSON;

    SELECT Hash_Password, EmployeeID, employee.Role INTO password, ID, role
    FROM employee
    WHERE employee.Email = email;

    IF password IS NOT NULL THEN
        SET result = JSON_OBJECT('password', password, 'ID', ID, 'role', role);
        RETURN result;
    ELSE
        RETURN JSON_OBJECT('error', 'Not found');
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `check_unique_email` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `check_unique_email`(email varchar(100)) RETURNS tinyint(1)
    DETERMINISTIC
begin
    declare number int;

    select count(*) into number
    from customer
    where customer.Email = email;

    if number > 0 then
        return false;
    else
        return true;
    end if;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getCustomerID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `getCustomerID`(email varchar(100)) RETURNS int
    DETERMINISTIC
begin
    declare ID INT;
    select CustomerID into ID
    from customer
    where Customer.Email = email
    limit 1;

    if ID IS NOT NULL then
        return ID;
    else
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No customerID found';
    end if;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getRouteID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `getRouteID`(routeDescription varchar(250)) RETURNS int
    DETERMINISTIC
begin
    declare ID INT;
    select RouteID into ID
    from route
    where Route.RouteDescription = routeDescription
    LIMIT 1;

    if ID IS NOT NULL then
        return ID;
    else
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No route found';
    end if;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getStoreID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `getStoreID`(storeName VARCHAR(100)) RETURNS int
    DETERMINISTIC
BEGIN
    DECLARE storeID INT;

    SELECT store.StoreID into storeID
    from store
    where store.CityName = storeName;

    RETURN storeID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `get_CartID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `get_CartID`(custID INT) RETURNS int
    DETERMINISTIC
BEGIN
    DECLARE cart_id INT;

    SELECT CartID INTO cart_id
    FROM cart
    WHERE CustomerID = custID
    LIMIT 1;

    RETURN cart_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `get_customer_id` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `get_customer_id`(customer_email varchar(255)) RETURNS int
    DETERMINISTIC
BEGIN
    DECLARE customer_id INT;

    SELECT CustomerID INTO customer_id
    FROM customer
    WHERE email = customer_email
    LIMIT 1;

    RETURN customer_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `AddOrder` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `AddOrder`(IN p_CustomerID int, IN p_OrderDate date, IN p_RouteID int,
                                                IN p_DeliveryAddress varchar(250), IN p_CartID int,
                                                IN p_City varchar(100), IN p_Amount decimal(10, 2))
BEGIN
    DECLARE v_OrderID INT;

    -- Insert into order table
    INSERT INTO `orders` (CustomerID, OrderDate, RouteID, DeliveryAddress, CurrentStatus, City,Amount)
    VALUES (p_CustomerID, p_OrderDate, p_RouteID, p_DeliveryAddress, 'Pending', p_City,p_Amount);

    -- Get the last inserted OrderID
    SET v_OrderID = LAST_INSERT_ID();

    -- Insert related products into order_product table from cart_items
    INSERT INTO order_product (OrderID, ProductID, Quantity)
    SELECT
        v_OrderID,
        ProductID,
        Quantity
    FROM cart_items
    WHERE CartID = p_CartID;

    -- Clear the relevant cart_items entries
    DELETE FROM cart_items
    WHERE CartID = p_CartID;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GenerateQuarterlySalesReport` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GenerateQuarterlySalesReport`()
BEGIN
    -- Variables to store year and quarter range
    DECLARE start_year INT DEFAULT 2023; -- Set this to the earliest year of data available
    DECLARE end_year INT DEFAULT YEAR(CURDATE());
    DECLARE quarter INT;

    -- Variables to store quarterly calculations
    DECLARE quarter_start DATE;
    DECLARE quarter_end DATE;
    DECLARE total_sales DECIMAL(10, 2);
    DECLARE total_orders INT;
    DECLARE best_selling_item VARCHAR(100);
    DECLARE best_selling_quantity INT;

    -- Temporary table to store results
    CREATE TEMPORARY TABLE IF NOT EXISTS QuarterlyReport (
        ReportYear INT,
        ReportQuarter INT,
        TotalOrders INT,
        TotalSalesAmount DECIMAL(10, 2),
        BestSellingItem VARCHAR(100),
        BestSellingItemQuantity INT
    );

    -- Loop through each year and quarter
    SET quarter = 1;
    WHILE start_year <= end_year DO
        WHILE quarter <= 4 DO
            -- Set start and end dates for each quarter
            IF quarter = 1 THEN
                SET quarter_start = DATE(CONCAT(start_year, '-01-01'));
                SET quarter_end = DATE(CONCAT(start_year, '-03-31'));
            ELSEIF quarter = 2 THEN
                SET quarter_start = DATE(CONCAT(start_year, '-04-01'));
                SET quarter_end = DATE(CONCAT(start_year, '-06-30'));
            ELSEIF quarter = 3 THEN
                SET quarter_start = DATE(CONCAT(start_year, '-07-01'));
                SET quarter_end = DATE(CONCAT(start_year, '-09-30'));
            ELSEIF quarter = 4 THEN
                SET quarter_start = DATE(CONCAT(start_year, '-10-01'));
                SET quarter_end = DATE(CONCAT(start_year, '-12-31'));
            END IF;

            -- Calculate total sales and total orders
            SET total_sales = (SELECT COALESCE(SUM(o.Amount), 0) FROM orders o WHERE o.OrderDate BETWEEN quarter_start AND quarter_end);
            SET total_orders = (SELECT COUNT(*) FROM orders o WHERE o.OrderDate BETWEEN quarter_start AND quarter_end);

            -- Determine the best-selling product
            SELECT p.ProductName, COALESCE(SUM(op.Quantity), 0) AS TotalQuantitySold
            INTO best_selling_item, best_selling_quantity
            FROM order_product op
            JOIN orders o ON op.OrderID = o.OrderID
            JOIN product p ON op.ProductID = p.ProductID
            WHERE o.OrderDate BETWEEN quarter_start AND quarter_end
            GROUP BY op.ProductID
            ORDER BY TotalQuantitySold DESC
            LIMIT 1;

            -- Insert data into the temporary table
            INSERT INTO QuarterlyReport (ReportYear, ReportQuarter, TotalOrders, TotalSalesAmount, BestSellingItem, BestSellingItemQuantity)
            VALUES (start_year, quarter, total_orders, total_sales, best_selling_item, best_selling_quantity);

            SET quarter = quarter + 1;
        END WHILE;

        SET quarter = 1; -- Reset quarter to 1 for the next year
        SET start_year = start_year + 1;
    END WHILE;

    -- Output the final report
    SELECT * FROM QuarterlyReport;

    -- Drop the temporary table
    DROP TEMPORARY TABLE IF EXISTS QuarterlyReport;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetCustomerOrders` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetCustomerOrders`()
BEGIN
    SELECT
        c.CustomerID AS "CustomerID",
        c.CustomerName AS "CustomerName",
        SUM(op.Quantity * p.Price) AS "TotalAmount"
    FROM
        Orders o
    JOIN
        Customer c ON o.CustomerID = c.CustomerID
    JOIN
        Order_Product op ON o.OrderID = op.OrderID
    JOIN
        Product p ON op.ProductID = p.ProductID
    GROUP BY
        c.CustomerID, c.CustomerName, o.OrderID, o.OrderDate
    ORDER BY
        o.OrderDate;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetDeliveredDataByDriverID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetDeliveredDataByDriverID`(IN driver_id INT)
BEGIN
    SELECT
        CustomerName,
        PhoneNumber,
        OrderID,
        DeliveryAddress,
        City,
        DeliveryDate,
        RouteDescription,
        TruckNumber,
        CurrentStatus
    FROM
        DeliveredData
    WHERE
        DriverID = driver_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetDriverHours` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetDriverHours`()
    DETERMINISTIC
BEGIN
    SELECT
        DriverID ,
        AssistantID ,
        TruckID ,
        StartTime ,
        EndTime
    FROM
        TruckSchedule
    ORDER BY
        DriverID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetDriverIDByEmail` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetDriverIDByEmail`(IN userEmail VARCHAR(255))
BEGIN
    SELECT d.DriverID
    FROM Employee e
    JOIN Driver d ON d.EmployeeID = e.EmployeeID
    WHERE e.Email = userEmail;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetOrdersByDriverID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetOrdersByDriverID`(IN driver_id INT)
BEGIN
    SELECT
        CustomerName,
        PhoneNumber,
        OrderID,
        DeliveryAddress,
        City,
        RouteDescription,
        TruckNumber,
        CurrentStatus,
        DeliveryDate
    FROM
        finalorderdetails
    WHERE
        DriverID = driver_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getProductDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getProductDetails`(
)
begin
    select ProductID,ProductName,Price,ProductURL
    from product;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetRoleByEmail` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetRoleByEmail`(IN userEmail VARCHAR(255))
BEGIN
    SELECT Role
    FROM employee 
    WHERE email = userEmail;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetSalesByCityAndRoute` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetSalesByCityAndRoute`(IN p_CityName VARCHAR(255))
BEGIN
    SELECT
        s.CityName AS City,
        r.RouteDescription AS Route,
        SUM(op.Quantity * p.Price) AS TotalSales
    FROM
        Orders o
    JOIN
        Route r ON o.RouteID = r.RouteID
    JOIN
        Store s ON r.StoreID = s.StoreID
    JOIN
        Order_Product op ON o.OrderID = op.OrderID
    JOIN
        Product p ON op.ProductID = p.ProductID
    WHERE
        s.CityName = p_CityName
    GROUP BY
        s.CityName, r.RouteDescription
    ORDER BY
        r.RouteDescription;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetTopProducts` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetTopProducts`()
BEGIN
    SELECT
        p.ProductID AS "ProductID",
        p.ProductName AS "ProductName",
        SUM(op.Quantity) AS Quantity
    FROM
        Product p
    JOIN
        Order_Product op ON p.ProductID = op.ProductID
    GROUP BY
        p.ProductID, p.ProductName
    ORDER BY
        Quantity DESC
    LIMIT 5;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetUpdateCount` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetUpdateCount`(IN p_DriverID INT, OUT p_UpdateCount INT)
BEGIN
    SELECT update_count
    INTO p_UpdateCount
    FROM driver
    WHERE DriverID = p_DriverID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getUserData` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getUserData`(
    IN email varchar(100)
)
begin
    select CustomerID,CustomerName,PhoneNumber,Address,Email
    from customer
    where customer.Email = email;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `InsertEmployee` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertEmployee`(
    IN empName VARCHAR(150),
    IN empPhone VARCHAR(20),
    IN empAddress VARCHAR(150),
    IN empRole VARCHAR(50),
    IN empEmail VARCHAR(100),
    IN empPassword VARCHAR(250),
    IN storeName VARCHAR(100)
)
BEGIN
    DECLARE storeID INT;
    DECLARE empID INT;

    SET storeID = getStoreID(storeName);

    IF storeID IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Store not found for the given name';
    END IF;

    INSERT INTO Employee (Name, PhoneNumber, Address, Role, Email, Hash_Password)
    VALUES (empName, empPhone, empAddress, empRole, empEmail, empPassword);

    SET empID = LAST_INSERT_ID();

    IF empRole = 'Store Manager' THEN
        INSERT INTO StoreManager (StoreID, EmployeeID)
        VALUES (storeID, empID);

    ELSEIF empRole = 'Driver' THEN
        INSERT INTO Driver (EmployeeID, StoreID, WeeklyWorkHours)
        VALUES (empID, storeID, 0);

    ELSEIF empRole = 'Driver Assistant' THEN
        INSERT INTO DriverAssistant (EmployeeID, StoreID, WeeklyWorkHours)
        VALUES (empID, storeID, 0);

    ELSE
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Invalid role provided';
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ManageCartItem` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ManageCartItem`(
    IN customersId INT,
    IN customer_productId INT,
    IN prod_quantity INT
)
BEGIN
    DECLARE customer_cartId INT;
    DECLARE customer_cartItemId INT;
    DECLARE existingQuantity INT;

    -- Get or create cart
    SELECT CartID INTO customer_cartId FROM cart WHERE cart.CustomerID = customersId;


    -- Check if the product is already in the cart
    SELECT CartItemID, Quantity INTO customer_cartItemId, existingQuantity
    FROM cart_items WHERE cart_items.CartID = customer_cartId AND cart_items.ProductID = customer_productId;

    -- Update the quantity if the item exists, otherwise insert a new item
    IF customer_cartItemId IS NOT NULL THEN
        UPDATE cart_items SET Quantity = existingQuantity + prod_quantity
        WHERE cart_items.CartItemID = customer_cartItemId;
    ELSE
        INSERT INTO cart_items (CartID, ProductID, Quantity)
        VALUES (customer_cartId, customer_productId, prod_quantity);
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `QuarterlySalesReport` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `QuarterlySalesReport`(IN report_year INT, IN report_quarter INT)
BEGIN
    DECLARE quarter_start DATE;
    DECLARE quarter_end DATE;
    
    -- Set the start and end dates based on the input quarter
    IF report_quarter = 1 THEN
        SET quarter_start = DATE(CONCAT(report_year, '-01-01'));
        SET quarter_end = DATE(CONCAT(report_year, '-03-31'));
    ELSEIF report_quarter = 2 THEN
        SET quarter_start = DATE(CONCAT(report_year, '-04-01'));
        SET quarter_end = DATE(CONCAT(report_year, '-06-30'));
    ELSEIF report_quarter = 3 THEN
        SET quarter_start = DATE(CONCAT(report_year, '-07-01'));
        SET quarter_end = DATE(CONCAT(report_year, '-09-30'));
    ELSEIF report_quarter = 4 THEN
        SET quarter_start = DATE(CONCAT(report_year, '-10-01'));
        SET quarter_end = DATE(CONCAT(report_year, '-12-31'));
    ELSE
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Invalid quarter. Use 1-4 for report_quarter.';
    END IF;

    -- Total Sales
    SELECT SUM(o.Amount) AS TotalSales
    FROM orders o
    WHERE o.OrderDate BETWEEN quarter_start AND quarter_end;

    -- Total Orders
    SELECT COUNT(o.OrderID) AS TotalOrders
    FROM orders o
    WHERE o.OrderDate BETWEEN quarter_start AND quarter_end;

    -- Best Selling Product
    SELECT p.ProductName AS BestSellingProduct, SUM(op.Quantity) AS TotalQuantitySold
    FROM order_product op
    JOIN orders o ON op.OrderID = o.OrderID
    JOIN product p ON op.ProductID = p.ProductID
    WHERE o.OrderDate BETWEEN quarter_start AND quarter_end
    GROUP BY op.ProductID
    ORDER BY TotalQuantitySold DESC
    LIMIT 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ResetAllocatedCapacity` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ResetAllocatedCapacity`()
BEGIN
    -- Safely update only matching rows in citytrainallocation
    UPDATE citytrainallocation cta
    JOIN orderassignment oa
        ON cta.StoreID = oa.StoreID
        AND cta.TrainScheduleID = oa.TrainScheduleID
    SET cta.AllocatedCapacity = COALESCE(oa.AllocatedCapacity, 0)
    WHERE cta.AllocatedCapacity != COALESCE(oa.AllocatedCapacity, 0);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ResetDriverFields` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ResetDriverFields`(IN p_DriverID INT)
BEGIN
    UPDATE driver
    SET TimeDifference = TIME(0),
        update_count = 0,
        start_time = NULL,
        END_TIME = NULL
    WHERE DriverID = p_DriverID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateAndFetchRescheduledOrders` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateAndFetchRescheduledOrders`(IN p_OrderID int)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        -- Rollback if any error occurs
        ROLLBACK;
    END;

    -- Start transaction
    START TRANSACTION;

    -- Update the order status
    UPDATE orders
    SET CurrentStatus = 'Rescheduled'
    WHERE OrderID = p_OrderID;

    -- Fetch rescheduled orders
    SELECT Orders.OrderID,
           Orders.CustomerID,
           DATE(Orders.OrderDate) AS OrderDate,
           Orders.City
    FROM orders
    WHERE Orders.CurrentStatus = 'Rescheduled'
    ORDER BY OrderDate;

    -- Commit the transaction
    COMMIT;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateDriverFields` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateDriverFields`(IN p_DriverID INT)
BEGIN
    UPDATE driver
    SET TimeDifference = SEC_TO_TIME(TIME_TO_SEC(TimeDifference) + TIMEDIFF(END_TIME, start_time)),
        update_count = update_count + 1,
        start_time = NULL,
        END_TIME = NULL
    WHERE start_time IS NOT NULL
      AND END_TIME IS NOT NULL
      AND DriverID = p_DriverID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateEndTime` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateEndTime`(IN p_driverID INT)
BEGIN
    UPDATE Driver
    SET END_TIME = NOW()
    WHERE DriverID = p_driverID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateTimeDifference` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateTimeDifference`(IN p_DriverID INT)
BEGIN
    UPDATE driver
    SET TimeDifference = SEC_TO_TIME(TIME_TO_SEC(TimeDifference) + TIMESTAMPDIFF(SECOND, start_time, END_TIME))
    WHERE start_time IS NOT NULL
      AND END_TIME IS NOT NULL
      AND DriverID = p_DriverID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `delivereddata`
--

/*!50001 DROP VIEW IF EXISTS `delivereddata`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `delivereddata` AS select `c`.`CustomerName` AS `CustomerName`,`c`.`PhoneNumber` AS `PhoneNumber`,`o`.`OrderID` AS `OrderID`,`o`.`DeliveryAddress` AS `DeliveryAddress`,`o`.`DeliveryDate` AS `DeliveryDate`,`o`.`City` AS `City`,`r`.`RouteDescription` AS `RouteDescription`,`t`.`TruckNumber` AS `TruckNumber`,`o`.`CurrentStatus` AS `CurrentStatus`,`d`.`DriverID` AS `DriverID` from (((((((`truckschedule` `ts` join `order_schedule` `os` on((`ts`.`ScheduleID` = `os`.`ScheduleID`))) join `orders` `o` on((`os`.`OrderID` = `o`.`OrderID`))) join `customer` `c` on((`o`.`CustomerID` = `c`.`CustomerID`))) join `route` `r` on((`o`.`RouteID` = `r`.`RouteID`))) join `truck` `t` on((`ts`.`TruckID` = `t`.`TruckID`))) join `driver` `d` on((`d`.`DriverID` = `ts`.`DriverID`))) join `store` `s` on((`s`.`StoreID` = `d`.`StoreID`))) where ((`o`.`CurrentStatus` = 'Delivered') and (`s`.`CityName` = `o`.`City`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `finalorderdetails`
--

/*!50001 DROP VIEW IF EXISTS `finalorderdetails`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `finalorderdetails` AS select `c`.`CustomerName` AS `CustomerName`,`c`.`PhoneNumber` AS `PhoneNumber`,`o`.`OrderID` AS `OrderID`,`o`.`DeliveryAddress` AS `DeliveryAddress`,`o`.`DeliveryDate` AS `DeliveryDate`,`o`.`City` AS `City`,`r`.`RouteDescription` AS `RouteDescription`,`t`.`TruckNumber` AS `TruckNumber`,`o`.`CurrentStatus` AS `CurrentStatus`,`d`.`DriverID` AS `DriverID` from (((((((`truckschedule` `ts` join `order_schedule` `os` on((`ts`.`ScheduleID` = `os`.`ScheduleID`))) join `orders` `o` on((`os`.`OrderID` = `o`.`OrderID`))) join `customer` `c` on((`o`.`CustomerID` = `c`.`CustomerID`))) join `route` `r` on((`o`.`RouteID` = `r`.`RouteID`))) join `truck` `t` on((`ts`.`TruckID` = `t`.`TruckID`))) join `driver` `d` on((`d`.`DriverID` = `ts`.`DriverID`))) join `store` `s` on((`s`.`StoreID` = `d`.`StoreID`))) where ((`o`.`CurrentStatus` = 'Out for Final Delivery') and (`s`.`CityName` = `o`.`City`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `orderdetails`
--

/*!50001 DROP VIEW IF EXISTS `orderdetails`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `orderdetails` AS select `orders`.`OrderID` AS `OrderID`,`orders`.`CustomerID` AS `CustomerID`,cast(`orders`.`OrderDate` as date) AS `OrderDate`,`orders`.`City` AS `City`,`product`.`TrainCapacityConsumption` AS `TrainCapacityConsumption` from ((`orders` left join `order_product` on((`orders`.`OrderID` = `order_product`.`OrderID`))) left join `product` on((`order_product`.`ProductID` = `product`.`ProductID`))) where (`orders`.`CurrentStatus` = 'Pending') order by cast(`orders`.`OrderDate` as date) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `rescheduledorderdetails`
--

/*!50001 DROP VIEW IF EXISTS `rescheduledorderdetails`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `rescheduledorderdetails` AS select `orders`.`OrderID` AS `OrderID`,`orders`.`CustomerID` AS `CustomerID`,cast(`orders`.`OrderDate` as date) AS `OrderDate`,`orders`.`City` AS `City` from `orders` where (`orders`.`CurrentStatus` = 'Rescheduled') order by cast(`orders`.`OrderDate` as date) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `resettraindetails`
--

/*!50001 DROP VIEW IF EXISTS `resettraindetails`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `resettraindetails` AS select `store`.`CityName` AS `CityName`,`orderassignment`.`AllocatedCapacity` AS `AllocatedCapacity`,`trainschedule`.`Capacity` AS `Capacity`,`trainschedule`.`Description` AS `Description`,`trainschedule`.`TrainScheduleID` AS `TrainScheduleID` from ((`store` left join `orderassignment` on((`store`.`StoreID` = `orderassignment`.`StoreID`))) left join `trainschedule` on((`orderassignment`.`TrainScheduleID` = `trainschedule`.`TrainScheduleID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `store_details`
--

/*!50001 DROP VIEW IF EXISTS `store_details`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `store_details` AS select `store`.`Address` AS `Address`,`store`.`ContactNumber` AS `ContactNumber`,`store`.`RailwayStationContact` AS `RailwayStationContact`,`store`.`CityName` AS `CityName`,`employee`.`Name` AS `Name` from ((`store` left join `storemanager` on((`store`.`StoreID` = `storemanager`.`StoreID`))) left join `employee` on((`storemanager`.`EmployeeID` = `employee`.`EmployeeID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `traindetails`
--

/*!50001 DROP VIEW IF EXISTS `traindetails`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `traindetails` AS select `store`.`CityName` AS `CityName`,`citytrainallocation`.`AllocatedCapacity` AS `AllocatedCapacity`,`trainschedule`.`TrainDate` AS `TrainDate`,`trainschedule`.`Capacity` AS `Capacity`,`trainschedule`.`Description` AS `Description`,`trainschedule`.`TrainScheduleID` AS `TrainScheduleID` from ((`store` left join `citytrainallocation` on((`store`.`StoreID` = `citytrainallocation`.`StoreID`))) left join `trainschedule` on((`citytrainallocation`.`TrainScheduleID` = `trainschedule`.`TrainScheduleID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-30 22:35:36
