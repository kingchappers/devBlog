---
path: "/tutorials/mySql"
date: "2019-08-11"
title: "MySQL"
---

This will give you an overview of MySQL and how to use it.

To Login to a MySQL server:

```
mysql -u root -p
```
* *-u* - The user you want to login as.
* *-p* - your password. If no password is provided after the *-p* flag MySQL will prompt you for one.
    * You can use *p=\<password>* if you want to enter you password in plaintext. This is dangerous.

Once you're logged in you can use some of the following commands to query your database:
```sql
show databases;
```
This shows all databases.
```sql
use <mydatabase>
```
Switches the active database to the one you specify.
```sql
show tables
```
Shows the tables in your database.

```sql
SELECT User FROM <mydatabase>.user
```
This displays all the users in your database. If you are already using a database you don't need to specify the database.
```sql
DESCRIBE <tablename>
```
Lists all columns in a specific table.

```sql
CREATE user <myusername>@<myserver> identified by 'mypassword';
```
This will create a user with the specified username on your specified server. If the database is on you local machine you can use *localhost* as the server.
```sql
GRANT all privileges on <mydatabase>.* to <myuser>@<myserver> identified by 'mypassword';
```
This will grant all privileges on all tables in a database to the specified user.
```sql
flush privileges;
```
This clears/reloads MariaDB caches.