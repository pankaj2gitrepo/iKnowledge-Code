package main

import (
	"fmt"
	"sync"
)

func main() {
	fmt.Println("Calculating NetTotal")
	var wg sync.WaitGroup
	var lock sync.RWMutex
	netTotal := 0
	for i := 0; i < 10000; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			lock.Lock()
			netTotal++
			lock.Unlock()
		}()
	}

	//time.Sleep(30 * time.Second)
	wg.Wait()
	fmt.Print("NetTotal: ", netTotal)
}
