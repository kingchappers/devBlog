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
This will give you information about the process you specify based on the PID. It'll give you a bit more info thatn is normally given. 

```bash
ps -C bash
```
This will show the child processes of the specified parent.

```bash
ps -o pid,comm
```
*-o* allows you to specify the columns output by your command. 