

$(document).ready(function () {
    $('.loadingScrean .spinner').fadeOut(2000,function () {        
        $('.loadingScrean').fadeOut(2000,function() {
            $('body').css('overflow-y','auto');
            $('.loadingScrean').remove();
        });
    });
});

let home=$('#Home').offset().top;

$(window).scroll(function () {
    let windoScroll=$(window).scrollTop();
    if (windoScroll > home ) {
        $('#scrollNav').css('background-color','#d0d1d2');
    }
    else{
        $('#scrollNav').css('background-color','transparent');
    }
});



$('nav li a').click(function (e) {
    let linkHref =$(e.target).attr('href');
    console.log(linkHref)
    let sectionOffset=$(linkHref).offset().top;
    $('html,body').animate({scrollTop:sectionOffset},1000);
})