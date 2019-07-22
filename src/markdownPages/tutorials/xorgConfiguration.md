---
path: "/tutorials/xorgConfiguration"
date: "2019-07-20"
title: "Xorg Configuration"
---


This is small set of fairly basic tutorials regarding the setup of keyboards, monitors, and mice for the Xorg display server.

Before we start please bare in mind all configuration files within the xorg.conf.d must end with .conf. They are also read in ASCII order, and there is a convention whereby they are named with the prefix *XX-* where XX are two digits. This essentially means that if you have another file called *02-...* with a slight alteration to *01-* it will override *01*.

Xorg will search for configuration files in a number of directories; the locations searched are described within the xorg.conf manual, which is also available [here](ftp://www.x.org/pub/X11R6.7.0/doc/xorg.conf.5.html).
<br/><br/>
##Xorg Keyboard

So, when I first installed Arch Linux I had trouble changing the default keyboard language setting. As it turns out this is pretty easy via xorg.conf. The only requirement for this tutorial is that you are using Xorg as your display server. Xorg can also be used to configure other peripheries, such as mice, touchpads, touchscreens, and monitors.

To start we need to create a new file within the xorg.conf directory. 

The file we'll create will be called 00-keyboard.conf, you will probably need to use sudo to create a file here. I'm using vim as my text editor, but feel free to use whichever editor you want.

```bash
vim /etc/X11/xorg.conf.d/00-keyboard.conf
```

The next step is adding content to the new file. Add the following lines:

```vim{numerLines: true}
Section "InputClass"
	Identifier		"evdev keyboard catchall"
	MatchIsKeyboard 	"on"
	MatchDevicePath 	"/dev/input/event*"
	Driver 			"evdev"
	Option "XkbLayout" 	"gb"
EndSection
```

This will catch input devices where they are identified as a keyboard device in the /dev/input/event* directory (This is where input devices live), it will then assign the evdev driver to the keyboard. The final part selects the language, this obviously depends on your language/keyboard configuration. To view the codes for different configurations simply enter the below into the command line:

```bash
ls /usr/share/X11/xkb/symbols/
```

That's everything you need for a basic configuration of a keyboard.
<br/><br/>
##Xorg Mouse
<br/><br/>
##Xorg Monitors
This section is only relevant where you are using multiple monitors and need to configure which monitor is on which side. The first part for this is to actually work out the identifier associated with each monitor. Enter the below command:

```bash
xrandr
```

This will output names for each of the ports available on your device. All those connected to a monitor will show as connected, the rest will show as disconnected. The ones that are connected for me are labeled *HDMI-1* and *DP-1*. Take note of yours as you will need to edit the configuration based on this.

Next step is to configure your monitors via the xorg.conf.d files.

```bash
vim /etc/X11/xorg.conf.d/20-monitor.conf
```

In the new file add these lines:

```vim
Section "Monitor"
    Identifier  "HDMI-1"
    Option      "Primary" "true"
EndSection

Section "Monitor"
    Identifier  "DP-1"
    Option      "RightOf" "HDMI-1"
EndSection
```

The file is fairly self explanatory, just ensure you select the correct port you want as your primary and where you would like to be in respect of that.