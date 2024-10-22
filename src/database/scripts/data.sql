
INSERT into epa_la_base2.usuarios (nombre,apellido,email,password,foto)

VALUES("Marciano","Visitante","marcianovisitante@neptuno.com","$2a$10$cj6AdR3sLeyH3RHErziXHOrWGeNjxz8QZ.dVxzziMXyLcS32VuCqS","vitruvio.jpg"),
("ET","Original","etoriginal@saturno.com","$2a$10$cj6AdR3sLeyH3RHErziXHOrWGeNjxz8QZ.dVxzziMXyLcS32VuCqS","foto-1656475673864.jpeg");

INSERT into epa_la_base2.usuarios (nombre,apellido,email,isAdmin,password,foto)
VALUES("Tony","González","gonzalezantonio@digitalhouse.com",1,"$2a$10$cj6AdR3sLeyH3RHErziXHOrWGeNjxz8QZ.dVxzziMXyLcS32VuCqS","vitruvio.jpg"),
("Fran","Spinelli","franco.spinelli@digitalhouse.com",1,"$2a$10$cj6AdR3sLeyH3RHErziXHOrWGeNjxz8QZ.dVxzziMXyLcS32VuCqS","vitruvio.jpg"),
("Ivan","Laipa","ivan@epa-la-ipa.tom.ar",1,"$2a$10$cj6AdR3sLeyH3RHErziXHOrWGeNjxz8QZ.dVxzziMXyLcS32VuCqS","alien3.jpg"),
("Seba","Laipa","seba@epa-la-ipa.tom.ar",1,"$2a$10$cj6AdR3sLeyH3RHErziXHOrWGeNjxz8QZ.dVxzziMXyLcS32VuCqS","alien1.jpg"),
("Lean","Laipa","lean@epa-la-ipa.tom.ar",1,"$2a$10$cj6AdR3sLeyH3RHErziXHOrWGeNjxz8QZ.dVxzziMXyLcS32VuCqS","alien5.jpg"),
("Tino","Laipa","tino@epa-la-ipa.tom.ar",1,"$2a$10$cj6AdR3sLeyH3RHErziXHOrWGeNjxz8QZ.dVxzziMXyLcS32VuCqS","alien2.jpg");


INSERT INTO epa_la_base2.contenido(contenido)
VALUES("473"),
("500");


INSERT INTO epa_la_base2.marcas(nombre)
VALUES("Cheverry"),
("Mil Almas"),
("Antares"),
("Manush"),
("Temple"),
("Peñón del águila"),
("Ortúzar"),
("Blest"),
("Kira"),
("Patagonia"),
("Rock or Bust"),
("Strange"),
("Grupo 2"),
("Amundsen"),
("Berliner Weisse"),
("Epa La Ipa");




INSERT INTO epa_la_base2.tipos(sabor)
VALUES("Ipa"),
("American Ipa"),
("Stout"),
("Porter"),
("Apa"),
("Red"),
("Honey"),
("Golden"),
("Pilsen"),
("Amber Lager"),
("Kolsch"),
("Neipa"),
("Scottish"),
("Experimental"),
("Citric"),
("Agrio Imperial"),
("Imperial IPA");







