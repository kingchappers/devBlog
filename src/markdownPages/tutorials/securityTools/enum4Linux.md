---
path: "/tutorials/securitypentesttools/enum4Linux"
date: "2020-04-11"
title: "Enum4Linux"
---

Enum4Linux is a tool used to enumerate data from Windows and Samba hosts. This is a Linux alternative to the enum.exe tool that you can use in Windows. To get the most out of the tool you will need to have credentials that can authenticate to the network, without these you will only retrieve a limited amount of information. The permissions of the account you're using will also determine, to an extent, the information you'll get.

To get a basic list of the commands available you can do:

```bash
enum4linux -h
```

The following commands are fairly simple but also useful. You will likely need to provide credentials with these for them to work.

```bash
enum4linux -u <myUser> -p <myPassword> -U 192.168.1.30
```
* *-u* - This is where you provide a username that can authenticate to the target.
* *-p* - This is where you provide a password for the user.
* *-U* - This specifies the type of enumeration you'd like to do, in this case we're getting a userlist.
* The IP address is the address of the target you would like to scan.

```bash
enum4linux -u <myUser> -p <myPassword> -M 192.168.1.30
```
* *-M* - This will retrieve a list of machines available to the host via Active Directory.

```bash
enum4linux -u <myUser> -p <myPassword> -P 192.168.1.30
```
* *-P* - This option is really useful as it will retrieve the password policy that is currently enforced.

```bash
enum4linux -u <myUser> -p <myPassword> -G 192.168.1.30
```
* *-G* - This one will get all the group policy information it can. It's provides a good amount of information on the Active Directory groups and its members on the target.

```bash
enum4linux -u <myUser> -p <myPassword> -o 192.168.1.30
```
* *-o* - This gets information about the SMB client that is currently in use by the target.