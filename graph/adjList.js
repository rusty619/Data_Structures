var graph  = {
    A: ["B","F"],
    B: ["A","C"],
    C: ["B","D"],
    D: ["C",'E'],
    E: ["D","F"],
    F: ["E","A"]
}
console.log(graph)