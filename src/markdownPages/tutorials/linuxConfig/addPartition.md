---
path: "/tutorials/linuxConfiguration/addPartitionToGrub"
date: "2019-07-21"
title: "Add Partition"
---

This will show you how to add a partition on a separate drive. The tutorial looks at a Windows drive but it can be changed for any OS.
<br/><br/>
####Find Windows Drive
First step is finding out which drive has the partition you want on it.

```bash{numerLines: true}
fdisk -l
```

This may give you a long output. Essentially what you'll see is a list of disks in bold, they'll all take the form of **sda**, **sdb**, and so on. Each partition will be given a number, for example if you have 2 partitions on the sdb drive you will see sdb1 and sdb2 listed underneath the drive; you'll also see other information such as where the partition starts and ends, how many sectors they take up, and the type of the partition.

You'll have to work out which partition you need to mount. For a Windows system it will be the one of type EFI System; for me this was **sdb2**.
<br/><br/>
####Mounting the Partition
Now mount the correct partition using the following commands:

```bash{numerLines: true}
mkdir /mnt/windows
mount /dev/sdb2 /mnt/windows
```
This has created a folder called windows in the */mnt* directory and mounted the *sdb2* partition to it.
<br/><br/>
####Adding the Partition to GRUB
You can now add the partition to GRUB using the following commands:

```bash
os-prober
grub-mkconfig -o /boot/grub/brb.cfg
```
These commands probe the systems disks for other operating systems and adds them to the bootloader. Then you create a new GRUB config file and overwrites the existing one.