---
path: "/tutorials/linuxTools/textManipulation"
date: "2019-08-04"
title: "Text Manipulation"
---

This section gives some of the basic usage of different text manipulation. The idea is not to give a full overview of them as there are plenty of different tutorials for that, this is to give me, and anyone reading this, a brief refresher on the tools out there and basic usage.

##Awk
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

As with any programming language, Awk has functions. Awk has built in functions and allows you to define your own. Basic usage is achieved like:

```Awk
awk '{print length($0);}' os.txt
```
This will print out the length of each line in the document.

```Awk
awk '{print length($1);}' os.txt
```
This will print out the length of the first field (word) of each line.

There are a great many built in functions, so rather than try and list them and their usage I'll leave you to research more to suit your needs. The [gnu website on Gawk](https://www.gnu.org/software/gawk/manual/html_node/Functions.html) seems like a reasonable guide to start with. Gawk is the GNU implementation of Awk and contains several extensions to the language.

##TR

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

##sed

The sed stream editor is a useful tool to help you edit plain text files on the fly. It also allows you to view parts of files in different ways.

```bash
sed -n '3p' os.txt
```

*-n* is used to supress output and *p* is used to print specific lines, so in the above example you'll see only line 3 of the file

```bash
sed -n '4,11p' os.txt
```

This will show you lines 4-11 of the given file.

```bash
sed '4,10d' os.txt 
```

This command does the opposite, showing all lines except 4-10.

Editing files with sed is also fairly simple. 

```bash
sed 's/Linux/paper/g' os.txt
```

This will replace insances of the word Linux with the word paper. If you want to ignore character case us *gi* instead of *g*.

```bash
sed '30,40 s/Linux/paper/g' os.txt
```

Building on the previous command the above will do the replacement only in the given line span.

These are the absolute basics of sed. It can get way more complex which includes adding regex, but there are plenty of tutorials out there. 

##Grep

Grep is a very widely known tool used for searching for patterns in files. 

```bash
grep "Linux" os.txt
```

This will look for and highlight anywhere the text "Linux" appears in a file. Grep is case sensitive by default so watch out for that. Use *-i* to make the query case insensitive.

```bash
grep "OS.*)" os.txt
```

This is a fairly basic regex query, it looks for lines that start with "OS" and end with a ). Regex gets way more complicated than that and is something I'm definitely qualified to write about here. 

```bash
grep -w "Linux" os.txt
```

The *-w* flag searches for full words. This differs from the previous example as it won't match everything where the term "Linux" appears for example a word like "jfdskljfdlksajklLinuxjfkdslajfkldsa" would not be returned in the result.

Like most of the other items in this section grep can do much cooler things than what I talked about. But there are more comprehensive guides to doing that out there on the internet.

There are a few variants of grep with some differences. The main two variants you'll see are egrep and fgrep. This are useful for specific circumstances but I'll let you read up on that. 

##Sort

Sort is a tool used for, you guessed it, sorting files. 

```bash
sort os.txt
```

This is the basic usage. It will output the contents of the file in alphabetical order. It's that simple!

There are a few options for the sort command that could be quite useful.

* **-r** - This reverses the order of the sorting
* **-n** - This sorts numerical data
* **-u** - This will sort and remove any duplicates. This will write to the file.
* **-k** - This will sort data based on the column number supplied.

Example of **-k**:
File used: 
```txt
John    14
Heather 32
Sam     45
Harry   10
Sarah   23
```
Command:
```bash
sort -k 2 example.txt
```

##Uniq
Uniq is used to remove duplicate lines in a file. For this we'll use a file with the contents below:

```txt
this is a test
this is a test
this is a test

repeated line
repeated line

Not repeated  1 this is a test
```

```bash
uniq example.txt
```

This will output the lines without the duplicates. It does not actually remove anything from the file. Some of the options:

* **-c** - Outputs the lines with a count of how many times it's in the document.
* **-d** - Outputs only the repeated lines.

##Cut
Cut is a command to cut out parts of text and print out the result. You can choose to cut based on a specific delimiter, byte position, or a character. When using cut you have to specify an argument otherwise you will get an error (How else would it know what you're trying to cut?).

```bash
cut -b 1,2,5 example.txt
```

This will cut the first, second, and fifth byte from the file.

```bash
cut -b 1,2,5-8 example.txt
```
This will cut the first, second, and fifth to eighth bytes from the file.

```bash
cut -f 1,2 example.txt
```
This will cut the first and second field from the file. By default fields are separated by a *tab* character. 

```bash
cut -d " " -f 1,2 example.txt
```
You can set your own delimiter using *-d*. I the above we've set the delimiter to a space so the command effectively prints the first two words of every line in my file. 

##Fmt
Fmt is a formatter for text files. This is useful when you have a very large text file that would be time consuming to format manually. 

Without an option fmt will format all consecutive lines into a single line, where there is a gap it will group them.

```txt
this is a test
this is a test
this is a test

repeated line
repeated line

Not repeated
```

```bash
fmt example.txt
```
Output of command:
```text
this is a test this is a test this is a test

repeated line repeated line

Not repeated
```

```bash
fmt -w 5 example.txt
```
The above sets the maximum width of a line to 10, this does not cut off a word if a word makes the line over the set limit it will be put on the next line. The default is normally 75. 

```bash
fmt -t example.txt
```
This will change the indentation of the first line, by default this means the first line is not indented but the rest are. 

##Nl
Nl is used to number lines in a file. This is fairly useful if you have a large file and need to know the line number of a specific part. 

```bash
nl example.txt
```
This will number and show the non-empty lines.

```bash 
nl -b a example.txt
```
This will number and show all lines, even the empty ones. 