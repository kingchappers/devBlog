---
path: "/tutorials/archTips"
date: "2019-07-21"
title: "Arch Tips/Tricks"
---


This is small set of fairly basic tutorials regarding different hints and tips you can use to configure a fresh installation of Arch, or some other lightweight distro.
<br></br>
##AUR Installations
To install content from the Arch User Repository you need to edit the pacman.conf file.

```bash
vim /etc/pacman.conf
```

Then add the following lines to the bottom of the file:

```vim
[archlinuxfr]
SigLevel = Never
Server = http://repo.archlinux.fr/$arch
```
<br></br>
##Install From Multilib
To install packages from the multilib repository you need to edit pacman.conf again.

```bash
vim /etc/pacman.conf
```

Then uncomment (remove the #) the following lines

```vim
#[multilib]
#Include = /etc/pacman.d/mirrorlist
```
<br></br>
##During Arch Setup
While installing Arch I found that there were a number of packages I repeatedly forgot to install during the process. These were all present on the installation media, but given Arch installs the bare minimum they were not installed during the process. When in the arch-chroot you create make sure you install:

1. wpa_supplicant - Allows you to connect to a wireless network. This is definitely required if you intend on using WiFi only.
2. iw - A network configuration tool specifically for wireless networks.
3. netctl - Tool that allows you to create and manage network profiles.
4. dialog - Allows you to use the wifi-menu set of commands, this is useful for easily connecting to available WiFi hotspots.
5. gvim - A version of vim that connects to the clipboard and provides GTK/GTX support. This is really just a QOL installation if you prefer standard vim.
