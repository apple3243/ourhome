function gnbFnc(el) {
    if ($('html').hasClass('pc')) {
        var menu1 = el.find('ul>li>a')
        var subMenu1 = el.find('ul>li>ul')
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
        // menu1.on('click', function (e) {
        //     if (!$('html').hasClass('tablet')) return;
        //     $(this).toggleClass('on');
        //     if ($(this).hasClass('on')) oldMenu = $(this);
        //     e.preventDefault();
        // })
        el.on('mouseleave', function () {
            subMenu1.slideUp(500)
            headerBg.slideUp(500)
            if (oldMenu != null) oldMenu.removeClass('on')
        })
    } else {
        el.find('ul>li>a').on('click', function () {
            var ts = $(this)
            ts.parent().siblings().find('>a').filter('.on').next().slideUp(500, function () {
                $(this).prev().removeClass('on')
            });
            if ($(this).next().is(':hidden')) {
                $(this).stop(true).addClass('on').next().slideDown(500);
                $('html').addClass('ovh')
            } else {
                $(this).next().slideUp(500, function () {
                    ts.removeClass('on')
                });
            }
        })
    }

}
function deviceSizeChkFnc() {
    $(window).on('resize', function () {
        var w = $(this).innerWidth()
        // pc: 1096이상
        // mobile: 751이상 1095이하
        // small-mobile:750이하
        $('html').attr('class', '')
        if (w >= 1100) {
            $('html').addClass('pc')
        } else /* if (w >= 722) */ {
            $('html').addClass('tablet')
        }
        // } else {
        //     $('html').addClass('mobile')

        // }
    });
    $(window).trigger('resize')
}

function allMenuFnc(el) {
    el.on('click', function (e) {
        if ($('html').hasClass('tablet')) {
            $('.all-menu').addClass('on')
            $('#header').css('padding', '0')
            $('#header .header-inner-wrap').css('padding', '0')
        } else {
            $(this).toggleClass('on')
        }
        e.preventDefault();
    });
    $('.btn-close').on('click', function (e) {
        e.preventDefault();
        $('.all-menu').removeClass('on')
        $('#header').css('padding', '')
        $('#header .header-inner-wrap').css('padding', '')
    })
}

$(document).ready(function () {
    $("#lightSlider").lightSlider({
        gallery: true,
        item: 1,
        vertical: true,
        verticalHeight: 370,
        vThumbWidth: 80,
        thumbItem: 4,
        thumbMargin: 20,
        slideMargin: 0,
        auto: true,
        speed: 500,
        pauseOnHover: true,
        controls: false,
        // autoWidth: true,
    });
});


$(function () {
    deviceSizeChkFnc();
    gnbFnc($('#gnb'))
    allMenuFnc($('.all-menu'))
})