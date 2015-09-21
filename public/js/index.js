$(function() {
	
	var socket = io(),
			$messages = $('#messages'),
			$msgBox = $('#message-box'),
			username = prompt("Enter your name");

	$('#send-message-btn').on('click', function () {
		
		var msg = {
			user: username,
			content: $('#message-box').val()
		}
		socket.emit('chat', msg);
		
		var $html = '<div class="message">';
		$html += '<strong>' + msg.user + ':</strong>';
		$html += msg.content + '</div>';
		
		$messages.append($html);
		$msgBox.val('');

		return false;
	});

	socket.on('chat', function (msg) {
		var $html = '<div class="message">';
		$html += '<strong>' + msg.user + ':</strong>';
		$html += msg.content + '</div>';
		
		$messages.append($html);
	})
	
});