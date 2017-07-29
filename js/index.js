/**
 * Created by LBBCute on 2017/7/25.
 */
$(function(){
    var _index;  //存放被点击图片的下标值
    var showPicture=$('.showPicture'); //展示图片的img
    var bigShow=$('.bigShow');   //整个的弹出框
    var srcImg="";
    var imgClick=$('#content img');

    imgClick.click(function(){
        srcImg=$(this).attr("src");   //获取被点击图片的src的属性值
        $('.shade').show();   //显示阴影遮罩
        bigShow.show();
        showPicture.show();
        showPicture.attr("src",srcImg);
         _index=$(this).index();
    });


    $(' .after').click(function(){
        _index+=1;
        //alert(_index);
        if(_index==8){
            _index=0;
        }
        srcImg=imgClick.eq(_index).attr("src");
        $(".bigShow img.showPicture").attr("src",srcImg);
    });

    $('.before').click(function(){
        _index--;
        if(_index==0){
            _index=8;
        }
        srcImg=imgClick.eq(_index).attr("src");
        $(".bigShow img.showPicture").attr("src",srcImg);
     });
});