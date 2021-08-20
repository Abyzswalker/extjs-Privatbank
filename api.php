<?php

require __DIR__ . '/vendor/autoload.php';

use GuzzleHttp\Client;

$client = new Client();
$url = 'https://api.privatbank.ua/p24api/pboffice?json&city=%D0%9D%D0%B8%D0%BA%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C&address=';


$response = $client->request('GET', $url, ['headers' => ['Content-Type' => 'application/json', 'Accept' => 'application/json']]);
$responseData = json_decode($response->getBody());

$res['data'] = $responseData;
$res['total'] = count($responseData);

echo json_encode($res);

