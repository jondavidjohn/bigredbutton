(function() {
	var notes = {
		'author' : {
			title: 'Author',
			text: '' +
				'This is a test note about what I want to say \n' +
				'about myself\n\n' +
				' - A list\n' +
				' - of Stuff\n'
		},
	};

	document.addEventListener('impress:stepenter', function(e) {
		var note = notes[e.target.id];
		console.log('');
		console.log('');
		console.log('******************************');
		console.log('** ' + note.title);
		console.log('******************************');
		console.log('');
		console.log(note.text);
	});
})();

