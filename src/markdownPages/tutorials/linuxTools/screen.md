---
path: "/tutorials/screen"
date: "2019-08-11"
title: "Screen Command"
---
This is a simple tutorial regarding the use of the Screen command. Screen is useful where you are using distributions that do not have a GUI. You can use the command to have multiple terminal sessions at once.

```
screen -S <sessionName>
```
Starts a new session with the specified name. The following are a list of keyboard shortcuts you can use while in a screen session.

* *CTRL+a c* - New window.
* *CTRL+a "* - List all windows.
* *CTRL+a 0* - Switch to window 0 or 0-9.
* *CTRL+a A* - Rename the current window.
* *CTRL+a S* - Split the current region into 2 horizontal areas.
* *CTRL+a |* - Split the current region into 2 vertical areas.
* *CTRL+a Tab* - Switch input focus to another region.
* *CTRL+a Ctrl+a* - Toggle between the current and the previous region.
* *CTRL+a Q* - Close all regions but the current one.
* *CTRL+a X* - Close current region.
* *CTRL+a d* - Detach from the screen session.

```
screen -r
```
This resumes a screen session.