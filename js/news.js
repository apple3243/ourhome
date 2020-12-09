$(function(){
    $('.title a').mouseover(function(){
        $('.main-news .title').css('height','100%')
        $('.main-news .sub-title').css('top','160px')
        $('.main-news .content').css('top','unset')
    })
    $('.title a').mouseout(function(){
        $('.main-news .title').css('height','unset')
        $('.main-news .sub-title').css('top','9999px')
        $('.main-news .content').css('top','9999px')
    })
})