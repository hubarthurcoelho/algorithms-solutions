package main

import "fmt"

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan&id=level-1

// ? You are given an array prices where prices[i] is the price of a given stock on the ith day.

// ? You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// ? Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// There's an algorithm for this, Kadane's algorithm:
// https://www.interviewbit.com/blog/maximum-subarray-sum/#:~:text=Kadane's%20Algorithm%20is%20an%20iterative,ending%20at%20the%20previous%20position.
func maxProfit(prices []int) int {
	minValue := prices[0]
	var maxProfit int
	for i := 0; i < len(prices); i++ {
		if prices[i] < minValue {
			minValue = prices[i]
		} else if prices[i]-minValue > maxProfit {
			maxProfit = prices[i] - minValue
		}
	}

	return maxProfit
}

func main() {
	fmt.Println(maxProfit([]int{7, 1, 5, 3, 6, 4}))
}
