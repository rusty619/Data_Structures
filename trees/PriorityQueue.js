class Node {
    constructor(val,priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue{ //Min Heap
    constructor(){
        this.values = [];
    }

    enqueue(val,priority){
        var newNode = new Node(val,priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp(){
        let idx = this.values.length-1;
        let element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];
            if(element.priority > parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue(){
        let end = this.values.length-1;
        this.values[0] = this.values[end];
        this.values.pop();
        this.sinkDown();
    }

    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftIdx = 2*idx+1;
            let rightIdx = 2*idx+2;
            let swap = null;
            let left,right;
            if(leftIdx < length){
                left = this.values[leftIdx];
                if(left.priority < element.priority){
                    swap = leftIdx;
                }
            }
            if(rightIdx < length){
                right = this.values[rightIdx];
                if((swap === null && right.priority < element.priority)||(swap !== null && right.priority < left.priority)){
                    swap = rightIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap; 
        }
    }

}

let ER = new PriorityQueue();
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)
console.log(ER.values,ER.priority)
console.log(ER.values)

ER.dequeue();
console.log(ER.values);

ER.dequeue();
console.log(ER.values);