INSERT into epa_la_base2.productos (nombre,descripcion,abv,ibu,precio,descuento,foto,stock,rating,marcas_idmarca,contenido_idcontenido,tipos_idtipo)
VALUES("Ipa",
"Es una cerveza elaborada a base de maltas pálidas y un toque de maltas caramelo, con fuerte sabor y aroma a lúpulos americanos, espuma blanca persistente, de cuerpo medio y con gran carácter. Ideal para maridar con quesos fuertes y picante.",
4.8,
22,
295,
15,
"ipa.png",
100,
7,
1,
1,
1),
("Golden",
"Cerveza dorada. Refrescante y balanceada en sus maltas y amargor de sus lúpulos.",
4.8,
26,
270,
0,
"golden.png",
100,
3,
2,
1,
7),
("Atlantica",
"Es una cerveza fácil de tomar, rubia y refrescante. Posee un sutil aroma y sabor frutado.",
5,
18,
300,
0,
"atlantica-01.png",
100,
6,
3,
1,
8),
("Apa",
"Amarga, pero muy equilibrada. Exquisita combinación de maltas caramelo con las notas de pomelo del lúpulo cascade. Con esta APA comenzó la historia de Manush. Un amor duradero. Lúpulos: Nugget y Cascade.",
5.4,
34,
300,
0,
"apa.png",
100,
9,
4,
1,
5),
("Honey",
"Es una cerveza elaborada con miel orgánica que se agrega en la etapa de maduración, evitando que se transforme en alcohol, resalte el aroma y el sabor. 
Perfectamente balanceada, refrescante, de color dorado y aroma a malta y cítricos.",
5.5,
19,
290,
0,
"miel.png",
100,
2,
5,
1,
7),
("Kölsch",
"Delicado balance. Fermentada con levatdura del tipo Ale pero a baja temperatura, lo que aporta un perfil característico con notas a fruta (manzana y pera)",
4.8,
24,
290,
0,
"peñonkolsh.png",
100,
1,
6,
1,
11),
("Poker",
"Cerveza de color ámbar profundo acompañado por una
espuma densa de gran retención. Cuerpo medio alto.
Sabor a maltas caramelo y fuerte carácter a alcohol
y amargor acompañados por un sutil ahumado.
El agregado de bourbon Jack Daniel’s en madurado
da notas a madera y vainilla hacia el final.",
8.53,
51,
350,
20,
"ortuzar.png",
100,
5,
7,
1,
4),
("Ipa",
"La cerveza Blest IPA posee un marcado golpe de lúpulo, de color ámbar-rojizo, aportado por las maltas caramelizadas. Una característica es el aroma cítrico.
Se usan lúpulos nacionales e importados. En el sabor se mezclan notas terrosas, florales y leve a hierbas. Ideal para disfrutar con comidas de sabores fuertes, carnes ahumadas, picadas de sabores intensos.",
6.5,
54,
290,
10,
"blestipa.png",
100,
8,
8,
1,
1),
("Sora",
"Una session IPA de color dorado. Amargor suave y delicado en donde se destacan notas a frutas tropicales, pino y ananá.",
4.8,
38,
350,
10,
"kira.png",
100,
6,
9,
1,
1),
("Pilsen",
"La cerveza Blest Pilsen es de color dorado claro, además de la malta Pilsen se utiliza trigo, lo cual aporta generación y mantención de espuma. 
Utilizan lúpulos nacionales e importados, que brindan un característico aroma y sabor amargos, de todos modos, predomina el sabor maltoso. Es una cerveza fresca, balanceada, de cuerpo medio en boca.",
5,
10,
350,
30,
"blestpilsen.png",
100,
4,
8,
1,
9),
("Amber Lager",
"En la cerveza Patagonia Amber Lager (730ml), encontrarás un suave sabor a caramelo, elaborada con una combinación de 4 maltas, que le dan su característico color ámbar y sabor maltoso Esta cerveza es una combinación de lúpulos patagónicos y un blend de finas maltas que generan su color rojizo, un delicado aroma y un amargor apacible que revela un tostado delicioso.",
5.2,
14,
250,
0,
"2-12.png",
100,
3,
10,
1,
10),
("AC DC",
"La cerveza más rockera. Una APA al estilo Angus Young!s",
6,
25,
400,
0,
"adcdbeer.png",
100,
10,
11,
1,
5),
("Juego Absurdo",
"Exhuberante delicia absurda. El inconfundible sabor a la corteza del pan recién horneado y un carácter lupulado tan herbal como fresco.",
6,
20,
300,
0,
"birra1.png",
200,
10,
12,
2,
1),
("Wolf IPA","Cuando un lobo aúlla, es porque está pidiendo una Wolf IPA. Con un perfil muy americano, es una IPA que no vas a poder parar de tomar. Cítrica y frutal consecuencia del dry hopping con lúpulo Mosaic, tiene una tremendo balance entre aroma, sabor, amargor y tomabilidad.",6,50,350,0,"temple_wolf.png",200,5,5,2,1),
("Cosmica","Un frutado cítrico, un ligero y especiado aroma a trigo. Sabor ácido al inicio, y un toque especiado a cilantro y naranja al final. Un birra de otro planeta.",4.5,20,350,0,"temple_cosmica.png",200,6,5,2,10),
("Scottish","Con un color cobrizo que refleja su elegancia y complejidad en sus aromas, es una birra para frenarse a mirar, oler y después tomar. Combinación de maltas especiales que le dan un perfil a tostado y caramelo.",5.5,24,350,0,"temple_scottish.png",200,5,5,2,13),
("Golden","Ayyy, la Golden. De esas birras que le gustan a todo el mundo. Fresca, ligera, donde la malta está presente en boca y en nariz de una manera única. La reina en esta birra es la malta Pilsen, que le aporta unas notas muy amigables y le dan ese color dorado claro que todos identificamos como BIRRA! De muuucha tomabilidad. Ideal para la primera pinta ;)",5.5,19,350,0,"temple_golden.png",500,7,5,2,8),
("Black Soul Stout","Ella completa la familia, y es una birra para aquellos que buscan un amor para toda la vida. Con una danza perfecta entre amargor y sus tonos dulces, el aroma a café y la cremosidad de la espuma generan la profundidad de un alma negra.",4.8,17,350,0,"temple_black_soul_stout.png",200,8,5,2,3),
("Flow Apa","Cerveza dorada, de bajo amargor y alta tomabilidad. Con agregado de lúpulos americanos en maduración (Mosaic, Citra, Amarillo y Sorachi) que aportan notas cítricas a limón y pomelo.",5,30,350,10,"temple_flow_apa.png",150,5,5,2,5),
("Neipa","Una re evolución del lupulo. Es una birra muy lupulada, con un aroma más intenso y un sabor más amigable al paladar. Con apariencia turbia, afrutada y sedosa.",5.2,35,350,0,"temple_neipa.png",200,4,5,2,12),
("Demon Honey","UNA HONEY NO TAN SANTA, la cerveza que creamos junto a Bhavi. ADVERTENCIA: Vas a quedar tirando uiuiuiiis...",7.1,18,400,0,"temple_demon_honey.png",100,4,5,2,7),
("Pumpkin Ale","En colaboración con FILIDORO. De cuerpo medio alto y bajo amargor. Resaltan en aroma la adición de especias; Canela, nuez moscada y jengibre.",6.7,15,350,0,"temple_pumpkin_ale.png",100,10,5,2,1),
("Kandy Kush","En colaboración con SANTA PLANTA. Esta vez, combinamos una cepa #CannabisÍndica con la dulzura justa que le aporta nuestra miel  . Es la dupla perfecta de la Lemon Haze, pero tomalas con cuidado, que te va a estallar el paladar de felicidad.",4.5,13,350,20,"temple_kandy_kush.png",100,7,5,2,14),
("Lemon Haze","En colaboración con SANTA PLANTA. Los terpenos de la Lemon Haze se unen a los lúpulos Mosaic aportando toda la esencia de esta cepa de #CannabisSativa -la única bicampeona mundial- en una experiencia olfativa increíble. No contiene THC ni CBD.",5.3,50,400,0,"temple_lemon_haze.png",130,8,5,2,15),
("Critical Apa","La Critical APA es una cerveza dorada de bajo amargor, ideal para inducir charlas largas y colgadas. Con lúpulos americanos que aportan notas cítricas a limón y pomelo y terpenos Critical Jack, también de carácter cítrico y un delicado sabor picante y a madera. Aunque su aroma puede confundirse con el de otras flores. Nuestra Critical APA no contiene THC ni CBD.",6,50,400,0,"temple_critical_apa.png",100,1,5,2,5),
('Bazzinga Session Ipa', 'La Session IPA es una cerveza que concentra toda la explosividad de sabores y perfil de una American IPA pero con menor cantidad de alcohol, menor amargor y cuerpo.', 4.8, 20, 350, 0, 'penion_bazinga.png', 100, 4, 6, 1, 1),
('Superman Darina', 'Es una birra que tiene el poder de la refrescancia de las mandarinas con todo el encanto del lúpulo. Dando como resultado una pócima espumante capaz de vencer los calores más crueles y amenazantes.', 5, 36, 350, 0, 'penion_superman.png', 100, 3, 6, 1, 15),
('Ipa', 'Ale americana cobriza, floral, con toques herbáceos y cítricos. Buscamos el equilibrio entre el cuerpo y el lúpulo. Toda IPA Manush debe pasar la prueba del globo y el elefante: volar establemente con un buen contrapeso. Lúpulos: Nugget y Cascade.', 5.5, 58, 360, 0, 'manush_ipa.png', 50, 5, 4, 1, 1),
('Honey', 'Floral, delicada y suave. Manush Honey es una armónica combinación de maltas claras, miel y mucha pasión. Lúpulos: Willamette.', 6.5, 14, 360, 0, 'manush_honey.png', 50, 4, 4, 1, 7),
('Kolsch', 'La mejor opción para iniciarse en Manush es nuestra rubia clásica. Estilo ideal para medir un buen trabajo de fermentación. Liviana, maltosa y muy refrescante, con exquisitas notas a pera. Lúpulos: Willamette.', 5.2, 18, 360, 0, 'manush_kolsch.png', 50, 4, 4, 1, 11),
('Milk Stout', 'Ale inglesa de cuerpo pleno y cremoso, levemente dulce y sedosa, pero con el lúpulo justo para balancear el gusto. Las maltas tostadas le dan notas a café y chocolate, y las caramelizadas aportan aromas a nuez y caramelo. Su nombre se debe al agregado de lactosa. Lúpulos: Bullion.', 4.2, 26, 360, 0, 'manush_stout.png', 50, 3, 4, 1, 3),
('Session Ipa', 'na cuidada selección de lúpulos para evocar nuestros mejores recuerdos de frescura y aire libre. Esta IPA, que se mantiene y cambia a la vez, representa la persistencia del verano que todos llevamos dentro.', 5, 30, 360, 0, 'manush_session_ipa.png', 50, 7, 4, 1, 1);

