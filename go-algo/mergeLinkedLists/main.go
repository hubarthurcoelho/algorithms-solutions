package main


type ListNode struct {
  Val int
  Next *ListNode
}

// In this case, we have two linked Lists. Essentially, a linked list is a set of nodes,
// and each node has a value and a pointer to the next node in the list.
// In this case, it is a singly-linked list, each means each element points only to the
// next node in the list. A doubly-linked list, however, will point to the next and previous nodes in
// the list.
func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	// we create the dummy to be the node that points to the head of the list.
	dummy := &ListNode{}
	// tail will get updated every time inside the for loop, and to return the list head,
	// we just need to get the node that dummy points to.
	tail := dummy
  for list1 != nil && list2 != nil {
		if list1.Val <= list2.Val {
			tail.Next = list1
			list1 = list1.Next
		} else {
			list2 = list2.Next
			tail.Next = list2
		}
		tail = tail.Next
	}

	if list1 != nil {
		tail.Next = list1
	} else {
		tail.Next = list2
	}

	return dummy.Next
}
