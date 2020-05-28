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

####Synced Files
Files can be synchronised between the host and the VM. By default anything stored within the project's directory will appear in the */vagrant/* directory on the VM.

####Scripts
You can run scripts when a VM starts. To do that you need to add something like the following to your Vagrantfile:

```
config.vm.provision :shell, path: "bootstrap.sh"
```
* *:shell* - Tells Vagrant to use the shell provisioner.
* *path:* - Tells Vagrant where the shell file is located, this is relative to the project.

The provisioner tells Vagrant how to process the file you give it, some other provisioners include:
* CFEngine
* Docker
* File
* Chef
* Podman
* Ansible
* Puppet
* Salt

###Networking
Vagrant allows you to specify and create networks to attach VMs to, you do this in the Vagrantfile:

```ruby
config.vm.network :forwarded_port, guest: 80, host: 4567
```
This will map port 80 on the VM to port 4567 on the host machine.

##Configuring Boxes
You can create your own boxes in Vagrant.

The following will create a VirtualBox Ubuntu machine. If you're not doing this you're mileage may vary.

First create the VM and disable audio, we won't need that. 

Now start the build process for that VM/

You'll need the user to have a username and password of vagrant. The following steps were taken for an Ubuntu host; if you're using something else the steps may differ.

Edit/Create */etc/sudoers.d/vagrant* to resemble the following
```
#add vagrant user
vagrant ALL=(ALL) NOPASSWD:ALL
```

Now install the Vagrant key, this is insecure.

```bash
mkdir -p /home/vagrant/.ssh
chmod 0700 /home/vagrant/.ssh

wget --no-check-certificate https://raw.github.com/mitchellh/vagrant/master/keys/vagrant.pub/ -O /home/vagrant/.ssh/authorized_keys

chmod 0600 /home/vagrant/.ssh/authorized_keys

chown -R vagrant /home/vagrant/.ssh
```

Now install OpenSSH, guest tools and the VBoxAdditions. to install the guest tools install the following:
```
apt install gcc dkms build-essential linux-headers-generic
```
Now exit the VM and do the below, this can be done from anywhere in the host:

```
mkdir ./mybox
cd ./mybox
vagrant package --base <myVMName>
```
To add and run the box:

```
vagrant box add <myVMName>
vagrant init <myVMName>
vagrant up
```

To make a box from a box that already exists:

Get the box and make your changes. Do the following command:
```
vagrant package --output <mybox>.box
```

Now you can add and use the box.

Once you've created or edited the box you want you can then upload it to somewhere like vagrantcloud so others can make use of the box.