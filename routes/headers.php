<?php
	$app->get('/head(ers)?', function() use ($app) {
		$app->response->headers->set('Content-Type', 'application/json');

		$headers = [];

		foreach ($_SERVER as $key => $value) {
			if (substr($key, 0, 5) != 'HTTP_')
				continue;

			$key = str_replace(' ', '-', ucwords(str_replace('_', ' ', strtolower(substr($key, 5)))));
			$headers[$key] = $value;
		}

		print json_encode($headers);
	});
