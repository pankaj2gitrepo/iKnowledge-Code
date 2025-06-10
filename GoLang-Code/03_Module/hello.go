package main

import (
	"errors"
	"fmt"
	"net/http"

	"github.com/ps/webservice/controllers"
	"github.com/ps/webservice/models"
)

func main() {
	fmt.Println("Hello")

	u := models.User{
		ID:   1,
		Name: "MSD",
	}
	fmt.Println(u)

	fn := "MS"
	ln := "Dhoni"
	name, errorReturned := concat(fn, ln)
	fmt.Println(name, errorReturned)

	var i int
	for i < 5 {
		i++
		println(i)
		if i == 3 {
			println("continue")
			continue
		}
		if i == 4 {
			println("break")
			break
		}
	}

	for j := 0; j < 5; j++ {
		println(j)
		if j == 3 {
			println("continue")
			continue
		}
		if j == 4 {
			println("break")
			break
		}
	}

	var k int
	for {
		k++
		println(k)
		if k == 3 {
			println("continue")
			continue
		}
		if k == 4 {
			println("break")
			break
		}
	}

	println("Range For")
	cars := []string{"Mercedece", "Audi", "BMW"}
	for _, car := range cars {
		println(car)
	}

	controllers.RegisterControllers()
	http.ListenAndServe(":3000", nil)
}

func concat(firstName string, lastName string) (string, error) {
	fmt.Println("Inside getDetail")
	return firstName + "_" + lastName, errors.New("Something went wrong")
}
