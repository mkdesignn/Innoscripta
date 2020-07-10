<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
        <link rel="icon" type="image/png" sizes="192x192" href="{{url()->to('/').'/images/android-icon-192x192.png'}}">

        <title>Innoscripta</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">


        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                /*height: 100vh;*/
                margin: 0;
            }

        </style>

    </head>
    <body>
        <div id="root"></div>
    </body>

    <script type="text/javascript" src="{{url()->to('/').'/js/index.js'}}"></script>
</html>
