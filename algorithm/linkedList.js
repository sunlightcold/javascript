/**
 * 节点类
 */
class LNode {
  element;

  previous;

  next;

  constructor(element) {
    this.element = element;
    this.previous = this.next = null;
  }
}

/**
 * 链表类
 */
class LList {
  head = new LNode('head');

  find(item) {
    let currNode = this.head;
    while (currNode && currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }
  
  remove(item) {
    let currNode = this.head;

    while (currNode && currNode.element !== item) {
      currNode = currNode.next;
    }
    if (currNode) {
      const prevNode = currNode.previous;
      const nextNode = currNode.next;
      prevNode.next = nextNode;
    }
  }

  insert(newElement, item) {
    let newNode = new LNode(newElement);
    let currNode = this.find(item);
    if (currNode == null) {
      throw new Error(`无法找到插入节点 ${item}`);
    }
    let nextNode = currNode.next;
    currNode.next = newNode;
    newNode.previous = currNode;
    newNode.next = nextNode;
  }

  display() {
    let currNode = this.head;

    while (currNode) {
      console.log(currNode.element);
      currNode = currNode.next;
    }
  }
}

const LL = new LList();

LL.insert('a', 'head');

LL.insert('b', 'a');

LL.insert('c', 'b');

LL.insert('d', 'c');

LL.remove('b');

LL.insert('b', 'a');

LL.display();
