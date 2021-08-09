queue = [100, 200, 300]

while(queue.length) {
    while(queue[0]>=100) {
        console.log(queue.shift())
        console.log(queue)
    }
}
console.log(queue)