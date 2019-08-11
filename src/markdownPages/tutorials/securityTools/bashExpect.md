---
path: "/tutorials/bashExpect"
date: "2019-08-11"
title: "Bash Expect"
---

Bash expect is a useful tool to automate shell scripts, in this tutorial I'll show you how to use the command to provide passwords to the SSH command.

```bash
#!/usr/bin/expect

eval spwn ssh <username>@192.168.1.2

set prompt "password:"

interact -o nobuffer -re $prompt return
send "<myPassword>\r"
interact
```

* *eval spwn* - This is the command run by expect prior to it waiting for a prompt.
* *set prompt* - set a variable called prompt, this will be used later.
* *interact* - Gives control of current process Input, Output (IO) user so keystrokes are sent to the process, STDOUT and STDERR or the process are returned. If interact requires more than 1 line it must be braced {}.
* *-o* - Causes following key-body pairs to be applied to the output of the current process.
* *nobuffer* - Sends characters that match the following pattern to the output process as characters are read.
* *$prompt* - The variable we created earlier. In this instance it's what we're waiting for the SSH command to return before we run our command.
* *send* - Sends that string to the current process.