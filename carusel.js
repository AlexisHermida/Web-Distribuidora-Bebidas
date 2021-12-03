/*NO EDITAR ÉSTA ZONA
Autor: http://villalisaceliano.blogspot.com.es/ Con éste sencillo script se pueden poner un conjunto de fotos respetando siempre los derechos de autor. El sistema consta avance y retroceso manual */
 var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
 var contador = null;

 function marcha() {
   cambio(-1);
   document.images.pantalla.src = fotos[0];
 }

 function cambio(avance) {
   contador += avance;
   if (contador == fotos.length) contador = fotos.length - 1;
   else
   if (contador < 0) contador = 0;
   document.images.pantalla.src = fotos[contador]
 }

 function enlazar() {
   var nuevaVentana = window.event;
   nuevaVentana = window.open(enlaces[contador])
 }
/*editar las URL de las fotos*/
 var fotos = new Array(
"https://1.bp.blogspot.com/-2Az5wdW2J0M/XPG9miEQDyI/AAAAAAAAaXE/7Y6tsj1itkYRTpIB1XpSJHRxl9WLhGhOgCKgBGAs/s320/20150809_121632.jpg",
"https://1.bp.blogspot.com/-1lPzxY8PCzU/XPG9mi_SmwI/AAAAAAAAaXE/pF2CSE17R_QdTfQfUNuuAuiK3WTGonaIACKgBGAs/s320/20150809_121754.jpg",
"https://1.bp.blogspot.com/-3q_0N-zUi8Q/XPG9mssl-vI/AAAAAAAAaXE/ZGRNMIkr6ZoyKoQiPs-HfJFfYrusQysJQCKgBGAs/s320/20150809_121923.jpg",
"https://1.bp.blogspot.com/-rtZypHjrwbY/XPG9mgzp9rI/AAAAAAAAaXE/Hk0BR6lFDbw2LP4V9j60PqRsypCbp1QDgCKgBGAs/s320/20150809_125904.jpg",
"https://1.bp.blogspot.com/-Ab2c2UfqQrM/XPG9mu16cZI/AAAAAAAAaXE/4_-61f5FzHc9fy07slUg0Dc2jEiIxEIiwCKgBGAs/s320/20150809_125931.jpg",
"https://1.bp.blogspot.com/-WLuYP1BCDRI/XPG9ms65jRI/AAAAAAAAaXE/f9qldPs1mSQOgQwLs9WksKzw5ymYyfmiwCKgBGAs/s320/20150809_130343.jpg",
"https://1.bp.blogspot.com/-WqZ7uKOcfXk/XPG9mmRhX1I/AAAAAAAAaXE/Xb_mmCu6NeIuS1DWffqYnpekoH2EVsf4wCKgBGAs/s320/20150809_142535.jpg",
"https://1.bp.blogspot.com/-a6N5ZrQbCIA/XPG9mnjvmyI/AAAAAAAAaXE/EUAiMiZeSSIy8O-eoOGT5woyEKmSap4kgCKgBGAs/s320/20150809_142233.jpg",
"https://1.bp.blogspot.com/-nhwWd8xIisk/XPG9mnkndeI/AAAAAAAAaXE/6oDT5TfhDz4ZPtN9f7fVxap8ucMHZ2fdwCKgBGAs/s320/20150809_142229.jpg",
"https://1.bp.blogspot.com/-5mYzwedqy7U/XPG9mkZPU0I/AAAAAAAAaXE/IWIdhkFVRWw4PbzmVJURmryh9gszHN6RACKgBGAs/s320/20150809_141958.jpg",
"https://1.bp.blogspot.com/-ymOK_06M5nE/XPG9mnQpnfI/AAAAAAAAaXE/5knSpUZPDOUSKfTKReQ3wVP8z0cWGMzCQCKgBGAs/s320/20150809_141944.jpg",
"https://1.bp.blogspot.com/-G8WsuvatGHI/XPG9mlWQ0iI/AAAAAAAAaXE/ygZcRo453y4X1SJfWy5HRUPltflj7irQwCKgBGAs/s320/20150809_132208.jpg",
"https://1.bp.blogspot.com/-48ikWhrervE/XPG9mioQbII/AAAAAAAAaXE/-izGbrla8fwISaoX-e6r9ZStfXDuRwjswCKgBGAs/s320/20150809_142545.jpg",
  '');
