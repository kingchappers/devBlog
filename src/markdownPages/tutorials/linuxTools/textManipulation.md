---
path: "/tutorials/linuxTools/textManipulation"
date: "2019-08-04"
title: "Text Manipulation"
---

This section gives some of the basic usage of different text manipulation. The idea is not to give a full overview of them as there are plenty of different tutorials for that, this is to give me, and anyone reading this, a brief refresher on the tools out there and basic usage.

###Awk
Awk isn't just a tool, it's a programming language meaning it is better learned by using it to complete specific tasks rather than just aiming it at a random file to see what happens. That said, that's exactly what I'm going to be doing here just as a basic refresher on Awk. 

For the purpose of this tutorial all of the searches I'll be using a txt file with the following contents:

```
Linux
Windows
MacOS
this is a test Linuxafidsjaf klj dfa fsda dsaf
fdsaf
dsfa
fdsa
OS: CentOS Linux (10.1.1.8)
OS: CentOS Linux (10.1.1.9)
OS: Red Hat Enterprise Linux (RHEL) (10.1.1.11)
OS: Elementary Linux (10.1.2.4)
OS: Elementary Linux (10.1.2.5)
OS: Elementary Linux (10.1.2.6)
```

We'll start off small and do a basic search of this file. We'll be running most of these commands from the commandline. 

```awk
awk '/Linux/ { print $0;}' os.txt
```

This will produce a list with all of the lines that contain the term Linux and prints the whole line. This search is case sensitive. 

In Awk a file is known as a record.  A single word is known as a field. These terms are used a fair bit. **$0** prints a whole line, if we used **$1** just the first field in the line would be printed.

To get just the line numbers (line numbers start at 1) you can do the following:

```Awk
awk '/Linux/ { print NR;}' os.txt
```

In the above command we use **NR** is a built-in variable where the number of records processed is stored, this doubles as the line number.

By default the fields are separated by a space, this default can be changed using the following:

```
awk -F ':' '/Linux/ { print $2;}' os.txt
```

**-F** is for field separator. So, we are specifying that we will separate fields with a colon. If you're using the example file you'll notice that the first two lines of output are empty, this is because there is no colon in these lines meaning field 2 does not actually exist.

####Awk Functions

###TR

This section will teach you the basics of the *tr* command to manipulate text. This may seem like a trivial tool but it can be useful in different scenarios. 

The *tr* command is primarily used to translate or delete characters in files. To delete specific characters from a text file simply do the following:
```bash
tr -d ":,." <input.txt> <output.txt>
```
* *-d* - Specifies that you would like to delete characters.
* *":,."* - These are the characters you'd like to delete, in our case that's colons, commas, and fullstops. 
* *<input.txt>* - The file you're deleting the characters from.
* *<output.txt>* - The file you want to output the results to.

```bash
tr -d '[:punct:]' <input.txt> <output.txt>
```
* *'[:punct:]'* - This is a function that will remove all punctuation
    * *'A-Z'* and *'a-z'* will perform similar functions with alphabetical characters.

```bash
tr 'a-z' 'A-Z' <input.txt> <output.txt>
```
* The above will convert all lowercase characters to uppercase ones.