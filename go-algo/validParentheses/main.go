package main

import (
	"fmt"
)

func parenthesesValid(s string) bool {
	mapa := map[string]string{
		"(": ")",
		"{": "}",
		"[": "]",
	}

	stack := []string{}

	for _, value := range []rune(s) {
		switch value {
		case '(', '{', '[':
			stack = append(stack, string(value))
		case ')', '}', ']':
			if len(stack) == 0 || string(value) != mapa[stack[len(stack)-1]] {
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
