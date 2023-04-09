
type ListNode struct {
  Val int
  Next *ListNode
}
 
 func reverseList(head *ListNode) *ListNode {
	var prev *ListNode = nil
	current := head
	var next *ListNode = nil

	for current != nil {
		next = current.Next
		current.Next = prev
		prev = current
		current = next
	}
	return prev
}
