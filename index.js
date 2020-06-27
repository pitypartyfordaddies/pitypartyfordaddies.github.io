$(document).ready(function () {
    // $(".js-openBox").click();
    function ga(evt) {
        gtag('event', 'Click Link', {
            'event_category': 'Click',
            'event_label': evt,
        });
    }

    $('.js-link').click(function(e){
        var me = $(this);
		eval(me.data('tracking'));
		var href = me.attr('href');
		if (/^javascript:/.test(href)) { return; }
        var target = me.attr('target');
		if (target && target != '_top') { return; }
		target = target == '_top' ? top : window;
		e.preventDefault();
		setTimeout(function() { target.location.href = href; }, 300);
    });

    $('.copy-link').click(function(){
        $('#modalbox').modal('hide')
    });

    new ClipboardJS('.copy-link');
});

var a2a_config = a2a_config || {};
a2a_config.callbacks = a2a_config.callbacks || [];
a2a_config.callbacks.push({
    share: on_a2a_Share
});
a2a_config.track_links = 'ga';
function on_a2a_Share(data) {
    console.log(data);
}