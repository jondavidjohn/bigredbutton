(function() {
	var notes = {
		'author' : {
			title: 'Author',
			text: '' +
				'Hi! My name is Jonathan Johnson.  About a year and a half ago ' +
				'I accepted a position in town at Crowd Favorite where I was introduced ' +
				'to WordPress and learned how to capitilize it.  ' +
				'Since then I\'ve been able to build some neat things for clients, ' +
				'contriute to WordPress core, and help automate a lot of our internal ' +
				'processes for collaborating on the WordPress platform amongst a large team. ' +
				'\n' +
				'Im going to discuss the pains involved in typical code deployment workflows, ' +
				'and how we alleviate those pains at Crowd Favorite.'
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
				'So first you have to identify the files that contain your changes, this ' +
				'can be harder than it seems, even if youre using a VCS.  Maybe you just ' +
				'have to re-upload everything so it matches your local copy.'
		},
		'ftpdeploy-3' : {
			title: 'FTP Cold Sweat',
			text: '' +
				'This is where the cold sweat starts to kick in right?\n' +
				'In this moment youre questioning everything, youve got those files' +
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
		'ftpdeploy-5' : {
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
				'Maybe the problem is rooted in the deployment process but maybe ' +
				'its not, maybe its an unforseen edge case that exists in production and not staging.\n' +
				'Regardless, you now have to fix it.  Is this a defined and repeatable ' +
				'process? How much of this process depends on us humans remembering to do the ' +
				'right things?\n' +
				'All in all, recovery in a Manual FTP workflow is likely a extended manual process of some kind ' +
				'at best.  At worst you simply have to resort to editing code in production because there is ' +
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
				'Maybe how to minimize the risk and trying your hardest to prevent failure is ' +
				'the wrong question to be asking?\n' +
				'A quote that really stuck with me was given by a guy giving a talk about how to deal ' +
				'with failure on a team, and he mentions that there is always a person that speaks up ' +
				'and says something like ... \n' +
				'He notes that this completely misses the point.  We going to make mistakes, we\'ll probably make the SAME mistake ' +
				'and your never going to fully remove the possibility for someone on your team to make those mistakes. \n' +
				'He then provided a quote that really drives home why it is that we need to fix these broken processes.'
		},
		'ftpdeploy-revert-3' : {
			title: 'Mean Time to Recover',
			text: '' +
				'Its good to minimize risk, but accepting the fact that failures will happen is an important step.  \n' +
				'This is why its just as important to make failure cheap' +
				'\n\n' +
				'Produce a consistent and repeatable process for "undoing" your deploys.  If you can quickly and reliably ' +
				'revert your deployment, all the sudden you have yourself a process you can lean on and trust.'
		},
		'conclusion' : {
			title: 'Wrapping it all up',
			text: '' +
				'Dont remain in the status quo because thats what you and your team have always done.  If there is a painful ' +
				'part of your process, fix it.\n' +
				'When I started at Crowd Favorite we were allocated a few hours for initial environment setup whenever a ' +
				'new developer started work on a project they didnt have setup.  A process that included asking joe for his ' +
				'devleopment database, copying Janes config files, etc... A very ad hoc and painful process.  Today, through automation ' +
				'and infrastructure, we have built out a toolchain that allows a new devleoper to setup a new project in minutes with a ' +
				'single command.  This combined with the deployment tools we have just discussed generally has made the only thing ' +
				'preventing a developer from getting work done... is the work itself.\n' +
				'\n' +
				'In the same vein, automation allows you to document and make consistent processes that were before chalked up as ' +
				'institutional knowledge trapped in a handful of peoples heads.  Everyone can view the source of your automation tools, which ' +
				'provides insight into the processes which new developers can immediately use and understand.\n' +
				'\n' +
				'In our office, everyone deploys code.  Whether youre a project manager, a front end developer, designer, or the usual ' +
				'suspects us back end developers.  Automating this process empowers everyone on your team to be able to take ' +
				'responsibility for their piece of the puzzle more fully.'

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

