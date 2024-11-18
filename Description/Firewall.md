# Firewall

This file explains the [firewall.sh](https://git.kska.io/notkshitij/scripts/src/branch/main/firewall.sh) script and why things are the way they are.

---

> [!NOTE]
> I'm using Vim to write this, there's no spell check or grammar correction. Plain raw content, that's all.

## What?

- `firewall.sh` is a shell script for automating firewall setup on my laptop.
- I was tired of manually modifying the rules every time I was on a different network so I created this script.

## Working

1. The script shows 4 options and takes input for options from 1-4 in the `optn` variable.
2. It uses switch case for executing commands based on selected option.
3. Option 1 -> Home profile
		- This profile is used when connected to my home network.
		- By default all options begin by deleting the existing rules. Since I only have 4 rules max, I have used for loop from 0 to 5 (I'm aware it loops 5 times.)
		- I did not use `sudo ufw reset` because it resets all the rules and deactivates the firewall which I did not want happening in any case.
		- Then, it sets the default rules to allow outgoing traffic and deny incoming traffic followed by printing the output.
		- I have then specified rules for allowing incoming traffic on port range 1714:1764 (TCP and UDP) for KDE Connect, ports 22000 (TCP) and 21027 (UDP) from `192.168.219.0/24` (my phone's IP range) for Syncthing.
		- Lastly, it reloads the firewall and prints the verbose status.
4. Option 2 -> Public profile
		- This profile is used for any network other than my home network.
		- Again, it begins by deleting any existing rules.
		- Then, it sets the default rules to allowing outgoing traffic and deny incoming traffic.
		- Lastly, it reloads the firewall and prints the verbose status.
5. Option 3 -> Panic mode
		- This profile is for rare cases where I don't want any network traffic coming in or going out.
		- It begins by deleting any existing rules.
		- Then, it sets the default to deny incoming and outgoing traffic.
		- Lastly, it reloads the firewall and prints the verbose status.
6. Option 4 -> Exit
		- Exits the script
7. Default
		- For any other option number, it prints a message and ends the execution of the script.
8. That's it!

---
