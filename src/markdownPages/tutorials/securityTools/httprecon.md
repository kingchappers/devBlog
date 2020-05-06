---
path: "/tutorials/securitypentesttools/httprecon"
date: "2020-04-06"
title: "HTTPRecon Tool"
---

HTTPRecon allows you to fingerprint a web server to give you a better understanding on how it's configured. This can therefore be used in the initial stages of an attack on a web server. The tool is run on Windows so that's what I'll be using it on.

The UI is fairly simple.

![httpRecon 1](./httpRecon/httpRecon1.png)

To start fingerprinting a web server simply enter the URL and port number, then hit analyze. Remember if you're scanning https set the port to 443, the default https port.

![httpRecon 2](./httpRecon/httpRecon2.png)

Once the scan is complete you should see something like this:

![httpRecon 3](./httpRecon/httpRecon3.png)

The 'Fingerprint Details' and 'Report Preview' tabs give you a little more information based on the server's response.

If you would like to see further details about the other request types sent by HTTPRecon click one of the other tabs at the top and view the 'Fingerprint Details' tab, as shown below:

![httpRecon 4](./httpRecon/httpRecon4.png)

There isn't a lot of information shown by this tool, however, it does allow you to narrow your search for vulnerabilities to specific servers and server versions when performing a penetration test.