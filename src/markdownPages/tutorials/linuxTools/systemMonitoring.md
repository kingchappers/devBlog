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

### sar
Like the other commands, sar can give you system information.
 ```bash
 sar -u 1
 ```
 This shows the current CPU usage and refreshes every second. If you add a *4* to the end it will show you the update 4 times and then exit.

```bash
 sar -u ALL 1 3 
 ```
 This one will show the same as above but with extra fields. 

```bash
 sar -u -P ALL 1 3 
```
You'll see the stats for individual CPUs now. You can replace *ALL* with a specific CPU number such as *2*.

```bash
sar -r 1 3
```
This will show you memory usage.

```bash
sar -S 1 3
```
This will show you swap space usage.

```bash
sar -b 1 3
```
You'll see the I/O activities with this one. The columns are split into:

* **tps** – Transactions per second (this includes both read and write).
* **rtps** – Read transactions per second.
* **wtps** – Write transactions per second.
* **bread/s** – Bytes read per second.
* **bwrtn/s** – Bytes written per second.
* **bdscd/s** - Data discarded in blocks per second. 

```bash
sar -n <KEYWORD>
```
This one will show you network statistics. The keywords are: 

* **DEV** – Displays network devices vital statistics for eth0, eth1, etc.,
* **EDEV** – Display network device failure statistics
* **NFS** – Displays NFS client activities
* **NFSD** – Displays NFS server activities
* **SOCK** – Displays sockets in use for IPv4
* **IP** – Displays IPv4 network traffic
* **EIP** – Displays IPv4 network errors
* **ICMP** – Displays ICMPv4 network traffic
* **EICMP** – Displays ICMPv4 network errors
* **TCP** – Displays TCPv4 network traffic
* **ETCP** – Displays TCPv4 network errors
* **UDP** – Displays UDPv4 network traffic
* **SOCK6**, **IP6**, **EIP6**, **ICMP6**, **UDP6** are for IPv6
* **ALL** – This displays all of the above information. The output will be long.

