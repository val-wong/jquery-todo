/**
 * jQuery TODO
 **/
/*
 *  Use the provided starter HTML to make a list app.
 *  This app will take text from an input box
 *  and display it in another box elsewhere on the page.
 *  Add a way to click and delete the entries you add, too.
 *
 *
 *  Bonus:
 *  ======
 *  Add a new entry when you press the `return` key.
 *  Style it!
 *
 */
 
 // First we will add a click event. When button is clicked, a function addTask will run
 $('button').click(addTask);
 // Input click event
 $('input').keypress(function(event){
 	// 13 is the keycode for a return key press
 	// console.log(event)
 	if(event.which == 13){
 		addTask();
 	}
 });
$(document).on('click', '#delete', removeTask);

function addTask(){
	var task = $('#newtask').val();

	$('#tasks').append('<div>' + task + '<span id="delete">x</span></div>');

	$('#newtask').val("");
}

function removeTask(){
	$(this).closest('div').remove();
}


