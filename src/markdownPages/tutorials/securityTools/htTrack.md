---
path: "/tutorials/securitypentesttools/htTrack"
date: "2019-12-08"
title: "HTTrack"
---

HTTrack is a fairly useful too that can be used to download a website for offline use. This technique is often used in scenarios where you would like to footprint a website without having to be online to do so. Downloading an entire website should be considered a fairly 'loud' method in the reconnaissance process as it is easy to notice when a client queries all of the pages of a website in quick succession.

This tool has it's limits. It does not perform well when it comes to websites that use a great deal of JavaScript, it will encounter problems rendering these types of pages. It will also perform rather slowly for large sites simply because there are more assets to download.

HTTrack is available for both Linux and Windows. For this tutorial we will be using the Linux version which is command line based. 

```
httrack
```
This command starts the HTTrack console.

You will then be prompted to enter a name for the project. Following this you can specify the base path for the files it downloads. You will then be presented with the following options:
1. Mirror Web Site(s)
2. Mirror Web Sites(s) with Wizard
3. Just Get Files Indicated
4. Mirror ALL links in URLs (Multiple Mirror)
5. Test Links In URLs (Bookmark Test)
0. Quit

For the purpose of this tutorial we will be using option 2, the wizard.

Upon selecting the option you will be asked for yor proxy, if you are using one, if you don't use one simply hit return. You may then select a wildcard if you are looking for something specific, then you may specify any additional options. You can then launch the mirroring.
