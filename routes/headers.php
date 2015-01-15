<?php
	$app->get('/head(ers)?', function() use ($app) {
		$app->response->headers->set('Content-Type', 'application/json');
		print json_encode(getallheaders());
	});
