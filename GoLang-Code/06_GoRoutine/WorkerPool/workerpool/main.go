package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Print("Hello WorkerPool")
	wp := NewWorkerPool(4)
	wp.Run()
	for i := 0; i < 50; i++ {
		wp.AddTask(i)
		time.Sleep(50 * time.Millisecond)
	}
}

type WorkerPool struct {
	poolCapacity int
	task         chan func()
}

func NewWorkerPool(poolCapacity int) *WorkerPool {
	return &WorkerPool{poolCapacity: poolCapacity, task: make(chan func())}
}

func (wp *WorkerPool) Run() {
	for i := 1; i <= wp.poolCapacity; i++ {
		go func(i int, wpIn *WorkerPool) {
			for task := range wpIn.task {
				fmt.Printf("\nGoRoutine:%v", i)
				task()
				time.Sleep(time.Duration(i) * 100 * time.Millisecond)
			}
		}(i, wp)
	}
}

func (wp *WorkerPool) AddTask(i int) {
	wp.task <- func() {
		fmt.Printf(" Task:%v", i)
	}
}
