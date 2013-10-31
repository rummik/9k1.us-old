<?php
	$app->get('/', function() use ($app) {
		$address = $app->getCookie('address') ?: base_convert(rand(1296, 46655), 10, 36);
		$app->setCookie('address', $address, '1 year');
		$app->render('index.html', [ 'address' => htmlentities(substr($address, 0, 3)) ]);
	});

	$app->get('/qr/:address', function($address) use ($app) {
		$app->response->headers->set('Content-Type', 'image/png');
		$address = substr($address, 0, 3);
		QRcode::png("$address@9k1.us", false, 'L', 14, 1, false, 0xaaff00, 0x22112a);
	});
