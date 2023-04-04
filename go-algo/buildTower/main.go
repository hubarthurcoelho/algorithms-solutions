package main

import (
	"fmt"
	"strings"
)

func TowerBuilder(nFloors int) []string {
	array := make([]string, nFloors)
	numberOfStars := 1

	for increment := 0; increment < nFloors-1; increment++ {
		numberOfStars += 2
	}
	numberOfChars := numberOfStars

	for i := nFloors - 1; i >= 0; i-- {
		fmt.Println(numberOfChars, numberOfStars)
		whiteSpace := (numberOfChars - numberOfStars) / 2
		fmt.Println(whiteSpace)
		str := fmt.Sprintf(
			"%s%s%s",
			strings.Repeat(" ", whiteSpace),
			strings.Repeat("*", numberOfStars),
			strings.Repeat(" ", whiteSpace),
		)
		array[i] = str
		numberOfStars -= 2
	}

	fmt.Println("[")
	for _, str := range array {
		fmt.Printf("  \"%s\",\n", str)
	}
	fmt.Println("]")

	return array
}

func main() {
	TowerBuilder(6)
}
