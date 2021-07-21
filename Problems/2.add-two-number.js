/**
  Problem statement: 
    You are given two non-empty linked lists representing two non-negative integers. 
    The digits are stored in reverse order, and each of their nodes contains a single digit.
    Add the two numbers and return the sum as a linked list.
 
  Example: 
    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = (l1, l2) => {
    let result = new ListNode();
    let head = result;
    let carry = 0;
    
    while (l1 || l2) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = parseInt(sum / 10);
        head.val = sum % 10;
        
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        if (l1 || l2) {
            head.next = new ListNode();
            head = head.next;
        }
    }
    
    if (carry > 0) {
        head.next = new ListNode(carry);
    }
    
    return result;
};

console.log(addTwoNumbers([2,4,3],[5,6,4]))