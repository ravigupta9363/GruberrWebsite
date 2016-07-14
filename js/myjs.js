/**
 * Created by Ravi-Gupta on 7/14/2016.
 */


$(document).ready(function()
{
    var $item = $('.carousel .item');
    var $wHeight = $(window).height();
    $item.eq(0).addClass('active');
    $item.height($wHeight);
    $item.addClass('full-screen');

    $('.carousel img').each(function() {
        var $src = $(this).attr('src');
        var $color = $(this).attr('data-color');
        $(this).parent().css({
            'background-image' : 'url(' + $src + ')',
            'background-color' : $color
        });
        $(this).remove();
    });

    $(window).on('resize', function (){
        $wHeight = $(window).height();
        $item.height($wHeight);
    });

    $('.carousel').carousel({
        interval: 6000,
        pause: "false"
    });

    /******************************************Contact Form************************************************/
    $('textarea').blur(function () {
        $('#hire textarea').each(function () {
            $this = $(this);
            if ( this.value != '' ) {
                $this.addClass('focused');
                $('textarea + label + span').css({'opacity': 1});
            }
            else {
                $this.removeClass('focused');
                $('textarea + label + span').css({'opacity': 0});
            }
        });
    });

    $('#hire .field:first-child input').blur(function () {
        $('#hire .field:first-child input').each(function () {
            $this = $(this);
            if ( this.value != '' ) {
                $this.addClass('focused');
                $('.field:first-child input + label + span').css({'opacity': 1});
            }
            else {
                $this.removeClass('focused');
                $('.field:first-child input + label + span').css({'opacity': 0});
            }
        });
    });

    $('#hire .field:nth-child(2) input').blur(function () {
        $('#hire .field:nth-child(2) input').each(function () {
            $this = $(this);
            if ( this.value != '' ) {
                $this.addClass('focused');
                $('.field:nth-child(2) input + label + span').css({'opacity': 1});
            }
            else {
                $this.removeClass('focused');
                $('.field:nth-child(2) input + label + span').css({'opacity': 0});
            }
        });
    });

});
