
// 公共方法
// 绑定跳转的详情页
$.bindDetails = function(url) {
    $('body').css({ overflow: 'hidden' })
    layer.open({
        type: 2,
        area: ['100%', '100%'],
        fix: true,
        title: '产品详情',
        maxmin: true,
        content: url,
        end: function () {
            $('body').css({ overflow: 'auto' })
        }
    });
}

// 限制文本框输入字数
$.wordLimit = function (dom, limit) {
    var $text = $(dom)
    $text.on('keydown', function (e) {
        if ($text.val().length >= limit && e.keyCode!=8) {
            layer.msg('输入最多'+limit+'个字符');
            $text.val($text.val().substr(0,limit-1))
        }
    })
}


