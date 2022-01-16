package main

// interfaces example

import (
	"fmt"
	"math"
)

type Shape interface {
	area() float64
	perim() float64
}

type Circle struct {
	r float64
}

func (c Circle) area() float64 {
	return c.r * c.r * math.Pi
}

func (c Circle) perim() float64 {
	return 2 * math.Pi * c.r
}

type Rect struct {
	a float64
	b float64
}

func (r Rect) area() float64 {
	return r.a * r.b
}

func (r Rect) perim() float64 {
	return (r.a + r.b) * 2.0
}

func main() {
	c := Circle{
		r: 5.0,
	}

	r := Rect{
		a: 2.0,
		b: 3.0,
	}

	showShape("Circle", c)
	showShape("Rect", r)
}

func showShape(name string, s Shape) {
	fmt.Printf("%v area %.2f\n", name, s.area())
	fmt.Printf("%v area %.2f\n\n", name, s.perim())
}
