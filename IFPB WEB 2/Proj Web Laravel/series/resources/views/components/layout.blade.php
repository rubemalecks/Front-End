<!doctype html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0,
    maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{$title}}</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous">  
    <script src="https://kit.fontawesome.com/1456ca933a.js" crossorigin="anonymous"></script> 
    </head>
<body>
<div class="container">
   <div class="jumbotron">
        <h1>{{$title}}</h1>
   </div>
  
    {{$slot}}
   <div class="text-center bg-primary text-white mt-4"> 
           IFPB Controle Series - &copy; 2023 - Todos os direitos reservados
   </div>
</div>
<br><br>
    
</body>
</html>