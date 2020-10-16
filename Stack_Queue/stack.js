//stack is LIFO
// Creating a stack with Array
// var stack = [];
// stack.unshift(1);
// stack.unshift(2);
// console.log(stack);

// stack.shift();
// console.log(stack);

// creating stack from scratch with linked list

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            newNode.next = temp;
        }
        return ++this.length;
    }

    pop(){
        if(!this.first) return undefined;
        var removeNode = this.first;
        if(this.length === 1){
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.length--;
        return removeNode.val;
    }

    print(){
        var arr = [];
        var current = this.first;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

// var s = new Stack();
// s.push(1);
// s.push(2);
// s.push(3);
// s.print();
// //console.log(s)
// s.pop();
// s.print()
// s.pop();
// s.print()
// console.log(s.length)