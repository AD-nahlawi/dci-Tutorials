function techanolla( option ) {

    let images = document.querySelectorAll('.techanolla');

    if (option.shadow_type === 'hard') {
        option.shadow_type = '20px';
    }else{
        option.shadow_type = '0px';
    }

    images.forEach((item)=>{
        
        item.style.boxShadow = `5px 10px 10px ${option.shadow_type} rgba(0,0,0,0.22)`;

        if(option.padding){
            item.style.padding = '1em';
        }
        item.style.margin = '1em';
    })
}

module.exports.techanolla = techanolla;