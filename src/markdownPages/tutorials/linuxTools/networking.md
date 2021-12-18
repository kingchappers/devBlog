---
path: "/tutorials/linuxTools/networking"
date: "2019-07-22"
title: "Networking Tools"
---

This will show you how to use some of the networking tools in Linux, such as ip and netctl.
<br/><br/>
## IP Command
**N.B. The *ipconfig* command provided by the *net-tools* package has been deprecated, and replaced by the *ip* command provided by the *iproute2* package**

The *ip* command is very powerful and can do many things. This tutorial will show a basic set of functions you can use it for.

1. To list all available interfaces:
```bash
ip a
```

2. To change the IP address of a network device (This change will not persist after reboot. Use netctl for persistence):
```bash
ip addr add <ip_address> dev <device_id>
```
3. Create a static route:
```bash
ip route add <destination_ip>/<cidr_notation> via <ip_to_go_through>
```

<br/><br/>
## Netctl
As above this will only show a basic subset of what is possible with netctl.
1. List available profiles:
```bash
netctl list
```
2. Stop all profiles:
```bash
netctl stop-all
```
3. Start a specific profile:
```bash
netctl start <profile_name>
```
4. Stop a specific profile:
```bash
netctl stop <profile_name>
```
5. Show status of a profile:
```bash
netctl status <profile_name>
```
6. Enable a profile. This will start the profile when the system starts.
```bash
netctl enable <profile_name>
```
7. Disable a profile. This will stop the profile starting when the system starts.
```bash
netctl disable <profile_name>
```

If you need an IP rule to persist after reboots you will need to add or edit a profile in */etc/netctl*. 

Examples of profiles that will work for different scenarios are available in the */etc/netctl/examples/* directory. For more information refer to the manual entry for netctl.profile, which can be accessed via the following command:
```bash
man 5 netctl.profile
```