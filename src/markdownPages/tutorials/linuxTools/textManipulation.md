---
path: "/tutorials/linuxTools/textManipulation"
date: "2019-08-04"
title: "Text Manipulation"
---

This section gives some of the basic usage of different text manipulation. The idea is not to give a full overview of them as there are plenty of different tutorials for that, this is to give me, and anyone reading this, a brief refresher on the tools out there and basic usage.

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