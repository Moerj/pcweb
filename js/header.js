
$('jq-router').loadFinish(function () {
    // 根据url设置导航的选中状态
    var pageName = window.location.href.split('/')
    var currUrl = pageName[pageName.length - 1]
    var navlist = $('#headlist').find('a')
    $.each(navlist, function (index, a) {
        var $a = $(a)
        var $li = $a.parent()
        var url = $a.attr('load')
        if (url) {
            url = url.split('/')
            url = url[url.length - 1]
        }
        if (url == currUrl) {
            $li.addClass('active')
        } else {
            $li.removeClass('active')
        }
    })
})