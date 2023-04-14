package main

// ? Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// ? https://leetcode.com/problems/binary-tree-level-order-traversal/description/?envType=study-plan&id=level-1?envType=study-plan&id=level-1?envType=study-plan&id=level-1?envType=study-plan&id=level-1

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func levelOrder(root *TreeNode) [][]int {
	if root == nil {
		return [][]int{}
	}
	output := [][]int{{root.Val}}
	recursive([]*TreeNode{root.Left, root.Right}, &output)

	return output
}

func recursive(rootPair []*TreeNode, output *[][]int) {
	if len(rootPair) == 0 {
		return
	}

	var newNodePair []*TreeNode

	var outputChildren []int
	for _, node := range rootPair {
		if node != nil {
			outputChildren = append(outputChildren, node.Val)
			newNodePair = append(newNodePair, node.Left, node.Right)
		}
	}

	if len(outputChildren) > 0 {
		*output = append(*output, outputChildren)
	}

	recursive(newNodePair, output)
}
