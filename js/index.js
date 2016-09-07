$(function () {

    // 绑定跳转的详情页
    function bindDetails(url) {
        $('body').css({ overflow: 'hidden' })
        layer.open({
            type: 2,
            area: ['100%', '100%'],
            fix: true,
            maxmin: true,
            content: url,
            end: function () {
                $('body').css({ overflow: 'auto' })
            }
        });
    }

    // 初始化轮播图
    if (window.Swiper) {
        new Swiper('.swiper-container', {
            // direction: 'vertical',
            loop: true,

            // 如果需要分页器
            pagination: '.swiper-pagination',
            paginationClickable: true,

            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',

            // 自动切换的时间间隔，毫秒
            autoplay : 5000,

            // 如果需要滚动条
            // scrollbar: '.swiper-scrollbar',
        })
    }

    // 热门产品的详情页
    $('body').on('click', '.hot a', function (e) {
        e.preventDefault();
        e.stopPropagation();
        bindDetails($(this).attr('href'));
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
                newtpl.find('.item').on('click', function (e) {
                    e.preventDefault()
                    e.stopPropagation()
                    bindDetails($(this).attr('href'))
                })
                tabPanes[el.tab].append(newtpl)
                newtpl.show();
            });
        }
    });


})