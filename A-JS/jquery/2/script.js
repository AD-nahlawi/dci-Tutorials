$('#check_Input').on('change',function(){
    if($(this).prop('checked') == true){
       $('#pass_Input').attr('type','text') ;
    }else{
        $('#pass_Input').attr('type','password') ;
    }
});