// login / signup popup / forget psw
$('.logReqWrap span').click(() => {
    $('.loginPopupWrap').fadeIn();
    $('body').css({'overflow': 'hidden'});
})
$('.loginPopupWrap .loginContent .closeBtn').click(() => {
    $('.loginPopupWrap').fadeOut();
    $('body').css({'overflow': 'auto'});
});
$('.logReqWrap button, .info .col1 button, .howToConnect .cartWrap button, .price .row2 button').click(() => {
    $('.signupPopupWrap').fadeIn();
    $('body').css({'overflow': 'hidden'});
})
$('.signupPopupWrap .signupContent .closeBtn').click(() => {
    $('.signupPopupWrap').fadeOut();
    $('body').css({'overflow': 'auto'});
});

// forget
$('.loginPopupWrap .loginContent span').click(() => {
    $('.forgetPswPopupWrap').fadeIn();
    $('body').css({'overflow': 'hidden'});
})
$('.forgetPswPopupWrap .forgetPswContent .closeBtn').click(() => {
    $('.forgetPswPopupWrap').fadeOut();
    $('body').css({'overflow': 'auto'});
});

// window < 1024
if($(window).width() < 1024) {
    /*------mob menu toggle--------*/
    let menuToggle = false;
    $('nav .menuBars').click(() => {
        menuToggle = !menuToggle;
        if(menuToggle) {
            $('nav .menuBars .bar1').css({'transition': '0.3s'}).css({'transform': 'rotate(-45deg)'}).css({'top': '10px'});
            $('nav .menuBars .bar2').fadeOut('fast');
            $('nav .menuBars .bar3').css({'transition': '0.3s'}).css({'transform': 'rotate(45deg)'}).css({'top': '10px'}).css({'width': '100%'});
            $('nav .mobNavWrap').slideDown();
        }
        else {
            $('nav .menuBars .bar1').css({'transition': '0.3s'}).css({'transform': 'rotate(0deg)'}).css({'top': '0px'});
            $('nav .menuBars .bar2').fadeIn('fast');
            $('nav .menuBars .bar3').css({'transition': '0.3s'}).css({'transform': 'rotate(0deg)'}).css({'top': '24px'}).css({'width': '20.62px'});
            $('nav .mobNavWrap').slideUp();
        }
    });
}