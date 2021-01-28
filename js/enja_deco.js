device = "";

window_height = 0;
window_width = 0;

head_height = 0;
head_min_height = 60;

head_logo_size = 0;



middle_height = 0;
middle_min_height = 300;



middle_in_height = 0;
middle_in_width = 0;

middle_in_name_height = 0;
middle_in_name_min_height = 25;

middle_in_name_size = 0;

middle_in_button_height = 0;
middle_in_button_min_height = 50;

middle_in_button_size = 0;

middle_in_txt_height = 0;
middle_in_txt_width = 0;

middle_in_txt_size = 0;
middle_in_txt_min_size = 15;



middle_out_height = 0;
middle_out_width = 0;

middle_out_name_height = 0;
middle_out_name_min_height = 25;

middle_out_name_size = 0;

middle_out_txt_height = 0;
middle_out_txt_width = 0;

middle_out_button_height = 0;
middle_out_button_min_height = 50;

middle_out_button_size = 0;

middle_out_txt_height = 0;
middle_out_txt_width = 0;

middle_out_txt_size = 0;
middle_out_txt_min_size = 15;



bottom_height = 0;
bottom_min_height = 50;

bottom_txt_size = 0;




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
    function size(){
        const ua = navigator.userAgent;
        if (ua.indexOf('iPhone') > -1 || (ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1)) {
            if($(window).height() > $(window).width()){
                var device = "CELL"
                $('.middle').css({
                    "flex-wrap": "wrap"
                })
            }else{
                var device = "PC"
                $('.middle').css({
                    "flex-wrap": "nowrap"
                })
            }
        } else if (ua.indexOf('iPad') > -1 || ua.indexOf('Android') > -1) {
            var device = "PC"
            $('.middle').css({
                "flex-wrap": "nowrap"
            })
        } else {
            var device = "PC";
            $('.middle').css({
                "flex-wrap": "nowrap"
            })
        }



        window_height = $(window).height();
        window_width = $(window).width();

        //headの設定
        head_height = window_height / 10 * 1.1;
        if(head_height < head_min_height){
            head_height = head_min_height;
        }
        $('.head').css({
            'height': head_height
        });
        
        head_logo_size = head_height / 10 * 7.5;
        $('.head_logo').css({
            'font-size':head_logo_size
        });

        //bottomの設定
        bottom_height = window_height / 10 * 0.9;
        if(bottom_height < bottom_min_height){
            bottom_height = bottom_min_height;
        }
        $('.bottom').css({
            'height': bottom_height
        });

        if(device == "PC"){
            bottom_txt_size = bottom_height / 10 * 2;
        }else if(device == "CELL"){
            bottom_txt_size = bottom_height / 10 * 2;
        }


        $('.bottom_txt').css({
            'font-size': bottom_txt_size
        })


        
        //middleの設定
        middle_height = window_height - head_height - bottom_height;
        if(middle_height < middle_min_height){
            middle_height = middle_min_height;
        }
        $('.middle').css({
            'height':middle_height
        });


        if(device == "PC"){
            middle_in_height = middle_height;
            middle_out_height = middle_height;

            middle_in_width = window_width / 2;
            middle_out_width = window_width / 2;
        }else if(device == "CELL"){
            middle_in_height = middle_height / 2;
            middle_out_height = middle_height / 2;
            
            middle_in_width = window_width;
            middle_out_width = window_width;
        }

        $('.middle_in').css({
            'height':middle_in_height,
            'width':middle_in_width
        })

        $('.middle_out').css({
            'height':middle_out_height,
            'width':middle_out_width
        })


        
        if(device == "PC"){
            middle_in_name_height = middle_in_height / 10 * 0.5;
        }else if(device == "CELL"){
            middle_in_name_height = middle_in_height / 10 * 1;
        }

        if(middle_in_name_height < middle_in_name_min_height){
            middle_in_name_height = middle_in_name_min_height
        }

        $('.middle_in_name').css({
            'height':middle_in_name_height
        });

        middle_in_name_size = middle_in_name_height / 10 * 9;
        $('.middle_in_name').css({
            'font-size':middle_in_name_size
        });

        

        if(device == "PC"){
            middle_in_button_height = middle_in_height / 10 * 1;
        }
        else if(device == "CELL"){
            middle_in_button_height = middle_in_height / 10 * 2;
        }


        if(middle_in_button_height < middle_in_button_min_height){
            middle_in_button_height = middle_in_button_min_height
        }
        $('.middle_in_button').css({
            'height':middle_in_button_height
        });

        middle_in_button_size = middle_in_button_height / 10 * 3;
        $('.middle_in_button').css({
            'font-size':middle_in_button_size
        });


        middle_in_txt_height = middle_in_height - middle_in_name_height - middle_in_button_height;
        $('.middle_in_txt').css({
            'height':middle_in_txt_height,
        });

        middle_in_txt_width = middle_in_width - 20;
        $(".middle_in_txt_area").css({
            'width':middle_in_txt_width
        });

        if(device == "PC"){
            middle_in_txt_size = middle_in_txt_height / 10 * 0.5;
        }else if(device == "CELL"){
            middle_in_txt_size = middle_in_txt_height / 10 * 1;
        }
        if(middle_in_txt_size < middle_in_txt_min_size){
            middle_in_txt_size = middle_in_txt_min_size;
        }
        $(".middle_in_txt_area").css({
            'font-size':middle_in_txt_size
        });




        if(device == "PC"){
            middle_out_name_height = middle_out_height / 10 * 0.5;
        }else if(device == "CELL"){
            middle_out_name_height = middle_out_height / 10 * 1;
        }
        
        if(middle_out_name_height < middle_out_name_min_height){
            middle_out_name_height = middle_out_name_min_height;
        }
        $('.middle_out_name').css({
            'height':middle_out_name_height
        });

        middle_out_name_size = middle_out_name_height / 10 * 9;
        $('.middle_out_name').css({
            'font-size':middle_out_name_size
        });


        if(device == "PC"){
            middle_out_button_height = middle_out_height / 10 * 1;
        }
        else if(device == "CELL"){
            middle_out_button_height = middle_out_height / 10 * 2;
        }

        if(middle_out_button_height < middle_out_button_min_height){
            middle_out_button_height = middle_out_button_min_height;
        }
        $('.middle_out_button').css({
            'height':middle_out_button_height
        });


        middle_out_txt_height = middle_out_height - middle_out_name_height - middle_out_button_height;
        $('.middle_out_txt').css({
            'height':middle_out_txt_height
        })

        middle_out_txt_width = middle_out_width - 20;
        $('.middle_out_txt_area').css({
            'width':middle_out_txt_width
        })

        if(device == "PC"){
            middle_out_txt_size = middle_out_txt_height / 10 * 0.5;
        }else if(device == "CELL"){
            middle_out_txt_size = middle_out_txt_height / 10 * 1;
        }

        if(middle_out_txt_size < middle_out_txt_min_size){
            middle_out_txt_size = middle_out_txt_min_size;
        }
        $(".middle_out_txt_area").css({
            'font-size':middle_out_txt_size
        });

        
        middle_out_button_size = middle_out_button_height / 10 * 3;
        $('.middle_out_button').css({
            'font-size':middle_out_button_size
        });

        if(device == "PC"){
            $('#debug').css({
                'transform':"scale(1.0)",
                '-webkit-transform':"scale(1.0)"
            });
        }else if(device == "CELL"){
            $('#debug').css({
                'transform':"scale(2.0)",
                '-webkit-transform':"scale(2.0)"
            });
        }


    }

    size();

    $(window).resize(function(){
        size();
    });

});