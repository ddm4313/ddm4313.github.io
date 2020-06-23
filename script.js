
$(document).ready(() => {
    $('.switch').click(function(){
        $( "body" ).toggleClass( "dark" )
        $( "body" ).toggleClass( "light" )
        $('i.fa-sun').toggle();
        $('i.fa-moon').toggle();
        $('.main').toggleClass('lightMode')
        $('.links a').toggleClass('lightMode')
        $('.brand').toggleClass('lightMode')
    })
})