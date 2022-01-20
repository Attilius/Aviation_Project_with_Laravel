<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customers extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'customers';
    protected $primaryKey = 'id';
}
