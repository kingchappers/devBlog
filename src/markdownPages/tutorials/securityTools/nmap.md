---
path: "/tutorials/securitypentesttools/nmap"
date: "2019-08-05"
title: "NMap"
---

NMap is a very powerful tool which allows you to scan for hosts on a network and view the open ports and services running on those hosts. This tutorial will give you an understanding of how to use the tool and also go on to using the scripting engine.

####Basic Scan
```bash
nmap <ipaddress>
```
```bash
nmap <website.com>
```
Both of the above will scan the targets whether they are an ip or a website address.
<br/><br/>
####TCP SYN Scan
```bash
nmap -sS <ipaddress>
```
This will change the scan to a TCP SYN scan, which will send SYN packets rather than the default ping packets. This can be useful when the host is blocking ping packets.
<br/><br/>
####Port Scans
```bash
nmap <ipaddress> --top-ports <numberOfPorts>
```
This will scan a list of the "top" ports normally left open on internet facing hosts. The number following the option is the actual number of ports.

```bash
nmap -p- <ipaddress>
```
Scans all ports.

```bash
nmap -sU <ipaddress>
```
```bash
nmap -sT <ipaddress>
```
The above two scans will scan all UDP and TCP ports respectively.
<br/><br/>
####Banner Grab Scan
```bash
nmap -sT -v -p- --script=banner <ipaddress>
```
This one will scan all ports and identifies anything printed by a service, this is quite a common thing for services to do. This scan can help you understand more about a network during the enumeration phase.
<br/><br/>
####Extra NMap Options
Some extra arguments you can use for nmap:
* *oG* - This will give you an output you can use *grep* on.
* *-p* - This allows you to scan specific ports.
* *--osscan-limit* - This limits an OS scan to specific targets.
* *osscan-guess* - This is an aggressive form of OS scan.
* *-O* This is a regular OS scan and is required prior to added the two scans above.

<br/><br/>
##NMap Scripting Engine
NMap is able to automate certain tasks by using it's in built scripting engine.

*-sC* - Will run the default scripts.
```bash
nmap -sV -sC <ipaddress>
```
This will run the default scripts. The *-sV* option probes open ports to determine service and version information. While *-sV* in not strictly required it tends to help scripts run a little better.

```bash
nmap -sV --script=<myscript.nse> <ipaddress>
```
This will use your script during the scan. **All scripts must be in the *.nse* format.**

```bash
nmap --script-help <myScript.nse>
```
This will offer help or more information, where available, about the script.

```bash
nmap --script=http-wordpress-brute.nse --script-args 'passdb=passwords.txt' <ipaddress>
```
This shows an argument being passed to a script. These arguments are normally pre-defined in the script itself.

* *--script http-*\* - This will run all scripts that start with http-.
* *--script-args-file <arguments.txt>* - This will provide arguments from a text file.

The [nmap](https://nmap.org/) website provides a lot more information on scripts.