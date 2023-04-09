package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

// how I did it in my first try
func detectCycle(head *ListNode) *ListNode {
	mapList := make(map[string]*ListNode)

	for head != nil && head.Next != nil {
		key := fmt.Sprintf("%v_%p", head.Val, head)
		if _, ok := mapList[key]; ok {
			return head
		} else {
			mapList[key] = head
		}
		head = head.Next
	}

	return nil
}

// using Floyd's cycle-finding algorithm (also known as the "tortoise and hare" algorithm)
// the idea behind the algorithm is that if there's a cycle, eventually the tortoise will
// meet the hare, meaning that the slow pointer will meet the fast pointer, and thus detectging
// the cycle.
// In this implementation, we initialize two pointers slow and fast to the head of the linked list.
// We then move slow one step at a time and fast two steps at a time. If there is a cycle in the
// linked list, eventually slow and fast will meet at some node in the cycle.
// Once we detect the cycle, we initialize two pointers ptr1 and ptr2. We set ptr1 to the head of
// the linked list and ptr2 to the node where slow and fast met. We then move both pointers one
// step at a time until they meet at the beginning of the cycle.
func floydsDetectCycle(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return nil
	}

	slow := head
	fast := head

	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next

		if slow == fast {
			// cycle detected
			ptr1 := head
			ptr2 := slow

			for ptr1 != ptr2 {
				ptr1 = ptr1.Next
				ptr2 = ptr2.Next
			}

			return ptr1
		}
	}

	return nil
}
