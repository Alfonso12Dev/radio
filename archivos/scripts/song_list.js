//<-Creamos un array definiendo las canciones a reproducir y agregamos algunos datos adicionales->
let All_song = [
   {
     name: "Chilla's art",
     path: "archivos/song/song.mp3",
     img: "archivos/images/example.png",
     singer: "Unkwown author"
   },
   {
     name: "Diabolic swing",
     path: "archivos/song/song2.mp3",
     img: "archivos/images/example.png",
     singer: "Unkwown author"
   },
   {
     name: "Ufo playlist",
     path: "archivos/song/song3.mp3",
     img: "archivos/images/example.png",
     singer: "Camellia"
   },
   {
     name: "Shahed -Indian Fusion",
     path: "archivos/song/4.mp3",
     img: "archivos/images/example.png",
     singer: "imshahed"
   },
   {
     name: "Syn Cole - Feel Good",
     path: "archivos/song/5.mp3",
     img: "archivos/images/example.png",
     singer: "NoCopyrightSounds"
   },
   {
    name: "Yusuf Alev - Yoros",
    path: "archivos/song/6.mp3",
    img: "archivos/images/example.png",
    singer: "Magic Free Release"
   }
];

//<-Obtenemos la clase tracks y la iniciaremos a utilizar para añadir las canciones que definimos previamente en la variable all_song->
let tracks = document.querySelector('.tracks');

//<-Creamos una lista y generamos el respectivo código html->
for (let i = 0; i < All_song.length; i++) {

//<-Definimos el código html a añadir en el apartado del reproductor de la playlist->
let Html = `
<!--Añadimos la canción-->
<div class="song">

<!--Definimos la imagen de la canción a reproducir-->
<div class="img">
<img src="${All_song[i].img}"/>
</div>

<!--Definimos los demás datos de la canción-->
<div class="more">

<!--Añadimos la dirección de la canción-->
<audio src="${All_song[i].path}" id="music"></audio>

<!--Añadimos el nombre de la canción y su autor-->
<div class="song_info">
<p id="title">${All_song[i].name}</p>
<p>${All_song[i].singer}</p>
</div>

<!--Añadimos el botón para reproducir la canción y/o detenerla-->
<button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
</div>
</div>
`;

//<-En este lado básicamente hacemos un análisis a la cadena de texto introducida como cadena HTML o XML e insertamos al árbol DOM los nodos resultantes de dicho análisis en la posición especificada->
tracks.insertAdjacentHTML("beforeend", Html);
};