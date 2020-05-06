---
path: "/tutorials/securitypentesttools/uniscan"
date: "2020-05-06"
title: "Uniscan"
---

Uniscan is a tool for fingerprinting web servers in Kali Linux.

Simply typing 'uniscan' into the command line will show you options available to you.

The first scan we'll run will simply scan the page and traverse it's directories.

![uniscan 1](./uniscan/uniscan1.png)

The next one use the *-we* option. This enables file checking and checks for *robots.txt* and *sitemap.xml* files.

![uniscan 2](./uniscan/uniscan2.png)

Next we'll do a scan enabling dynamic checks. This one gives a wider set of results, they also won't likely fit on one page, in the image I've cut off the bottom of the output.

![uniscan 3](./uniscan/uniscan3.png)

Uniscan will output the results of a scan to a folder, by default this will be */usr/share/uniscan/report/report/*.