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
    $(function() {
        // 根据url设置导航的选中状态
        var pageName = window.location.pathname.split('/')
        var currUrl = pageName[pageName.length - 1]
        var navlist = $('#headlist').find('a')
        $.each(navlist, function(index, a) {
            var $li = $(a).parent()
            var url = a.href.split('/')
            url = url[url.length-1]
            if(url==currUrl){
                $li.addClass('active')
            }else{
                $li.removeClass('active')
            }
        })
    })