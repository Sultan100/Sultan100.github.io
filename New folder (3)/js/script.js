$(document).ready(function () {

    $('a.but').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 500);
        }
        return false;
    });
    
    times=function(){         
        now = new Date();  
        
        hour=24-now.getHours();
        minu=60-now.getMinutes();
        secu=60-now.getSeconds(); 
        str=((hour+'').length==1?hour='0'+hour:hour)+'';
        $('.timebox .hours').html(str[0]+str[1]);
        str=((minu+'').length==1?minu='0'+minu:minu)+'';
        $('.timebox .minutes').html(str[0]+str[1]);
        str=((secu+'').length==1?secu='0'+secu:secu)+'';
        $('.timebox .seconds').html(str[0]+str[1]);
    }   
    times();                                              
    setInterval(times,1000);
    
}); 