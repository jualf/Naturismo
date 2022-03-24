//Reservas
var Reserva = L.icon({
        iconUrl: "resource/img/reserva.png",
        iconSize: [30, 40],
        iconAnchor: [15, 40]});
        
    var Mana_dulce = L.marker([4.351336, -74.651389], {
        title: "Mana dulce", 
        draggable:false, 
        opacity: 0.75,
        icon: Reserva
            }).bindPopup("<h3>Mana dulce</h3><h4><b>Municipio:</b> Agua de Dios<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 24°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> https://www.facebook.com/manadulcereservanatural/</h4>")
            .addTo(map);
			
	var Reserva_Ecológica_de_Palmas_de_Cera = L.marker([4.948672, -74.560886], {
        title: "Reserva Ecológica de Palmas de Cera", 
        draggable:false, 
        opacity: 0.75,
        icon: Reserva
            }).bindPopup("<h3>Reserva Ecológica de Palmas de Cera</h3><h4><b>Municipio:</b> Chaguani<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 23°C<br><b>Zona de vida:</b> bs-ST<br><b>Contacto:</b> https://coratierras.org/2019/03/12/palmas-de-cera-montefrio-chaguani/</h4>")
            .addTo(map);
			
	var Cerro_de_Bochica = L.marker([4.478594, -74.00943], {
        title: "Cerro de Bochica", 
        draggable:false, 
        opacity: 0.75,
        icon: Reserva
            }).bindPopup("<h3>Cerro de Bochica</h3><h4><b>Municipio:</b> Chipaque<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 13°C<br><b>Zona de vida:</b> bs-MB<br><b>Contacto:</b> https://www.appliedbiodiversity.org/reserva-natural-bochica</h4>")
            .addTo(map);
			
	var Cascada_La_Chorrera = L.marker([4.597266, -73.959871], {
        title: "Cascada La Chorrera", 
        draggable:false, 
        opacity: 0.75,
        icon: Reserva
            }).bindPopup("<h3>Cascada La Chorrera</h3><h4><b>Municipio:</b> Choachí<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 16°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> https://viajandonoselmundo.com/nacionales/como-llegar-y-que-planes-hacer-en-la-chorrera-la-cascada-mas-alta-de-colombia</h4>")
            .addTo(map);
			
	var Embalse_del_Sisga = L.marker([5.083802, -73.725945], {
        title: "Embalse del Sisga", 
        draggable:false, 
        opacity: 0.75,
        icon: Reserva
            }).bindPopup("<h3>Embalse del Sisga</h3><h4><b>Municipio:</b> Chocontá<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 15°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> http://www.colparques.net/SISGA#aceptar</h4>")
            .addTo(map);
			
	var Reserva_Natural_Peñas_Blancas = L.marker([4.53702, -74.376074], {
        title: "Reserva Natural Peñas Blancas", 
        draggable:false, 
        opacity: 0.75,
        icon: Reserva
            }).bindPopup("<h3>Reserva Natural Peñas Blancas</h3><h4><b>Municipio:</b> El Colegio<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 25°C<br><b>Zona de vida:</b> bms-T<br><b>Contacto:</b> https://runap.parquesnacionales.gov.co/area-protegida/724</h4>")
            .addTo(map);
			
	var Páramo_del_Rabanal = L.marker([5.378621, -73.61236], {
        title: "Páramo del Rabanal", 
        draggable:false, 
        opacity: 0.75,
        icon: Reserva
            }).bindPopup("<h3>Páramo del Rabanal</h3><h4><b>Municipio:</b> Guachetá<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 12°C<br><b>Zona de vida:</b> bp-M<br><b>Contacto:</b> http://www.humboldt.org.co/es/i2d/item/559-paramos-y-sistemas-de-vida-rabanal</h4>")
            .addTo(map);
			
	var Reserva_Natural_Paraíso_Andino = L.marker([4.951749, -74.371401], {
        title: "Reserva Natural Paraíso Andino", 
        draggable:false, 
        opacity: 0.75,
        icon: Reserva
            }).bindPopup("<h3>Reserva Natural Paraíso Andino</h3><h4><b>Municipio:</b> La Vega<br><b>Dificultad:</b> Alto<br><b>Clima promedio:</b> 23°C<br><b>Zona de vida:</b> bs-ST<br><b>Contacto:</b> https://www.facebook.com/ReservaParaisoAndino/</h4>")
            .addTo(map);
			
	var Laguna_de_la_Herrera = L.marker([4.691592, -74.276621], {
        title: "Laguna de la Herrera", 
        draggable:false, 
        opacity: 0.75,
        icon: Reserva
            }).bindPopup("<h3>Laguna de la Herrera</h3><h4><b>Municipio:</b> Madrid<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 14°C<br><b>Zona de vida:</b> bh-MB<br><b>Contacto:</b> https://humedalessuescaylaherrera.wordpress.com/la-herrera/</h4>")
            .addTo(map);
			
	var Reserva_Natural_Aguascalientes = L.marker([4.379085, -73.21291], {
        title: "Reserva Natural Aguascalientes", 
        draggable:false, 
        opacity: 0.75,
        icon: Reserva
            }).bindPopup("<h3>Reserva Natural Aguascalientes</h3><h4><b>Municipio:</b> Paratebueno<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 27°C<br><b>Zona de vida:</b> bms-T<br><b>Contacto:</b> https://www.sitiosturisticoscolombia.com/reserva-natural-aguas-calientes/</h4>")
            .addTo(map);
			
	var Reserva_la_Aguilita = L.marker([4.745568, -74.558064], {
        title: "Reserva la Aguilita", 
        draggable:false, 
        opacity: 0.75,
        icon: Reserva
            }).bindPopup("<h3>Reserva la Aguilita</h3><h4><b>Municipio:</b> Quipile<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 24°C<br><b>Zona de vida:</b> bs-ST<br><b>Contacto:</b> http://sie.car.gov.co/bitstream/handle/20.500.11786/35819/Tomo%201%20parte%202.pdf?sequence=2&isAllowed=y</h4>")
            .addTo(map);
			
	var Fundación_Santuario_Monteluz = L.marker([5.378061, -74.060958], {
        title: "Fundación Santuario Monteluz", 
        draggable:false, 
        opacity: 0.75,
        icon: Reserva
            }).bindPopup("<h3>Fundación Santuario Monteluz</h3><h4><b>Municipio:</b> San Cayetano<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 28°C<br><b>Zona de vida:</b> bms-T<br><b>Contacto:</b> https://fundacionsantuariomonteluz.org/</h4>")
            .addTo(map);
			
	var Cerro_El_Tabor = L.marker([4.755367, -74.685458], {
        title: "Cerro El Tabor", 
        draggable:false, 
        opacity: 0.75,
        icon: Reserva
            }).bindPopup("<h3>Cerro El Tabor</h3><h4><b>Municipio:</b> San Juan de Rioseco<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 18°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> http://oaica.car.gov.co/tabor/</h4>")
            .addTo(map);
			
	var Laguna_de_Guatavita = L.marker([4.977667, -73.774997], {
        title: "Laguna de Guatavita", 
        draggable:false, 
        opacity: 0.75,
        icon: Reserva
            }).bindPopup("<h3>Laguna de Guatavita</h3><h4><b>Municipio:</b> Sesquilé<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 12°C<br><b>Zona de vida:</b> bh-M<br><b>Contacto:</b> http://www.colparques.net/LGUATAVITA</h4>")
            .addTo(map);
			
	var Parque_Natural_Chicaque = L.marker([4.60635, -74.304754], {
        title: "Parque Natural Chicaque", 
        draggable:false, 
        opacity: 0.75,
        icon: Reserva
            }).bindPopup("<h3>Parque Natural Chicaque</h3><h4><b>Municipio:</b> Soacha<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 13°C<br><b>Zona de vida:</b> bh-M<br><b>Contacto:</b> https://www.chicaque.com/</h4>")
            .addTo(map);
			
	var Boquemonte_Reserva = L.marker([4.605912, -74.29675], {
        title: "Boquemonte Reserva", 
        draggable:false, 
        opacity: 0.75,
        icon: Reserva
            }).bindPopup("<h3>Boquemonte Reserva</h3><h4><b>Municipio:</b> Soacha<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 13°C<br><b>Zona de vida:</b> bh-M<br><b>Contacto:</b> https://www.boquemonte.com/</h4>")
            .addTo(map);
			
	var Laguna_de_Pedro_Palo = L.marker([4.683723, -74.387473], {
        title: "Laguna de Pedro Palo", 
        draggable:false, 
        opacity: 0.75,
        icon: Reserva
            }).bindPopup("<h3>Laguna de Pedro Palo</h3><h4><b>Municipio:</b> Tena<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 16°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> http://www.colparques.net/PABLO</h4>")
            .addTo(map);
			
	var Páramo_de_Guacheneque = L.marker([5.211384, -73.557516], {
        title: "Páramo de Guacheneque", 
        draggable:false, 
        opacity: 0.75,
        icon: Reserva
            }).bindPopup("<h3>Páramo de Guacheneque</h3><h4><b>Municipio:</b> Villapinzón<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 11°C<br><b>Zona de vida:</b> bh-M<br><b>Contacto:</b> https://humedalesbogota.com/paramo-de-guacheneque/</h4>")
            .addTo(map);
			
			
