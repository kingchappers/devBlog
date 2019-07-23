---
path: "/tutorials/secureConnect"
date: "2019-07-23"
title: "Secure Connections Hosts via SSH"
---
This will show you the basics of securely connecting to hosts via SSH.
<br/><br/>
##SSH
This should give you some of the basic commands required for using SSH to remote into another device. I'll also show you how to create and use SSH keys for authentication to those devices.

####Connect to Client
To connect to a client via ssh:
```bash
ssh <username>@<ip_or_domain_name>
```
The username must be a user on the device you are connecting to.

If the device is not using the standard port of 22:
```bash
ssh -p <port_number> <username>@<ip_or_domain_name>
<br/><br/>
```

####Creating and Using SSH Keys
Using SSH keys is generally better than a password for authentication. This is because a key is longer and more complex than a memorable password. You are also able to set passphrases on keys to add an extra layer of security if the key is stolen somehow.

1. Create an SSH key on your localhost:
```bash
ssh-keygen
```
######OR
```bash
ssh-keygen -b 4096
```
The second command generates a longer 4096 bit key. The command will have generated two files *id_rsa*, the private key, and *id_rsa.pub*, the public key. By default these will be stored in the current directory unless you specify otherwise. Copy the public key to the *.ssh* directory.
```bash
cp id_rsa.pub ~/.ssh/
```
<br/><br/>
2. Next step is to create and take ownership of a .ssh folder on the device you want to connect to:
```bash
mkdir ~/.ssh
```
```bash
chmod 700 ~/.ssh
```
```bash
touch ~/.ssh/authorized_keys
```
```bash
chmod 600 ~/.ssh/authorized_keys
```
<br/><br/>
3. Now copy the public key from the localhost to the device you want to connect to:
```bash
scp .ssh/id_rsa.pub <username>@<ip_or_domain_name>:~/id.rsa.pub
```
For more information on SCP see below, or use the manual page.
<br/><br/>
4. Now put that key into the *authorized_keys* folder you created earlier (on the host you want to connect to):
```bash
cat id_rsa.pub >> ~/.ssh/authorized_keys
```
Then delete the file *id_rsa.pub* file from the host (This is a cleanup task, and is not required):
```bash
rm id_rsa.pub
```

You should now be able to connect from the localhost to the host via SSH without entering a password. 

**N.B. You may be prompted to enter a passphrase on connection, if you have not set one simply hit the *Enter* key**


##SCP
There are ways you can use SCP.

####Send to Host
To send a file to the host machine:
```bash
scp ./foo.txt <username>@<ip_or_domain_name>:/home/<username>/
```
1. *./foo.txt* - This is the file you are copying to the host.
2. *\<username>\@\<ip_or_domain_name>* - This is the user and location of the host you are copying to.
3. *:/home/\<username>/* - This is the directory you are copying the file to.

####Copy from Host
To copy a file from a host device:
```bash
scp <username>@<ip_or_domain_name>:/home/<username>/foo.txt ./bar.txt
```
1. *\<username>\@\<ip_or_domain_name>* - This is the user and location of the host you are copying from.
2. *:/home/\<username>/foo.txt* - This is the directory you are copying the file from.
3. *./bar.txt* - This is the location you are copying the file to on your device.