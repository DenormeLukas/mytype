<?php

use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Capsule;
$capsule->addConnection([
    'driver'    => 'mysql',
    'host'      => getenv('PHP_DB_HOST') ?: 'ID310084_mytype.db.webhosting.be',
    'database'  => getenv('PHP_DB_DATABASE') ?: 'ID310084_mytype',
    'username'  => getenv('PHP_DB_USERNAME') ?: 'ID310084_mytype',
    'password'  => getenv('PHP_DB_PASSWORD') ?: 'mytypeint3',
    'charset'   => 'utf8mb4',
    'collation' => 'utf8mb4_unicode_ci',
    'prefix'    => '',
]);
$capsule->setAsGlobal();
$capsule->bootEloquent();
