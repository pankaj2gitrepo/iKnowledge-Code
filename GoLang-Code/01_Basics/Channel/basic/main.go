package main

import "fmt"

func main() {
	fmt.Println("Multiplication of four integers using goroutine & channel")
	var n1, n2, n3, n4 int
	n1 = 1
	n2 = 2
	n3 = 3
	n4 = 4
	fmt.Printf("n1: %d\n", n1)
	fmt.Printf("n2: %d\n", n2)
	fmt.Printf("n3: %d\n", n3)
	fmt.Printf("n4: %d\n", n4)
	c := make(chan int)
	go multiply(n1, n2, c)
	fmt.Println("out of multiply 1")
	go multiply(n3, n4, c)
	fmt.Println("out of multiply 2")

	fmt.Println("waiting 1")
	multiplyResult12 := <-c
	fmt.Println("waiting 2")
	multiplyResult34 := <-c

	fmt.Printf("n1*n2: %d\n", multiplyResult12)
	fmt.Printf("n3*n4: %d\n", multiplyResult34)
	go multiply(multiplyResult12, multiplyResult34, c)
breakLoop:
	for {
		fmt.Printf("\nfor loop iterate start\n")
		select {
		case multiplyResult := <-c:
			fmt.Printf("inside select n1*n2*n3*n4: %d\n", multiplyResult)
			break breakLoop
		default:
			fmt.Printf("default\n")
		}
		fmt.Printf("for loop iterate end\n")
	}
	fmt.Printf("return\n")
}

func multiply(n1 int, n2 int, c chan int) {
	fmt.Printf("multiply before set channel: %d*%d\n", n1, n2)
	c <- n1 * n2
	fmt.Printf("multiply after set channel: %d*%d\n", n1, n2)
}
