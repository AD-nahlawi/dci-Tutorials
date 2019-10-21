const fs = require( 'fs' );

function callback_function( error , data ) {   // first argument are for the errors! secund for data ro else!
    if( error ){
        console.error('there is an error!: ', error );
    }
    console.log( data );
}



fs.readFile( '/home/fes-w/Desktop', callback_function );


