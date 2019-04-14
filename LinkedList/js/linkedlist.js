/**
 * linked list node
 * @param {any} val value for node
 */
function Node(val) {
  this.val = val;
  this.next = null;
}
/**
 * single linked list data structure
 * @param {any} val head node val
 */
function LinkedList(val) {
  this.head = new Node(val);
}
/**
 * append a new node at the end of the linked list
 */
LinkedList.prototype.append = function(val) {
  var current = this.head;
  // find the last node
  while (current.next !== null) {
    current = current.next;
  }
  current.next = new Node(val);
};
/**
 * append a new node at the beginning of the linked list
 */
LinkedList.prototype.prepend = function(val) {
  var newHead = new Node(val);
  newHead.next = this.head;
  this.head = newHead;
};
/**
 * delete a node by its value
 */
LinkedList.prototype.deleteByValue = function(val) {
  if (this.head === null) return;
  if (this.head.val === val) {
    this.head = this.head.next;
    return;
  }
  var current = this.head;
  while (current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next;
      return;
    }
    current = current.next;
  }
};

LinkedList.prototype.print = function() {
  var current = this.head;
  const result = [];
  while (current !== null) {
    if (current.next !== null) {
      result.push(`${current.val}->`);
    } else {
      result.push(`${current.val}`);
    }
    current = current.next;
  }
  return result.join("");
};

module.exports = LinkedList;
