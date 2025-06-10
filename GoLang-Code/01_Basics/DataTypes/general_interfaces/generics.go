package main

import "fmt"

func main() {
	fmt.Println("Hello Generics")
	c := Catlog{name: "GL"}
	print(c)
}

func print[T Printer](value T) {
	value.Print()
}

type Catlog struct {
	name string
}

func (d Catlog) Print() {
	fmt.Println(d.name)
}

type Printer interface {
	Print()
}

type Stringer interface {
	ToString()
}
