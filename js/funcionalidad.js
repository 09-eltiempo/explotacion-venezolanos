$(document).ready(function(){


const jsonURL = 'https://www.eltiempo.com/infografias/2025/04/Explotacion_laboral_venezolanos/data/data.json?04234234';
let contenido = document.querySelector(".seccion");

/*------descripcion inicial-----------*/
let descripcionInicial = document.querySelector(".descripcion").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu pretium nunc. Aenean suscipit elementum tempor. Mauris luctus nisi nec nisl imperdiet, tempor pharetra magna tempor. Pellentesque fringilla justo vel vestibulum pretium. Vivamus fringilla massa id neque faucibus ultrices.";

/*-------------contenidos-------------*/
let contenido_principal = document.querySelector(".contenido_principal");
let ilustracion_movile = document.querySelector(".ilustracion_movile");
let body                = document.querySelector("body");
let contenido_articulo  = document.querySelector(".contenido_articulo");
/*-------------Fin contenidos-------------*/

/*------------articulos-----------------*/
let imagenInicio  = document.querySelector("#imagen_autor_desktop");
let imagenInicio2 = document.querySelector("#imagen_autor_mobile");
let titulo        = document.querySelector(".titulo_articulo");
let autor         = document.querySelector(".autor");
let descripcion   = document.querySelector(".descripcion2");
let articulo      = document.querySelector(".base-articulo-completo");
/*------------Fin articulos-----------------*/

let cerrar        = document.querySelector("#cerrar-desktop");//boton cerrar
let divisor       = document.querySelector(".base_divisor_desktop");

ilustracion_movile.style.marginTop = '-80px';

/*---------redes----*/
let redesSociales = document.querySelector(".centrar_redes");
redesSociales.innerHTML = `

					<div class="contenido_redes_sociales">
						<a href="https://www.facebook.com/eltiempo/" target="blank">
							<img src="https://www.eltiempo.com/infografias/2025/04/Explotacion_laboral_venezolanos/img/icono-facebook.svg" alt="" class="icono_redes quitar_espacio" data-aos="fade-up-left" data-aos-duration="700">
						</a>
						<a href="https://twitter.com/ELTIEMPO" target="blank">
							<img src="https://www.eltiempo.com/infografias/2025/04/Explotacion_laboral_venezolanos/img/icono-twiter.svg"   alt="" class="icono_redes" data-aos="fade-up-left" data-aos-duration="1000">
						</a>
						<a href="#"><img src="https://www.eltiempo.com/infografias/2025/04/Explotacion_laboral_venezolanos/img/icono-whatsapp.svg" alt="" class="icono_redes" data-aos="fade-up-left" data-aos-duration="1300"></a>
						<img src="https://www.eltiempo.com/infografias/2025/04/Explotacion_laboral_venezolanos/img/icono-puntos.svg"   alt="" class="icono_redes tres_puntos" data-aos="fade-up-left" data-aos-duration="1500">

						<div class="redes_desplegable">
							<a href="https://www.facebook.com/eltiempo/" target="blank">
								<img src="https://www.eltiempo.com/infografias/2025/04/Explotacion_laboral_venezolanos/img/icono-facebook.svg" alt="" class="icono_redes">
							</a>
							<a href="https://twitter.com/ELTIEMPO" target="blank">
								<img src="https://www.eltiempo.com/infografias/2025/04/Explotacion_laboral_venezolanos/img/icono-twiter.svg"   alt="" class="icono_redes">
							</a>
						</div>
					</div>`
					
					let redes  = document.querySelector(".tres_puntos");
					
					var comprobar = 1;
					redes.addEventListener("click", function(){
						if(comprobar == 1){
							document.querySelector(".redes_desplegable").style.display = "table";
							comprobar =0;
						}else{
							 comprobar =1;
							 document.querySelector(".redes_desplegable").style.display = "none";
						}
					})

					setTimeout(function(){
						$(".icono_redes").removeAttr('data-aos');
					}, 3000)

				
					
/*---------fin redes----*/
/*---llamado de data----*/

    $.getJSON(jsonURL, function(data){
	    myData = data;
	    //console.log(myData);
    	let hexagono;
		for(i=0; i<myData.autores.length; i++){
				console.log(myData.autores[i].nombre);

		 		hexagono =  

					`
					<div class="hexagono1" id= "autor${i}" data-aos="fade-up-left" data-aos-duration="1500">
						<figure>
							<h2 class="titular_hexagono">${myData.autores[i].titulo}</h2>
							<img src="https://www.eltiempo.com/infografias/2025/04/Explotacion_laboral_venezolanos/img/hexagono-titular-5.svg?56" class="hexagonos frontal   hexagono-resposive-frontal">
							<div class="dejar-estatico trasera">
								<img src="https://www.eltiempo.com/infografias/2025/04/Explotacion_laboral_venezolanos/img/hexagono-autor-4.svg?56" class="hexagonos frontal hexagono-resposive-atras">
								<div class="contenido_informacion">
									<center><img src="${myData.autores[i].foto}" class="hexagonos frontal imagen-autor"></center>
									<h3 class="Nombre-Autor">${myData.autores[i].nombreVenezolano}</h3>
									<p class="descripcion_articulo">${myData.autores[i].actividad}</p>
									<div id="${i}" class="verMas">
										<hr class="linea-divisora">
										<a><p class="leer_mas">LEER <br> <span class="signo">+</span></p></a>
									</div>
								</div>
							</div>
						</figure>
					</div>
					`
			contenido.innerHTML += hexagono;



			if($(window).width() < '600') {
			
				var  frontal = $(".hexagono-resposive-frontal");
				var  atras   = $(".hexagono-resposive-atras");
				frontal.attr('src', 'https://www.eltiempo.com/infografias/2016/Explotacion_laboral_venezolanos/img/hexagono-titular-5.svg?56');
				atras.attr('src', 'https://www.eltiempo.com/infografias/2025/04/Explotacion_laboral_venezolanos/img/hexagono-autor-4.svg?56');										  		
			}
			
			$(".verMas").click(function(e) {
				let id = $(this).attr('id');//console.log(id)
				console.log("posicion: " + id)



				//guardar local storage
				let clicks = JSON.parse(localStorage.getItem('posicionNota')) || [];
				clicks.push(id);
				localStorage.setItem('posicionNota', JSON.stringify(clicks));



				let elemento = document.getElementById(id);//cojer el div

				let padre = elemento.parentElement.parentElement.parentElement;//cojer el padre
				//var elemento = $(this).addClass("carlos");
				padre.classList.add('dejar-estatico');
				console.log(padre);

				

				if(id == 0){

						window.open("https://pre.eltiempo.com/probando/las-barreras-de-domiciliarios-constructores-y-mecanicos-10217", "_blank");
					
				}else if(id == 2){

						window.open("https://pre.eltiempo.com/opinion/la-migracion-venezolana-en-colombia-que-ha-sido-victima-y-eslabon-de-la-criminalidad-10218", "_blank");

				}else if(id == 4){

						window.open("https://pre.eltiempo.com/opinion/las-luchas-de-una-madre-venezolana-por-vender-en-un-parque-de-cucuta-10219", "_blank");

				}else if(id == 6){

						window.open("https://pre.eltiempo.com/opinion/la-artista-escenica-que-ha-intentado-reinventar-10221", "_blank");
				
				}else if(id == 13){

						window.open("https://pre.eltiempo.com/opinion/el-cuidador-de-motos-venezolano-que-fue-asesinado-por-las-disidencias-10223", "_blank");

				}else{


					

					ilustracion_movile.style.marginTop = '50px';
					contenido_principal.style.display = "none";
					body.classList.add('fondo_body');

					
					contenido_articulo.style.display  = "block";

					var elmnt = document.querySelector(".base-articulo-completo");
						var x = elmnt.scrollLeft;
						var y = elmnt.scrollTop = 0;
						//console.log(y);
					

					if($(window).width() < '600') {
	  					
					  	setTimeout(function(){
							divisor.style.opacity = "1";
						}, 1200)
					}

					for(let i=0; i< myData.autores.length; i++){

						if(id == myData.autores[i].id){
							//console.log(id);
							//console.log(padre);
							imagenInicio.src       =  myData.autores[i].imagenNota;
							imagenInicio2.src      =  myData.autores[i].imagenNota;
							titulo.innerHTML       =  myData.autores[i].tituloNota;
							autor.innerHTML        =  myData.autores[i].nombre;
							descripcion.innerHTML  =  myData.autores[i].descripcion;
							articulo.innerHTML     =  ` 

							<div class="base_textos esconder_desktop" id="titulo">
								<h1 class="titulo_articulo">${myData.autores[i].titulo}</h1>
								<h2 class="autor ancho_caja">${myData.autores[i].nombre}</h2>
								<p class="descripcion2 ancho_caja">${myData.autores[i].descripcion}</p>
							</div>

							<p class="sumarioNota">${myData.autores[i].sumarioNota} </p>

							<hr class="linea_divisora_interna"/>

							${myData.autores[i].articulo} 

														<div class="centrar_redes bajar_redes_z">
															<hr class="linea_divisora_red">
															<div class="contenido_redes_sociales redes_mobile">
																<a href="https://www.facebook.com/eltiempo/" target="blank">
																	<img src="https://www.eltiempo.com/infografias/2025/04/Explotacion_laboral_venezolanos/img/icono-facebook.svg" alt="" class="icono_redes redes_movile margen-f tamano-icon" >
																</a>
																<a href="https://twitter.com/ELTIEMPO" target="blank">
																	<img src="https://www.eltiempo.com/infografias/2025/04/Explotacion_laboral_venezolanos/img/icono-twiter.svg"   alt="" class="icono_redes redes_movile">
																</a>
																<a href="#"><img src="https://www.eltiempo.com/infografias/2025/04/Explotacion_laboral_venezolanos/img/icono-whatsapp.svg" alt="" class="icono_redes redes_movile"></a>
																
																<img src="https://www.eltiempo.com/infografias/2025/04/Explotacion_laboral_venezolanos/img/icono-puntos.svg"   alt="" class="icono_redes redes_movile tamano-icon puntos2">
																<div class="red_adicional">
																	<a href="https://twitter.com/ELTIEMPO" target="blank">
																		<img src="https://www.eltiempo.com/infografias/2025/04/Explotacion_laboral_venezolanos/img/icono-twiter.svg"   alt=""  class="icono_redes redes_movile  left_movile">
																	</a>

																	<a href="https://twitter.com/ELTIEMPO" target="blank">
																		<img src="https://www.eltiempo.com/infografias/2025/04/Explotacion_laboral_venezolanos/img/icono-facebook.svg"   alt="" class="icono_redes redes_movile  left_movile">
																	</a>
																</div>
																<img src="https://www.eltiempo.com/infografias/2025/04/Explotacion_laboral_venezolanos/img/flecha_atras.png"   class="icono_redes flecha_atras redes_movile">
															</div>
														</div>	`;

							let puntos = document.querySelector(".puntos2");
							puntos.addEventListener("click", function(){
								document.querySelector(".red_adicional").style.display = "block";
								document.querySelector(".flecha_atras").style.display  = "block";
								puntos.style.display = "none";
							});

							let ocultar = document.querySelector(".flecha_atras");
							ocultar.addEventListener("click", function(){
								puntos.style.display = "block";
								document.querySelector(".red_adicional").style.display = "none";
								document.querySelector(".flecha_atras").style.display  = "none";
							});

						}
						
					}/*---fin for--*/
				}

				
					
			});/*--fin click-*/
			

		}


		//LOCAL STORAGE CARGA
		let clicks = JSON.parse(localStorage.getItem('posicionNota')) || [];
		//console.log(clicks[0]);

		

		for(let i = 0; i < clicks.length; i++){

			console.log(clicks[i])
			$(`#${ clicks[i] }`).parent().parent().parent().addClass('dejar-estatico')
		}
		//LOCAL STORAGE CARGA


			

	})
	



	



	cerrar.addEventListener("click", function(){
		contenido_principal.style.display = "block";
		body.classList.remove('fondo_body');
		contenido_articulo.style.display  = "none";
		ilustracion_movile.style.marginTop = '-250px';
		if($(window).width() < '600') {
			divisor.style.opacity = "0";
		}
	});


});





$(".boton_ver_mas").click(function(event) {
	
	$("#articulo_VerMas").slideDown(400);
	$("#verMarBtn").css('display', 'none');

	$("#verMenosBtn").css('display', 'table');

});


$(".boton_ver_menos").click(function(event) {

	$("#articulo_VerMas").slideUp(400);
	$("#verMarBtn").css('display', 'table');

	$("#verMenosBtn").css('display', 'none');


	

});






  	
