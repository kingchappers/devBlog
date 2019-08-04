---
path: "/tutorials/displaysvrAndDisplaymgr"
date: "2019-07-20"
title: "Display Server Installation and Display Manager Configuration"
---

Brief instructions on installing the display server and display driver on a fresh install of Arch.
<br/><br/>
####Display Server
For the installation of the display manager you simply need to install the following:
1. xorg-server
2. Graphics card drivers:
    * nvidia-utils - For NVIDIA cards
    * catalyst-utils - For AMD cards

####Display Manager
A display manager is a convenient way to start your X server. For this tutorial we'll be using lightdm as the manager, other options are available [here](https://wiki.archlinux.org/index.php/Display_manager). We'll also be using a greeter which is the logon screen that appears when you first turn on your PC options available for lightdm can be found [here](https://wiki.archlinux.org/index.php/LightDM); lightdm-webkit2-greeter is what we'll be using.

You'll want to install the following packages:
1. lightdm
2. lightdm-webkit2-greeter

Open lightdm.conf:

```bash
vim /etc/lightdm/lightdm.conf
```

Find the line starting with greeter-session in the .conf file and change it to:

```vim
greeter-session=lightdm-webkit2-greeter
```
Now enable the lightdm service:
```bash
systemctl enable lightdm.service
```