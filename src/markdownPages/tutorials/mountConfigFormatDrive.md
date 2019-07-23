---
path: "/tutorials/mountConfigFormatDrive"
date: "2019-07-22"
title: "Mounting, Configuring and Formatting Drives"
---

This will show you how to mount configure and format drives in Linux. This will mostly be a command based tutorial with descriptions on which command do what.
<br/><br/>
##Format a Drive
1. To list all available drives:
```bash
fdisk -l
```
2. To open the fdisk console on a drive (The console is used for formatting and partitioning drives):
```bash
fdisk /dev/<drive_name>
```
    * Controls once you've opened the console (There are a number of other commands available):
        * d - Deletes a partition
        * n - Creates a new partition
        * w - Writes changes to the drive and exits the console

Once formatted and partitioned you will need to add the filesystem:
```bash
mkfs.ext4 /dev/<partition_name> -L <partition_label>
```
* *mkfs.ext4* - This creates a ext4 filesystem. There are other options, see [here](https://www.systutorials.com/docs/linux/man/8-mkfs/).
* */dev/<partion_name>* - This is the partition you are creating the filesystem on.
* *-L <partition_label> - This is where you can give it a label that you will recognise when you look at the drive again.
<br/><br/>
##Own a Drive
Now that you have created a drive you may want to change the ownership to your user; this will be dependant on the intended use for the drive of course. To do this use either of the below commands:

```bash
chown sam:<usergroup> /run/media/<current_user>/<partition_label>
```
#####OR
```bash
chown sam: /run/media/<current_user>/<partition_label>
```
**N.B. The second is only appropriate where you want the default user group of the user to own the drive**
