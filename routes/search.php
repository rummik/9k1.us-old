<?php
	$app->get('/search', function() use ($app) {
		$app->render('search.html');
	});
