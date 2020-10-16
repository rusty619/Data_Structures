class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(data){
        var newNode = new Node(data);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(data === current.data) return undefined;
            else if(data < current.data){
                if(!current.left){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
            else {
                if(!current.right){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(data){
        if(!this.root) return false;
        var current = this.root;
        var found = false;
        while(current && !found){
            if(data < current.data)
               current = current.left;
               else if(data > current.data)
                    current = current.right;
                    else 
                       found = true;
        }
        return found;
    }    

    BFS(){
        var data =  [],
            queue = [],
            node  = this.root;
        while(queue.length){
            node = queue.shift();
            data.push(node.data);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }   
        return data; 
    }

    //Depth First Search Methods

    // Root-Left-Right
    preorder(){
        var data = [];
        var current = this.root;
        function traverse(node){
            data.push(node.data);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

    // Left-Right-Root
    postorder(){
        var data = [];
        var current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.data);
        }
        traverse(current);
        return data;
    }

    // left-root-right
    inorder(){
        var data = [];
        var current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.data);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

}

var tree = new BinarySearchTree();
tree.insert(6);
tree.insert(9);
tree.insert(10);
tree.insert(3);
tree.insert(4);
tree.insert(2);
tree.insert(1);
console.log(tree.inorder())