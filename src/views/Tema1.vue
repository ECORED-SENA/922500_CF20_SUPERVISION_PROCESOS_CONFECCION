<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fondo-1
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Calidad
    p.mb-5(data-aos='fade-right') A pesar de existir una gran cantidad de definiciones del término calidad, se pueden quedar cortas frente a lo que realmente es y en muchos casos se hace necesario unir la palabra calidad con otros términos para entenderla mejor, como: Control de Calidad, Sistema de Gestión de Calidad, Normas de Calidad, entre otros.
    .row.justify-content-center.mb-5
      .col-lg-8
        .p-4.mb-4(style="background-color: #C1F8FA")
          .row.justify-content-center
            .col-lg-2.col-6: img(src="../assets/curso/temas/tema1/2.svg", alt="")
            .col-lg-10
              p.mb-0 Según la ISO 9000, la calidad de un producto viene determinada solo por aquellas características que defina el cliente, y agrega: según la norma, la calidad es entendida como el grado en el que un conjunto de características inherentes cumple con los requisitos.
        p Los requisitos son las especificaciones o dimensiones tenidas en cuenta desde el diseño de ese producto o servicio, con base en una demanda o en unas condiciones acordadas con el cliente y/o mercado. De acuerdo con eso, los elementos, los procesos, las metodologías y la presentación de un producto o servicio, son las características que van a satisfacer, las necesidades y expectativas para las cuales se diseñaron.
          br
          br
          |Desde el diseño y la producción de un bien o un servicio se definen unos elementos que lo componen, especificando cada una de sus características físicas y químicas: peso, volumen, temperatura, tiempo, color, longitud, etc. Cumplir en cada uno de los procesos con estas especificaciones acerca a que el resultado final, sea un producto de calidad. O sea que, #[span.color-acento-contenido.fw-bold calidad es el cumplimiento de especificaciones o requisitos.] 
      .col-lg-4.col-8: img(src="../assets/curso/temas/tema1/3.png", alt="")
    p.text-center
      span.color-acento-contenido.fw-bold Sabiendo lo anterior, es preciso conocer cómo se ha transformado el concepto de calidad a través de los años, se puede ver a continuación:
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-4.bg-white.text-start
          LineaTiempoB.color-acento-contenido.mb-5(:datos="datosLineaTiempoB")
    .titulo-icono.mb-4
        .titulo-icono__texto: h4.text-white.mb-0 Historia de la calidad
    p.mb-5(data-aos='fade-right') La manera como se ha venido verificando el cumplimiento de requisitos o especificaciones, ha tenido cambios a través de toda la historia, hasta el día de hoy. Las metodologías y las responsabilidades al interior de las empresas se han venido transformado y han pasado por varias etapas, como se puede ver a continuación:
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: 'Kaoru Ishikawa (1988)',
        texto:
          'Supuso que la calidad es el hecho de desarrollar, diseñar, manufacturar y mantener un producto de calidad. Este producto debe ser el más económico, el más útil y resultar siempre satisfactorio para el consumidor final. Es una Postura pragmática, y ligada a la producción y los costos.',
        icono: require('@/assets/curso/temas/tema1/4.png'),
      },
      {
        titulo: 'William Edwards Deming (1988)',
        texto:
          'Determinó al concepto calidad como ese grado predecible de uniformidad y fiabilidad a un bajo coste. Este grado debe ajustarse a las necesidades del mercado. Según Deming la calidad no es otra cosa más que “una serie de cuestionamiento hacia una mejora continua”<br>Es considerado el padre del PHVA, Planear, Hacer, Verificar, Actuar; claves del mejoramiento continuo a un bajo costo.',
        icono: require('@/assets/curso/temas/tema1/5.png'),
      },
      {
        titulo: 'James Harrington (1990)',
        texto:
          'Definió la calidad como el hecho de cumplir o exceder las expectativas del cliente a un precio que sea capaz de soportar.<br> Su teoría se enfoca en el cliente y su satisfacción.',
        icono: require('@/assets/curso/temas/tema1/6.png'),
      },
      {
        titulo: 'Armand V. Feigenbaum (1991',
        texto:
          'Entendió la calidad como un proceso que debe comenzar con el diseño del producto y finalizar sólo cuando se encuentre en manos de un consumidor satisfecho.<br> Considera que la cadena de valor y el sistema de producción, así como la satisfacción es lo más importante.',
        icono: require('@/assets/curso/temas/tema1/7.png'),
      },
      {
        titulo: 'Roger. G. Schrolder (1992)',
        texto:
          'Fue firme en la opinión de que la calidad es incluir cero defectos, mejora continua y gran enfoque en el cliente. Cada individuo tiene la facultad de definir la calidad con sus complementos.<br> Su lema: “Buscar la excelencia, y hoy seremos mejor que ayer, y mañana mejor que hoy”.',
        icono: require('@/assets/curso/temas/tema1/8.png'),
      },
      {
        titulo: 'Joseph Moses Juran (1993)',
        texto:
          'Supuso que la calidad es el conjunto de características que satisfacen las necesidades de los clientes. Además según Juran, la calidad consiste en no tener deficiencias. La calidad es “la adecuación para el uso satisfaciendo las necesidades del cliente”.<br> Su lema: “Si el objetivo final es lograr la satisfacción del cliente, pues hagámoslo bien desde el principio”.',
        icono: require('@/assets/curso/temas/tema1/9.png'),
      },
      {
        titulo: 'Leonard Berry (1988)',
        texto:
          'Mantuvo la opinión de que la calidad es un tema de servicio, es decir, la calidad debe ser previsión, no una ocurrencia tardía. Según Berry, debe ser un modo de pensamiento. Este influye en cada paso del desarrollo de nuevos servicios, nuevas políticas, nuevas tecnologías e instalaciones. <br> La planeación es fundamental en un proceso de eliminar desperdicios.',
        icono: require('@/assets/curso/temas/tema1/10.png'),
      },
      {
        titulo: 'Parsu Parasuraman y Valerie Zeithaml  (1985, 1988)',
        texto:
          'Entendieron la calidad como aquella discrepancia existente entre lo esperado y lo percibido. <br> La diferencia entre lo esperado y lo recibido es: de buena calidad, o no es buena calidad.',
        icono: require('@/assets/curso/temas/tema1/11.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.fondo-1
  background-image: url('../assets/curso/temas/tema1/1.svg')
  background-repeat: no-repeat
  background-position: start
  background-size: cover
</style>
