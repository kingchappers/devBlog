---
path: "/tutorials/securitypentesttools/theHarvester"
date: "2020-03-26"
title: "TheHarvester"
---
 
 TheHarvester is another reconnaissance tool. This one can gather emails, subdomains, hosts, employee names, open ports and banners from different public sources. Basic usage is pretty simple:

 ```bash
 theHarvester -d <my.Domain> -l 500 -b all
 ```

 This will output a lot of data. To output this to a file, so you can read it later, use the following command: 

 ```bash
 theHarvester -d <my.Domain> -l 500 -b all -f harvestedInfo
 ```

 This will output a file containing the information that TheHarvester gathered in a easy to read format that can be opened in a web browser. 