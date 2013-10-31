<?php
	$app->get('/ip', function() use ($app) {
		print $_SERVER['REMOTE_ADDR'];
	});
