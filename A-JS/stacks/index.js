function stack(){
    this.dataStore = []
    this.top = 0
    this.push = push
    this.pop = pop
    this.peek = peek
    this.clear = clear
    this.length = length
}

function push(element){
    console.log('pushed')
    this.dataStore[this.top++] = element
}

function peek(){
    console.log('peeked')
    return this.dataStore[this.top-1]
}

function pop(){
    console.log('poped',this.dataStore[--this.top])
    return this.dataStore[--this.top]
}

function clear(){
console.log('cleared')
    this.top = 0
}

function length(){
    console.log('length', this.top)
    return this.top
}











function isPlaindrome(word){

var newStack = new stack()
for(var i = 0; i < word.length; ++i){

    newStack.push(word[i])
    console.log(newStack.dataStore)
}

var rword = ''
while(newStack.length() > 0){
    rword += newStack.pop()
    // console.log(rword += newStack.pop())
}

if(word == rword){
    return true
}else{
    return false
} 

}

var word = 'racecar'
if(isPlaindrome(word)){
    console.log(word + ' is a plaindrome')
}else{
    console.log(word + ' is not a plaindrome')
}

// word = 'hello'
// if(isPlaindrome(word)){
//     console.log(word + ' is a plaindrome')
// }else{
//     console.log(word + ' is not a plaindrome')
// }
















