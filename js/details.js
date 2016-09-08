$(function() {
    var bannerList = $('#details-banner img')
    var bannerActive = $('#detail-banner-active')


    bannerList.click(function() {
        var src = $(this).attr('src')
        bannerActive.attr({
            src: src
        })
    })

    $('body').on('click','.reply a',function(){
        layer.open({
            type: 1,
            title: '回复评论',
            closeBtn: 0,
            area: '600px',
            skin: 'layui-layer-rim', //边框
            shadeClose: true,
            content: $('#dialog-reply'),
            btn: ['回复', '取消'], //按钮
            btn1: function (index, layero) {
                //按钮【按钮1】的回调
            },
            btn2: function (index, layero) {
                //按钮【按钮2】的回调
            }
        });
    })
})
