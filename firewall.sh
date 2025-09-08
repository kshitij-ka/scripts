#!/bin/bash

INPUT_PARAM=$1
line="--------------------------------------------"

# param check
if [ -z "$1" ]; then
  echo -e "No parameter passed.\nAvailable parameters are:\n\thome -> Switches to home profile\n\tpublic -> Switches to public profile\n\tpanic -> Switches to PANIC profile (blocks all incoming, outgoing and routed connections)"
  exit 1
fi

existing_check() {

  if [ $(sudo ufw status | wc -l) -gt 1 ] && sudo ufw status | grep -q "ALLOW"; then
     echo 'Existing rules found. Deleting...'
     while true; do
       yes | sudo ufw delete 1
       if [ $(sudo ufw status | wc -l) -eq 1 ]; then
         echo 'Deleted all existing allowed connections.'
         break
       fi
     done
     return 0
   else
     return 0
   fi

  return 1

}

home() {
  echo -e "Applying home profile...\n$line"

  existing_check
  status=$?
  if [ $status -eq 0 ]; then
	  sudo ufw default deny incoming
	  sudo ufw default allow outgoing
	  sudo ufw status verbose
	  sudo ufw allow in from any to any port 1714:1764 proto tcp # KDE TCP
	  sudo ufw allow in from any to any port 1714:1764 proto udp # KDE UDP
	  sudo ufw allow in from 192.168.255.0/24 to any port 22000 # Syncthing TCP
	  sudo ufw allow in from 192.168.255.0/24 to any port 21027 proto udp # Syncthing UDP
	  sudo ufw reload
	  echo "$line"
	  sudo ufw status verbose
	  echo "$line"
    echo -e "Home profile applied."
  else
    echo 'Something went wrong'
    exit 1
  fi
}

public() {
   echo -e "Applying public profile...\n$line"

  existing_check
  status=$?
  if [ $status -eq 0 ]; then
  	sudo ufw default deny incoming
  	sudo ufw default allow outgoing
  	sudo ufw reload
  	echo "$line"
  	sudo ufw status verbose
  	echo "$line"
    echo 'Applied public profile.'
  else
    echo 'Something went wrong'
    exit 1
  fi
}

panic() {
  echo -e "Appling PANIC profile...\n$line"

  existing_check
  status=$?
  if [ $status -eq 0 ]; then
  	sudo ufw default deny incoming
  	sudo ufw default deny outgoing
  	sudo ufw reload
  	echo "$line"
  	sudo ufw status verbose
  	echo "$line"
    echo 'PANIC profile applied.'
  else
    echo 'Something went wrong'
    exit 1
  fi
}

case ${INPUT_PARAM,,} in
  home)
    home
    ;;
  public)
    public
    ;;
  panic)
    panic
    ;;
esac
