<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Control de calidad
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-4 Después de entender lo que significa la calidad, lo que representa en todo su entorno, y el cómo interviene en la cadena productiva en todas sus áreas, es importante entonces mencionar, como se hace para vigilar que el cumplimiento de las especificaciones se realice en toda la organización. Estas especificaciones vienen en la muestra física y/o en la ficha técnica.
        .cajon.color-azul.p-4.mb-4
          p.mb-0 El control de calidad puede definirse como un conjunto de elementos encargados de detectar no conformidades, defectos y errores en un proceso productivo, mediante metodologías, actividades e instrumentos de verificación. Este control se debe realizar en toda la cadena de producción y en todas las actividades de la empresa. A veces se cree erróneamente que el control de calidad solo se realiza en las plantas de producción, pero esta actividad debe llevarse a cabo desde los estudios de mercadeo, el diseño y la relación con los proveedores (compras), donde se deben verificar los requisitos establecidos por el Sistema de Gestión de Calidad (SGC).
      .col-lg-4.col-8: img(src='@/assets/curso/temas/tema5/1.png', alt='')
    .titulo-icono.mb-4
      .titulo-icono__texto: h4.text-white.mb-0 Responsables del control de calidad
    p.mb-5(data-aos='fade-right') Cuando en 1970 se empezó a hablar del concepto #[span.color-acento-contenido.fw-bold Calidad Total], se hacía referencia que la satisfacción del cliente dependía de toda la cadena de actores que tenían que ver con el funcionamiento de las organizaciones, estos actores son (ver figura 5): 
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-6.col-8.mb-lg-0.mb-3
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 5
          br
          span.fst-italic Actores del SGC
        img(src='@/assets/curso/temas/tema5/2.svg', alt='La figura menciona los actores del sistema de gestión de la calidad, los cuales son: clientes, trabajadores, proveedores, sociedad, capital y el estado.')
      .col-lg-6
        p Todos estos actores de alguna manera participan en la elaboración del listado de requisitos o especificaciones que hay que cumplir y que finalmente van a satisfacer necesidades y expectativas.
          br
          br
          |Al interior de todas las organizaciones existen estructuras jerárquicas que son responsables de diferentes misiones. En el tema de calidad, a esa estructura, habitualmente se le denomina el departamento de calidad, o el área de calidad, o los responsables del SGC, de esa manera, sin excluir que “la calidad es responsabilidad de todos “, se asignan responsabilidades específicas de acuerdo con las funciones de cada uno. 
    p.mb-5(data-aos='fade-right') A manera de ejemplo, se mencionan algunos cargos con responsabilidades respecto a la calidad:
    .tarjeta.bg-card.p-5.mb-5
      SlyderA(tipo='b')
        .row.align-items-center
          .col-md-7.mb-4.mb-md-0
            h4 Gerente de calidad
            p Es el encargado de facilitar los recursos necesarios para que las actividades de control de calidad, se puedan resolver y sacar adelante. También se encarga de dirigir y coordinar las acciones encaminadas a detectar y resolver errores y defectos.
            .p-4.bg-white
              h5 El gerente debe:
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-tshirt(style="color: #3097A1")
                  p.mb-0 Conocer la normatividad vigente en los asuntos de cumplimiento de requisitos, y de entidades reguladoras de los SGC.

                li.d-flex
                  i.fas.fa-tshirt(style="color: #3097A1")
                  p.mb-0 Tener la potestad para aprovechar los sistemas de información de la compañía para poder socializar todos los temas que sea pertinente conozcan las demás áreas.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema5/3.jpg', alt='')
        .row.align-items-center
          .col-md-7.mb-4.mb-md-0
            h4 Supervisor de calidad
            p Es el encargado de programar y coordinar el personal operativo para realizar las auditorias e inspecciones necesarias, de acuerdo a los productos, a las máquinas, y a las áreas involucradas, tiene la tarea de custodiar la información relativa al control de calidad.
            .p-4.bg-white
              h5 El supervisor de calidad debe:
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-tshirt(style="color: #3097A1")
                  p.mb-0 Diseñar y utilizar los formatos necesarios que permitan consignar los hallazgos encontrados después de las verificaciones-
                li.d-flex
                  i.fas.fa-tshirt(style="color: #3097A1")
                  p.mb-0 Tomar las mejores decisiones, y en el tiempo ideal para evitar que los procesos se retrasen.

                li.d-flex
                  i.fas.fa-tshirt(style="color: #3097A1")
                  p.mb-0 Establecer la hoja de ruta y la trazabilidad de un producto, para poder planear de la mejor manera las inspecciones.

                li.d-flex
                  i.fas.fa-tshirt(style="color: #3097A1")
                  p.mb-0 Conocer el SGC.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema5/4.jpg', alt='')
        .row.align-items-center
          .col-md-7.mb-4.mb-md-0
            h4 Auditor de calidad
            p Encargada de que las instrucciones de trabajo se lleven a cabo de manera apropiada. 
            .p-4.bg-white
              h5 El auditor de calidad debe:
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-tshirt(style="color: #3097A1")
                  p.mb-0 Revisar de manera aleatoria (estadística) las operaciones durante las entradas, la transformación, y las salidas.
                li.d-flex
                  i.fas.fa-tshirt(style="color: #3097A1")
                  p.mb-0 Ser objetivo e imparcial en la toma de decisiones.
                li.d-flex
                  i.fas.fa-tshirt(style="color: #3097A1")
                  p.mb-0 Entender que sacar productos de buena calidad, no significa elevar los costos.
                li.d-flex
                  i.fas.fa-tshirt(style="color: #3097A1")
                  p.mb-0 Dimensionar de manera asertiva el impacto que, sobre el sistema de gestión, van a tener sus decisiones. 
                li.d-flex
                  i.fas.fa-tshirt(style="color: #3097A1")
                  p.mb-0 Aprovechar al máximo todas las lecciones aprendidas.

                li.d-flex
                  i.fas.fa-tshirt(style="color: #3097A1")
                  p.mb-0 Recopilar evidencias por medio de las herramientas adecuadas.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema5/5.jpg', alt='')
        .row.align-items-center
          .col-md-7.mb-4.mb-md-0
            h4 Personal operativo
            p El personal operativo es el encargado, principalmente, de la producción y distribución.
            .p-4.bg-white
              h5 El personal operativo debe:
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-tshirt(style="color: #3097A1")
                  p.mb-0 Recibir las instrucciones con total diligencia y atención.
                li.d-flex
                  i.fas.fa-tshirt(style="color: #3097A1")
                  p.mb-0 Utilizar los equipos y herramientas de la manera como los manuales orientan.
                li.d-flex
                  i.fas.fa-tshirt(style="color: #3097A1")
                  p.mb-0 Hacer buen uso de las materias primas y los insumos.

                li.d-flex
                  i.fas.fa-tshirt(style="color: #3097A1")
                  p.mb-0 Leer y verificar fichas técnicas y muestras físicas.
                li.d-flex
                  i.fas.fa-tshirt(style="color: #3097A1")
                  p.mb-0 Avisar y dar alertas a las personas indicadas, cuando se percate de una anomalía.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema5/6.jpg', alt='')
    p.mb-5(data-aos='fade-right') A continuación, para entender este tema de una manera práctica, se presenta un ejemplo de las instrucciones que debe seguir una operaria en una empresa de confecciones:
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 2
          br
          span.fst-italic Ejemplo de instrucciones para operaria
        .tabla-a.color-acento-botones.mb-5
          table
            thead(style="border-color: #9B1F36")
              tr(style="background-color: #E8E8E8 ")
                th 
                th Verifique
            tbody
              tr
                td(rowspan="7" style="background-color: #E8E8E8; width: 20% ") Antes de empezar a trabajar
                td(style="width: 80%") Que conoce realmente que operación va a realizar.
              tr
                td Que está en la máquina indicada para esa operación.
              tr
                td Que tiene la aguja y demás accesorios indicados.
              tr
                td Que tiene los hilos adecuados para esa costura y para ese lote de producción.
              tr
                td Que posee los insumos y materiales necesarios.
              tr
                td Que conoce las distancias y medidas requeridas para esa operación.
              tr
                td Que tiene los instrumentos necesarios para verificar medidas.
              tr
                td(rowspan="5" style="background-color: #E8E8E8 ") Durante la ejecución de la operación
                td(style="background-color: #E8E8E8 ").fw-bold Revise
              tr
                td Que está cumpliendo las especificaciones indicadas: medidas, distancias, Puntadas, costuras.
              tr
                td Que el trabajo para la siguiente operación va impecable.
              tr
                td Avise oportunamente cuando necesite más trabajo.
              tr
                td Cumpla las normas de seguridad industrial.
    p.mb-5(data-aos='fade-right') El control de la calidad es importante porque permite visualizar y detectar desviaciones, mediante el seguimiento apropiado. Esto ayuda a corregir de manera oportuna las causas que están originando estas no conformidades. Ayuda a medir la efectividad de las metodologías de trabajo y sus resultados. No permite continuar un proceso cuando no está funcionando bien, lo corrige y procura recuperar el tiempo perdido.
    .titulo-icono.mb-4
      .titulo-icono__texto: h4.text-white.mb-0 Planeación del control de calidad
    p.mb-5(data-aos='fade-right') Para llevar a cabo un control de calidad efectivo, es necesario realizar algunas actividades de manera inicial, de esta forma organizada, se pueden identificar necesidades para poder ejecutar un control idóneo y apropiado. La planeación se hará tomando como modelo una empresa del sector diseño, confección y moda.
      br
      br
      span.color-acento-contenido.fw-bold Las actividades iniciales para elaborar la planeación se pueden ver a continuación:
    TabsA.color-acento-botones.mb-5
      .tarjeta.p-4(titulo="Estructura organizativa" style="background-color: #F5E0E4 ")
        h4 Estructura organizativa
        p Para darle un orden al plan es necesario identificar y denominar esa área que va a ser intervenida por un control, esa nominación (nombre), ayuda a determinar los rangos y alcances que va a tener la intervención. De una vez se va interpretando y entendiendo la relación que tiene cada área con todo el sistema. Es muy posible que, al estar realizando este listado, empiecen a aparecer oportunidades de mejora, en cada una de las secciones, en su ubicación, o en el rango de actividades que realiza. En la industria de la moda los departamentos que habitualmente se estructuran son: Mercadeo y Diseño, Trazo y Corte, Estampados, Bordados, Sublimación, Confección, Lavandería, Terminación, y Bodega.
      .tarjeta.p-4(titulo="Listado de actividades por área o departamento" style="background-color: #F5E0E4 ")
        h4 Listado de actividades por área o departamento
        p Cada uno de los departamentos que componen las empresas de la industria de la moda, realizan varias actividades, las cuales hay que tener en cuenta al realizar un plan de control de calidad, estos controles se realizan sobre operaciones o procesos de transformación, sobre materiales e insumos, sobre maquinarias, y sobre productos terminados.
          br
          br
          | Por ejemplo, en el área de diseño se realizan actividades de 
        ul.lista-ul--color
          li.d-flex
            i.fas.fa-tshirt(style="color: #9B1F36")
            p.mb-0  Dibujo o figurines.
          li.d-flex
            i.fas.fa-tshirt(style="color: #9B1F36")
            p.mb-0  Elaboración de moldes o patrones.

          li.d-flex
            i.fas.fa-tshirt(style="color: #9B1F36")
            p.mb-0  Escalado de esos moldes.
          li.d-flex
            i.fas.fa-tshirt(style="color: #9B1F36")
            p.mb-0  Elaborar fichas técnicas para orientar los siguientes procesos.
          li.d-flex
            i.fas.fa-tshirt(style="color: #9B1F36")
            p.mb-0  Programación de lotes.
          li.d-flex
            i.fas.fa-tshirt(style="color: #9B1F36")
            p.mb-0  Corte y confección de las muestras iniciales y su respectivo seguimiento.
          li.d-flex
            i.fas.fa-tshirt(style="color: #9B1F36")
            p.mb-0  Revisión y aprobación de muestras iniciales.
      .tarjeta.p-4(titulo="Listados de los recursos a utilizar" style="background-color: #F5E0E4 ")
        h4 Listados de los recursos a utilizar
        p Conocer qué materiales e insumos se van a utilizar contribuye a que el plan esté más claro y completo, al igual que conocer los proveedores, y estos de qué manera ayudan al cumplimiento de requisitos. Así como a tener claridad sobre la base de datos de los proveedores, y establecer los criterios con que se seleccionan, orientados al cumplimiento de requisitos, hacen parte de los elementos necesarios para la planeación del control de calidad.
      .tarjeta.p-4(titulo="Herramientas y recursos para el control de calidad" style="background-color: #F5E0E4 ")
        h4 Herramientas y recursos para el control de calidad
        p Aquí se nombran las herramientas de medición de especificaciones, y los formatos donde se consignará la información obtenida, es importante porque de estos datos se hace el diagnóstico y toma de decisiones de las acciones de mejora requeridas.
      .tarjeta.p-4(titulo="Herramientas e instrumentos para el control de calidad." style="background-color: #F5E0E4 ")
        h4 Herramientas e instrumentos para el control de calidad.
        p Para complementar el plan, se puede utilizar la herramienta 5 W y 1 H:
        ul.lista-ul--color
          li.d-flex
            i.fas.fa-tshirt(style="color: #9B1F36")
            p.mb-0 #[em What.] ¿Qué control se va a realizar?
          li.d-flex
            i.fas.fa-tshirt(style="color: #9B1F36")
            p.mb-0 #[em Why.] ¿Por qué se va a hacer ese control? Que justificación tiene.
          li.d-flex
            i.fas.fa-tshirt(style="color: #9B1F36")
            p.mb-0 #[em When.] ¿Cuándo se realizarán los controles?
          li.d-flex
            i.fas.fa-tshirt(style="color: #9B1F36")
            p.mb-0 #[em Who.] ¿Quiénes realizarán los controles?

          li.d-flex
            i.fas.fa-tshirt(style="color: #9B1F36")
            p.mb-0 #[em Where.] ¿Dónde se realizarán los controles?
          li.d-flex
            i.fas.fa-tshirt(style="color: #9B1F36")
            p.mb-0 #[em How.] ¿Cómo se realizarán los controles?
    p.mb-5(data-aos='fade-right') Dentro de la planeación se debe tener en cuenta, los hallazgos que se van a encontrar: “control de calidad son los mecanismos y herramientas utilizadas para detectar la presencia de errores o defectos, y presentar acciones de mejora, que permitan cumplir con las especificaciones esperadas”; y el manejo que se le va a dar a esos resultados o hallazgos.
      br
      br
      span.color-acento-contenido.fw-bold Teniendo en cuenta lo anterior, es importante que se conozca un formato para elaborar la planeación de un control de calidad:
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 3
      br
      span.fst-italic Formato para planear control de calidad
    .tabla-a.color-acento-botones.mb-5
        table
          thead(style="border-color: #9B1F36")
            tr(style="background-color: #E8E8E8 ")
              th Area
              th Actividad
              th Recursos
              th Instrumento y/o herramienta
              th Hallazgos
              th Acción de mejora
          tbody
            tr
              td(style="background-color: #E8E8E8 ") Área o Departamento que se va a intervenir con un control de calidad.
              td Se nombra la actividad del área anterior que se va a controlar.
              td Se listan los recursos que tienen que ver con la actividad de la columna anterior.
              td Se mencionan los elementos necesarios para hacer y consignar las mediciones.
              td Se escriben los resultados obtenidos de los controles. En la etapa de la planeación, aquí aún no hay información.
              td En la planeación, apenas se está planteando la ejecución.
    .titulo-icono.mb-4
      .titulo-icono__texto: h4.text-white.mb-0 Ejecución del control de calidad
    p.mb-5(data-aos='fade-right') Las acciones a realizar para controlar y mejorar la calidad en las empresas de la industria de la moda, están delimitadas de acuerdo al área y a los procesos a intervenir, también al tipo de prenda, los tejidos, la maquinaria y equipos a utilizar, pero en términos generales son muy similares en todas las situaciones.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .p-4.mb-4(style="background-color: #FCD5C4 ")
          .row.justify-content-center.align-items-center
            .col-2: img(src='@/assets/curso/temas/tema3/3.svg', alt='')
            .col-lg-10: p.mb-0 Ejecutar el control de calidad, es llevar a cabo el plan que se construyó previamente. Es decir, ir a determinado departamento o proceso y hacer mediciones y verificaciones, con los elementos diseñados para ese fin.
        p Cada miembro del departamento de calidad ejecuta y se responsabiliza de sus funciones
          br
          br
          | Pero, ¿cómo se  aplica esto? #[span.color-acento-contenido.fw-bold En el siguiente recurso educativo, se podrá observar el seguimiento al control que se le realiza a los procesos y actividades, consignando los hallazgos y las acciones de mejora:]
      .col-lg-4.col-8: img(src='@/assets/curso/temas/tema5/7.jpg', alt='')
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 6
      br
      span.fst-italic  Control de la calidad
    img(src='@/assets/curso/temas/tema5/8.svg', alt='La figura explica el seguimiento al control de calidad que se realiza a los procesos y actividades de confección. Se evalúan cuatro etapas clave: diseño, corte, confección y acabado. Se consideran aspectos a revisar, se utilizan documentos y herramientas específicas, se identifican hallazgos y se implementan acciones de mejora.')
    .titulo-icono.mb-4
      .titulo-icono__texto: h4.text-white.mb-0 Auditorías
    p.mb-5(data-aos='fade-right') Las auditorías y las inspecciones son actividades muy importantes para realizar el control de calidad. La auditoría se puede definir como la actividad que verifica, examina o inspecciona un material, un proceso, un producto terminado o un documento con el fin de garantizar que el Sistema de Gestión de Calidad (SGC) está funcionando correctamente y no ha tenido desviaciones. Las auditorías ayudan a evaluar el desempeño y la eficacia del SGC desde un punto de vista imparcial. Las auditorías se pueden realizar sobre productos, procesos, personas, sistemas u organizaciones, y pueden ser internas o externas.
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        .tarjeta.bg-card2.p-4
          SlyderA(tipo='b')
            div
              h4 Internas o de primera parte: 
              p Son las auditorías que programa y ejecuta la organización sujeta al plan de mejoramiento, son responsables los representantes de la gerencia y los líderes del SGC; al interior de la empresa se definen las áreas, y los procesos que van a ser intervenidos, y que documentos se van a aprovechar para dejar registros de ésta auditoría. Normalmente este ejercicio entra a ser parte de las actividades habituales de la empresa, sin embargo, en muchas organizaciones se realiza, solo en vísperas de recibir una auditoría externa.
            div
              h4 Externas:
              p Las auditorías que realiza una entidad diferente a la misma empresa u organización son las que se denominan como externas. Normalmente se realizan con el fin de obtener una certificación, debe ejecutarse de manera objetiva e imparcial, y la debe ejecutar un equipo de trabajo que conozca la normatividad, y sea especialista en el conocimiento de los procesos que se van a auditar.
      .col-lg-4.col-8: img(src='@/assets/curso/temas/tema5/9.png', alt='')
    .titulo-icono.mb-4
      .titulo-icono__texto: h4.text-white.mb-0 Análisis y evaluación 
    p.mb-5(data-aos='fade-right') La organización debe analizar y evaluar los datos y la información apropiada, que surgen por el seguimiento y la medición. Según Gutiérrez (2020, pág. 81) los resultados del análisis para evaluar deben utilizar:  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema5/10.png', alt='')    
      .col-lg-7
        .p-3.rounded-pill(style="background-color: #FFC5AD ").mb-3
          p.mb-0 a) La conformidad de los productos y servicios
        .p-3.rounded-pill(style="background-color: #FFC5AD ").mb-3
          p.mb-0 b) El grado de satisfacción del cliente
        .p-3.rounded-pill(style="background-color: #FFC5AD ").mb-3
          p.mb-0 c) El desempeño y la eficacia del sistema de gestión de la calidad.
        .p-3.rounded-pill(style="background-color: #FFC5AD ").mb-3
          p.mb-0 d) Si lo planificado se ha implementado de forma eficaz.
        .p-3.rounded-pill(style="background-color: #FFC5AD ").mb-3
          p.mb-0 e) La eficacia de las acciones tomadas para abordar los riesgos y oportunidades.
        .p-3.rounded-pill(style="background-color: #FFC5AD ").mb-3
          p.mb-0 f) El desempeño de los proveedores externos.
        .p-3.rounded-pill(style="background-color: #FFC5AD ").mb-3
          p.mb-0 g) La necesidad de mejoras en el sistema de gestión de la calidad.

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
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
table
  width: auto
</style>
