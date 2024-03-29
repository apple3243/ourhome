function gnbFnc(el) {
    $(window).load(function () {
        if ($('html').hasClass('pc')) {
            var menu1 = el.find('>li>a')
            var subMenu1 = el.find('ul')
            var headerWrap = el.closest('header')
            var headerBg = $('<div class="header-bg"></div>').css({
                'position': 'absolute',
                'left': '0',
                'top': '85px',
                'background-color': '#fff',
                'width': '100%',
                'height': '360px',
                'display': 'none',
                'box-shadow': '0 5px 5px rgba(0,0,0,0.1)'
            })
            headerWrap.append(headerBg)
            var oldMenu = null
            menu1.on('mouseover focus', function () {
                if (!$('html').hasClass('pc')) return;
                // if (oldMenu != null) oldMenu.removeClass('on');
                menu1.filter('.on').removeClass('on')
                $(this).addClass('on');
                subMenu1.stop(true).slideDown(500)
                headerBg.stop(true).slideDown(500)
                oldMenu = $(this)
            });
            el.on('mouseleave', function () {
                subMenu1.slideUp(500)
                headerBg.slideUp(500)
                if (oldMenu != null) oldMenu.removeClass('on')
            })
        } else {
            el.find('>li>a').on('click', function (e) {
                $('html').css('overflow-y','hidden')
                // if (!$('html').hasClass('tablet')) return;
                var ts = $(this)
                ts.parent().siblings().find('>a').filter('.on').next().slideUp(500, function () {
                    $(this).prev().removeClass('on')
                });
                if ($(this).next().is(':hidden')) {
                    $(this).stop(true).addClass('on').next().slideDown(500);
                } else {
                    $(this).next().slideUp(500, function () {
                        ts.removeClass('on')
                    });
                }
                e.preventDefault();
            })
            
        }
    })
}
function deviceSizeChkFnc() {
    $(window).on('resize', function () {
        var w = $(this).innerWidth()
        $('html').attr('class', '')
        if (w >= 1100) {
            $('html').addClass('pc')
        } else {
            $('html').addClass('tablet')
        }
    });
    $(window).trigger('resize')
}
function allMenuFnc(el) {
    el.on('click', function (e) {
        $(this).toggleClass('on')
        if ($('html').hasClass('tablet')) {
            $('.all-menu').addClass('on')
            $('#header').css('padding', '0')
            $('#header .header-inner-wrap').css('padding', '0')
        } 
        e.preventDefault();
    });
    $('.btn-close').on('click', function (e) {
        e.preventDefault();
        $('.all-menu').removeClass('on')
        $('#header').css('padding', '')
        $('#header .header-inner-wrap').css('padding', '')
        $('html').css('overflow-y','unset')
        $('#gnb>ul>li>a').romoveClass('on')
    })
}
function navMenuFnc(e) {
    var navMenu1 = e.find('.parent-menu>a')
    var navMenu2 = e.find('.current-menu>a')
    navMenu1.on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('on')
    })
    navMenu2.on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('on')
    })
}
function fixedGnb(){
    // var jbOffset = $( '#header' ).offset();
    // $( window ).scroll( function() {
    //     if ( $( document ).scrollTop() > jbOffset.top ) {
    //         $( '#header' ).addClass( 'sticky' );
    //     }else {
    //             $( '#header' ).removeClass( 'sticky' );
    //           }
    //     })
    var FirstScroll = 0;	
    var prevScrollTop = $(window).scrollTop(),
    tp = $(window).scrollTop();
    $(window).scroll(function(e){
    tp = $(this).scrollTop();
    if ( tp > prevScrollTop ){
        $("#header").addClass('sticky');
    } else if( tp < prevScrollTop ) {
        $("#header").removeClass('sticky')
    }
    prevScrollTop = tp;
    });
};
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('.btn-top').fadeIn(500);
        } else {
            $('.btn-top').fadeOut('slow');
        }
    });
    $('.btn-top a').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
});
$(function () {
    fixedGnb();
    deviceSizeChkFnc();
    gnbFnc($('#gnb>ul'))
    allMenuFnc($('.all-menu'))
    navMenuFnc($('#nav .nav-wrap'))
    
})