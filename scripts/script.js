$(document).ready(() => {
    // navigation scroll to element
    $('nav .descUl li').eq(0).click(() => {
        window.scrollTo({
			top: $('.about').offset().top - 69,
			behavior: 'smooth'
		});
        $('nav .descUl li').eq(0).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .descUl li').eq(1).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
    });
    $('nav .descUl li').eq(1).click(() => {
        window.scrollTo({
			top: $('.howItWorks').offset().top - 69,
			behavior: 'smooth'
		});
        $('nav .descUl li').eq(1).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .descUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
    });
    $('nav .descUl li').eq(2).click(() => {
        window.scrollTo({
			top: $('.price').offset().top - 20,
			behavior: 'smooth'
		});
        $('nav .descUl li').eq(2).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .descUl li').eq(1).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
    });
    $('nav .descUl li').eq(3).click(() => {
        window.scrollTo({
			top: $('.howToConnect').offset().top - 100,
			behavior: 'smooth'
		});
        $('nav .descUl li').eq(3).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .descUl li').eq(1).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
    });
    $('nav .descUl li').eq(4).click(() => {
        window.scrollTo({
			top: $('.reviews').offset().top - 100,
			behavior: 'smooth'
		});
        $('nav .descUl li').eq(4).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .descUl li').eq(1).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
    });
    $('nav .descUl li:nth-child(6)').click(() => {
        window.scrollTo({
			top: $('.faq').offset().top - 100,
			behavior: 'smooth'
		});
        $('nav .descUl li').eq(5).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .descUl li').eq(1).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
    });
    $('footer ul li:nth-child(1)').click(() => {
        window.scrollTo({
			top: $('.about').offset().top - 69,
			behavior: 'smooth'
		});
        $('nav .descUl li').eq(0).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .descUl li').eq(1).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});

        $('nav .mobUl li').eq(0).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .mobUl li').eq(1).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
    });
    $('footer ul li:nth-child(2)').click(() => {
        window.scrollTo({
			top: $('.howItWorks').offset().top - 69,
			behavior: 'smooth'
		});
        $('nav .descUl li').eq(1).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .descUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});

        $('nav .mobUl li').eq(1).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .mobUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
    });
    $('footer ul li:nth-child(3)').click(() => {
        window.scrollTo({
			top: $('.price').offset().top - 20,
			behavior: 'smooth'
		});
        $('nav .descUl li').eq(2).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .descUl li').eq(1).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});

        $('nav .mobUl li').eq(2).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .mobUl li').eq(1).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
    });
    $('footer ul li:nth-child(4)').click(() => {
        window.scrollTo({
			top: $('.howToConnect').offset().top - 100,
			behavior: 'smooth'
		});
        $('nav .descUl li').eq(3).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .descUl li').eq(1).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});

        $('nav .mobUl li').eq(3).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .mobUl li').eq(1).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
    });
    $('footer ul li:nth-child(5)').click(() => {
        window.scrollTo({
			top: $('.reviews').offset().top - 100,
			behavior: 'smooth'
		});
        $('nav .descUl li').eq(4).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .descUl li').eq(1).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});

        $('nav .mobUl li').eq(4).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .mobUl li').eq(1).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
    });
    $('footer ul li:nth-child(6)').click(() => {
        window.scrollTo({
			top: $('.faq').offset().top - 100,
			behavior: 'smooth'
		});
        $('nav .descUl li').eq(5).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .descUl li').eq(1).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});

        $('nav .mobUl li').eq(5).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .mobUl li').eq(1).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
    });

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

    // faq slide up / slide down 
    $('main .faq .container .col1 .items .textImg p span').hide();
    $('main .faq .container .col2 .items .textImg p span').hide();
    let toggle1 = false;
    $('main .faq .container .col1 .items .textImg:nth-child(1) img').click(() => {
        toggle1 = !toggle1;
        if(toggle1) {
            $('main .faq .container .col1 .items .textImg:nth-child(1) p span').slideDown();
            $('main .faq .container .col1 .items .textImg:nth-child(1) img').attr('src', 'img/minus.svg');
        }
        else {
            $('main .faq .container .col1 .items .textImg:nth-child(1) p span').slideUp();
            $('main .faq .container .col1 .items .textImg:nth-child(1) img').attr('src', 'img/plus.svg');
        }
    });

    let toggle2 = false;
    $('main .faq .container .col1 .items .textImg:nth-child(2) img').click(() => {
        toggle2 = !toggle2;
        if(toggle2) {
            $('main .faq .container .col1 .items .textImg:nth-child(2) p span').slideDown();
            $('main .faq .container .col1 .items .textImg:nth-child(2) img').attr('src', 'img/minus.svg');
        }
        else {
            $('main .faq .container .col1 .items .textImg:nth-child(2) p span').slideUp();
            $('main .faq .container .col1 .items .textImg:nth-child(2) img').attr('src', 'img/plus.svg');
        }
    });

    let toggle3 = false;
    $('main .faq .container .col1 .items .textImg:nth-child(3) img').click(() => {
        toggle3 = !toggle3;
        if(toggle3) {
            $('main .faq .container .col1 .items .textImg:nth-child(3) p span').slideDown();
            $('main .faq .container .col1 .items .textImg:nth-child(3) img').attr('src', 'img/minus.svg');
        }
        else {
            $('main .faq .container .col1 .items .textImg:nth-child(3) p span').slideUp();
            $('main .faq .container .col1 .items .textImg:nth-child(3) img').attr('src', 'img/plus.svg');
        }
    });

    let toggle4 = false;
    $('main .faq .container .col1 .items .textImg:nth-child(4) img').click(() => {
        toggle4 = !toggle4;
        if(toggle4) {
            $('main .faq .container .col1 .items .textImg:nth-child(4) p span').slideDown();
            $('main .faq .container .col1 .items .textImg:nth-child(4) img').attr('src', 'img/minus.svg');
        }
        else {
            $('main .faq .container .col1 .items .textImg:nth-child(4) p span').slideUp();
            $('main .faq .container .col1 .items .textImg:nth-child(4) img').attr('src', 'img/plus.svg');
        }
    });

    let toggle5 = false;
    $('main .faq .container .col2 .items .textImg:nth-child(1) img').click(() => {
        toggle5 = !toggle5;
        if(toggle5) {
            $('main .faq .container .col2 .items .textImg:nth-child(1) p span').slideDown();
            $('main .faq .container .col2 .items .textImg:nth-child(1) img').attr('src', 'img/minus.svg');
        }
        else {
            $('main .faq .container .col2 .items .textImg:nth-child(1) p span').slideUp();
            $('main .faq .container .col2 .items .textImg:nth-child(1) img').attr('src', 'img/plus.svg');
        }
    });

    let toggle6 = false;
    $('main .faq .container .col2 .items .textImg:nth-child(2) img').click(() => {
        toggle6 = !toggle6;
        if(toggle6) {
            $('main .faq .container .col2 .items .textImg:nth-child(2) p span').slideDown();
            $('main .faq .container .col2 .items .textImg:nth-child(2) img').attr('src', 'img/minus.svg');
        }
        else {
            $('main .faq .container .col2 .items .textImg:nth-child(2) p span').slideUp();
            $('main .faq .container .col2 .items .textImg:nth-child(2) img').attr('src', 'img/plus.svg');
        }
    });

    let toggle7 = false;
    $('main .faq .container .col2 .items .textImg:nth-child(3) img').click(() => {
        toggle7 = !toggle7;
        if(toggle7) {
            $('main .faq .container .col2 .items .textImg:nth-child(3) p span').slideDown();
            $('main .faq .container .col2 .items .textImg:nth-child(3) img').attr('src', 'img/minus.svg');
        }
        else {
            $('main .faq .container .col2 .items .textImg:nth-child(3) p span').slideUp();
            $('main .faq .container .col2 .items .textImg:nth-child(3) img').attr('src', 'img/plus.svg');
        }
    });

    let toggle8 = false;
    $('main .faq .container .col2 .items .textImg:nth-child(4) img').click(() => {
        toggle8 = !toggle8;
        if(toggle8) {
            $('main .faq .container .col2 .items .textImg:nth-child(4) p span').slideDown();
            $('main .faq .container .col2 .items .textImg:nth-child(4) img').attr('src', 'img/minus.svg');
        }
        else {
            $('main .faq .container .col2 .items .textImg:nth-child(4) p span').slideUp();
            $('main .faq .container .col2 .items .textImg:nth-child(4) img').attr('src', 'img/plus.svg');
        }
    });
    
    /*--------reviews slider function---------*/
    let containerYPos = 0;
    let count = 1;
    $('.reviews .count .countChild').text(count);
    if(containerYPos == 0) {
        $('.reviews .count img').eq(0).hide();
    }
    $('.reviews .count img').eq(1).click(() => {
        count++;
        $('.reviews .count .countChild').text(count);
        containerYPos -= 100;
        $('main .reviews .sliderWrap').animate({'left': `${containerYPos}%`});
        if(containerYPos < 0) {
            $('.reviews .count img').eq(0).show();
        }
        if(containerYPos <= -1100) {
            $('.reviews .count img').eq(1).hide();
        }
        if($('.reviews .count .countChild').text().length = 1) {
            count = String("0" + count);
        }
    });
    $('.reviews .count img').eq(0).click(() => {
        count--;
        $('.reviews .count .countChild').text(count);
        containerYPos += 100;
        $('main .reviews .sliderWrap').animate({'left': `${containerYPos}%`});
        if(containerYPos == 0) {
            $('.reviews .count img').eq(0).hide();
        }
        if(containerYPos > -1100) {
            $('.reviews .count img').eq(1).show();
        }
    });
    
    // window < 1024
    if($(window).width() < 1024) {
        // navigation scroll to element 
        $('nav .mobUl li').eq(0).click(() => {
            window.scrollTo({
                top: $('#about').offset().top - 240,
                behavior: "smooth"
            });
            $('nav .mobUl li').eq(0).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
            $('nav .mobUl li').eq(1).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
            $('nav .mobUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
            $('nav .mobUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
            $('nav .mobUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
            $('nav .mobUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        });
        $('nav .mobUl li').eq(1).click(() => {
            window.scrollTo({
                top: $('.howItWorks').offset().top - 69,
                behavior: 'smooth'
            });
            $('nav .mobUl li').eq(1).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
            $('nav .mobUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
            $('nav .mobUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
            $('nav .mobUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
            $('nav .mobUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
            $('nav .mobUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        });
        $('nav .mobUl li').eq(2).click(() => {
            window.scrollTo({
                top: $('.price').offset().top - 69,
                behavior: 'smooth'
            });
            $('nav .mobUl li').eq(2).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
            $('nav .mobUl li').eq(1).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
            $('nav .mobUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
            $('nav .mobUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
            $('nav .mobUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
            $('nav .mobUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        });
        $('nav .mobUl li').eq(3).click(() => {
            window.scrollTo({
                top: $('.howToConnect').offset().top - 69,
                behavior: 'smooth'
            });
            $('nav .mobUl li').eq(3).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
            $('nav .mobUl li').eq(1).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
            $('nav .mobUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
            $('nav .mobUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
            $('nav .mobUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
            $('nav .mobUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        });
        $('nav .mobUl li').eq(4).click(() => {
            window.scrollTo({
                top: $('.reviews').offset().top - 69,
                behavior: 'smooth'
            });
            $('nav .mobUl li').eq(4).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
            $('nav .mobUl li').eq(1).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
            $('nav .mobUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
            $('nav .mobUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
            $('nav .mobUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
            $('nav .mobUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        });

        $('nav .mobUl li').eq(5).click(() => {
            window.scrollTo({
                top: $('.faq').offset().top - 69,
                behavior: 'smooth'
            });
            $('nav .mobUl li').eq(5).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
            $('nav .mobUl li').eq(1).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
            $('nav .mobUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
            $('nav .mobUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
            $('nav .mobUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
            $('nav .mobUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        });
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

    $('ul li').click(() => {
        menuToggle = false;
        $('nav .menuBars .bar1').css({'transition': '0.3s'}).css({'transform': 'rotate(0deg)'}).css({'top': '0px'});
        $('nav .menuBars .bar2').fadeIn('fast');
        $('nav .menuBars .bar3').css({'transition': '0.3s'}).css({'transform': 'rotate(0deg)'}).css({'top': '24px'}).css({'width': '20.62px'});
        $('nav .mobNavWrap').slideUp();
    });

    // ancor links by id
    if(location.search === '?path=howItWorks') { 
        window.scrollTo({
            top: $('#howItWorks').offset().top - 100,
            behavior: "smooth"
        });
        $('nav .descUl li').eq(1).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .mobUl li').eq(1).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .descUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
    }
    else if(location.search === '?path=about') {
        window.scrollTo({
            top: $('#about').offset().top - 240,
            behavior: "smooth"
        });
        $('nav .descUl li').eq(0).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .mobUl li').eq(0).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .descUl li').eq(1).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(1).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
    }
    else if(location.search === '?path=prices') {
        window.scrollTo({
            top: $('#price').offset().top - 80,
            behavior: "smooth"
        });
        $('nav .descUl li').eq(2).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .mobUl li').eq(2).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .descUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
    }
    else if(location.search === '?path=howToIntegrate') {
        window.scrollTo({
            top: $('#howToIntegrate').offset().top - 100,
            behavior: "smooth"
        });
        $('nav .descUl li').eq(3).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .mobUl li').eq(3).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .descUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
    }
    else if(location.search === '?path=reviews') {
        window.scrollTo({
            top: $('#reviews').offset().top - 100,
            behavior: "smooth"
        });
        $('nav .descUl li').eq(4).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .mobUl li').eq(4).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .descUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(5).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
    }
    else if(location.search === '?path=faq') {
        window.scrollTo({
            top: $('#faq').offset().top - 100,
            behavior: "smooth"
        });
        $('nav .descUl li').eq(5).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .mobUl li').eq(5).css({'fontWeight': 'bold'}).css({'textDecoration': 'underline'});
        $('nav .descUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(2).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(3).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(4).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .descUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
        $('nav .mobUl li').eq(0).css({'fontWeight': '500'}).css({'textDecoration': 'none'});
    }
});