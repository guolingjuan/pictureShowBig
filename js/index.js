/**
 * Created by LBBCute on 2017/7/25.
 */
$(function(){
    var _index;  //��ű����ͼƬ���±�ֵ
    var showPicture=$('.showPicture'); //չʾͼƬ��img
    var bigShow=$('.bigShow');   //�����ĵ�����
    var srcImg="";
    var imgClick=$('#content img');

    imgClick.click(function(){
        srcImg=$(this).attr("src");   //��ȡ�����ͼƬ��src������ֵ
        $('.shade').show();   //��ʾ��Ӱ����
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