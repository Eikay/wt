var config = {

	'endPoints': {

		'groups': 'http://localhost:8000/server.php?f=groups.json',
		'items' : 'http://localhost:8000/server.php?f=items.json',
		/* 'users' : 'http://localhost:8000/server.php?f=users.json',*/

		'auth': {
			'method': 'POST',
			'url': 'http://localhost:8000/server.php?f=auth.json'
		},

		'order' : {

			'url'   : '',
			'method': 'POST'	

		}
	}		

};