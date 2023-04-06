package main

type bytePosition struct {
	letter byte
	position int
}

func isSubsequence(s string, t string) bool {
	sBytes := []byte(s)
	var positionArr []bytePosition
	for i, sByte := range sBytes {
			positionArr = append(positionArr, bytePosition{letter: sByte, position: i})
	}

	tBytes := []byte(t)
	totalLetters := len(s)
	count := 0
	for _, tByte := range tBytes {
			if totalLetters <= count {
					continue
			}
			if positionArr[count].letter == tByte && positionArr[count].position == count {
					count++
			}
	}

	return count == totalLetters
}

func main() {
	result := isSubsequence("abc", "ahbgdc")
	fmt.Println(result)// Output: true
}
