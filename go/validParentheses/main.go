package main

import (
	"fmt"
)

func parenthesesValid(s string) bool {
	mapa := map[rune]rune{
		'(': ')',
		'{': '}',
		'[': ']',
	}

	stack := []rune{}

	for _, value := range s {
		switch value {
		case '(', '{', '[':
			stack = append(stack, value)
		case ')', '}', ']':
			if len(stack) == 0 || value != mapa[stack[len(stack)-1]] {
				return false
			}
			stack = stack[:len(stack)-1]
		}
	}
	return len(stack) == 0
}

func main() {
	parentheses := "([])()()"
	isValid := parenthesesValid(parentheses)
	fmt.Println(isValid)
}
