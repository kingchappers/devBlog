---
path: "/tutorials/securitypentesttools/nikto"
date: "2020-04-06"
title: "Nikto"
---

Nikto is a web server vulnerability scanner. This will scan the target and discover any 'known' vulnerabilities on the target system. This is quite useful when you have a specific target in mind and only want to perform the scan on the web server. Nikto is a command line tool, in order to access the available options you can either visit the man page or use ```nikto -H```.

There are a great many scan types you can run on a server so I'll only cover one of them. If you want to perform a scan that isn't covered here you'll have to do some research, or look at the help/man pages.

```bash
nikto -h <myWebServer.address> -Tuning x
```
* *-h* - This option specifies the host you would like to scan.
* *-Tuning x* - This specifies that you want to use *Tuning* in reverse mode. This basically means that you have to specify the tuning types you don't want to use; in the example we haven't specified any so it will use all of the tuning types in the scan.

If the scan returns any vulnerabilities they will be outputted with an OSVDB (Open Source Vulnerability Database) number. This is a vulnerability database that is no longer in use, however you can still find out what the vulnerabilities mean and how to remediate them. 

Although the database Nikto uses is no longer supported the information provided by Nikto is still very useful as it still reveals vulnerabilities. This, as with most vulnerability scanners, should be used in conjunction with other tests to fully determine how a server is vulnerable.