$(document).ready(function(){

	$('#add_todo').click(function(){
		var newvalue = $('.todo-input').val(); 
		$('.todo-input').val('');
		//should result in creating a new item to check off
		$('ul').append('<li><input type="checkbox" class="done">  ' + newvalue + '</li>');

	});

	$('.list').click(function(){
		$(this).find('input:checkbox:checked').parent().fadeOut();
	
	});

});
