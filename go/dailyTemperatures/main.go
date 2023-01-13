package main

import "fmt"

type DayTemp struct {
	value int
	index int
}

func dailyTemperatures(temperatures []int) []int {
	daysTohigherTemp := make([]int, len(temperatures))
	stack := []DayTemp{}

	for i := range temperatures {
		for len(stack) > 0 && temperatures[i] > stack[len(stack)-1].value {
			topStack := stack[len(stack)-1]
			daysTohigherTemp[topStack.index] = i - topStack.index
			stack = stack[:len(stack)-1]
		}
		if i < len(temperatures)-1 && temperatures[i] < (temperatures[i+1]) {
			daysTohigherTemp[i] = 1
			continue
		}
		stack = append(stack, DayTemp{temperatures[i], i})
		daysTohigherTemp[i] = 0
	}

	return daysTohigherTemp
}

func main() {
	temperatures := []int{89, 62, 70, 58, 47, 47, 46, 76, 100, 70}
	result := dailyTemperatures(temperatures)
	fmt.Println(result)
}
