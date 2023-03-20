<?php 

$correo = $_POST['correo'];
$nombre = $_POST['nombre'];
$mensaje = $_POST['mensaje'];
$numero = $_POST['numero'];

//echo $correo . " " . $nombre . " " . $mensaje;

$destinatario = "recepcionsnfrancisco@gmail.com";
$asunto = "Formulario Contacto Centro Médico"; 
$cuerpo = '
    <html> 
        <head> 
            <title>Formulario Contacto</title> 
        </head>
        <body> 
            <h1>Solicitud de contacto Centro Médico San Francisco</h1>
            <p> 
                Nombre:  '.$nombre . ' <br>
                Correo: '.$correo.' <br>
                Teléfono: '.$numero.' <br>
                Mensaje: '.$mensaje.' 
            </p> 
        </body>
    </html>
';
//para el envío en formato HTML 
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=UTF8\r\n"; 

//dirección del remitente

$headers .= "FROM: $nombre <$correo>\r\n";
mail($destinatario,$asunto,$cuerpo,$headers); 

header("Location: index.html");
?> 