$(document).ready(() => {
    if($(window).width() < 1024) {
        // slice username
        if($('.userImgName span').text().length >= 7) {
            $('.userImgName span').text($('.userImgName span').text().slice(0, 7) + '..');
        }

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

    // slice username
    if($('.userImgName span').text().length >= 10) {
        $('.userImgName span').text($('.userImgName span').text().slice(0, 10) + '...');
    }
});