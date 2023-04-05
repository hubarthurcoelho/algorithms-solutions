package main

func runningSum(nums []int) []int {
	for index, _ := range nums {
			if index - 1 < 0 {
					continue
			}
			nums[index] += nums[index - 1]
	}

	return nums
}

func main() {
	runningSum([]int{1, 2, 3, 4}) // [1,3,6,10]
}