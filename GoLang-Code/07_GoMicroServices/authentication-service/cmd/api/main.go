package main

import (
	"authentication/data"
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	_ "github.com/jackc/pgconn"
	_ "github.com/jackc/pgx/v4"
	_ "github.com/jackc/pgx/v4/stdlib"
)

const webPort = "80"

var count int64

type Config struct {
	DB     *sql.DB
	Models data.Models
}

func main() {
	log.Println("Starting authentication service")

	conn := connectToDB()
	if conn == nil {
		log.Panic("Can't connect to Postgres")
	}

	app := Config{
		DB:     conn,
		Models: data.New(conn),
	}

	srv := &http.Server{
		Addr:    fmt.Sprintf(":%s", webPort),
		Handler: app.routes(),
	}

	err := srv.ListenAndServe()
	if err != nil {
		log.Panic(err)
	}
}

func openDB(dsn string) (*sql.DB, error) {
	db, err := sql.Open("pgx", dsn)
	if err != nil {
		return nil, err
	}

	err = db.Ping()
	if err != nil {
		return nil, err
	}

	return db, err
}

func connectToDB() *sql.DB {
	dns := os.Getenv("DNS")
	log.Println("DNS:", dns)

	for {
		connection, err := openDB(dns)
		if err != nil {
			log.Println("Postgress not ready yet")
			count++
		} else {
			log.Println("Connected to Postgress")
			return connection
		}

		if count > 10 {
			log.Println(err)
			return nil
		}

		log.Println("Backing off for two seconds...")
		time.Sleep(2 * time.Second)
	}
}
