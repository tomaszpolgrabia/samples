package main

import (
	"fmt"
	postgres "gorm.io/driver/postgres"
	gorm "gorm.io/gorm"
	"log"
)

type User struct {
	Id        uint `gorm:"primaryKey"`
	FirstName string
	LastName  string
	Locked    bool
}

func main() {
	url := "host=localhost user=gorm password=gorm dbname=gorm port=5432 sslmode=disable TimeZone=Europe/Warsaw"
	config := gorm.Config{}
	con, err := gorm.Open(postgres.Open(url), &config)
	if err != nil {
		log.Panicf("Sorry, I couldn't create a connection to database %v", err)
		return
	}

	err = con.AutoMigrate(&User{})
	if err != nil {
		log.Panicf("I couldn't migrate user %v", err)
		return
	}

	u := User{
		FirstName: "Tomasz",
		LastName:  "Półgrabia",
		Locked:    false,
	}
	con.Create(&u)

	fmt.Printf("Created first user %v", u)
}
