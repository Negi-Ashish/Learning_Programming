let items = ["cat", "dog", "elephant", "bat", "lion"]

function group() {
    let new = {}
    for(let i = 0; i < items.length; i++) {
        if(new[items[i].length] === undefined) {
new[items[i].length] = 1
        } else {
new[items[i].length] +=1
        }
    }
}