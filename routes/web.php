<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/about', function () {
    return view('about');
});

Route::get('/services', function () {
    return view('services');
});

Route::get('/services/travel-insurance', function () {
    return view('travel-insurance');
});

Route::get('/services/luggage-insurance', function () {
    return view('luggage-insurance');
});

Route::get('/services/premium-comfort', function () {
    return view('premium-comfort');
});

Route::get('/services/private-jet-rent', function () {
    return view('private-jet-rent');
});

Route::get('/services/group-discount', function () {
    return view('group-discount');
});

Route::get('/services/booking-cancellation', function () {
    return view('booking-cancellation');
});

Route::get('/contact', function () {
    return view('contact');
});
