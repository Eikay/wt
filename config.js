var config = {
	
	'report': {
		'url': './',
		'extension': 'html'
	},

	'endPoints': {

		'groups': 'http://localhost:3000/groups',
		'items' : 'http://localhost:3000/items',
		/* 'users' : 'http://localhost:8000/server.php?f=users.json',*/

		'auth': {
			'method': 'POST',
			'url': 'http://localhost:3000/auth'
		},

		'order' : {

			'url'   : 'http://localhost:3000/order',
			'method': 'POST'	

		}
	}		

};