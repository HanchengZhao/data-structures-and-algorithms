var LinkedList = require("./linkedlist");

describe("LinkedList", () => {
  it("initializes with the correct head node", () => {
    let ll = new LinkedList(123);
    expect(ll.print()).toEqual("123");
  });

  it("append function works correctly", () => {
    let ll = new LinkedList(0);
    ll.append(1);
    ll.append(2);
    expect(ll.print()).toEqual("0->1->2");
  });

  it("prepend function works correctly", () => {
    let ll = new LinkedList(0);
    ll.prepend(1);
    expect(ll.print()).toEqual("1->0");
  });

  it("deletes the node in the middle correctly", () => {
    let ll = new LinkedList(0);
    ll.append(1);
    ll.append(2);
    ll.deleteByValue(1);
    expect(ll.print()).toEqual("0->2");
  });

  it("deletes the head correctly", () => {
    let ll = new LinkedList(0);
    ll.append(1);
    ll.append(2);
    ll.deleteByValue(0);
    expect(ll.print()).toEqual("1->2");
  });

  it("deletes the tail correctly", () => {
    let ll = new LinkedList(0);
    ll.append(1);
    ll.append(2);
    ll.deleteByValue(2);
    expect(ll.print()).toEqual("0->1");
  });
});
