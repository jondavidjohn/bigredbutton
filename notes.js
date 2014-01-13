(function() {
	var notes = {
		'author' : {
			title: 'Author',
			text: '' +
				'Hi! My name is Jonathan Johnson.\n\n' +
				'I started a year and a half ago at Crowd Favorite.\n\n' +
				'Subsequently introduced to WordPress and quickly learned how to capitilize it properly.\n\n' +
				'Since then Ive built some interesting things for clients, contributed to WordPress Core, ' +
				'and help automate a lot of our internal proceses.\n\n'
		},
		'title' : {
			title: 'Title',
			text: '' +
				'Ive titled this talk "The Big Red Button" because a lot of common strategies ' +
				'used to move code into production can end up looking like a big red button that ' +
				'you should press as little as possible because sometimes it doesnt go the way you plan.\n\n' +
				'Im going to share how we have tackled this problem at Crowd Favorite and hopefully inspire ' +
				'you to tackle your own troubled processes.'
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
				'Identify the files that contain your changes\n\n' +
				'Has anyone else editing those files since you began?\n\n' +
				'Can be harder than it seems, even if youre using a VCS\n\n' +
				'Re-upload everything so it matches your local copy.\n\n'
		},
		'ftpdeploy-3' : {
			title: 'FTP Cold Sweat',
			text: '' +
				'Hovering over the production window, questioning everything\n\n' +
				'Did I test these changes thoroughly enough?\n\n' +
				'Did I follow the deployment checklist perfectly? (no, you didnt)\n\n'
		},
		'ftpdeploy-4' : {
			title: 'FTP Release',
			text: '' +
				'Youve decided you going to do it.  Youre going to deploy the changes. ' +
				'So as you initiate your deployment, one by one, files are transferred into place.\n\n' +
				'This is not a trivial fact.\n\n' +
				'What if my connection is dropped half way through the upload?\n\n' +
				'Do I really want people hitting the site when its halfway updated?\n\n'
		},
		'ftpdeploy-revert' : {
			title: 'What now?',
			text: '' +
				'Maybe the problem is rooted in the deployment process but maybe its a code problem\n\n' +
				'Regardless, you now have to fix it.\n\n' +
				'Is this a defined and repeatable process?\n\n' +
				'Does your deploy process help or hurt a rollback?\n\n' +
				'At worst you simply have to resort to editing code in production\n\n'
		},
		'ftpdeploy-revert-2' : {
			title: 'How do we minimize the risk?',
			text: '' +
				'Make a checklist?\n\n' +
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
				'A quote I heard that stuck with me talking about dealing with failure of process in software teams'
		},
		'ftpdeploy-revert-3' : {
			title: 'Mean Time to Recover',
			text: '' +
				'Accept the existance of failure, repeated failure.  \n\n' +
				'Make failure cheap.\n\n' +
				'Produce a consistent and repeatable process for "undoing" your deploys.\n\n'
		},
		'ftpdeploy-revert-4' : {
			title: 'Automate All The Things!',
			text: '' +
				'We are programmers, professional automators.\n\n' +
				'We automate publishing all day, everyday.\n\n' +
				'We can do better.\n\n'
		},
		'ftpdeploy-revert-5' : {
			title: 'Tools, Capistrano and Capistrano-WP',
			text: '' +
				'Capistrano runs commands remotely via an SSH connection on one or more remote servers.  ' +
				'These commands comprise a set of recipies that have been battle hardened to provide a ' +
				'reliable and repeatable process to confidently deploy your web site or application.\n\n' +
				'Capistrano-WP - A Capistrano plugin used for deploying WordPress specifically.\n\n'
		},
		'capdeploy-1' : {
			title: 'Demo Capistrano Deploy',
			text: '' +
				'$> cap deploy\n\n'
		},
		'capdeploy-4' : {
			title: 'Demo Capistrano Deploy:rollback',
			text: '' +
				'$> cap deploy:rollback\n\n'
		},
		'how-cap-works-2' : {
			title: 'How Capistrano Works - Releases',
			text: '' +
				'A release is the result of a Capistrano deployment, the resulting webroot' +
				'containing your project and its latest changes.\n\n' +
				'Capistrano builds up a new release directory for' +
				'every deployment and retains a defined number of previous' +
				'releases, each with their own self contained directories.\n\n'
		},
		'how-cap-works-3' : {
			title: 'How Capistrano Works - Symlinks',
			text: '' +
				'Capistrano uses the power of symlinks maintain directory structures that need to be shared accross all releases.\n\n' +
				'Directories like uploads, cache directories, etc...\n\n' +
				'It also uses a symlink as the webroot, to point at the most current release.\n\n'
		},
		'additional-capistrano-features' : {
			title: 'Capistrano Features',
			text: '' +
				'Extensible\n\n' +
				'Multi-Stage Support\n\n' +
				'Transparent multi-server support\n\n'
		},
		'capistrano-wp-features' : {
			title: 'Capistrano-WP Features',
			text: '' +
				'Check current release for changes since the last deploy\n\n' +
				'Handle WordPress via SVN\n\n' +
				'Stage Specific Config files\n\n'
		},
		'requirements' : {
			title: 'Requirements',
			text: '' +
				'SSH Access to your Hosting Environment\n\n' +
				'Usage of a Version Control System (subversion, git, etc..)\n\n' +
				'Your repository root should correspond to your webroot\n\n'
		},
		'install' : {
			title: 'Installation',
			text: '' +
				'Distributed via RubyGems\n\n' +
				'(sudo) gem install capistrano-wp\n\n'
		},
		'project-setup' : {
			title: 'Setting Up a Project',
			text: '' +
				'$> capify-wp .\n\n' +
				'\n\n'
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

