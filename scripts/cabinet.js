$(document).ready(() => {
    if($(window).width() < 1024) {
        // slice username
        if($('.userImgName span').text().length >= 7) {
            $('.userImgName span').text($('.userImgName span').text().slice(0, 7) + '..');
        }

        // login / signup popup
        $('.logReqWrap span').click(() => {
            $('.loginPopupWrap').fadeIn();
            $('body').css({'overflow': 'hidden'});
        })
        $('.loginPopupWrap .loginContent .closeBtn').click(() => {
            $('.loginPopupWrap').fadeOut();
            $('body').css({'overflow': 'auto'});
        });
        $('.logReqWrap button, .info .col1 button, .howToConnect .cartWrap button').click(() => {
            $('.signupPopupWrap').fadeIn();
            $('body').css({'overflow': 'hidden'});
        })
        $('.signupPopupWrap .signupContent .closeBtn').click(() => {
            $('.signupPopupWrap').fadeOut();
            $('body').css({'overflow': 'auto'});
        });

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
});

    // slice username
    if($('.userImgName span').text().length >= 10) {
        $('.userImgName span').text($('.userImgName span').text().slice(0, 10) + '...');
    }

    $('main .container .col2 .service .container .tarifs').hide();

    // switch buttons
    $('main .container .col2 .switchBtnWrap button').eq(1).click(() => {
        $('main .container .col2 .switchBtnWrap button').eq(1).css({'backgroundColor': '#4198F1'}).css({'color': '#fff'});
        $('main .container .col2 .switchBtnWrap button').eq(0).css({'backgroundColor': '#fff'}).css({'color': '#4198F1'});
        $('main .container .col1 .navBar li').eq(1).hide();
        $('main .container .col2 .service .container .tarifs').hide();
        $('main .container .col2 .service .container .balance').hide();
        $('main .container .col2 .service .container .workers').hide();
        $('main .container .col2 .service .container .information').show();
        $('.information .forms .col').eq(0).hide();
        $('main .container .col1 .navBar ul li:eq(0) .deactive').hide();
        $('main .container .col1 .navBar ul li:eq(0) .active').show();
        $('main .container .col1 .navBar ul li:eq(0)').css({'color': '#3B97F4'});
        $('main .container .col1 .navBar ul li:not(:eq(0)) .deactive').show();
        $('main .container .col1 .navBar ul li:not(:eq(0)) .active').hide();
        $('main .container .col1 .navBar ul li:not(:eq(0))').css({'color': '#B3D9FF'});
    });
    $('main .container .col2 .switchBtnWrap button').eq(0).click(() => {
        $('main .container .col2 .switchBtnWrap button').eq(0).css({'backgroundColor': '#4198F1'}).css({'color': '#fff'});
        $('main .container .col2 .switchBtnWrap button').eq(1).css({'backgroundColor': '#fff'}).css({'color': '#4198F1'});
        $('main .container .col1 .navBar li').eq(1).show();
        $('main .container .col2 .service .container .tarifs').hide();
        $('main .container .col2 .service .container .balance').hide();
        $('main .container .col2 .service .container .workers').hide();
        $('main .container .col2 .service .container .information').show();
        $('.information .forms .col').eq(0).show();
        $('main .container .col1 .navBar ul li:eq(0) .deactive').hide();
        $('main .container .col1 .navBar ul li:eq(0) .active').show();
        $('main .container .col1 .navBar ul li:eq(0)').css({'color': '#3B97F4'});
        $('main .container .col1 .navBar ul li:not(:eq(0)) .deactive').show();
        $('main .container .col1 .navBar ul li:not(:eq(0)) .active').hide();
        $('main .container .col1 .navBar ul li:not(:eq(0))').css({'color': '#B3D9FF'});
    });

    // navBar switch func
    $('main .container .col1 .navBar ul li .active').hide();
    $('main .container .col1 .navBar ul li:eq(0) .active').show();
    $('main .container .col1 .navBar ul li:eq(0) .deactive').hide();
    $('main .container .col1 .navBar ul li:eq(0)').css({'color': '#3B97F4'});
    $('main .container .col1 .navBar li').eq(0).click(() => {
        $('main .container .col2 .service .container .tarifs').hide();
        $('main .container .col2 .service .container .balance').hide();
        $('main .container .col2 .service .container .information').show();
        $('main .container .col2 .service .container .workers').hide();
        $('main .container .col1 .navBar ul li:eq(0) .active').show();
        $('main .container .col1 .navBar ul li:eq(0) .deactive').hide();
        $('main .container .col1 .navBar ul li:eq(0)').css({'color': '#3B97F4'});
        $('main .container .col1 .navBar ul li:not(:eq(0)) .deactive').show();
        $('main .container .col1 .navBar ul li:not(:eq(0)) .active').hide();
        $('main .container .col1 .navBar ul li:not(:eq(0))').css({'color': '#B3D9FF'});
    });
    $('main .container .col1 .navBar li').eq(1).click(() => {
        $('main .container .col2 .service .container .tarifs').hide();
        $('main .container .col2 .service .container .information').hide();
        $('main .container .col2 .service .container .workers').show();
        $('main .container .col2 .service .container .balance').hide();
        $('main .container .col1 .navBar ul li:eq(1) .active').show();
        $('main .container .col1 .navBar ul li:eq(1) .deactive').hide();
        $('main .container .col1 .navBar ul li:eq(1)').css({'color': '#3B97F4'});
        $('main .container .col1 .navBar ul li:not(:eq(1)) .deactive').show();
        $('main .container .col1 .navBar ul li:not(:eq(1)) .active').hide();
        $('main .container .col1 .navBar ul li:not(:eq(1))').css({'color': '#B3D9FF'});
    });
    $('main .container .col1 .navBar li').eq(2).click(() => {
        $('main .container .col2 .service .container .tarifs').show();
        $('main .container .col2 .service .container .information').hide();
        $('main .container .col2 .service .container .workers').hide();
        $('main .container .col2 .service .container .balance').hide();
        $('main .container .col1 .navBar ul li:eq(2) .active').show();
        $('main .container .col1 .navBar ul li:eq(2) .deactive').hide();
        $('main .container .col1 .navBar ul li:eq(2)').css({'color': '#3B97F4'});
        $('main .container .col1 .navBar ul li:eq(2) .active').show();
        $('main .container .col1 .navBar ul li:eq(2) .deactive').hide();
        $('main .container .col1 .navBar ul li:eq(2)').css({'color': '#3B97F4'});
        $('main .container .col1 .navBar ul li:not(:eq(2)) .deactive').show();
        $('main .container .col1 .navBar ul li:not(:eq(2)) .active').hide();
        $('main .container .col1 .navBar ul li:not(:eq(2))').css({'color': '#B3D9FF'});
    });
    $('main .container .col1 .navBar li').eq(3).click(() => {
        $('main .container .col2 .service .container .tarifs').hide();
        $('main .container .col2 .service .container .information').hide();
        $('main .container .col2 .service .container .workers').hide();
        $('main .container .col2 .service .container .balance').show();
        $('main .container .col1 .navBar ul li:eq(3) .active').show();
        $('main .container .col1 .navBar ul li:eq(3) .deactive').hide();
        $('main .container .col1 .navBar ul li:eq(3)').css({'color': '#3B97F4'});
        $('main .container .col1 .navBar ul li:eq(3) .active').show();
        $('main .container .col1 .navBar ul li:eq(3) .deactive').hide();
        $('main .container .col1 .navBar ul li:eq(3)').css({'color': '#3B97F4'});
        $('main .container .col1 .navBar ul li:not(:eq(3)) .deactive').show();
        $('main .container .col1 .navBar ul li:not(:eq(3)) .active').hide();
        $('main .container .col1 .navBar ul li:not(:eq(3))').css({'color': '#B3D9FF'});
    });

    // add workers popup
    $('.workers .addBtnWrap .addBtnChildWrap').click(() => {
        $('.addWorkerPopupWrap').fadeIn();
        $('body').css({'overflow': 'hidden'});
    });
    $('.addWorkerPopupWrap .closeBtn').click(() => {
        $('.addWorkerPopupWrap').fadeOut();
        $('body').css({'overflow': 'auto'});
    });

    // balance btns popups
    $('.balance .balanceContainer .btnWrap button').eq(0).click(() => {
        $('.sendMoneyPopupWrap').fadeIn();
        $('body').css({'overflow': 'hidden'});
    });
    $('.sendMoneyPopupWrap .closeBtn').click(() => {
        $('.sendMoneyPopupWrap').fadeOut();
        $('body').css({'overflow': 'auto'});
    });

    // balance hystry comments toggle
    $('.balance .hystory .itemComment').hide();
    let commentToggle1 = false;
    $('.balance .hystory .item').eq(0).click(() => {
        commentToggle1 = !commentToggle1;
        if(commentToggle1) {
            $('.balance .hystory .itemComment').eq(0).show();
            $('.balance .hystory .item:nth-child(1) .leftSide .arrow').text('↑');
        }
        else {
            $('.balance .hystory .itemComment').eq(0).hide();
            $('.balance .hystory .item:nth-child(1) .leftSide .arrow').text('↓');
        }
    });

    let commentToggle2 = false;
    $('.balance .hystory .item').eq(1).click(() => {
        commentToggle2 = !commentToggle2;
        if(commentToggle2) {
            $('.balance .hystory .itemComment').eq(1).show();
            $('.balance .hystory .item:nth-child(3) .leftSide .arrow').text('↑');
        }
        else {
            $('.balance .hystory .itemComment').eq(1).hide();
            $('.balance .hystory .item:nth-child(3) .leftSide .arrow').text('↓');
        }
    });

    // workers edits popup / del
    $('.workers .employeesList .editDel img').click(() => {
        $('.workersEditPopupWrap').fadeIn();
        $('body').css({'overflow': 'hidden'});
    });
    $('.workersEditPopupWrap .closeBtn').click(() => {
        $('.workersEditPopupWrap').fadeOut();
        $('body').css({'overflow': 'auto'});
    });

    $('.workers .employeesList .editDel svg').click(() => {
        $('.workers .employeesList').remove();
    });
