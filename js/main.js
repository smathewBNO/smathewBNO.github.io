$(document).ready(function(){

	$("#phone").mask("(999) 999-9999");
	$("#dob").mask("99/99/9999");
	$("#ssn").mask("999-99-9999");
	$("#pw").mask("99-9999999");
	
	var counter = 0;
	$("#pw").on("change", function(){		
		console.log( $(this).val() );
		var value = $(this).val();
		var bullet = "*";
		$(this).val( value.replace(value.substr(counter, value.length), bullet) );
		counter++;
	});

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

	//Select Menu Styling
	$(".state select").chosen({});

});


