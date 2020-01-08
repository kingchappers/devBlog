---
path: "/tutorials/miscellany/ping"
date: "2019-12-06"
title: "Ping"
---

Ping is a fairly simple tool you can use to get basic information about a network. It's available in Linux, MacOS, and Windows.

```bash
ping www.example.com
ping 127.0.0.1
```
The two commands above will simply send ICMP ping packets to the specified addresses. As demonstrated above this can either be a domain name or an IP address. If you ping a domain name you will receive replies from the IP address related to that domain. 

```bash
ping www.example.com -f -l 1000
```
This sets the size of the packets you send via the ping command. This example sets the size of the packet to 1000 bytes. This is useful if you want to find the maximum packet size allowed on your network. 

The *-f* flag specifies that you are using a flood ping, this will print a "." when an ECHO_REQUEST is sent and a backspace for every ECHO_REPLY received. You can also specify an interval for the transmission, if no interval is set the default is zero and packets are sent as fast as the come back, or 100 times per second, whichever value is more.

```bash
ping www.example.com -i 30
```
This sets the Time To Live (TTL) of the packet being sent. This means that if the target is more than 30 network hops away you will get a response from the device where the packet 'dies'. This can be used to emulate the tracert command, if you can't use that for some reason.