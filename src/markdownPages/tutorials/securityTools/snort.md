---
path: "/tutorials/snort"
date: "2019-08-10"
title: "Snort"
---

Snort is a tool used for Security Information and Event Management (SIEM). This tutorial will cover the basics of snort rules.

One basic snort rule is the following:

```vim
alert tcp 10.10.10.0/24 80 -> 192.168.0.0/24 (msg:"Test Rule";content:"this must be present";sid:5000001;rev:1)
```

* *alert* - Defines the action if a packet matches the rule. Common examples are:
    * *alert*
    * *log*
    * *pass*
    * *drop*
    * *reject*
* *tcp* - Determines the protocol. There are four options:
    * *tcp*
    * *udp*
    * *icmp*
    * *ip*
* *10.10.10.0/24* - This is the first IP that must be matched. If specifying an IP address this must be in [CIDR notation](https://www.wikiwand.com/en/Classless_Inter-Domain_Routing). Some other options include:
    * *any* - Matches any IP address.
    * *!* - This can be prefixed to an IP address to specify a logical not.
    * *[192.168.0.1,192.168.0.2]* - This is a comma separated list.
* *80* - This is the port range option. Other possibilities include:
    * *any* - This means any port
    * *1:1024* - This is a port range you can specify.
* *->* - Specifies the direction of the match. The other option for this is:
    * *<>* - Unidirectional traffic flow.

There are a number of other options you can use for Snort rules. The options that follow set metadata elements of the rule. These are all key:value pairs terminated with *";"*:
* *sid* - Unique ID to identify the rule. This must be unique and there are several pre-reserved rules.
* *rev* - The revision of the rule.
* *classtype* - Categorises and groups common rules.

The next set of options are detection options. These are for detecting data in packets:
* *content* - This is the core of the detection and can include text, binary data, or both. This is a case sensitive option. Below is an example of the *content* option in use:
    * `-content:"168 65 6c 6c 6f|" content:"Hello |77 6f| rld" content:!"Not this"` 
        * You can use modifiers on this field.
        * Each content keyword can have several modifiers applied; modifiers will only affect the previous content option.
* *depth* - Defines how far in a match must be located. A depth of 6 will tell snort to only check with the first 6 bytes of the payload.
* *offset* - Determines where to search for a pattern. An offset of 20 would tell snort to check after the first 20 bytes of a payload.
* *http-uri* - Only matches content where if it appears in a normalised URI field.
* *file-data* - Applies to HTTP and SMTP traffic. Snort will search inside HTTP responses and decoded MIME attachments in email streams.

There are many other possible options, this is just intended as a taster.