---
path: "/tutorials/securitypentesttools/hping3"
date: "2020-03-29"
title: "hping3"
---

hping3 is a tool for sending arbitrary packets to network hosts. It's similar to the ping command, but works specifically for TCP/IP packets. Given that this tool uses TCP/IP rather than ICMP packets it can be used for much more than ping. 

```bash
hping3 -c 3 <IPAddress>
```

* This will send 3 TCP/IP packets to the IP address you target. You'll get a response similar to the *ping* command showing the number of packets sent and the replies received.

```bash
hping3 --scan 1-500 -S <myIPAddress>
```
* *--scan* - Specifies the range of ports to scan.
* *-S* - Performs a SYN scan.
* This scan will show the open ports on the target along with some information about the open ports.

```bash
hping3 <myIPAddress> --udp --rand-source --data 1000
```
* This will send UDP packets to the target from a 'random' source. This could be used to flood a network with packets. 
* *--data 1000* - This specifies the size of the packet you'd like to send.

```bash
hping3 -S <myIPAddress> -p 80 -c 10
```
* This sends 10 SYN packets to port 80.

```bash
hping3 <myIPAddress> --flood
```
* This will flood the target with packets as fast as possible. This mode does not show replies by default.