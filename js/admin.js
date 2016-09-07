$(function () {
    var $editPage = $('#editPage')
    var $addPage = $('#addPage')


    $('body').on('click', '.btn-control .edit', function (e) {
        var listItem = $(e.target).parents('.list-item')
        var title = listItem.find('.title').text()
        var content = listItem.find('.content').text()
        var imgSrc = listItem.find('img').attr('src')

        // 改变模板数据 
        $editPage.find('.title').val(title)
        $editPage.find('.content').val(content)
        $editPage.find('img').attr({ src: imgSrc })

        layer.open({
            type: 1,
            title: '修改',
            closeBtn: 0,
            area: '600px',
            skin: 'layui-layer-rim', //边框
            shadeClose: true,
            content: $('#editPage'),
            btn: ['保存', '取消'], //按钮
            btn1: function (index, layero) {
                //按钮【按钮1】的回调
                console.log('保存');
            },
            btn2: function (index, layero) {
                //按钮【按钮2】的回调
                console.log('取消');
            }
        });
        return false;

    }).on('click', '.btn-control .delete', function (e) {
        //询问框
        layer.confirm('确定要删除吗？', {
            btn: ['确定', '取消'] //按钮
        }, function () {
            // 确定
            layer.msg('已经删除了', { icon: 1 });
            // 删除dom
            $(e.target).parents('.list-item').remove();
            // 删除后台数据
            // 。。。写这里大哥
        }, function () {
            // 取消
        });
        return false;
    })

    // 新增
    $('#add-page').click(function () {
        //页面层-佟丽娅
        layer.open({
            type: 1,
            title: '新增',
            closeBtn: 0,
            area: '600px',
            skin: 'layui-layer-rim',
            shadeClose: true,
            content: $('#addPage'),
            btn: ['保存', '取消'] //按钮
        });
        return false;
    })

     // 获取产品列表数据
    var $tpl = $('#tpl-product');

    $.ajax({
        type: "get",
        url: "../json/product.json",
        success: function (data) {
            // 成功后展示产品列表
            var tabPanes = [
                $('#tab-1'),
                $('#tab-2'),
                $('#tab-3'),
                $('#tab-4')
            ]
            // 清空所有tab
            for (var i = 0; i < tabPanes.length; i++) {
                tabPanes[i].empty();
            }
            $.each(data, function (index, el) {
                var newtpl = $tpl.children().eq(0).clone()
                newtpl.find('.title').text(el.title)
                newtpl.find('.content').text(el.content)
                newtpl.find('img').attr('src', el.image)
                newtpl.find('.item').attr('href','javascript:;')
                tabPanes[el.tab].append(newtpl)
                newtpl.show();
            });
        }
    });
})