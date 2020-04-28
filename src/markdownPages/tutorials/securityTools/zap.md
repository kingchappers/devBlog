---
path: "/tutorials/securitypentesttools/zap"
date: "2020-04-06"
title: "Zed Attack Proxy (ZAP)"
---

The Zed Attack Proxy (ZAP) is  an open source web app scanner. It's designed for web application testing and has been developed by OWASP; OWASP are an organisation that specialise in web application security and regularly produce articles, as well as a list of the top 10 web app security vulnerabilities. Zap is available on both Windows and Linux, I'll be using the Linux variant.

As an intercepting proxy it allows you to sit in between your browser and a web application and see all of the traffic going between them. You can then alter your requests as they go out to the web application and alter response as they come back, thus, allowing you to perform various tests on the security of the application. 

![zap 1](./zap/zap1.png)

Before you start using ZAP you'll have to set your browser to use ZAP as a proxy. It will then proxy all requests and responses through ZAP. I'll guide you through this for Firefox, but other browsers will be different.

1. Go to 'Preferences'
2. Under the 'General' tab scroll to 'Network Settings' and click 'Settings...'

![zap 2](./zap/zap2.png)

Fill in settings similar to the below.

![zap 3](./zap/zap3.png)

Now you'll have to setup ZAP to receive traffic from your browser. 

Go to 'Options'.

![zap 4](./zap/zap4.png)

Scroll to 'Local Proxies' and fill in details as below.

![zap 5](./zap/zap5.png)

Your now ready to intercept traffic. To do that click 'Set break on all requests and responses'.

![zap 6](./zap/zap6.png)

When requests go out you'll see it and have to allow it through.

![zap 7](./zap/zap7.png)

This is where you can edit. This is a simple introduction but the tool is capable of much, much more. Things such as web app scanning, inspecting and altering session cookies, and more.