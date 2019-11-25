const dns = require ('dns');



// dns.lookup('www.google.com',(error, addressess, family)=>{  // lookup('www.x.com',(error, addressess, family)=>{});
//     console.log('addresses',addressess);
//     console.log('family',family);
    
// })


dns.resolve4('www.google.com',( error, addressess )=>{  // resolve4('www.x.com',(error, addressess)=>{})
    if ( error ) throw error;

    console.log(`the addresses is:  ${ JSON.stringify( addressess ) }`);

    addressess.forEach( ( addresss ) => {

        dns.reverse( addresss, ( error, hostnames )=> {
               if( error ) throw error;

        console.log(`reserve for  ${ addresss } : ${ JSON.stringify( hostnames ) }`);
        });
    });
});


// for( let ports = 0; ports <= 100; ports++ ) {

//     dns.lookupService( '192.168.178.100', ports , (error, hostname, services ) => {  // lookupService('ip',port,(error, hostnames, services)=>{})
//     if ( error ) {
//         throw error;
//     };
//         console.log( hostname , 'port : ' + ports + ' on service ' + services );
//     });
// };