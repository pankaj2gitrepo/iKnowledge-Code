package main

import "fmt"

func main() {
	fmt.Println("Hello General Interfaces")
	sum := add[int](1.0, 2.0)
	fmt.Println("Sum: ", sum)
}

func add[T int](n1 T, n2 T) T {
	var sum T
	sum = n1 + n2
	return sum
}
