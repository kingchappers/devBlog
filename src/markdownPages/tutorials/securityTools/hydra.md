---
path: "/tutorials/securitypentesttools/hydra"
date: "2019-08-04"
title: "Hydra"
---
Hydra is a tool used for brute forcing passwords. Please do not use this tool for anything other than testing, or where you have explicit permission to do so.

#### Common Flags
Some common flags for Hydra are:
* *-s* - Specifies the port you would like to target.
* *-v* - Keeps you updated on the number of attempts the tool has tried.
* *-C* - uses colon separated username and passwords.

#### Command Example
```bash
hydra -l <username> -P /usr/share/wordlists/metasploit/password.lst ftp://<ipAddress>
```
* *-l \<username>* - The username you would like to use to login.
* *-P /usr/share/wordlists/metasploit/password.lst* - This is a password list. Kali (the distro I was using) contains a number of them by default.
* *ftp://\<ipAddress>* - This is the service and ip address you would like to run the attack on.