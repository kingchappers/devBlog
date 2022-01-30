---
path: "/tutorials/linuxTools/systemMonitoring"
date: "2022-01-30"
title: "System Monitoring"
---

### nmon
nmon is a tool that can show you performance information for the following things: 
* CPU
* Memory
* Network
* Disk I/O
* Kernel stats
* Top processes
* Resource information
* Network File System (NFS)
* File system usage

When you use nmon there's a handy help menu you can use to show you how to display the information. Below are some of the keys and what they show you.
* **h** - Help
* **c** - CPU
* **m** - Memory
* **n** - Network
* **d** - Disk I/O
* **k** - Kernel stats
* **t** - Top processes
* **r** - Resource information
* **N** - Network File System (NFS)
* **j** - File system usage 

### iostat
iostat can show input/output (I/O) information for your system. To use iostat you need to install the *sysstat* package. The *iostat* command, without any arguments, will show you CPU usage and I/O stats for your partitions.

```bash
iostat -m
```
This displays the I/O stats in MB rather than the default KB.

```bash
iostat -p <myDrive>
```
This will show you the stats for your specific drive. 

```bash
isotat -x -p <myDrive>
```
This will show you extended attributes for your drive. You can leave out the *-p \<myDrive>* part to show extended attributes for all drives. 

```bash
isotat -x -p <myDrive> 3
```
The added *3* will keep iostat on screen and refreshing every 3 seconds. 