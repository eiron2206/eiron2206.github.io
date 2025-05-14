

document.addEventListener('DOMContentLoaded', function () {
    var parallax = document.querySelectorAll('.parallax');
    M.Parallax.init(parallax);
    // var options = document.querySelectorAll('.tab-options')
    var options = {
        swipeable: true,
        duration: 10
    }
    var cardTabs = document.querySelectorAll('.tabs')
    M.Tabs.init(cardTabs, options);

    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});

});
