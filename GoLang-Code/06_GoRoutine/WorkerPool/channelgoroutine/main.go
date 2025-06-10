package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Print("Hello WorkerPool")
	chanInt := make(chan int)

	// Publish
	go func(chanIntParam chan int) {
		time.Sleep(1 * time.Second)
		chanIntParam <- 1
		chanIntParam <- 2
	}(chanInt)

	go func(chanIntParam chan int) {
		time.Sleep(3 * time.Second)
		chanIntParam <- 11
		chanIntParam <- 22
		close(chanInt)
	}(chanInt)

	// Consume
	for value := range chanInt {
		fmt.Printf("\nvalue:%v", value)
	}
}
