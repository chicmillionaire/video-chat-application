package main

import (
	"video-chat-application/server"
	"net/http"
	"log"	
)

func main() {
	server.AllRooms.Init()

	http.HandleFunc("/create", server.CreateRoomRequestHandler)
	http.HandleFunc("/join", server.JoinRoomRequestHandler)

	log.Println("Starting Server on Port 8000")
	err := http.ListenAndServe(":8000", nil)
	if err != nil {
		log.Fatal(err)
	}
}