<?php
	$app->get('/wakatime/json', function() use ($app, $config) {
		$app->response->headers->set('Content-Type', 'application/json');
		$range = 'start=' . date('m/d/Y', strtotime('-1 week')) . '&end=' . date('m/d/Y');
		print file_get_contents("https://wakatime.com/api/v1/summary/daily?$range&api_key={$config['wakatime_key']}");
	});

