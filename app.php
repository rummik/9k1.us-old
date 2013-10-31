<?php
	use \Slim\Slim;

	require 'vendor/autoload.php';

	error_reporting(E_ALL ^ E_NOTICE);

	if (!($config = json_decode(file_get_contents('config.json'), true)))
		exit('Sorry.  Really could use a config.json (check out config.json.sample)');

	date_default_timezone_set('UTC');

	$app = new Slim([
		'templates.path' => './views',
	]);

	foreach (glob('routes/*.php') as $file)
		include $file;

	$app->run();
