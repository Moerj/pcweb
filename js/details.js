$(function() {
    var bannerList = $('#details-banner img')
    var bannerActive = $('#detail-banner-active')


    bannerList.click(function() {
        var src = $(this).attr('src')
        bannerActive.attr({
            src: src
        })
    })
})
