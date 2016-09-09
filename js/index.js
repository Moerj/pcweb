
// 公共方法
// 绑定跳转的详情页
function bindDetails(url) {
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


