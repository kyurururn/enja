load = 0;


$(function () {
    const ua = navigator.userAgent;
    setTimeout('load_now()');
    if (ua.indexOf('iPhone') > -1 || (ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1)) {
        if($(window).height() > $(window).width()){
            $('.loader_txt').css({
                "font-size":"2.5vh"
            })
        }else{
            $('.loader_txt').css({
                "font-size":"5vh"
            })
        }
    } else if (ua.indexOf('iPad') > -1 || ua.indexOf('Android') > -1) {
        $('.loader_txt').css({
            "font-size":"5vh"
        })
    } else {
        $('.loader_txt').css({
            "font-size":"5vh"
        })
    }
});

function load_now() {
    load++;
    $('.loader_txt').append(".");
    setTimeout('load_now()',10);
}


$(window).on('load',function(){
    function end(){
        $('.loader').fadeOut();
    }
    setTimeout(end,1000);
})


$(function(){
    const ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > -1 || (ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1)) {
        if($(window).height() > $(window).width()){
            var device = "CELL"
        }else{
            var device = "CELL_SIDE"
        }
    } else if (ua.indexOf('iPad') > -1 || ua.indexOf('Android') > -1) {
        var device = "PC"
    } else {
        var device = "PC";
    }

    function size(){
        var window_height = $(window).height();
        var window_width = $(window).width();
        if(device == "PC"){
            var img_edge = window_width / 2 - 50;
            if(img_edge > 400){
                img_edge = 400;
            }
        }else if(device == "CELL"){
            var img_edge = window_width - 100;
        }else if(device == "CELL_SIDE"){
            var img_edge = window_width / 2 - 100;
            if(img_edge > 400){
                img_edge = 400;
            }
        }




        $('.links img').css({
            "height":img_edge
        })

    }

    size();

    $(window).resize(function(){
        size();
    });
});