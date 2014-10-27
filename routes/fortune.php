<?php
	$app->get('/fortune', function() use ($app) {
		$app->response->headers->set('Content-Type', 'text/plain');
		print `/usr/games/fortune`;
	});
