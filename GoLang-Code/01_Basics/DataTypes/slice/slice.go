package main

import "fmt"

func main() {
	s := make([]string, 2, 4)
	s = append(s, "A")
	s = append(s, "B")

	fmt.Println("s: ", s)
	fmt.Println("len(s): ", len(s))
	fmt.Println("cap(s): ", cap(s))

	// go 1.20
	a := [4]string(s) // Convert slice to array
	fmt.Println("a: ", a)
	// earlier of 1.20, uses below way to copy slice to array
	// a := [4]string{}
	// copy(a[:], s)

	// go 1.21
	maxi := max(1, 2, 3, 4, 0)
	fmt.Println("maxi: ", maxi)
	mini := min(1, 2, 3, 0, 6, -1)
	fmt.Println("mini: ", mini)

	// go 1.22.0
	fmt.Println("Range 10")
	for i := range 10 {
		fmt.Println(i)
	}
	fmt.Println("For Declaration")
	for i := 0; i < 10; i++ {
		fmt.Println(i)
	}
}
