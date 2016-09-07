// 产品展示列表页面

(function() {
    $.ajax({
        type: "get",
        url: "../json/product.json",
        success: function(data) {
            bindTabEvent(data)
        }
    });

    function bindTabEvent(data) {
        $('body').one('click', '.product .nav-tabs a', function() {
            var tabPanes = [
                $('#tab-1'),
                $('#tab-2'),
                $('#tab-3'),
                $('#tab-4')
            ]
            var $tpl = $('#tpl-product');
            var tabIndex = $(this).parent().index();
            $.each(data, function(index, el) {
                var newtpl = $tpl.clone()
                newtpl.find('.title').text(el.title)
                newtpl.find('.content').text(el.content)
                newtpl.find('img').attr('src', el.image)
                tabPanes[el.tab].append(newtpl)
                newtpl.show();
            });
        })
    }

})()