package main

import "fmt"

func longestPalindrome(s string) int {
	runeMap := make(map[rune]int)
	runeStrings := []rune(s)

	for _, letter := range runeStrings {
		runeMap[letter]++
	}

	var length int
	var hasOdd bool
	for _, occurance := range runeMap {
		if occurance%2 == 0 {
			length += occurance
		} else {
			length += occurance - 1
			hasOdd = true
		}
	}
	if hasOdd {
		length++
	}
	return length
}

func main() {
	fmt.Println(longestPalindrome("racecar"))
}
