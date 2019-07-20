---
path: "/tutorials/xorgKeyboard"
date: "2019-05-04"
title: "Xorg Keyboard"
---


This is a fairly basic tutorial regarding the setup of a keyboard for the Xorg display server.

As always if you have any questions about the content on this page feel free to get in touch. I'm no expert but I'll try to help.

So, when I first install Arch Linux I had trouble changing the default keyboard language setting. As it turns out this is pretty easy via xorg.conf. The only requirement for this tutorial is that you are using Xorg as your display server. Xorg can also be used to configure other peripheries, such as mice, touchpads, touchscreens, and monitors.

```bash{numerLines: true}
vim /etc/X11/xorg.conf.d/00-keyboard.conf
```
```bash{numerLines: true}
Section "InputClass"
	Identifier		"evdev keyboard catchall"
	MatchIsKeyboard 	"on"
	MatchDevicePath 	"/dev/input/event*"
	Driver 			"evdev"
	Option "XkbLayout" 	"gb"
EndSection
```