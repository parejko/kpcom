/**
 * Created by Kat on 2016-02-04.
 */

$(document).ready(function () {

    $('#open-menu').on("click", function () {

        var currentTop =  $(window).scrollTop();
        $('#open-menu').removeClass('is-block').addClass('is-hidden');
        $('.mobile-menu').addClass('is-open');
        //$('.wrapper').toggleClass('no-scroll');
        $('body').toggleClass('no-scroll');
    });
    $('#close-menu').on("click", function () {


        $('.mobile-menu').removeClass('is-open');
        //$('.wrapper').toggleClass('no-scroll');
        $('body').toggleClass('no-scroll');
        $('#open-menu').removeClass('is-hidden').addClass('is-block');
    });


    $(document).on( 'scroll', function(){
        $('body').addClass('scroll');
    });

});