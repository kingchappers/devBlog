---
path: "/tutorials/securitypentesttools/wpscan"
date: "2020-05-06"
title: "WPScan"
---

WPScan is a tool for scanning WordPress sites. This can be used to find vulnerabilities within a WordPress site.

For the purpose of this I'll be using an instance of WAMPServer to scan against.

```bash
wpscan --url http://<mySite> --enumerate u
```

This will scan the url and attempt to enumerate users of the server. After discovering the users you can use that information to attempt to crack their passwords.