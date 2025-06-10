package main

import (
	"fmt"
	"strconv"
	"sync"
)

type CarMap struct {
	lock   sync.RWMutex
	carMap map[string]int
}

func (carMap *CarMap) Inc(key string) {
	carMap.lock.Lock() // if removed this Lock() and Unlock(), then code gives fatal error on multiple goroutine
	carMap.carMap[key]++
	carMap.lock.Unlock()
}

func main() {
	fmt.Println("Hello, world!")
	carMap := &CarMap{carMap: make(map[string]int)}
	var wg sync.WaitGroup
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func(index int) {
			defer wg.Done()
			carMap.Inc("model" + strconv.Itoa(index%4))
		}(i)
	}
	wg.Wait()

	for key, value := range carMap.carMap {
		fmt.Printf("\ncarMap[%v: %v]", key, value)
	}
}