insert into epa_la_base2.productos (nombre, descripcion, abv, ibu, precio, descuento, foto, stock, rating, marcas_idmarca, contenido_idcontenido, tipos_idtipo) values ('Scottish', 'Nuestra versión del conocido estilo de cerveza escocesa, orientada al estilo Export, de color rubí, con notas a pan y a caramelo. Esto debido a que su carácter se centra en la malta caramelizada, la cual es bien equilibrada por los lúpulos que la componen.', 5, 32, 360, 12, 'cerveza-scotish.png', 28, 1, 2, 2, 13);
insert into epa_la_base2.productos (nombre, descripcion, abv, ibu, precio, descuento, foto, stock, rating, marcas_idmarca, contenido_idcontenido, tipos_idtipo) values ('Honey', 'Ligera pero con un buen sustento de malta y delicada en su aroma. Elaborada con miel floral, orgánica y artesanal.', 4, 18, 350, 8, 'cerveza-honey.png', 28, 1, 2, 2, 7);
insert into epa_la_base2.productos (nombre, descripcion, abv, ibu, precio, descuento, foto, stock, rating, marcas_idmarca, contenido_idcontenido, tipos_idtipo) values ('Ipa', 'De cuerpo medio, color cobre rojizo. Compuesta por un blend de lúpulos americanos, que se conjugan de manera equilibrada para aportar un amargor medio, notas cítricas y florales, con un final en boca seco y agradable.', 6, 42, 370, 1, 'cerveza-ipa.png', 35, 1, 2, 2, 1);
insert into epa_la_base2.productos (nombre, descripcion, abv, ibu, precio, descuento, foto, stock, rating, marcas_idmarca, contenido_idcontenido, tipos_idtipo) values ('Imperial', 'Nuestra especial del tipo de cerveza negra inglesa, nos regala su color marrón oscuro y sus aromas a café y chocolate que aportan las maltas tostadas. De cuerpo y amargor medios, madurada en roble francés, con adición de vainilla natural de Madagascar y whisky irlandés. El final en boca es alicorado y cierran un círculo que uno no puede privarse de sentir.', 9, 38, 380, 1, 'cerveza-imperial.png', 35, 1, 2, 2, 4);
insert into epa_la_base2.productos (nombre, descripcion, abv, ibu, precio, descuento, foto, stock, rating, marcas_idmarca, contenido_idcontenido, tipos_idtipo) values ('Mexican Laguer', 'La nueva Mexican Lager, estilo aún sin explorar en nuestro país, promete dar que hablar. Liviana, ligera y fácil de tomar, posee entre sus ingredientes trigo y sémola de maíz lo que le aporta un dulzor interesante, perceptible en boca pero que no empalaga. La misma es ideal para acompañar ensaladas y carnes blancas. Amigable al paladar y excelente compañera para una tarde veraniega con amigos, la Mexican Lager es perfecta para quienes aún no logran animarse a las cervezas artesanales.', 3, 12, 400, 0, 'mexican.png', 66, 1, 6, 1, 14);
insert into epa_la_base2.productos (nombre, descripcion, abv, ibu, precio, descuento, foto, stock, rating, marcas_idmarca, contenido_idcontenido, tipos_idtipo) values ('Arandano Sour', 'una cerveza creada sobre la base de una Berliner Weisse, que tras su cristalino violeta esconde toda la opulencia de los arándanos. De espuma rosa e intenso aroma es capaz de llamar la atención hasta de los más distraídos. Con un amargor imperceptible y una acidez justa, dada por la acción de Lactobacilus. IBUS: 5 - CUERPO: OG 1038 - ALCOHOL: 5%.', 5, 5, 400, 0, 'arandano.png', 66, 1, 1, 1, 14);
insert into epa_la_base2.productos (nombre, descripcion, abv, ibu, precio, descuento, foto, stock, rating, marcas_idmarca, contenido_idcontenido, tipos_idtipo) values ('Maracuya Rour', 'cerveza de color dorado cristalino, que esconde tras su brillo el exotismo del maracuyá. La acidez y el dulzor de la fruta se combina a la perfección con una Berliner Weisse acidificada por la acción de Lactobacilus. Una refrescante marea de sabor y aroma que impactará tus sentidos dejándolos perplejos. IBUS: 5 - CUERPO: OG 1038 - ALCOHOL: 4%.', 5, 4, 400, 0, 'maracuya.png', 66, 1, 1, 1, 14);
insert into epa_la_base2.productos (nombre, descripcion, abv, ibu, precio, descuento, foto, stock, rating, marcas_idmarca, contenido_idcontenido, tipos_idtipo) values ('Juicy IPA', 'Una American IPA con sabores y aromas frutales intensos, cuerpo suave y sensación en boca con textura delicada, turbia. Se percibe menos amargor que en las IPAs tradicionales, pero el lúpulo siempre es dominante.', 8, 30, 400, 8, 'juicy.png', 200, 7, 3, 2, 2);
insert into epa_la_base2.productos (nombre, descripcion, abv, ibu, precio, descuento, foto, stock, rating, marcas_idmarca, contenido_idcontenido, tipos_idtipo) values ('Quicksilver', 'Hazy IPA con lúpulos Talus, El Dorado y Citra BBC.', 5.8, 54, 485, 7.5, 'quicksilver.png', 150, 5, 14, 1, 1);
insert into epa_la_base2.productos (nombre, descripcion, abv, ibu, precio, descuento, foto, stock, rating, marcas_idmarca, contenido_idcontenido, tipos_idtipo) values ('Personal Space Invader', '¿Alguna vez ha tenido su espacio vital invadido? ¡Desagradable eh! Ahora imagina a un extraterrestre haciendo eso... ¡Aterrador! ¡A menos que disfrutes de un Personal Space Invader!', 6.5, 48, 485, 0, 'SpaceInvader.png', 100, 2, 14, 1, 1);
insert into epa_la_base2.productos (nombre, descripcion, abv, ibu, precio, descuento, foto, stock, rating, marcas_idmarca, contenido_idcontenido, tipos_idtipo) values ('Doble MMM', 'DOBLE MMM... SUEÑO DE FRUTAS CON FRUTA DE DRAGÓN, MARACUYÁ, VAINILLA Y COCO', 7, 34, 541, 10, 'doblemmm.png', 100, 3, 15, 2, 16);
insert into epa_la_base2.productos (nombre, descripcion, abv, ibu, precio, descuento, foto, stock, rating, marcas_idmarca, contenido_idcontenido, tipos_idtipo) values ('Gamma Vortex', 'La tercera iteración de esta serie con Northern Monk y EQ, una cerveza que elaboramos cada año durante el Hop City Beer Fest en Leeds, ¿y quizás la mejor?', 9.4, 45, 450, 8, 'Gamma-Vortex.png', 150, 4, 15, 2, 4);
