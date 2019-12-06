---
path: "/tutorials/nslookup"
date: "2019-12-06"
title: "nslookup"
---

This will give you an overview of the nslookup tool and how to use it. Nslookup is a tool used to lookup DNS information about a specified domain.

```batch
nslookup
```
This launches nslookup in interactive mode and wil prompt you to enter further commands.

```batch
> set type=a
> www.example.com
```

This will display the DNS 'A' record for the specified domain.

```batch
> set type=cname
> www.example.com
```

This will display the DNS 'CNAME' record for the specified domain.

```batch
> set type=ns
> www.example.com
```

This will display the DNS 'NS' record for the specified domain.

```batch
> set type=soa
> www.example.com
```

This will display the DNS 'SOA' record for the specified domain.