$(function(){

     // 获取产品列表数据
    var $tpl = $('#tpl-doyouknow');

    $.ajax({
        type: "get",
        url: "./json/doyouknow.json",
        success: function (data) {
            // 成功后展示产品列表
            var tabPanes = $('.tab-content .tab-pane')

            // 清空所有tab
            for (var i = 0; i < tabPanes.length; i++) {
                $(tabPanes[i]).empty();
            }
            $.each(data, function (index, el) {
                var newtpl = $tpl.children().eq(0).clone()
                newtpl.find('.title').text(el.title)
                newtpl.find('.content').text(el.content)
                newtpl.find('img').attr('src', el.image)
                newtpl.find('.item').on('click', function (e) {
                    e.preventDefault()
                    e.stopPropagation()
                    $.bindDetails($(this).attr('href'))
                })
                $(tabPanes[el.tab]).append(newtpl)
                newtpl.show();
            });
        }
    });
})