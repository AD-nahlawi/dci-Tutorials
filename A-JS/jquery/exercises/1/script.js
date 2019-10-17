$('body').addClass('bg-dark');
$('div:eq(0)').addClass('container text-center text-info').text('Welcome to Weekend Countdown!');
$('form').css({
                'position': 'absolute',
                'bottom': '120px',
                'left': '170px',
                'border': '1px solid black',
                'height': '40px',
                'width':'70%',}).attr('action','');

$('div:eq(1)').css({
                'border':'1px solid blue',
                'position': 'relative',
                'border': '1px solid black',
                'height': '200px',}).addClass('text-center text-primary').text('You can get here your Information');

$('input').addClass('form-control').attr('type','text').attr('placeholder','Enter your Name');
$('button').addClass('btn btn-info').text('Goo').
    css({'width':'8%',
            'position': 'absolute',
            'left':'95px',
            'bottom': '120px',
            }).
    on('click',function(){  
        let date = new Date();
        let day = date.getDay();
        let daysArr = ['sunDay','monDay','tuseDay','wendsDay','thursDay','friDay','saturday']
            if ((daysArr[day]== 0) || (daysArr[day]== 6) ){
                $('div:eq(1)').text(daysArr[day] + 'weekend');
            }else{
                $('div:eq(1)').text(' today is: ' + daysArr[day] + '! Only ' + (6 -day) + 'day to the Weekend');
            }
    });