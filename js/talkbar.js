$(function(){
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

    // 限制输入字符上限

    // 评论内容
    $.wordLimit($('#talkbar-textarea-1'), 7000);
    // 回复内容
    $.wordLimit($('#talkbar-textarea-2'), 5000);
})