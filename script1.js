function peticion(){
	var valor=document.getElementsByTagName('input')[0].value;
	var xhr=new XMLHttpRequest();
	var almacen=document.getElementById('contenedor2');
	var respuesta="";
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			respuesta=xhr.responseText;
			almacen.innerHTML=respuesta;
		}
	};
	xhr.open('get','server.php?v='+valor,true);
	xhr.send();
}