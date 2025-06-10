package main

import "fmt"

const (
	count = 1
)

const (
	count1_1 = iota
	count1_2 = iota
)

const (
	count2_1 = iota
	count2_2
)

const (
	count3_1 = iota * 2
	count3_2
	count3_3
)

const (
	count4_1 = iota + 2
	count4_2 = 2 << iota // shifting 2 left by 1
)

func main() {
	fmt.Println("hello")

	var i int
	i = 10
	fmt.Println(i)

	var j float32 = 3.14
	fmt.Println(j)

	name := "MSD"
	fmt.Println(name)

	firstname, lastname := "MS", "Dhoni"
	fmt.Println(firstname, lastname)

	var location *string = new(string)
	*location = "Pune"
	fmt.Println(*location)

	contact := "9545"
	fmt.Println(contact)

	contactPtr := &contact
	fmt.Println(contactPtr, *contactPtr)

	contact = "9999"
	fmt.Println(contactPtr, *contactPtr)

	const id = 44
	fmt.Println(id)
	fmt.Println(id + 4)
	fmt.Println(id + 4.4)

	fmt.Println(count)
	fmt.Println(count1_1, count1_2)
	fmt.Println(count2_1, count2_2)
	fmt.Println(count3_1, count3_2, count3_3)
	fmt.Println(count4_1, count4_2)
	var cars [4]int
	cars[0] = 1
	cars[1] = 2
	cars[2] = 3
	cars[3] = 4

	fmt.Println(cars)
	fmt.Println(cars[2])

	drivers := [4]int{1, 2, 3, 4}
	fmt.Println(drivers)
	fmt.Println(drivers[2])
	c1 := []int{1, 2, 3}
	fmt.Println(c1)

	c2 := append(c1, 4, 5, 6)
	fmt.Println(c2)

	c3 := cars[:]
	fmt.Println(c3)

	c4 := cars[1:]
	fmt.Println(c4)

	c5 := cars[:3]
	fmt.Println(c5)

	c6 := cars[1:3]
	fmt.Println(c6)
	m := map[string]int{"BMW": 1}
	fmt.Println(m)
	fmt.Println(m["BMW"])
	m["BMW"] = 10
	fmt.Println(m)
	delete(m, "BMW")
	fmt.Println(m)

	type player struct {
		ID        int
		FirstName string
		LastName  string
	}
	var p player
	p.ID = 1
	p.FirstName = "MS"
	p.LastName = "Dhoni"
	fmt.Println(p)
	p2 := player{ID: 2, FirstName: "Sachin", LastName: "Tendulkar"}
	fmt.Println(p2)
}
