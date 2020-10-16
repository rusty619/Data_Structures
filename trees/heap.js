//Max Binary Heap
class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }


    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        var idx = this.values.length-1;
        var element = this.values[idx];
        while(idx > 0){
            var parentIdx = Math.floor((idx-1)/2);
            var parent = this.values[parentIdx];
            if(parent >= element) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    extractMax(){
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
                if(element < left){
                    swap = leftIdx;
                }
            }
            if(rightIdx < length){
                right = this.values[rightIdx];
                if((swap === null && right > element)||(swap !== null && right > left)){
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

var heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
console.log(heap.values)
heap.extractMax();
console.log();
console.log(heap.values)

