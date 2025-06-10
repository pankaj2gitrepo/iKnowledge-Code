package main

import (
	"fmt"
)

func main() {
	fmt.Println("hello")

	var num float32 = 39.17
	fmt.Printf("num 1: %v\n", num)
	num = num * 100
	fmt.Printf("num 2: %v\n", num)
	fmt.Printf("num 3: %v\n", fmt.Sprintf("%.2f", num))
}

// 			float32		float64
// num 1: 	0.07		0.07
// num 2: 	7			7.000000000000001
// num 3: 	7.00		7.00

// num 1: 	39.17		39.17
// num 2: 	3916.9998	3917
// num 3: 	3917.00		3917.00

//					float64 	float32		float32
// read QPT			issue		no issue	no issue
// math operation		issue		issue		solve using string
