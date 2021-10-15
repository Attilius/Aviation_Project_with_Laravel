<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">
@yield('style')
        <style>
            body {
               background: whitesmoke; 
            }
        </style>
    </head>
    
    <body>
        
        <div id="app">
@yield('content')
        </div>

@yield('scripts')
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
