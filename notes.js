(function() {
	var notes = {
		'author' : {
			title: 'Author',
			text: '' +
				'Hi! My name is Jonathan Johnson.\n\n' +
				'Year and a half ago at Crowd Favorite \n\n' +
				'introduced to WordPress and learned how to capitilize it\n\n' +
				'build some cool things for clients\n\n' +
				'contriute to WordPress core, and help automate a lot of our internal proceses\n\n' +
				'Cover things weve learned\n\n'
		},
		'title' : {
			title: 'Title',
			text: '' +
				'Ive titled this talk "The Big Red Button" because a lot of common strategies ' +
				'used to move code into production can end up looking like a big red button that ' +
				'you should press as little as possible because sometimes it doesnt go the way you plan. '
		},
		'jargon' : {
			title: 'Jargon',
			text: '' +
				'Im going to be using the term "deploy" and "deployment" quite a bit while Im up here talking to you ' +
				'so I thought itd be a good idea to define it.\n\n' +
				'Lets get a show of hands, who here deploys code to production:\n' +
				'  - Once a month?\n' +
				'  - Once a week?\n' +
				'  - Daily?\n\n' +
				'FTP is the clear leader in the pain department but many problems are shared by both common strategies'
		},
		'ftpdeploy-1' : {
			title: 'FTP Start',
			text: '' +
				'Lets walk through the process of deploying some code changes via FTP, highlighting some of the ' +
				'problems FTPers have to deal with.'
		},
		'ftpdeploy-2' : {
			title: 'FTP Select Files',
			text: '' +
				'identify the files that contain your changes\n\n' +
				'can be harder than it seems, even if youre using a VCS\n\n' +
				're-upload everything so it matches your local copy.\n\n'
		},
		'ftpdeploy-3' : {
			title: 'FTP Cold Sweat',
			text: '' +
				'Cold Sweat\n\n' +
				'questioning everything, youve got those files\n' +
				'and youre hovering over that production environment.'
		},
		'ftpdeploy-4' : {
			title: 'FTP Release',
			text: '' +
				'Youve decided you going to do it.  Youre going to deploy the changes. ' +
				'So as you initiate your deployment, one by one, files are transferred into place.\n\n' +
				'This is not a trivial fact, at any given point in the process of uploading your files, ' +
				'your site is half updated and half not updated.  Each file is individually uploaded and ' +
				'put into place.  This problem is magnified linearly with how many files your uploading'
		},
		'ftpdeploy-revert' : {
			title: 'What now?',
			text: '' +
				'Maybe the problem is rooted in the deployment process but maybe its a code problem\n\n' +
				'Regardless, you now have to fix it.\n\n' +
				'Is this a defined and repeatable process?\n\n' +
				'At worst you simply have to resort to editing code in production because there is ' +
				'no defined recovery process.'

		},
		'ftpdeploy-revert-2' : {
			title: 'How do we minimize the risk?',
			text: '' +
				'The perfect checklist is a robust and complicated checklist, one that covers' +
				'all the angles.  Its exactly this type of checklist that trips up us humans. \n' +
				'\n\n' +
				'Pushing code out less often is also a bad option, all you are doing is increasing the size ' +
				'of your changesets and increasing the complexity of the problem when one of your deploys ' +
				'inevitably causes a problem.' +
				'\n\n' +
				'Late at night? like when no one is around to help you fix it?' +
				'\n\n' +
				'Maybe this is the wrong question.' +
				'\n\n' +
				'Wont make that mistake again' +
				'\n\n' +
				'A quote I heard that stuck with me talking about this problem'
		},
		'ftpdeploy-revert-3' : {
			title: 'Mean Time to Recover',
			text: '' +
				'Accept the existance of failure, repeated failure.  \n\n' +
				'Make failure cheap.\n\n' +
				'Produce a consistent and repeatable process for "undoing" your deploys.\n\n'
		},
		'conclusion' : {
			title: 'Wrapping it all up',
			text: '' +
				'Dont remain in the status quo\n\n' +
				'If there is a painful part of your process, fix it.\n\n' +
				'Story, hours to set up, now single command\n\n' +
				'The only thing preventing a developer from getting work done... is the work itself.\n\n' +
				'Automation empowers the non-savvy users, everyone deploys'
		}
	};

	document.addEventListener('impress:stepenter', function(e) {
		var note;
		if (notes.hasOwnProperty(e.target.id)) {
			note = notes[e.target.id];
			console.log('');
			console.log('');
			console.log('******************************');
			console.log('** ' + note.title);
			console.log('******************************');
			console.log('');
			console.log(note.text);
		}
	});
})();

