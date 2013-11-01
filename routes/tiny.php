<?php
	use \Slim\Slim;
	use \Slim\Route;

	Route::setDefaultConditions(Route::getDefaultConditions() + [
		'id' => '.{4}'
	]);

	$app->post('/', 'requireAPIKey', function() use ($app, $db, $config) {
		$req = $app->request;
		$res = $app->response;

		$res->headers->set('Content-Type', 'application/json');

		$id = randID(4);

		$file = pasteFilename($id);
		$dir = dirname($file);

		if (count($_FILES) && $_FILES['data']['tmp_name']) {
			if (!is_dir($dir))
				mkdir($dir, 0755, true);

			copy($_FILES['data']['tmp_name'], $file);
		} elseif (count($_POST) && isset($_POST['data'])) {
			if (!is_dir($dir))
				mkdir($dir, 0755, true);

			file_put_contents($file, $_POST['data']);
		} else {
			$res->setStatus(400);
			$res->setBody('{"error":"No data"}');
			$app->stop();
		}

		$res->setBody(json_encode([
			'url' => $req->getUrl() . $app->urlFor('link', ['id' => $id]),
			'id' => $id,
		]));
	});

	$app->get('/:id(/:name)', function($id) use ($app, $db) {
		$res = $app->response;
		$req = $app->request;

		$res->headers->set('Content-Type', 'application/json');

		$file = pasteFilename($id);

		if (!is_file($file)) {
			$res->setStatus(404);
			$res->setBody('{"error":"Paste not found"}');
			$app->stop();
		}

		# break out of slim
		while (ob_get_level())
			ob_end_clean();

		$type = (new FInfo(FILEINFO_MIME_TYPE))->file($file);

		switch (dirname($type)) {
			case 'image': break;
			case 'text':
				$type = 'text/plain';
				break;

			default:
				header('Content-Disposition: attachment');
				break;
		}

		header("Content-Type: $type");
		header('X-Robots-Tag: noindex, nofollow');

		$file = fopen($file, 'r');
		$line = fgets($file);

		if (feof($file) && strtolower(substr($line, 0, 4)) == 'http') {
			header('Location: ' . $line);
			exit;
		}

		fseek($file, 0);

		# todo: use sendfile headers in production
		fpassthru($file);

		exit;
	})
	->name('link');

	$app->delete('/:id', 'requireAPIKey', function($id) use ($app, $db) {
		$req = $app->request;
		$res = $app->response;

		$res->headers->set('Content-Type', 'application/json');

		$file = pasteFilename($id);

		if (!is_file($file)) {
			$res->setStatus(400);
			$res->setBody('{"error":"Invalid token or unknown paste ID"}');
		} else {
			unlink($file);
			$res->setBody('{"message":"Paste removed"}');
		}
	});

	function pasteFilename($id) {
		$hash = hash('sha256', $id);
		return 'paste/' . substr($hash, 0, 2) . '/' . substr($hash, 2, 2) . '/' . substr($hash, 4);
	}

	function requireAPIKey() {
		global $config;

		$app = Slim::getInstance();

		$req = $app->request;
		$res = $app->response;

		if ($config['api_key'] && $_POST['key'] != $config['api_key']) {
			$res->setStatus(400);
			$res->headers->set('Content-Type', 'application/json');
			$res->setBody($req->post('data') . '{"error":"Invalid API key"}');
			$app->stop();
		}
	}

	function randToken($length, $alphabet = '') {
		$alphabet = $alphabet ?: '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`' .
		                         'abcdefghijklmnopqrstuvwxyz{|}~';

		$base = strlen($alphabet) - 1;

		for ($out=''; strlen($out)<$length; $out.=$alphabet[mt_rand(0, $base)]);

		return $out;
	}

	function randID($length) {
		global $config;
		return randToken($length, $config['id_alphabet']);
	}
