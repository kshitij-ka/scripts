#!/bin/bash

echo -e "--- MAIN MENU ---\n1. Home profile\n2. Public profile\n3. PANIC MODE\n4. Exit"
read -p "Choose an option: " optn

case optn in
	1) # Home profile
		for i in {0..5}
		do
			yes | sudo ufw delete 1
		done
		sudo ufw default deny incoming
		sudo ufw default allow outgoing
		sudo ufw status verbose
		sudo ufw allow in from any to any port 1714:1764 proto tcp # KDE TCP
		sudo ufw allow in from any to any port 1714:1764 proto udp # KDE UDP
		sudo ufw allow in from 192.168.219.0/24 to any port 22000 # Syncthing TCP
		sudo ufw allow in from 192.168.219.0/24 to any port 21027 proto udp # Syncthing UDP
		sudo ufw reload
		sudo ufw status verbose
		;;
	2) # Public profile
		for i in {0..5}
		do
			yes | sudo ufw delete 1
		done
		sudo ufw default deny incoming
		sudo ufw default allow outgoing
		sudo ufw status verbose
		;;
	3) # Panic mode
		for i in {0..7}
		do
			yes | sudo ufw delete 1
		done
		sudo ufw default deny incoming
		sudo ufw default deny outcoming
		sudo ufw status verbose
		;;
	*) # Default
		echo 'Please choose a valid option (1-4).'
		;;
esac