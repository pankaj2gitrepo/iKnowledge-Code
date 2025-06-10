package main

import (
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Config struct {
}

func main() {
	mongoClient, err := connectToMongo()
	if err != nil {
		log.Panic(err)
	}
	client = mongoClient

}

func connectToMongo() (*mongo.Client, error) {
	clientOptions := options.Client().ApplyURI()
}
