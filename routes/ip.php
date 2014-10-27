<?php
	$app->get('/ip', function() use ($app) {
		$app->response->headers->set('Content-Type', 'text/plain');
		print $_SERVER['REMOTE_ADDR'];
	});