/*La página que esta la foto*/
 var enlaces = new Array(
 "https://1.bp.blogspot.com/-2Az5wdW2J0M/XPG9miEQDyI/AAAAAAAAaXE/7Y6tsj1itkYRTpIB1XpSJHRxl9WLhGhOgCKgBGAs/s320/20150809_121632.jpg",
"https://1.bp.blogspot.com/-1lPzxY8PCzU/XPG9mi_SmwI/AAAAAAAAaXE/pF2CSE17R_QdTfQfUNuuAuiK3WTGonaIACKgBGAs/s320/20150809_121754.jpg",
"https://1.bp.blogspot.com/-3q_0N-zUi8Q/XPG9mssl-vI/AAAAAAAAaXE/ZGRNMIkr6ZoyKoQiPs-HfJFfYrusQysJQCKgBGAs/s320/20150809_121923.jpg",
"https://1.bp.blogspot.com/-rtZypHjrwbY/XPG9mgzp9rI/AAAAAAAAaXE/Hk0BR6lFDbw2LP4V9j60PqRsypCbp1QDgCKgBGAs/s320/20150809_125904.jpg",
"https://1.bp.blogspot.com/-Ab2c2UfqQrM/XPG9mu16cZI/AAAAAAAAaXE/4_-61f5FzHc9fy07slUg0Dc2jEiIxEIiwCKgBGAs/s320/20150809_125931.jpg",
"https://1.bp.blogspot.com/-WLuYP1BCDRI/XPG9ms65jRI/AAAAAAAAaXE/f9qldPs1mSQOgQwLs9WksKzw5ymYyfmiwCKgBGAs/s320/20150809_130343.jpg",
"https://1.bp.blogspot.com/-WqZ7uKOcfXk/XPG9mmRhX1I/AAAAAAAAaXE/Xb_mmCu6NeIuS1DWffqYnpekoH2EVsf4wCKgBGAs/s320/20150809_142535.jpg",
"https://1.bp.blogspot.com/-a6N5ZrQbCIA/XPG9mnjvmyI/AAAAAAAAaXE/EUAiMiZeSSIy8O-eoOGT5woyEKmSap4kgCKgBGAs/s320/20150809_142233.jpg",
"https://1.bp.blogspot.com/-nhwWd8xIisk/XPG9mnkndeI/AAAAAAAAaXE/6oDT5TfhDz4ZPtN9f7fVxap8ucMHZ2fdwCKgBGAs/s320/20150809_142229.jpg",
"https://1.bp.blogspot.com/-5mYzwedqy7U/XPG9mkZPU0I/AAAAAAAAaXE/IWIdhkFVRWw4PbzmVJURmryh9gszHN6RACKgBGAs/s320/20150809_141958.jpg",
"https://1.bp.blogspot.com/-ymOK_06M5nE/XPG9mnQpnfI/AAAAAAAAaXE/5knSpUZPDOUSKfTKReQ3wVP8z0cWGMzCQCKgBGAs/s320/20150809_141944.jpg",
"https://1.bp.blogspot.com/-G8WsuvatGHI/XPG9mlWQ0iI/AAAAAAAAaXE/ygZcRo453y4X1SJfWy5HRUPltflj7irQwCKgBGAs/s320/20150809_132208.jpg",
"https://1.bp.blogspot.com/-48ikWhrervE/XPG9mioQbII/AAAAAAAAaXE/-izGbrla8fwISaoX-e6r9ZStfXDuRwjswCKgBGAs/s320/20150809_142545.jpg");