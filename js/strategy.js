(function(){
  var $modules = $('[module]');

  $modules.each(function(i, el) {
    var $el = $(el),
        modules = $el.attr('module').split(',');
    
    if( modules.indexOf('tab') > -1 ) {
      initTab( $el );
    }
  });

  function initTab( _el ) {
    var newTab = new mo.Slide({
      target: _el.find('.mocha-tab-panel'),
      controller: _el.find('.mocha-tab-triggers-ul li'),
      direction: 'x',
      effect: 'slide',
      circle: true,
      autoPlay: false,
      event: {
        'init': function() {
          setTimeout(function(){
            var $panel = $(_el).find('.mocha-tab-panel')[0];
            var _height = $($panel).height()+parseInt($($panel).css('padding-top'))+parseInt($($panel).css('padding-bottom'));
            _el.children('.mocha-tab-panels').height( _height );
          },0);
        }
      }
    });
  }
})()