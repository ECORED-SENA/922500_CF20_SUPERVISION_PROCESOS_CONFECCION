<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .fondo-1.p-5.mn
      .fondo-2.p-5.mb-4
        .row.justify-content-center.align-items-center
          .col-lg-4.col-8: img(src="../assets/curso/temas/intro/3.svg", alt="Introducción")
          .col-lg-7
            p.mb-0 Se da una bienvenida al componente formativo “Control de calidad e inventarios”. Para comenzar el recorrido por el mismo, se debe visitar el video que se muestra a continuación:
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 
        

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.fondo-1
  background-image: url('../assets/curso/temas/intro/1.svg')
  background-repeat: no-repeat
  background-position: center
  background-size: cover
.fondo-2
  background-image: url('../assets/curso/temas/intro/2.svg')
  background-repeat: no-repeat
  background-position: center
  background-size: cover
</style>
