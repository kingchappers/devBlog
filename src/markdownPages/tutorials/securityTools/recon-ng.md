---
path: "/tutorials/securitypentesttools/recon-ng"
date: "2020-03-23"
title: "Recon-ng"
---

Recon-ng is a useful tool for reconnaissance. It can give you useful information about an organisation and the people working for them.

To launch Recon-ng simply type recon-ng in the command line on the computer it is installed on.

You'll need to add a new workspace to store the data you collect, use the following command:
```
workspaces create reconnaissance
```

To install new modules:
```
marketplace install <myModule>
```

To load that module: 
```
modules load recon/domains-contacts/whois_pocs
```

You'll now have to select your target domain: 
```
options set SOURCE <myDomain>
```
You can use the `info` command to find out what the command will do. To run the module simply type `run`. Once the module runs you will see the appropriate output for the module.

In order to exit a module simply type `back`.