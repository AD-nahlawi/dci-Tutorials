// process.stdin.write('world')
let questions = Array('what is your name?\n ', 'what you drink?\n ', 'whats is you f programming language?\n ');
let answers = Array();

function ask(questionIndex){
        
    process.stdout.write(`${ questions [ questionIndex ] }`);
    process.stdout.write(' > ');
}

ask(0)
process.stdin.on('data',function( data ){

    answers.push(data.toString().trim())
    console.log('the data is pushed to answers Array');

    if( answers.length < questions.length ){

        console.log('the length of answers Array is: ' + answers.length);
        ask(answers.length);
    }else{

        process.exit();
    }
})

process.on('exit', () => {

    console.log('the process is exiting! \n\n');
    process.stdout.write(`Go drink ${answers[1]}  ${answers[0]} you can finish writing  ${answers[2]} Code later! \n\n`)
})


