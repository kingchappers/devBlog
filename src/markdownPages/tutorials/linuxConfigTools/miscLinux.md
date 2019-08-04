---
path: "/tutorials/miscLinux"
date: "2019-07-23"
title: "Miscellaneous Linux Tips"
---
This page is for tips and tricks that don't really fit anywhere else.
<br/><br/>
##Installing from .deb
To install a package from a *.deb* file enter the following command:
```bash
dpkg -i <file_name>.deb
```
<br/><br/>
##Sudo
By default the sudo command will run commands following as the root user. You are able to change which user you run commands as using the following command:
```bash
sudo -U pseudo cat secret.txt
```
* *-U pseudo* - This is how you select the user who's permissions you want to use. In this case we are using the pseudo user's permissions.
* *cat secret.txt* - This is the command you are running.

<br/><br/>
##su
su is a command allowing you to switch user.

```bash
su - pseudo
```
The above will change you to the pseudo user.