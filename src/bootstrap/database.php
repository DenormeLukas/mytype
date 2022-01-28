<?php

use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Capsule;
$capsule->addConnection([
    'driver'    => 'mysql',
    'host'      => getenv('PHP_DB_HOST'),
    'database'  => getenv('PHP_DB_DATABASE'),
    'username'  => getenv('PHP_DB_USERNAME'),
    'password'  => getenv('PHP_DB_PASSWORD'),
    'charset'   => 'utf8mb4',
    'collation' => 'utf8mb4_unicode_ci',
    'prefix'    => '',
]);
$capsule->setAsGlobal();
$capsule->bootEloquent();
