---
path: "/tutorials/linuxTools/processMonitoring"
date: "2021-12-19"
title: "Process Monitoring"
---

This page will go over some of the process monitoring tools you might want to use at some point. There are a lot of reasons you might want to get a better understanding of your processes, whether that's to understand what's running on your system or to understand what's eating up your resources. This page just gives a few ideas about how best to do that. 

### Ps
Ps is a handy command to see the currently running processes on a system. 

```bash
ps
```
The above will show you the processes currently running in your terminal session. You'll see information in columns:
* **PID** - The process ID.
* **TTY** - The current terminal type.
* **TIME** - Time the process has been running.
* **CMD** - The command that launched the process. 

```bash
ps -A
```
This will show all of the running processes. 

```bash
ps -a 
```
This will show the processes that aren't associated with the current terminal session. 

```bash
ps -ax
```
This will show all of the process, even the ones not associated with your current tty (that's what *-x* does).

```bash 
ps -af
```
This will show your running processes with more informational columns. 

```bash 
ps -u sam
```
This will only show processes running under the username *sam*.

```bash
ps -L 58
```
This shows the threads for a specific process by its PID.

```bash 
ps -fp 58
```
This will give you information about the process you specify based on the PID. It'll give you a bit more info that is normally given. 

```bash
ps -C bash
```
This will show the child processes of the specified parent.

```bash
ps -o pid,comm
```
*-o* allows you to specify the columns output by your command. 

### Top
Top shows the current running processes on your system and the resources they're currently using. 

```bash
top
```
The basic command without any other flags shows a summary of system usage and the current running processes. This will refresh every three seconds. To exit this mode simply press *q*. A quick breakdown of the display:

* The first line gives you the current time, how long your device has been running, the number of people logged in and the load average. The load average is split into three parts, the past one, five, and fifteen minutes load average. The load average is the number of processes using or waiting to use the CPU, so an idle computer will have a load average of 0 whereas a computer with one process in use will have an average of one. 

* Line two shows the number of tasks and their current states. 

* Line three shows CPU values. Below are the values and what they mean. 
  * **us** - The amount of time spent running for people in user space. 
  * **sy** - The amount of time spent running kernel space processes.
  * **ni** - The amount of time spent executing processes with a manually set nice value.
  * **id** - The amount of time the CPU has spent idle.
  * **wa** - The amount of time the CPU has spent waiting for I/O completion.
  * **hi** - The amount of time spent dealing with hardware interrupts.
  * **si** - The amount of time spent dealing with software interrupts.
  * **st** - The amount of time lost to run virtual machines. Also known as steal time.

* Line four shows memory usage. This is split into total memory, total free memory, total used memory, total memory buffered or cached. 

* The final line shows swap memory usage. This is split into total swap memory, free swap memory, used swap memory, and available memory. 

The next section is the list of running processes. The columns show different information: 
* **PID** - Process ID.
* **USER** - The user that owns the process.
* **PR** - Process priority.
* **NI** - The processes nice value.
* **VIRT** - The amount of virtual memory the process is using.
* **RES** - The amount of resident memory the process is using. Resident memory is the physical memory actually in use.
* **SHR** - The amount of shared memory the process is using.
* **S** - The status of the process. This can have different values:
  * **D** - Uninterruptible sleep.
  * **R** - Running.
  * **S** - Sleeping.
  * **T** - Traced/Stopped.
  * **Z** - Zombie.
* **%CPU** - The CPU time used by the process since the last update.
* **%MEM** - The share of physical memory used.
* **TIME+** - The total CPU time used by a task in hundredths of a second.
* **COMMAND** - The command name or the command line name and options. 

You can scroll this screen with the arrow keys. 

Uppercase *E* will cycle through the units used to show memory usage in the top section. Lowercase *e* will do the same for the process list. 

*1* will show the individual stats for each virtual CPU in the top section. *t* will change the CPU stats to a bar graph. You can combine this with *1* to show a bar graph for each CPU.

*m* will show the memory stats as a bar graph. 

Changing the sort order is easy. Use the following to sort by each item:
* *P* - The %CPU column.
* *M* - The %MEM column.
* *N* - The PID column.
* *T* - The TIME+ column.

*c* shows the full command line argument and not just the command name. 

*k* will kill a process. You'll need to type in the process ID first. You'll be able to specify a signal by name or number, the default is SIGTERM or kill.

### Htop
Htop is essentially an extended version of Top. It has a nice menu at the bottom where you can configure it yourself. Htop looks nicer than top and you don't have to memorise all of the keyboard shortcuts so it's a little easier to use if you're not sure what your doing. 

### Lsof
Lsof shows a list of open files and the processes that have them open. 

```bash
lsof
```
This will likely show quite a long list because a lot of files will be open by a variety of different processes. 

If you want a list of open files by the user:

```bash
lsof -u <myuser>
```

If you want a list of open files excluding a specific user:

```bash
lsof -u ^<myuser>
```

If you want a list of open files by the process:

```bash
lsof -u <myProcessName>
```

or

```bash
lsof -p <myProcessID>
```

You can list files open in a specific directory: 

```bash
lsof -D <myDirectory>
```

You can also show open network connections:

```bash
lsof -i
```