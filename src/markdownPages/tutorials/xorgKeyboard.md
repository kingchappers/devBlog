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

```javascript{numberLines: 5}
// In your gatsby-config.js
plugins: [
  {
// highlight-next-line
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```