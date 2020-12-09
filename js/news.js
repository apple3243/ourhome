$(function(){
    $('.title a').mouseover(function(){
        $('.main-news .title').css('height','100%')
        $('.main-news .sub-title').css('opacity','1')
        $('.main-news .content').css('opacity','1')
    })
    $('.title a').mouseout(function(){
        $('.main-news .title').css('height','unset')
        $('.main-news .sub-title').css('opacity','0')
        $('.main-news .content').css('opacity','0')
    })
})