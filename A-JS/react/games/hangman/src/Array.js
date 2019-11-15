let gussWords = 'javascript'
let gussed_letters = ['a','b','c','j']

 
compare = () => {
let gussArray = gussWords.split('').map((lett) =>{
    if(gussed_letters.includes(lett)){
        return lett
    }else{
        return '-'
    }
})

return gussArray

}

console.log(compare())