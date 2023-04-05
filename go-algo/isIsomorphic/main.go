package main

func isIsomorphic(s string, t string) bool {
	sArr := []rune(s)
	tArr := []rune(t)

	sConversionMap := make(map[rune]rune)
	tConversionMap := make(map[rune]rune)
	for index, letter := range sArr {
			if _, ok := sConversionMap[letter]; ok {
					continue
			}
			if _, ok := tConversionMap[tArr[index]]; ok {
					continue
			}
			sConversionMap[letter] = tArr[index]
			tConversionMap[tArr[index]] = letter
	}

	newRune := []rune{}
	for _, letter := range sArr {
			newRune = append(newRune, sConversionMap[letter])
	}

	if string(newRune) == t {
			return true
	}

	return false
}

func main() {
	isIsomorphic("egg", "add") // true
}