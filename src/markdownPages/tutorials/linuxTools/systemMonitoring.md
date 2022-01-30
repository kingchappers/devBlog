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

### vmstat
vmstat will show you information about virtual memory.

```bash
vmstat
```
This will show you basic information. The output is divided into sections:
* *procs* – Process Statistics
  * *r* – Active process count.
  * *b* – Sleeping process count.
* *memory* – Memory statistics
  * *swpd* – Total virtual memory. The swap space is initially unoccupied. However, the kernel starts using swap space as the system’s physical memory reaches its limit.
  * *free* – Total free memory.
  * *buff* – Total memory temporarily used as a data buffer.
  * *cache* – Total cache memory.
* *swap* – Swap space Statistics
  * *si* – The rate of swapping-in memory from disk.
  * *so* – The rate of swapping-out memory to disk.
* *io* – Input/Output Statistics
  * *bi* – Blocks received from a block device per second.
  * *bo* – Blocks sent to a block device per second.
* *system* – Scheduling statistics
  * *in* – The number of system interrupts.
  * *cs* – The number of context switches per second.
* *cpu* – CPU Statistics
  * *us* – The percentage of CPU time spent on non-kernel processes.
  * *sy* – The percentage of CPU time spent on kernel processes.
  * *id* – The percentage of idle CPU.
  * *wa* – The percentage of CPU time spent waiting for Input/Output.
  * *st* – The percentage of CPU time stolen by a virtual machine.

The options available for vmstat are: 
* *-a* - Displays active and inactive memory.
* *-f* - Displays the number of forks since boot.
* *-m* - Displays slab statistics.
* *-n* - Displays the header only once rather than periodically.
* *-s* - Displays a table of various event counters and memory statistics.
* *-d* - Displays disk statistics.There are three sections for the output of this one:
  * *Reads*:
    * *total*: The total number of disk reads.
    * *merged*: The total number of grouped reads.
    * *sectors*: The total number of sectors that have been read in.
    * *ms*: The total number of time it took to read data from the disk, in milliseconds.
  * *Writes*:
    * *total*: The total number of disk writes.
    * *merged*: The total number of grouped writes.
    * *sectors*: The total number of sectors written to.
    * *ms*: The total number of time it took to write data to the disk, in milliseconds.
  * *IO*:
    * *cur*: Total current disk reads or writes.
    * *sec*: Time spent for any in-progress reads or writes, in seconds.
* *-D* - Detailed disk activity report.
* *-p* - Detailed partition statistics.
* *-t* - Adds a timestamp to the report.
* *-S* \<unit> - Switches output units. The units you can use are:
  * *k*: 1000 bytes.
  * *K*: 1024 bytes.
  * *m*: 1000000 bytes.
  * *M*: 1048576 bytes.
* *-V* - Displays version information.
