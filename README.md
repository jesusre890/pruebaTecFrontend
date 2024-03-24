<h1 align="start"> Prueba Técnica Frontend con React </h1>
<h4 align="start"> -Réplica home de Agora2030 </h4>
<h4 align="start"> -Formulario funcional </h4>
<h4 align="start"> -Sección de blog consumiendo una API </h4>


<br />
Desarrollador: Jesús Re
<br />

## **🖱 Proyecto**
Las tecnologías utilizadas son React, Tailwind con tailwind material. 
En el archivo App.jsx estabrecí las rutas correspondientes y la interacción entre ellas. Dentro de App tambien esta la Navbar correspondiente donde hago las respectivas redirecciones dentro de la pagina y hacia los componentes de Home y Blog. Tambien en la parte inferior se encuentra el Footer.
<br />
<br />
El proyecto es responsivo tanto en celular como en desktop.
<br />
<br />
Los colores y fuentes fueron tomados de la página original y las imagenes se encuentran dentro del repositorio.
<br />
<br />
Se desarrollo de manera modularizada, separe en carpetas cada componente y cada las dos secciones que componen el proyecto, Home y Blog. Dentro de Home se encuentran la mayoria de los componentes, como un Banner con las imágenes correspondientes. Luego por debajo se encuentran las demas secciones que tambien estan modularizadas, como Que hacemos?, Convocatorias, Aliados, Financiadores, Impacto, Oportunidades y Contacto.
<br />
<br />
Componente Aliados: Utilicé React-slick para realizar el efecto de slider de las distintas empresas que la componen.
<br />
<br />
<br />
## **🖱 COMPONENTE CONTACTO-FORMULARIO**
Se encuentra ubicado en el Home. Lo realice utilizando el hook de React Form, haciendo las validaciones correspondientes y dandole funcionalidad. Tambien utilice Email.js, que cuando se completa el formulario se envia a mi email con los datos del mismo, no sin antes aceptar el reCaptcha, que tambien se incorporo en este componente.
<br />
<br />
<br />
## **🖱 COMPONENTE BLOG**
Se accede yendo a 'Blog' desde la navbar. Una vez alli se re encuentra un Banner, tal cual esta en la página original. Luego, se pueden ver los componentes que estan con la información que se optiene desde la siguiente API:
<br />
<br />
Página: https://api.artic.edu/docs/#quick-start
<br />
API: https://api.artic.edu/api/v1/artworks
<br />
<br />
Dentro de ella tome los datos de image_id, artist_display, title y short_description. Las mismas se renderizan en una card de tailwind material con el metodo map() realizando previamente un fetch.
<br />
<br />
<br />

## **🖱 TECNOLOGÍAS**
Las dependencias y distintas tecnologias que utilice para realizar el proyecto son las siguientes:
<br />
<br />
-React js Vite
<br />
-React router dom
<br />
-Tailwind css y tailwind material
<br />
-React Form
<br />
-Email js
<br />
-Google reCaptcha
<br />
-React-slick y slick-carousel
<br />
-Toastify
<br />
<br />

## **🖱 DEPLOY**
Para deployar el proyecto utilicé Vercel. 
Este es el link: https://agora2030.vercel.app/
<br />
<br />
