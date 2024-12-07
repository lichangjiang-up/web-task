$(function () {
    const navbarNav = $('nav.navbar');
    navbarNav.find('a').each((_, aTag) => {
        aTag = $(aTag);
        const href = aTag.attr('href');
        if (!href?.length > 0 || href.startsWith("#") || window.location.pathname !== aTag.prop('pathname')) {
            return !!aTag.removeClass('active');
        }
        aTag.addClass('active').parentsUntil(navbarNav).filter('.dropdown-menu').each(function (_, ul) {
            $(ul).siblings('.dropdown-toggle').addClass('active')
        });
        return false;
    });
})