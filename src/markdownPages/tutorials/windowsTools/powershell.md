---
path: "/tutorials/windowsTools/powershell"
date: "2019-11-27"
title: "PowerShell"
---

This will give you an overview of some useful PowerShell commands.

Most of these commands are fairly simple but give you an idea of some of the things you can do in PowerShell.

##Active Directory Commands

####AD Computer
```powershell
Get-ADComputer 
```
* This will get you information about the computers you specify in the command.
    * You will have to specify how you want to search.

```powershell
Get-ADComputer -Filter 'AdminCount -eq 1'
```
* This returns all computers with the *AdminCount* value set to 1.
    * This attribute is automatically set if you move an account to one of the default administrative groups in Active Directory, or a child of one of these groups.

```powershell
Get-ADComputer <myComputer> -properties MemberOf 
```
* This gets the AD computer and returns all groups a computer is a member of.

####AD User
```powershell
Get-ADGroup
```
* This works in the same way as the *Get-ADComputer* command, but retrieves computer information.

####Exporting to CSV
```powershell
Export-Csv -Path <myPath.csv>
```
* This will export output to a .csv file.

####Using the Pipe (|)
```powershell
Get-ADComputer -Filter 'AdminCount -eq 1' | Export-Csv -Path ./adminComputers.csv
```
* This saves the output of the command before the pipe to a .csv file to the specified location.

#####Export Group Policy
```powershell
gpresult /H GPReport.html
```
* This exports an .html file detailing all of the current GPOs that apply to the current device.

####AD Group Commands
```powershell
Get-ADPrincipalGroupMembership
```
* This Gets all of the AD groups a user is in.

```powershell
Get-ADUser -Filter 'Name -like "Sam Chapman" -Properties *  
```
* Gets the user where the name is like the filter, and shows all properties associated with that user.

```powershell
Get-ADGroupMember -Identity "<myGroup>" 
```
* Gets all members of the specified AD group.

####Logical Operators
```powershell
Get-ADUser -Filter 'AdminCount -eq 1 -and msExchRecipientTypeDetails -ne 0' -properties msExchRecipientTypeDetails 
```
* This command shows how you might utilise the logical **and** and logical **not equal to** operators.

####Basic Scripts
```powershell
$gpos = Get-Gpo -All -Domain "myDomain"

foreach ($gpo in $gpos) {
	$permissions = get-gppermission -Guid $gpo.Id -All
	
	foreach ($permission in $permissions){
		$gpoPermissions += $permission.Trustee.Name + ',', $permission.Permission + ',', $gpo.id + ',', $gpo.DisplayName + "`r`n"
	}
}
$gpoPermissions | Set-Content -Path ./gpoPermissions.txt
```
* This script will get all GPOs in a domain. Then it loops over those to get the users that have permisssions over the GPOs. Finally it outputs the results to a file.

* It's fairly basic but highlights the use of variables and foreach loops.

```powershell
$serverNames = Get-Content ./azureServerNames.csv

foreach ($serverName in $serverNames) {
		$spn = setspn -l $serverName.Trim()
		$spn | Set-Content -Path ./$serverName.txt
}
```

* This ones fairly niche script but I found it quite useful. It essentially shows how to read data from a *.csv* file, manipulate it and output what you have to a .txt file with the variable as the filename.