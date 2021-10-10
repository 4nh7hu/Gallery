CREATE TABLE ARTWORK (
artworkID int AUTO_INCREMENT,
Title varchar(200),
Process varchar(200),
Day_Made varchar(200),
Artist varchar(200),
Genre varchar(200),
PRIMARY KEY (artworkID)
);

INSERT INTO ARTWORK VALUES (NULL,'Couch','2 hrs','Jan 01, 2020','Aunonymous','Cartoon');
INSERT INTO ARTWORK VALUES (NULL,'Sofa','2 hrs','Feb 02, 2020','Aunonymous','Sketch');
INSERT INTO ARTWORK VALUES (NULL,'Chair','1 hr 30 min','Mar 03, 2020','Thu Nguyen','Sketch');
INSERT INTO ARTWORK VALUES (NULL,'Couch','2 hrs','Jan 01, 2020','Aunonymous','Cartoon');
INSERT INTO ARTWORK VALUES (NULL,'Sofa','2 hrs','Feb 02, 2020','Aunonymous','Sketch');
INSERT INTO ARTWORK VALUES (NULL,'Chair','1 hr 30 min','Mar 03, 2020','Thu Nguyen','Sketch');



CREATE TABLE VISITOR (
visitorID int AUTO_INCREMENT,
Name varchar(300),
DOB varchar(300),
Experience varchar(300)
PRIMARY KEY (visitorID)
);

INSERT INTO VISITOR VALUES (NULL);



CREATE TABLE ARTIST (
artistID int AUTO_INCREMENT,
First_Name varchar(300),
Last_Name varchar(300),
DOB varchar(300),
PRIMARY KEY (artistID)
);

INSERT INTO ARTIST VALUES (NULL,'Thu','Nguyen','Jun 30, 2005');
INSERT INTO ARTIST VALUES (NULL,'Anonymous',NULL,'Jan 01, 2000');



CREATE TABLE HISTORY (
historyID int AUTO_INCREMENT,
Title varchar(300),
Process varchar(300)
Artist varchar(300),
Genre varchar(300),
PRIMARY KEY (historyID)
);

INSERT INTO HISTORY VALUES (NULL,'A', '1hr', '30/02/2023','xyz', 'Portrait');
INSERT INTO HISTORY VALUES (NULL,'A', '1hr', '30/02/2023','xyz', 'Portrait');


CREATE TABLE USERS (
userID int AUTO_INCREMENT,
Username varchar(300),
Password varchar(300),
PRIMARY KEY (userID)
);

INSERT INTO USERS VALUES (NULL,'soph','123');
INSERT INTO USERS VALUES (NULL,'sophie','1234');
INSERT INTO USERS VALUES (NULL,'','');
