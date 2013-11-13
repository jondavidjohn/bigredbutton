(function() {
	var notes = {
		'author' : {
			title: 'Author',
			text: '' +
				'Hi! My name is Jonathan Johnson.  About a year and a half ago\n' +
				'I accepted a position in town at Crowd Favorite where I was introduced\n' +
				'to WordPress and learned how to capitilize it.\n' +
				'Since then I\'ve been able to build some neat things for clients,\n' +
				'contriute to WordPress core, and help automate a lot of our internal\n' +
				'processes for collaborating on the WordPress platform amongst a large team.\n' +
				'\n' +
				'Im going to discuss the pains involved in typical code deployment workflows, \n' +
				'and how we alleviate those pains at Crowd Favorite.\n'
		},
		'title' : {
			title: 'Title',
			text: '' +
				'Ive titled this talk "The Big Red Button" because a lot of common strategies\n' +
				'used to move code into production can end up looking like a big red button that\n' +
				'you should press as little as possible because sometimes it doesnt go the way you plan.\n'
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

