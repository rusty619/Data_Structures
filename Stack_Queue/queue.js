//queue is FIFO
//queue used as an array
// var q = [];
// q.push(1);
// q.push(2);
// q.push(3);

class Node {
    constructor(data){
        this.data = data;
        this.next= null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    enqueue(data){
        var newNode = new Node(data);
        if(!this.first){
            this.first = newNode;
            this.last = this.first;
        } else {
            var temp = this.first;
            this.first = newNode;
            newNode.next = temp;
        }
        this.length++;
        return this;
    }

    dequeue(){
        if(!this.first) return null;
        var current = this.first;
        while(current.next){
            var lastNode = current;
            current = current.next;
        }
        this.tail = lastNode;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.first = null;
            this.last = null;
        }
        return current;
    }

    print(){
        var arr = [];
        var current = this.first;
        while(current){
            arr.push(current.data);
            current = current.next;
        }
        console.log(arr);
    }
}

var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.print()
q.dequeue();
q.print();