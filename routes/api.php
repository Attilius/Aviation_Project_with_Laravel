<?php

use Zttp\Zttp;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$uris = ['/', '/travel-guide'];

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/private-jet-rent', function() {
    $departure_location = request('departure_location');
    $destination = request('destination');

    $response = Zttp::get("https://www.distance24.org/route.json?stops=$departure_location|$destination");
    return $response -> json();
});

Route::get('/new-york', function() {
    $service = request('service');
    $cityName = request('cityName');

    $response = Zttp::get("https://travelguide-api.herokuapp.com/addresses/$service/$cityName");
    return $response -> json();
});

foreach($uris as &$uri){
    Route::get($uri, function() {
        $area = request('area');
        $location = request('location');
    
        $response = Zttp::get("https://www.timeapi.io/api/Time/current/zone?timeZone=$area/$location");
        return $response -> json();
    });
}