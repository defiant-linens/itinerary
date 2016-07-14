CREATE DATABASE wonderwander;

USE wonderwander;

CREATE TABLE users (
  id int NOT NULL auto_increment,
  name varchar (25),
  PRIMARY KEY (id)
);

CREATE TABLE itineraries (
  id int NOT NULL auto_increment,
  location varchar (100),
  userID int NOT NULL,
  numDays int NOT NULL,
  startDate date,
  endDate date,
  overview longtext,
  FOREIGN KEY (userID) REFERENCES users(id),
  PRIMARY KEY (id)
);

CREATE TABLE events (
  id int NOT NULL auto_increment,
  day int NOT NULL,
  location varchar (100),
  itineraryID int NOT NULL,
  FOREIGN KEY (itineraryID) REFERENCES itineraries(id),
  PRIMARY KEY (id)
);