---
path: "/tutorials/miscellany/vagrant"
date: "2020-05-28"
title: "Vagrant"
---

Vagrant is a tool that can be used to automate the creation of virtual machines. This allows you to easily spin up and configure virtual environments. This is quite useful when you are unable to use a containerisation tools like Docker. I've used it for spinning up virtual machines that cannot utilise Docker, such as a pfsense environment that runs on freeBSD.

This page will teach the basics of Vagrant, and hopefully show ways it may be useful.

###Project Setup

 Run the following commands:

 ```bash
 mkdir <projectName>
 cd <projectName>
 vagrant init hashicorp/bionic64
 ```

 These commands will create a directory, and in that directory initialise a Vagrantfile with instructions to use the "hashicorp/bionic64" box. For reference, this is an Ubuntu based box. 

 To download the box:

 ```
 vagrant box add hashicorp/bionic64
 ```
 * You'll be asked to choose the provider you would like to use. The provider in this case is the VM environment. 
 
 I'm using VirtualBox as it's a free to use tool for individuals, if you're using something else your mileage may vary.

The Vagrantfile that is created by the above commands should contain the following:

```ruby
Vagrant.configure("2") do |config|
    config.vm.box = "hashicorp/bionic64"
end
```

If you would like to specify the version of the box, or the URL you retrieve it from you can add the following to the Vagrantfile, before the *end* section.

```ruby
config.vm.box_version = "1.10.0"
config.vm.box_url = "https://vagrantcloud.com/hashicorp/bionic64"
```

To start the box:

```
vagrant up
```

It's as simple as that! There is now a virtual machine running, using the box you provided it. If you'd like to ssh into the box:

```
vagrant ssh
```

Some other useful vagrant commands you might need:

* `vagrant destroy` - This deletes the VM's drives but not the Vagrantfile, or the downloaded file from the *add* command.
* `vagrant remove` - This removes the box.
* `vagrant reload` - Restarts the running box.
* `vagrant suspend` - Puts the VM into sleep mode.
* `vagrant halt` - Shuts the VM down.
