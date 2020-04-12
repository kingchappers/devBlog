---
path: "/tutorials/securitypentesttools/responder"
date: "2020-04-12"
title: "Responder"
---

Responder is a tool that listens to NBT-NS (NetBIOS Name Service) and LLMNR (Link-Local Multicast Name Resolution) requests and responds to them as though it were the server. Once the target responds and accepts the connection you can gain their credentials.

Windows primarily uses DNS to resolve the name of a host, however, this occasionally fails. As a backup a Windows system will broadcast the request via UDP, which is where we come in. We can pretend to be a legitimate server and respond to the request, subsequently grabbing the user credentials of the victim. This vulnerability is fairly easy to resolve by disabling this function, but this may not have been done for a number of reasons.

Using responder is relatively easy. In the terminal run the following command:

```bash
responder -I <myInterface>
```
* *-I* - This is to specify the network interface you'd like to listen on.

Responder will now start to listen for events. When a user makes a request, such as trying to go the a file server like \\\myserver, responder will begin the process of poisoning the connection. The user will likely be presented with a 'standard' Windows logon Screen and unwittingly enter their username and password.

Now the you have the credentials you can find them at */usr/share/responder/logs/*, provided you haven't changed the default directory for saving the logs. The log file will likely contain the IP address of the connection you just spoofed.

The file we will contain the hashes of the session we poisoned, including the password hash. If the user is using a simple password you can crack it using john the ripper, for example if the user is using the password 'password' then the following command will work to crack the password.

```bash
john <responderSessionLog>
```

The output of this command will give you the password and the username of the session. You can then use these to further compromise the user's account.