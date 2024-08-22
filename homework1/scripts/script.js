$(function(){
    let check = true;
    for(let i = 0; i < $('.phone__title').text(); i++){
        if($('.phone__title').text() > 0){
            if(check){
                $('.timer').animate({
                    height: '500px',
                }, 60000, function(){
                    $('.phone__title').text($('.phone__title').text() - 1)
                })
                check = false;
            }
            else{
                $('.timer').animate({
                    height: '0px',
                }, 60000, function(){
                    $('.phone__title').text($('.phone__title').text() - 1)
                })
                check = true;
            }
        }
    }
    
})