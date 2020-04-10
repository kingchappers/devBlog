---
path: "/tutorials/securitypentesttools/superScan"
date: "2020-04-10"
title: "SuperScan"
---

SuperScan is a network scanning and enumeration tool. It's available on Windows only, that is unless it works on Linux using Wine but I haven't tested it. It's fairly simple to use and understand what it does so I won't go into the details. One of the more specific features of this tool is the Windows Enumeration section; this comes with various enumeration types which it can perform, the below list gives an overview of these features.
* NetBIOS Name Table.
* NULL Session
* MAC Addresses
* Workstation Type
* Users
* Groups
* RPC Endpoint Dump
* Account Policies
* Shares
* Domains
* Remote Time of Day
* Logon Sessions
* Drives
* Trusted Domains
* Services
* Registry

Some of these features require credentials to gain full information about the target. There is an option within the tool to do this. 

I'll be honest this tool is a little bit niche, but it is useful if you're after quick information about a Windows host but don't know how to use some of the other, more comprehensive, scanning tools. I will say that there are other scanning tools that can be used to get the information that SuperScan does as well as much more. The tool's GUI does make it fairly user friendly though which is quite useful if you're new to this type of tool.