---
path: "/tutorials/linuxTools/find"
date: "2019-08-04"
title: "Find Command"
---
This is a tutorial for the *find* command. *find* is a pretty useful command for finding files in Linux. It can be used if your looking for your own file that you've misplaced, or if you're looking for a specific file like a config or something on an unfamiliar device...
```bash
find </mydirectory> -name <myfile>
```
* *\</mydirectory>* - The directory you want to search in.
* *-name \<myfile>* - The name of the file you're looking for.

```bash
find </mydirectory> -user <username> -perm -400 -name <myfile>
```
* *-user \<username>* - The username that owns the file
* *-perm -400* - The permissions of the file. The "-" is used to indicate an empty sticky bit on the permissions. This is only used in situations where the sticky bit is in use.

Other useful options for the find command include:
* *-group \<groupname>* - Specifies the group that owns the file.
* *-exec \<command>* - Executes a command on any file matches.

Find will likely produce a lot of results and it can be a little too verbose. To combat this you can do the following:

```bash
find -user root -perm -400 27&1 | grep -v "Permission denied"
```
* This will filter out STDERR where grep gets results for *"Permission denied"*.

The next command will search the root directory for files where the owner is root, the permission level is -400, and contains the text *"test"*. When using the *-exec* flag the *{} +* characters are required.

```bash
find / -user root -perm -400 -exec grep "test" {} +
```