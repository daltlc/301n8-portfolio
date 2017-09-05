//Type it js load

$(document).ready(function() {
  $('.type-it').typeIt({
    speed: 150,
    lifeLike: false,
    autoStart: false
  })
.tiType('Dalton Carr')
})

jQuery(function($, undefined) {
  $('#term_demo').terminal(function(command) {
    if (command !== '') {
      try {
        var result = window.eval(command);
        if (result !== undefined) {
          this.echo(new String(result));
        }
      } catch(e) {
        this.error(new String(e));
      }
    } else {
      this.echo('');
    }
  }, {
    greetings: 'Welcome',
    name: 'js_demo',
    height: 200,
    prompt: 'js> '
  });
});
