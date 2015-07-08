$(document).ready(function(){

	$("#phone").mask("(999) 999-9999");
	$("#dob").mask("99/99/9999");
	$("#ssn").mask("999-99-9999");
	$("#pw").mask("99-9999999");
	

	/*$("#pw").keypress(function(e){		
		$(this).attr("type", "text");
	}).keyup(function(e){
		$(this).attr("type", "password");
	});*/

	// Display Inputs for Rows w/o subfields
	$(".form_noSubFields").on("click", function(){
		
		$(this).children("label").css("font-size", "16px");		
		$(this).css({
			"padding-bottom": "22px",
			"border": "1px solid #b3d4fc"
		});
	});

	// Display Inputs for Rows w/ subfields
	$(".form_hasSubFields").on("click", function(){

		$(this).children("label").hide();
		
		$(this).children(".subField").show();
		$(this).find("input").css({
			"border-bottom": "1px solid #ccc"
		});

		if( $(this).find("input").first().attr("id") == "first" ){
			$(this).find("input").first().focus();
		}		
		
		$(this).css({
			"padding-bottom": "0px",
			"border": "1px solid #b3d4fc"
		});

	});


});

/*
(function() {
  (function($) {
    $.fn.maskPassword = function(delay) {
      if (delay == null) {
        delay = 1000;
      }
      return $(this).on('keyup', function(e) {
        var len, _ref;
        if ((_ref = e.keyCode) !== 13 && _ref !== 91 && _ref !== 18 && _ref !== 16 && _ref !== 17 && _ref !== 93) {
          clearTimeout($(this).data('show'));
          if ($(this).attr('type') === 'password') {
            $(this).attr({
              'type': 'text'
            });
            len = $(this).val().length;
            this.setSelectionRange(len, len);
          }
          return $(this).data('show', setTimeout((function(_this) {
            return function() {
              $(_this).attr({
                'type': 'password'
              });
              len = $(_this).val().length;
              return _this.setSelectionRange(len, len);
            };
          })(this), delay));
        }
      });
    };
    return $.fn.destroyMaskPassword = function() {
      return clearTimeout($(this).data('show'));
    };
  })($);

}).call(this);
*/
