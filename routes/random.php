<?php
	$app->get('/random', function() use ($app) {
		$app->render('random.html');
	});
