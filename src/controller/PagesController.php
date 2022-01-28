<?php

require_once __DIR__ . '/Controller.php';
require_once __DIR__ . '/../model/Images.php';


class PagesController extends Controller
{

  public function index()
  {

    $images = images::select('name', 'path', 'alt')->get();
    $this->set('images', $images);
  }
}
