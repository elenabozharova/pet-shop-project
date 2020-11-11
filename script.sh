#!/bin/bash
# Purpose: Read Comma Separated CSV File
# ------------------------------------------
INPUT=petshops_in_skopje.csv
OLDIFS=$IFS
IFS=","
[ ! -f $INPUT ] && { echo "$INPUT file not found"; exit 99; }
while read  info_one_shop
do
	while read title rating reviewCount category attributes address plusCode website phoneNumber saturday sunday monday tuesday wednesday thursday friday imgUrl isClaimed latitude longitude
	do
	#  for each pet shop read all the columns
	#and later select only the shops with rating greater than 2 and CLAIMED by owners
	echo "$title,$rating,$reviewCount,$category,$attributes,$address,$plusCode,$website,$phoneNumber,$saturday,$sunday,$monday,$tuesday,$wednesday,$thursday,$friday,$imgUrl,$isClaimed,$latitude,$longitude"
	done
done < $INPUT
IFS=$OLDIFS
