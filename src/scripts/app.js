//variable set to false if textarea has not received focus
var setTextarea = false;

//clear out the helper text from the text area of focus
$('.controls textarea').on('focus', function(){
	if (!setTextarea){
		$(this).val('');
	}
	setTextarea = true;
});

//change out the headline text to match the text in the textarea
$('.controls textarea').on('keyup', function(){
	$('.stage-text-headline').text($(this).val());
});

//set mix-blend-mode based on button click
$('.controls').on('click','button', function(){
	var mixBlendMode = $(this).data('blend');
	$('.stage-text').css('mix-blend-mode',mixBlendMode);
	$('#mode').text(mixBlendMode);
});



//jquery Spectrum Color picker
$(".basic").spectrum({
    color: "#E67878",
    change: function(color) {
        $("#basic-log").text("Color changed to: " + color.toHexString());
        $('.stage-text-headline').css('color',color.toHexString());
    }
});