//Senderos
var Sendero = L.icon({
        iconUrl: "resource/img/sendero.png",
        iconSize: [30, 40],
        iconAnchor: [15, 40]});
        
    var Granja_La_Cascada = L.marker([4.894674, -74.437379], {
        title: "Granja La Cascada", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Granja La Cascada</h3><h4><b>Municipio:</b> Alban<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 17°C<br><b>Zona de vida:</b> bs-ST<br><b>Contacto:</b> https://granjacascada.jimdofree.com/</h4>")
            .addTo(map);
			
	var Camino_Santa_Ana = L.marker([4.545077, -74.535714], {
        title: "Camino Santa Ana", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Camino Santa Ana</h3><h4><b>Municipio:</b> Anapoima<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 27°C<br><b>Zona de vida:</b> bms-T<br><b>Contacto:</b> https://www.aventurayturismo.org/anapoima/sitios-para-caminar-en-anapoima/</h4>")
            .addTo(map);
	
	var Cerro_Peñas_Negras = L.marker([4.701027, -74.48172], {
        title: "Cerro Peñas Negras", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Cerro Peñas Negras</h3><h4><b>Municipio:</b> Anolaima<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 20°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> https://es.wikiloc.com/rutas-senderismo/la-mesa-pena-negra-el-mohan-anolaima-36651247</h4>")
            .addTo(map);
			
	var Quebrada_La_Campos = L.marker([4.498836, -74.549708], {
        title: "Quebrada La Campos", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Quebrada La Campos</h3><h4><b>Municipio:</b> Apulo<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 28°C<br><b>Zona de vida:</b> bms-T<br><b>Contacto:</b> https://mapcarta.com/es/29491472</h4>")
            .addTo(map);
			
	var Alto_de_La_Cruz = L.marker([4.366797, -74.48336], {
        title: "Alto de La Cruz", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Alto de La Cruz</h3><h4><b>Municipio:</b> Arbelaez<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 20°C<br><b>Zona de vida:</b> bs-ST<br><b>Contacto:</b> https://lugaresquever.com/wiki/arbelaez</h4>")
            .addTo(map);
			
	var Alto_de_Las_Lagunas_Encantadas = L.marker([4.618404, -74.732601], {
        title: "Alto de Las Lagunas Encantadas", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Alto de Las Lagunas Encantadas</h3><h4><b>Municipio:</b> Beltrán<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 19°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> https://colombiaextraordinaria.com/somos_colombia/turismo/municipios/Beltran</h4>")
            .addTo(map);
			
	var Cascadas_del_Alto_Ariari = L.marker([4.009206, -74.512791], {
        title: "Cascadas del Alto Ariari", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Cascadas del Alto Ariari</h3><h4><b>Municipio:</b> Cabrera<br><b>Dificultad:</b> Alto<br><b>Clima promedio:</b> 32°C<br><b>Zona de vida:</b> bms-T<br><b>Contacto:</b> https://mapio.net/pic/p-74763449/</h4>")
            .addTo(map);
			
	var Alto_del_Mohan = L.marker([4.726998, -74.472306], {
        title: "Alto del Mohan", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Alto del Mohan</h3><h4><b>Municipio:</b> Cachipay<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 16°C<br><b>Zona de vida:</b> bs-MB<br><b>Contacto:</b> https://co.todosnegocios.com/alto-del-mohan-314-2465818</h4>")
            .addTo(map);
			
	var Cerro_de_Monruta = L.marker([4.405508, -73.956069], {
        title: "Cerro de Monruta", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Cerro de Monruta</h3><h4><b>Municipio:</b> Caqueza<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 19°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> https://www.minube.com.co/rincon/monruta-caqueza-a3597251</h4>")
            .addTo(map);
			
	var Cerro_de_Chegua = L.marker([5.323808, -73.928514], {
        title: "Cerro de Chegua", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Cerro de Chegua</h3><h4><b>Municipio:</b> Carmen de Carupa<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 13°C<br><b>Zona de vida:</b> bs-MB<br><b>Contacto:</b> https://es.wikiloc.com/rutas-senderismo/cerro-de-chegua-carmen-de-carupa-43628544</h4>")
            .addTo(map);
			
	var Bosque_de_Cucunuba = L.marker([5.236207, -73.790121], {
        title: "Bosque de Cucunuba", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Bosque de Cucunuba</h3><h4><b>Municipio:</b> Cucunubá<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 12°C<br><b>Zona de vida:</b> bh-M<br><b>Contacto:</b> https://cucunubacolonial.weebly.com/turismo.html</h4>")
            .addTo(map);
			
	var Laguna_Verde = L.marker([5.257202, -74.262298], {
        title: "Laguna Verde", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Laguna Verde</h3><h4><b>Municipio:</b> El Peñón<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 13°C<br><b>Zona de vida:</b> bs-MB<br><b>Contacto:</b> https://laguiacundinamarca.com/foturismo/el-penon-turismo/2021/02/laguna-verde/</h4>")
            .addTo(map);
			
	var Sendero_Ecológico_Refugio_de_Arcángeles = L.marker([4.880327, -74.279042], {
        title: "Sendero Ecológico Refugio de Arcángeles", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Sendero Ecológico Refugio de Arcángeles</h3><h4><b>Municipio:</b> El Rosal<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 13°C<br><b>Zona de vida:</b> bs-MB<br><b>Contacto:</b> http://idecut.gov.co/index.php/sabana-occidente/el-rosal</h4>")
            .addTo(map);
			
	var Mirador_San_Manuel = L.marker([4.343965, -73.946255], {
        title: "Mirador San Manuel", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Mirador San Manuel</h3><h4><b>Municipio:</b> Fosca<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 15°C<br><b>Zona de vida:</b> bs-MB<br><b>Contacto:</b> http://idecut.gov.co/index.php/oriente/fosca</h4>")
            .addTo(map);
			
	var Humedal_Guali = L.marker([4.726547, -74.19085], {
        title: "Humedal Guali", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Humedal Guali</h3><h4><b>Municipio:</b> Funza<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 14°C<br><b>Zona de vida:</b> bs-MB<br><b>Contacto:</b> https://coratierras.org/2017/04/20/best-spots-to-see-wildlife-in-the-u-s/</h4>")
            .addTo(map);
			
	var Laguna_de_Fuquene = L.marker([5.456895, -73.741965], {
        title: "Laguna de Fuquene", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Laguna de Fuquene</h3><h4><b>Municipio:</b> Fuquene<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 19°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> https://www.car.gov.co/fuquene/vercontenido/1</h4>")
            .addTo(map);
			
	var Embalse_del_Guavio = L.marker([4.695081, -73.509258], {
        title: "Embalse del Guavio", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Embalse del Guavio</h3><h4><b>Municipio:</b> Gachalá<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 17°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> https://lugaresquever.com/embalse-del-guavio?spmchkbj=spmprvbj6bnr2kkyBKt5JUuemgGAT8nrut</h4>")
            .addTo(map);
			
	var Mirador_La_Chamba = L.marker([4.839545, -73.653036], {
        title: "Mirador La Chamba", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Mirador La Chamba</h3><h4><b>Municipio:</b> Gachetá<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 18°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> https://detrips.com/lugares/alto-y-mirador-la-chamba</h4>")
            .addTo(map);
			
	var Alto_de_Gavilanes = L.marker([4.760262, -73.615478], {
        title: "Alto de Gavilanes", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Alto de Gavilanes</h3><h4><b>Municipio:</b> Gama<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 17°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> https://mapio.net/pic/p-8524206/</h4>")
            .addTo(map);
			
	var Mirador_Alto_de_las_Rosas = L.marker([4.291227, -74.796983], {
        title: "Mirador Alto de las Rosas", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Mirador Alto de las Rosas</h3><h4><b>Municipio:</b> Girardot<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 30°C<br><b>Zona de vida:</b> bms-T<br><b>Contacto:</b> http://asojuntasgirardot.com/jac/sit/mi/mr.html</h4>")
            .addTo(map);
			
	var Salto_de_Versalles = L.marker([5.123396, -74.597601], {
        title: "Salto de Versalles", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Salto de Versalles</h3><h4><b>Municipio:</b> Guaduas<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 23°C<br><b>Zona de vida:</b> bs-ST<br><b>Contacto:</b> http://www.villadeguaduas.org/en/salto-versalles</h4>")
            .addTo(map);
			
	var Aguas_Azufradas = L.marker([4.51283, -74.784423], {
        title: "Aguas Azufradas", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Aguas Azufradas</h3><h4><b>Municipio:</b> Guataqui<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 29°C<br><b>Zona de vida:</b> bms-T<br><b>Contacto:</b> http://www.guataqui-cundinamarca.gov.co/turismo/oasis-de-agua-natural-y-azufrada</h4>")
            .addTo(map);
			
	var Playa_Guatavita = L.marker([4.936966, -73.840259], {
        title: "Playa Guatavita", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Playa Guatavita</h3><h4><b>Municipio:</b> Guatavita<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 12°C<br><b>Zona de vida:</b> bp-M<br><b>Contacto:</b> https://co.latinoplaces.com/cundinamarca/playa-guatavita-92775</h4>")
            .addTo(map);
			
	var Alto_de_la_Virgen = L.marker([4.877491, -74.465477], {
        title: "Alto de la Virgen", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Alto de la Virgen</h3><h4><b>Municipio:</b> Guayabal de Síquima<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 19°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> http://www.guayabaldesiquima-cundinamarca.gov.co/turismo/alto-de-la-virgen</h4>")
            .addTo(map);
			
	var Quebrada_las_Perdices = L.marker([4.215896, -73.813427], {
        title: "Quebrada las Perdices", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Quebrada las Perdices</h3><h4><b>Municipio:</b> Guayabetal<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 19°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> https://mapio.net/pic/p-67779108/</h4>")
            .addTo(map);
			
	var Páramo_de_las_Mercedes = L.marker([4.095351, -73.973883], {
        title: "Páramo de las Mercedes", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Páramo de las Mercedes</h3><h4><b>Municipio:</b> Gutierrez<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 19°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> https://vymaps.com/CO/Paramo-Las-Mercedes-94636/</h4>")
            .addTo(map);
			
	var Quebrada_el_Tabaco = L.marker([4.580951, -74.648483], {
        title: "Quebrada el Tabaco", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Quebrada el Tabaco</h3><h4><b>Municipio:</b> Jerusalen<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 24°C<br><b>Zona de vida:</b> bs-ST<br><b>Contacto:</b> https://laguiacundinamarca.com/foturismo/jerusalen-turismo/2021/02/quebrada-el-tabaco-y-rio-seco-en-jerusalen/</h4>")
            .addTo(map);
			
	var Peña_de_Tunjaque = L.marker([4.628677, -73.929456], {
        title: "Peña de Tunjaque", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Peña de Tunjaque</h3><h4><b>Municipio:</b> La Calera<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 11°C<br><b>Zona de vida:</b> bp-M<br><b>Contacto:</b> https://caminantesdelretorno.com/destino/pena-de-tunjaque/</h4>")
            .addTo(map);
			
	var Cascada_de_las_Mojas = L.marker([4.690156, -74.440486], {
        title: "Cascada de las Mojas", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Cascada de las Mojas</h3><h4><b>Municipio:</b> La Mesa<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 11°C<br><b>Zona de vida:</b> bp-M<br><b>Contacto:</b> https://ecoglobalexpeditions.com/caminata-ecologica-salto-de-las-monjas-cund/</h4>")
            .addTo(map);
			
	var Río_Murca = L.marker([5.27475, -74.372248], {
        title: "Río Murca", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Río Murca</h3><h4><b>Municipio:</b> La Palma<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 20°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> https://cumaps.net/en/CO/rio-murca-p83567</h4>")
            .addTo(map);
			
	var Alto_de_la_Virgen = L.marker([5.201328, -74.390995], {
        title: "Alto de la Virgen", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Alto de la Virgen</h3><h4><b>Municipio:</b> La Peña<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 14°C<br><b>Zona de vida:</b> bs-MB<br><b>Contacto:</b> http://idecut.gov.co/index.php/alto-magdalena-2/la-pena</h4>")
            .addTo(map);
			
	var Rancho_los_Leones = L.marker([4.996028, -74.340153], {
        title: "Rancho los Leones", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Rancho los Leones</h3><h4><b>Municipio:</b> La Vega<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 23°C<br><b>Zona de vida:</b> bs-ST<br><b>Contacto:</b> https://www.rancholosleones.com/</h4>")
            .addTo(map);
			
	var Río_Lenguazaque = L.marker([5.379095, -73.6119], {
        title: "Río Lenguazaque", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Río Lenguazaque</h3><h4><b>Municipio:</b> Lenguazaque<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 12°C<br><b>Zona de vida:</b> bp-M<br><b>Contacto:</b> https://mapcarta.com/es/19698964</h4>")
            .addTo(map);
			
	var Páramo_del_Choque = L.marker([5.087049, -73.665353], {
        title: "Páramo del Choque", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Páramo del Choque</h3><h4><b>Municipio:</b> Machetá<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 14°C<br><b>Zona de vida:</b> bh-MB<br><b>Contacto:</b> https://ecoglobalexpeditions.com/caminata-ecologica-paramo-del-choque/</h4>")
            .addTo(map);
			
	var Laguna_de_la_Petaca = L.marker([4.989233, -73.600983], {
        title: "Laguna de la Petaca", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Laguna de la Petaca</h3><h4><b>Municipio:</b> Manta<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 17°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> https://caminantesdelretorno.com/destino/laguna-la-petaca/</h4>")
            .addTo(map);
			
	var Volcán_del_Diablo = L.marker([4.516959, -73.342528], {
        title: "Volcán del Diablo", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Volcán del Diablo</h3><h4><b>Municipio:</b> Medina<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 26°C<br><b>Zona de vida:</b> bs-ST<br><b>Contacto:</b> https://cumaps.net/en/CO/volcan-del-diablo-p59628</h4>")
            .addTo(map);
			
	var Desierto_del_Checua = L.marker([5.144056, -73.852688], {
        title: "Desierto del Checua", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Desierto del Checua</h3><h4><b>Municipio:</b> Nemocón<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 13°C<br><b>Zona de vida:</b> bh-MB<br><b>Contacto:</b> https://caminatasecologicasbogota.com/desierto-de-la-tatacoita/</h4>")
            .addTo(map);
			
	var Charco_de_la_Mula = L.marker([4.324028, -74.605473], {
        title: "Charco de la Mula", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Charco de la Mula</h3><h4><b>Municipio:</b> Nilo<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 27°C<br><b>Zona de vida:</b> bms-T<br><b>Contacto:</b> https://cumaps.net/en/CO/charco-de-la-mula-p256543</h4>")
            .addTo(map);
			
	var Cascada_Barandillas = L.marker([5.143033, -74.375532], {
        title: "Cascada Barandillas", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Cascada Barandillas</h3><h4><b>Municipio:</b> Nimaima<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 20°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> https://caminantesdelretorno.com/destino/cascada-de-barandillas/</h4>")
            .addTo(map);
			
	var Torre_de_los_Indios = L.marker([5.151022, -74.075079], {
        title: "Torre de los Indios", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Torre de los Indios</h3><h4><b>Municipio:</b> Pacho<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 20°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> http://www.pacho-cundinamarca.gov.co/turismo/torre-de-los-indios</h4>")
            .addTo(map);
			
	var Laguna_Larga = L.marker([4.199997, -74.266689], {
        title: "Laguna Larga", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Laguna Larga</h3><h4><b>Municipio:</b> Pasca<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 23°C<br><b>Zona de vida:</b> bs-ST<br><b>Contacto:</b> https://pueblomuisca.wixsite.com/pascaeduca/sitios-ecolgicos</h4>")
            .addTo(map);
			
	var Laguna_del_Coco = L.marker([5.451765, -74.647792], {
        title: "Laguna del Coco", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Laguna del Coco</h3><h4><b>Municipio:</b> Puerto Salgar<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 30°C<br><b>Zona de vida:</b> bms-T<br><b>Contacto:</b> http://sie.car.gov.co/bitstream/handle/20.500.11786/35762/P%C3%A1ginas%20108-123.pdf?sequence=9&isAllowed=y</h4>")
            .addTo(map);
			
	var Quebrada_Quipileña = L.marker([4.682604, -74.713596], {
        title: "Quebrada Quipileña", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Quebrada Quipileña</h3><h4><b>Municipio:</b> Pulí<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 20°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> https://mapcarta.com/es/19687820</h4>")
            .addTo(map);
			
	var Páramo_de_las_Burras = L.marker([4.332871, -73.817222], {
        title: "Páramo de las Burras", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Páramo de las Burras</h3><h4><b>Municipio:</b> Quetame<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 26°C<br><b>Zona de vida:</b> bms-T<br><b>Contacto:</b> http://www.quetame-cundinamarca.gov.co/turismo/reserva-natural-paramo-de-las-burras</h4>")
            .addTo(map);
			
	var Isla_del_Sol = L.marker([4.28823, -74.790496], {
        title: "Isla del Sol", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Isla del Sol</h3><h4><b>Municipio:</b> Ricaurte<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 30°C<br><b>Zona de vida:</b> bms-MB<br><b>Contacto:</b> https://laguiacundinamarca.com/foturismo/ricaurte-turismo/2021/02/islas-del-sol-en-ricaurte-cundinamarca-turismo/</h4>")
            .addTo(map);
			
	var Alto_de_Paquillo = L.marker([4.091205, -74.365921], {
        title: "Alto de Paquillo", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Alto de Paquillo</h3><h4><b>Municipio:</b> San Bernardo<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 14°C<br><b>Zona de vida:</b> bh-MB<br><b>Contacto:</b> https://vymaps.com/CO/Alto-Paquilo-662366/</h4>")
            .addTo(map);
			
	var Aguas_Calientes = L.marker([4.928397, -74.258203], {
        title: "Aguas Calientes", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Aguas Calientes</h3><h4><b>Municipio:</b> San Francisco<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 32°C<br><b>Zona de vida:</b> bms-T<br><b>Contacto:</b> https://www.facebook.com/events/san-francisco-cundinamarca/aventura-a-aguas-calientes-san-francisco-cundinamarca/703054850083814/</h4>")
            .addTo(map);
			
	var Sendero_Panche = L.marker([4.963939, -74.453443], {
        title: "Sendero Panche", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Sendero Panche</h3><h4><b>Municipio:</b> Sasaima<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 24°C<br><b>Zona de vida:</b> bs-ST<br><b>Contacto:</b> https://ecoglobalexpeditions.com/caminata-ecologica-sendero-panche/</h4>")
            .addTo(map);
		
	var Pantano_de_Arce = L.marker([4.993656, -74.191242], {
        title: "Pantano de Arce", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Pantano de Arce</h3><h4><b>Municipio:</b> Subachoque<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 12°C<br><b>Zona de vida:</b> bh-M<br><b>Contacto:</b> https://ecoglobalexpeditions.com/pradera-tablazo-pantano-de-arce/</h4>")
            .addTo(map);
			
	var Cascada_Las_Lajas = L.marker([5.050812, -74.252266], {
        title: "Cascada Las Lajas", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Cascada Las Lajas</h3><h4><b>Municipio:</b> Supata<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 18°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> https://www.facebook.com/Las-Lajas-Supata-Cundinamarca-Centro-Turistico-1542697149323206/</h4>")
            .addTo(map);
			
	var Farallones_de_Sutatausa = L.marker([5.229739, -73.834753], {
        title: "Farallones de Sutatausa", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Farallones de Sutatausa</h3><h4><b>Municipio:</b> Sutatausa<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 18°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> https://chipviajero.com/como-llegar-a-los-farallones-de-sutatausa/</h4>")
            .addTo(map);
			
	var Laguna_Verde = L.marker([5.215692, -73.999167], {
        title: "Laguna Verde", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Laguna Verde</h3><h4><b>Municipio:</b> Tausa<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 12°C<br><b>Zona de vida:</b> bh-M<br><b>Contacto:</b> https://caminantesdelretorno.com/destino/laguna-verde-tausa/</h4>")
            .addTo(map);
			
	var Cuevas_del_Tenjo = L.marker([4.889963, -74.151168], {
        title: "Cuevas del Tenjo", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Cuevas del Tenjo</h3><h4><b>Municipio:</b> Tenjo<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 12°C<br><b>Zona de vida:</b> bh-M<br><b>Contacto:</b> https://tenjoturistico.com/las-cuevas/</h4>")
            .addTo(map);
			
	var Cerro_de_Quinini = L.marker([4.33592, -74.484895], {
        title: "Cerro de Quinini", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Cerro de Quinini</h3><h4><b>Municipio:</b> Tibacuy<br><b>Dificultad:</b> Alto<br><b>Clima promedio:</b> 28°C<br><b>Zona de vida:</b> bms-T<br><b>Contacto:</b> https://www.roadtrip.travel/roadtrips/caminata-al-cerro-de-quinini-montana-sagrada-de-la-luna/</h4>")
            .addTo(map);
			
	var Llano_de_Murca = L.marker([5.389887, -74.350929], {
        title: "Llano de Murca", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Llano de Murca</h3><h4><b>Municipio:</b> Topaipi<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 22°C<br><b>Zona de vida:</b> bpPM<br><b>Contacto:</b> https://cumaps.net/en/CO/llano-de-murca-topaipi-p215125</h4>")
            .addTo(map);
			
	var Laguna_Verde = L.marker([4.755947, -73.548846], {
        title: "Laguna Verde", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Laguna Verde</h3><h4><b>Municipio:</b> Ubalá<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 29°C<br><b>Zona de vida:</b> bms-T<br><b>Contacto:</b> http://www.ubala-cundinamarca.gov.co/turismo/laguna-verde</h4>")
            .addTo(map);
			
	var Laguna_de_Ubaque = L.marker([4.499871, -73.935238], {
        title: "Laguna de Ubaque", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Laguna de Ubaque</h3><h4><b>Municipio:</b> Ubaque<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 16°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> http://idecut.gov.co/index.php/notiidecut/1745-el-imperio-muisca-de-ubaque-la-laguna-sagrada-y-sus-tesoros</h4>")
            .addTo(map);
			
	var Cerro_de_la_Teta = L.marker([5.321041, -73.834246], {
        title: "Cerro de la Teta", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Cerro de la Teta</h3><h4><b>Municipio:</b> Ubaté<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 13°C<br><b>Zona de vida:</b> bh-M<br><b>Contacto:</b> https://ecoglobalexpeditions.com/caminata-ecologica-cerro-la-teta-ubate/</h4>")
            .addTo(map);
			
	var Represa_de_Chocolate = L.marker([4.38001, -74.030642], {
        title: "Represa de Chocolate", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Represa de Chocolate</h3><h4><b>Municipio:</b> Une<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 14°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> http://www.une-cundinamarca.gov.co/turismo/represa-de-chocolate-475101</h4>")
            .addTo(map);
			
	var Alto_de_la_Cajita = L.marker([5.229038, -74.478338], {
        title: "Alto de la Cajita", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Alto de la Cajita</h3><h4><b>Municipio:</b> Útica<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 27°C<br><b>Zona de vida:</b> bms-T<br><b>Contacto:</b> https://mapsus.net/CO/alto-de-la-cajita-215115</h4>")
            .addTo(map);
			
	var Sendero_Ecológico_Salto_la_Chorrera = L.marker([4.092576, -74.46193], {
        title: "Sendero Ecológico Salto la Chorrera", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Sendero Ecológico Salto la Chorrera</h3><h4><b>Municipio:</b> Venecia<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 19°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> https://www.google.com.co/travel/entity/key/ChkIwcvKmbn98612Gg0vZy8xMWMybnRkN3BoEAQ?ei=j383YYPkJpazlQaQvLa4BA&sa=X&ved=0CAAQ5JsGahcKEwjoyqS44471AhUAAAAAHQAAAAAQAw&ts=CAESABoGCgIaABIAKgQKABoA</h4>")
            .addTo(map);
			
	var Cascada_El_escobo = L.marker([5.115362, -74.354311], {
        title: "Cascada El escobo", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Cascada El escobo</h3><h4><b>Municipio:</b> Vergara<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 34°C<br><b>Zona de vida:</b> bms-T<br><b>Contacto:</b> https://blog.redbus.co/naturaleza/cascada-el-escobo-cundinamarca/</h4>")
            .addTo(map);
			
	var Cerro_El_Cone = L.marker([4.899028, -74.56669], {
        title: "Cerro El Cone", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Cerro El Cone</h3><h4><b>Municipio:</b> Viani<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 24°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> http://www.viani-cundinamarca.gov.co/turismo/cerro-el-cone</h4>")
            .addTo(map);
			
	var Alto_de_la_Virgen = L.marker([5.239313, -74.188376], {
        title: "Alto de la Virgen", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Alto de la Virgen</h3><h4><b>Municipio:</b> Villagomez<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 18°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> http://www.idecut.gov.co/index.php/rionegro/villagomez</h4>")
            .addTo(map);
			
	var Salto_de_los_Micos = L.marker([5.017345, -74.478964], {
        title: "Salto de los Micos", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Salto de los Micos</h3><h4><b>Municipio:</b> Villeta<br><b>Dificultad:</b> Alto<br><b>Clima promedio:</b> 25°C<br><b>Zona de vida:</b> bpPM<br><b>Contacto:</b> https://rutadeviajelion.blogspot.com/2017/08/como-llegar-las-7-cascadas-del-salto-de.html</h4>")
            .addTo(map);
			
	var Alto_de_la_Cruz = L.marker([4.366747, -74.483342], {
        title: "Alto de la Cruz", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Alto de la Cruz</h3><h4><b>Municipio:</b> Viotá<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 21°C<br><b>Zona de vida:</b> bpPM<br><b>Contacto:</b> https://www.waze.com/es-419/live-map/directions/alto-de-la-cruz?to=place.w.187105324.1870987707.16063425</h4>")
            .addTo(map);
			
	var Laguna_de_San_Luis = L.marker([5.492216, -74.345592], {
        title: "Laguna de San Luis", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Laguna de San Luis</h3><h4><b>Municipio:</b> Viotá<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 23°C<br><b>Zona de vida:</b> bpPM<br><b>Contacto:</b> http://www.yacopi-cundinamarca.gov.co/turismo/laguna-de-san-luis</h4>")
            .addTo(map);
			
	var Alto_de_la_Virgen = L.marker([4.77896, -74.366848], {
        title: "Alto de la Virgen", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Alto de la Virgen</h3><h4><b>Municipio:</b> Zipacón<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 14°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> https://es.wikiloc.com/rutas-carrera/alto-de-la-virgen-zipacon-14997164</h4>")
            .addTo(map);
			
	var Laguna_de_Pantano_Redondo = L.marker([5.045539, -74.03491], {
        title: "Laguna de Pantano Redondo", 
        draggable:false, 
        opacity: 0.75,
        icon: Sendero
            }).bindPopup("<h3>Laguna de Pantano Redondo</h3><h4><b>Municipio:</b> Zipaquirá<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 12°C<br><b>Zona de vida:</b> bh-M<br><b>Contacto:</b> https://zipaquira.in/pantano-redondo/</h4>")
            .addTo(map);
			
			
//Parques
var Parque = L.icon({
        iconUrl: "resource/img/parque.png",
        iconSize: [30, 40],
        iconAnchor: [15, 40]});
        
    var Piedras_del_Chivo_Negro = L.marker([4.716767, -74.324487], {
        title: "Piedras del Chivo Negro", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Piedras del Chivo Negro</h3><h4><b>Municipio:</b> Bojaca<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 14°C<br><b>Zona de vida:</b> bs-MB<br><b>Contacto:</b> https://sitiosdeturistas.blogspot.com/2020/02/piedras-de-chivo-negro.html</h4>")
            .addTo(map);
			
	var Periland = L.marker([4.95564, -74.018811], {
        title: "Periland", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Periland</h3><h4><b>Municipio:</b> Cajicá<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 13°C<br><b>Zona de vida:</b> bs-MB<br><b>Contacto:</b> https://www.perilandecoparque.com/</h4>")
            .addTo(map);
			
	var Parque_Embalse_El_Hato = L.marker([5.303241, -73.903749], {
        title: "Parque Embalse El Hato", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Parque Embalse El Hato</h3><h4><b>Municipio:</b> Carmen de Carupa<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 13°C<br><b>Zona de vida:</b> bs-MB<br><b>Contacto:</b> http://www.colparques.net/HATO#aceptar</h4>")
            .addTo(map);
			
	var Montaña_del_Oso = L.marker([4.824457, -74.014173], {
        title: "Montaña del Oso", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Montaña del Oso</h3><h4><b>Municipio:</b> Chía<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 13°C<br><b>Zona de vida:</b> bs-MB<br><b>Contacto:</b> https://turismo.chia-cundinamarca.gov.co/2020/02/02/blind-climber-ascends-old-man-of-hoy/</h4>")
            .addTo(map);
			
	var Parque_Río_Neusa = L.marker([5.108897, -73.969008], {
        title: "Parque Río Neusa", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Parque Río Neusa</h3><h4><b>Municipio:</b> Cogua<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 13°C<br><b>Zona de vida:</b> bh-MB<br><b>Contacto:</b> https://www.colombia.co/turismo-colombia/un-destino-verde-que-te-hara-escapar-de-la-rutina/</h4>")
            .addTo(map);
			
	var Bioparque_La_Reserva = L.marker([4.807919, -74.116951], {
        title: "Bioparque La Reserva", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Bioparque La Reserva</h3><h4><b>Municipio:</b> Cota<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 13°C<br><b>Zona de vida:</b> bh-MB<br><b>Contacto:</b> https://www.bioparquelareserva.com/</h4>")
            .addTo(map);
			
	var Parque_Arqueológico_Piedras_de_Tunjo = L.marker([4.81615, -74.326279], {
        title: "Parque Arqueológico Piedras de Tunjo", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Parque Arqueológico Piedras de Tunjo</h3><h4><b>Municipio:</b> Facatativá<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 13°C<br><b>Zona de vida:</b> bs-MB<br><b>Contacto:</b> http://www.colparques.net/FACA</h4>")
            .addTo(map);
			
	var Parque_Nacional_Natural_Chingaza = L.marker([4.52969, -73.757653], {
        title: "Parque Nacional Natural Chingaza", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Parque Nacional Natural Chingaza</h3><h4><b>Municipio:</b> Fomeque<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 17°C<br><b>Zona de vida:</b> bs-MB<br><b>Contacto:</b> https://www.parquesnacionales.gov.co/portal/es/ecoturismo/parques/region-amazonia-y-orinoquia/parque-nacional-natural-chingaza/</h4>")
            .addTo(map);
			
	var Parque_Verde_y_Agua = L.marker([4.360588, -74.335396], {
        title: "Parque Verde y Agua", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Parque Verde y Agua</h3><h4><b>Municipio:</b> Fusagasugá<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 19°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> https://parqueverdeyagua.com/</h4>")
            .addTo(map);
			
	var Granja_Agroturística_Altamira = L.marker([5.001344, -73.877803], {
        title: "Granja Agroturística Altamira", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Granja Agroturística Altamira</h3><h4><b>Municipio:</b> Gachancipá<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 13°C<br><b>Zona de vida:</b> bh-MB<br><b>Contacto:</b> https://altamiracolon.com.co/</h4>")
            .addTo(map);
			
	var Los_Chibichangas = L.marker([4.538412, -74.357592], {
        title: "Los Chibichangas", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Los Chibichangas</h3><h4><b>Municipio:</b> Granada<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 21°C<br><b>Zona de vida:</b> bs-ST<br><b>Contacto:</b> https://los-chibichangas.negocio.site/</h4>")
            .addTo(map);
			
	var Lagunas_de_Siecha = L.marker([4.764497, -73.852781], {
        title: "Lagunas de Siecha", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Lagunas de Siecha</h3><h4><b>Municipio:</b> Guasca<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 12°C<br><b>Zona de vida:</b> bp-M<br><b>Contacto:</b> https://www.guascaturistica.com/</h4>")
            .addTo(map);
			
	var Parque_Ararat = L.marker([4.783348, -73.67107], {
        title: "Parque Ararat", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Parque Ararat</h3><h4><b>Municipio:</b> Junín<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 26°C<br><b>Zona de vida:</b> bms-T<br><b>Contacto:</b> http://www.junin-cundinamarca.gov.co/turismo/parque-ararat</h4>")
            .addTo(map);
			
	var Desierto_de_Sabrinsky = L.marker([4.666343, -74.285419], {
        title: "Desierto de Sabrinsky", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Desierto de Sabrinsky</h3><h4><b>Municipio:</b> Mosquera<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 14°C<br><b>Zona de vida:</b> bh-MB<br><b>Contacto:</b> http://mosqueracundinamarca.micolombiadigital.gov.co/turismo/desierto-mondonedo-o-sabrinsky</h4>")
            .addTo(map);
			
	var Esmeralda_Xtreme = L.marker([5.071014, -74.389904], {
        title: "Esmeralda Xtreme", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Esmeralda Xtreme</h3><h4><b>Municipio:</b> Nocaima<br><b>Dificultad:</b> Alto<br><b>Clima promedio:</b> 24°C<br><b>Zona de vida:</b> bs-ST<br><b>Contacto:</b> https://www.viajaporcolombia.com/sitios-turisticos/cundinamarca/parque-de-aventura-esmeralda-xtreme_326/</h4>")
            .addTo(map);
			
	var Piscina_Natural = L.marker([4.188501, -74.488258], {
        title: "Piscina Natural", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Piscina Natural</h3><h4><b>Municipio:</b> Pandi<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 24°C<br><b>Zona de vida:</b> bs-ST<br><b>Contacto:</b> https://co.latinoplaces.com/cundinamarca/piscina-natural-pandi-607032</h4>")
            .addTo(map);
			
	var Club_Payande = L.marker([5.074189, -74.452235], {
        title: "Club Payande", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Club Payande</h3><h4><b>Municipio:</b> Quebradanegra<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 15°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> bs-MB</h4>")
            .addTo(map);
			
	var Zoológico_Santacruz = L.marker([4.615948, -74.351948], {
        title: "Zoológico Santacruz", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Zoológico Santacruz</h3><h4><b>Municipio:</b> San Antonio del Tequendama<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 20°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> https://laguiacundinamarca.com/foturismo/ricaurte-turismo/2021/02/islas-del-sol-en-ricaurte-cundinamarca-turismo/</h4>")
            .addTo(map);
			
	var Parque_Los_Frailejones = L.marker([4.491688, -74.268793], {
        title: "Parque Los Frailejones", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Parque Los Frailejones</h3><h4><b>Municipio:</b> Sibaté<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 12°C<br><b>Zona de vida:</b> bh-M<br><b>Contacto:</b> https://vymaps.com/CO/Parque-los-frailejones-Sibate-167095/</h4>")
            .addTo(map);
			
	var La_Guaca = L.marker([4.405743, -74.421786], {
        title: "La Guaca", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>La Guaca</h3><h4><b>Municipio:</b> Silvania<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 20°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> https://mirador7cascadas.negocio.site/</h4>")
            .addTo(map);
			
	var Parque_Ecológico_y_Recreativo_La_María = L.marker([5.513784, -73.842063], {
        title: "Parque Ecológico y Recreativo La María", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Parque Ecológico y Recreativo La María</h3><h4><b>Municipio:</b> Simijacá<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 13°C<br><b>Zona de vida:</b> bh-M<br><b>Contacto:</b> https://co.latinoplaces.com/cundinamarca/y-recreativo-la-maria-ecological-park-831191</h4>")
            .addTo(map);
			
	var Parque_Ecológico_Pionono = L.marker([4.905222, -73.920887], {
        title: "Parque Ecológico Pionono", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Parque Ecológico Pionono</h3><h4><b>Municipio:</b> Sopó<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 13°C<br><b>Zona de vida:</b> bh-M<br><b>Contacto:</b> https://www.gransabana.org/eventos-turismo/parque-ecologico-pionono</h4>")
            .addTo(map);
			
	var Rocas_de_Suesca = L.marker([5.09624, -73.789339], {
        title: "Rocas de Suesca", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Rocas de Suesca</h3><h4><b>Municipio:</b> Suesca<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 12°C<br><b>Zona de vida:</b> bh-M<br><b>Contacto:</b> http://www.colparques.net/SUESCA</h4>")
            .addTo(map);
			
	var Piedra_Colgada = L.marker([5.425655, -73.845841], {
        title: "Piedra Colgada", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Piedra Colgada</h3><h4><b>Municipio:</b> Susa<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 12°C<br><b>Zona de vida:</b> bh-M<br><b>Contacto:</b> https://ecoglobalexpeditions.com/caminata-ecologica-piedra-colgada/</h4>")
            .addTo(map);
			
	var Parque_Ecológico_Carmen_de_los_Juncales = L.marker([4.932853, -74.111672], {
        title: "Parque Ecológico Carmen de los Juncales", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Parque Ecológico Carmen de los Juncales</h3><h4><b>Municipio:</b> Tabio<br><b>Dificultad:</b> Medio<br><b>Clima promedio:</b> 12°C<br><b>Zona de vida:</b> bh-M<br><b>Contacto:</b> https://www.fueradelarutina.com/planes-para-hacer-en-tabio/parque-ecologico-carmen-de-los-juncales/</h4>")
            .addTo(map);
			
	var Finca_Ecoturística_Destellos = L.marker([5.048736, -74.111672], {
        title: "Finca Ecoturística Destellos", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Finca Ecoturística Destellos</h3><h4><b>Municipio:</b> Tibirita<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 18°C<br><b>Zona de vida:</b> bs-PM<br><b>Contacto:</b> https://finca-ecoturistica-destellos.negocio.site/</h4>")
            .addTo(map);
			
	var Los_Pocitos_Azufrados_de_Tocaima = L.marker([4.478956, -74.645801], {
        title: "Los Pocitos Azufrados de Tocaima", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Los Pocitos Azufrados de Tocaima</h3><h4><b>Municipio:</b> Tocaima<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 29°C<br><b>Zona de vida:</b> bms-T<br><b>Contacto:</b> http://www.pocitosazufrados.com.co/</h4>")
            .addTo(map);
			
	var Fundación_Parque_Jaime_Duque = L.marker([4.946888, -73.960691], {
        title: "Fundación Parque Jaime Duque", 
        draggable:false, 
        opacity: 0.75,
        icon: Parque
            }).bindPopup("<h3>Fundación Parque Jaime Duque</h3><h4><b>Municipio:</b> Tocancipá<br><b>Dificultad:</b> Bajo<br><b>Clima promedio:</b> 13°C<br><b>Zona de vida:</b> bh-M<br><b>Contacto:</b> https://parquejaimeduque.com/</h4>")
            .addTo(map);
	