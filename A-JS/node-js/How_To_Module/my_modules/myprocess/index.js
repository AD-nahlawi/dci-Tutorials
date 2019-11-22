// const command = process.argv[3]



function print ( star, header ) {
    
    let stars = '';
    for(let i = 0; i < star; i++){
        stars += '*'
    }
    console.log(stars);
    console.log(header);
    console.log(stars);

}



// function cal(opetator) {



// }
module.exports = print;
// module.exports.claculate = cal;