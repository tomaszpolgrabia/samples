package main

import (
	"fmt"
	"github.com/mariomac/gostream/stream"
)

func isEven(n int) bool {
	return n%2 == 0
}

func main() {
	fmt.Println("Hello World")
	stream.Of(0, 1, 2, 3, 4).
		Filter(func(n int) bool {
			return n%2 == 0
		}).
		ForEach(func(n int) {
			fmt.Printf("Number %v\n", n)
		})
}
