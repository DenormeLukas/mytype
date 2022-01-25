$(function () {
    let brands = $(".brands");
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();

        if (scroll >= 200) {
            brands.removeClass('brands').addClass("brands-alt");
        } else {
            brands.removeClass("brands-alt").addClass('brands');
        }
    });
});