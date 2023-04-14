package main

// ? Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

// ? Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

// ? https://leetcode.com/problems/n-ary-tree-preorder-traversal/description/?envType=study-plan&id=level-1?envType=study-plan&id=level-1

type Node struct {
	Val      int
	Children []*Node
}

func preorder(root *Node) []int {
	var output []int

	recursive(root, &output)

	return output
}

func recursive(root *Node, output *[]int) {
	if root == nil {
		return
	}

	*output = append(*output, root.Val)

	for _, child := range root.Children {
		recursive(child, output)
	}
}
