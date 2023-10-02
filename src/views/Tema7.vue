<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Gestión de inventarios
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3 
        p El inventario es una provisión de artículos o materiales que tienen como fin integrarse y así crear nuevos productos para satisfacer la demanda de los clientes.
        .cajon.color-azul.p-4.mb-4
          p.mb-0 La gestión de inventario es específica para cada organización, a través de esta se busca planificar y controlar las compras, el consumo, permitiendo con esto fijar criterios y políticas que tienden a regular las cantidades máximas y mínimas que se requieren, los plazos de aprovisionamiento, los puntos de pedido, siempre buscando la mayor rentabilidad para la compañía y la optimización de los procesos de producción.
        p Al establecer un sistema de gestión de inventarios, se busca equilibrar el riesgo de quedarse sin inventarios y almacenar una cantidad excesiva de inventario no operativo que afecte la caja y la rentabilidad de la compañía. Para lograr esto, es importante conocer las variables internas y externas de la empresa, el comportamiento histórico de los inventarios, los tiempos de entrega de los proveedores, el embalaje y distribución, el comportamiento del mercado, el tiempo de producción y la forma de distribución y pago de los clientes. Todo esto con el fin de equilibrar los procesos que integran la cadena productiva.
      .col-lg-4.col-8: img(src='@/assets/curso/temas/tema7/1.png', alt='')
    .titulo-icono.mb-4
      .titulo-icono__texto: h4.text-white.mb-0 Operatividad de un sistema de inventarios
    p.mb-5(data-aos='fade-right') Las actividades de un sistema de gestión de inventarios son actividades importantes en la administración de los recursos almacenados, donde tienen una naturaleza de transformación y organización dentro de una empresa manufacturera. 
      br
      br
      span.color-acento-contenido.fw-bold Dichas actividades dependen del proceso donde se realizarán:
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #F5D2D9 ").h-100
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema7/2.svg' alt='AvatarTop')
          h5.text-center Montajes
          p.text-center Es donde se determina el artículo a producir con la cantidad y la manera de almacenar. 
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #F5D2D9 ").h-100
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema7/3.svg' alt='AvatarTop')
          h5.text-center Ensamble
          p.text-center Por medio del proceso productivo se integran las materias primas e insumos (almacenados en el inventario), donde se crea el producto final.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #F5D2D9 ").h-100
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema7/4.svg' alt='AvatarTop')
          h5.text-center Producción
          p.text-center  De manera anticipada se adquieren materias primas, donde son procesadas por personal operativo, el cual lo transforma creando un producto final, a través del cual se busca el lucro de la organización. 
    p.mb-5(data-aos='fade-right') Partiendo de lo anterior, la administración de inventarios es creada para ordenar y producir las unidades de producto final que se realizaron con la solicitud de materias primas e insumos, donde el conjunto de estos artículos provisionados, son la clave de un proceso productivo que tiene inventarios en la entrada, el proceso y salida del ciclo de producción; lo cual se representa en la siguiente infografía: 
    TabsA.color-acento-botones.mb-5
      .tarjeta.p-4(titulo="Inventario de entrada " style="background-color: #F5E0E4")
        .row.justify-content-center.align-items-center
          .col-lg-9.mb-lg-0.mb-3
            h4 Inventario de entrada 
            p Está representado en todos los insumos o materias primas que se requiere para la creación de un producto.
          .col-lg-3.col-8: img(src='@/assets/curso/temas/tema7/5.svg', alt='')
      .tarjeta.p-4(titulo="Inventario en proceso" style="background-color: #F5E0E4")
        .row.justify-content-center.align-items-center
          .col-lg-9.mb-lg-0.mb-3
            h4 Inventario en proceso
            p La integración de insumos y materias primas (proceso productivo) para la creación del artículo o producto, donde es procesado por máquinas y mano de obra operativa. 
          .col-lg-3.col-8: img(src='@/assets/curso/temas/tema7/6.svg', alt='')
      .tarjeta.p-4(titulo="Inventario de salida" style="background-color: #F5E0E4")
        .row.justify-content-center.align-items-center
          .col-lg-9.mb-lg-0.mb-3
            h4 Inventario de salida
            p Después de la integración, transformación y revisiones de calidad, tenemos como resultado un producto terminado listo para la venta. (Inventario de producto terminado).
          .col-lg-3.col-8: img(src='@/assets/curso/temas/tema7/7.svg', alt='')
    Separador|
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 7.1 Tipos de inventarios 
    p.mb-5(data-aos='fade-right') Determinar la clasificación de productos y la viabilidad del almacenamiento de inventarios depende de sus parámetros, así como de sus características físicas y operativas. Por lo tanto, es posible clasificar los inventarios en: 
    .bg-middle.p-5.pb-0.mb-5.mn
      .contenido
        .row.justify-content-center
          .col-lg-3.mb-lg-0.mb-4.col-6
            img(src='@/assets/curso/temas/tema7/8.png', alt='' )
          .col-lg-9
            .bg-white.mx-2.p-5.mb-3
              SlyderE(indicadores="derecha")
                .row.justify-content-center.mb-5
                  .col-lg-6.mb-lg-0.mb-3
                    h4
                      span.color-acento-contenido Inventario de materias primas e insumos 
                    p Son aquellos elementos incluidos para la manufactura del producto, lo cual es incorporado, contabilizados e identificados para la integración al ensamble y así como resultado obtener producto final.
                  .col-lg-6.col-8: img(src='@/assets/curso/temas/tema7/9.png', alt='')
                .row.justify-content-center.mb-5
                  .col-lg-6.mb-lg-0.mb-3
                    h4
                      span.color-acento-contenido Inventarios de producto semielaborado
                    p Dentro de las empresas de manufactura, se encuentra el producto que debe pasar por diferentes procesos o plantas de producción previamente al proceso de terminación, lo cual debe ser contabilizado, ejemplo pasar de corte a confección; donde el producto solo se ha cortado, pero se debe tener en cuenta las unidades a procesar para el siguiente nivel que es confección y así responder por un inventario en proceso.
                  .col-lg-6.col-8: img(src='@/assets/curso/temas/tema7/10.png', alt='')
                .row.justify-content-center.mb-5
                  .col-lg-6.mb-lg-0.mb-3
                    h4
                      span.color-acento-contenido Inventarios de producto terminado
                    p Cuando se tiene las unidades de producto terminado, estas deben ser contadas y verificadas para entrega, según el requerimiento inicial, desde la planeación y continuar su curso a la parte logística.
                  .col-lg-6.col-8: img(src='@/assets/curso/temas/tema7/11.png', alt='')
                .row.justify-content-center.mb-5
                  .col-lg-6.mb-lg-0.mb-3
                    h4
                      span.color-acento-contenido Inventarios de material empaque y embalaje (logístico)
                    p Después de tener el producto terminado, es necesario realiza proceso de empaque, etiquetado y puesta de códigos de barras; donde se identificará la descripción de talla color para alistar los pedidos, a donde se realizarán los debidos despachos según los requerimientos comerciales a los puntos de ventas.
                  .col-lg-6.col-8: img(src='@/assets/curso/temas/tema7/12.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p Existen dos comportamientos en los sistemas de inventarios, es importante definirlos para contemplar su análisis dentro de un plano gráfico:
        ol.lista-ol--cuadro
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color: #9B1F36 ")
              span 1
            p.mb-0 #[b Sistema P:] se define con el concepto de periodo en la línea de tiempo, el cual tienen una variación dependiendo el nivel de inventario según la demanda proyectada.
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color: #9B1F36 ")
              span 2
            p.mb-0 #[b Sistema Q:] se identifica por el valor económico del tamaño de las unidades producidas (lote), que se produce de acuerdo con el nivel de inventario que se tenga de reserva.
        p Los anteriores sistemas dan lugar a dos modelos de inventarios: 
        ol.lista-ol--cuadro
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color: #9B1F36 ")
              span 1
            p.mb-0 #[b Determinísticos:] basados en la demanda del producto y el plazo de entrega es constante y conocido, además el precio por unidad es constante e independiente del tamaño del pedido y del nivel de inventarios. Las entradas a bodega deben ser por lotes o pedidos constantes, igual que el costo por pedir.
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color: #9B1F36 ")
              span 2
            p.mb-0 #[b Probabilísticos:] en este modelo la demanda se conoce como una probabilidad.
      .col-lg-5.col-8: img(src='@/assets/curso/temas/tema7/13.png', alt='')
    Separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 7.2 Métodos de inventarios
    p A continuación, se evidenciarán los métodos y modelos de sistemas de inventarios más comunes:
    .row.justify-content-center.mb-5
      .col-lg-5.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema7/14.png', alt='')
      .col-lg-7
        AcordionA.icon.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--red")
          div(titulo="Método FIFO o PEPS")
            p Se basa en el concepto que la primera mercancía que llega es la primera que debe salir en el proceso, su adaptación al mercado se emplea en la valoración de costos recientes.
          div(titulo="Método LIFO o UEPS")
            p Especifica que las últimas unidades en entrar al inventario deben ser las primeras en salir, la ventaja que esto proporciona es que al almacenar unidades cuando no tienen un precio constante debido al alza de las monedas o la inflación estas pueden mantener un valor estable dentro del mercado. 
          div(titulo="Método del costo promedio aritmético ")
            p Como resultado se tiene la operación aritmética media, donde los precios unitarios de los artículos se representan al costo promedio, este se calcula dividiendo el total acumulado de la compra de los productos, entre la cantidad de unidades adquiridas, donde evaluamos el costo de las ventas al precio unitario del inventario final.
          div(titulo="Método del costo promedio móvil o del saldo")
            p Al calcular el valor de los productos de acuerdo con las variaciones producidas por las compras y ventas obtenidas, calculando así promedios móviles o sucesivos.
    .row.justify-content-center.mb-4
      .col-lg-7.mb-lg-0.mb-3
        AcordionA.icon.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--red")
          div(titulo="Método del costo básico")
            p Este método se atribuyen valores fijos a las existencias mínimas, este método es bastante parecido al LIFO con la diferencia de que se aplica solamente a la cantidad de inventario mínimo.
          div(titulo="Método del precio de venta al detal")
            p Permite la estimación de inventarios por periodos con la frecuencia que se desee o de acuerdo con el comportamiento de la temporada. El inventario físico se practicará, basándose en los precios de venta marcados en los artículos.
          div(titulo="Método de costo de mercado o el más bajo")
            p Se toma como base el precio inferior de las existencias, manteniendo el principio contable del conservatismo el cual no anticipa beneficios y prevé posibles pérdidas.
      .col-lg-5.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema7/15.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-8
        .tarjeta.color-secundario.p-3.mb-4
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema6/18.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Métodos de Sistemas de Inventarios
                  p.mb-0.text-small Para ampliar los conceptos sobre los métodos mencionados, consulte los ejemplos que encuentra en el documento.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/metodos_sistemas_inventarios.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    .titulo-icono.mb-4
      .titulo-icono__texto: h4.text-white.mb-0 Tipos de sistemas de inventarios
    p.mb-5(data-aos='fade-right') Los sistemas de modelos de inventarios son un conjunto de normas y políticas con procedimientos específicos aplicados al control de materiales y productos dentro de una compañía. El objetivo de estos sistemas es ordenar los pedidos y la recepción de materiales, determinar el tamaño de cada pedido y mantener actualizadas las órdenes de información con los requerimientos de materiales respectivos. Además, se dividen así:
    .bg-middle.p-5.pb-0.mb-5.mn
      .contenido
        .row.justify-content-center
          .col-lg-3.mb-lg-0.mb-4.col-6
            img(src='@/assets/curso/temas/tema7/16.png', alt='' )
          .col-lg-9
            .bg-white.mx-2.p-5.mb-3
              SlyderE(indicadores="derecha")
                .row.justify-content-center.mb-5
                  .col-lg-6.mb-lg-0.mb-3
                    h4
                      span.color-acento-contenido Inventario cíclico
                    p  Los inventarios que requieren seguimiento y se ajustan a las necesidades de planificación de la compañía deben almacenarse adecuadamente para garantizar un suministro constante para la transformación manufacturera.
                  .col-lg-6.col-8: img(src='@/assets/curso/temas/tema7/17.svg', alt='')
                .row.justify-content-center.mb-5
                  .col-lg-6.mb-lg-0.mb-3
                    h4
                      span.color-acento-contenido Inventarios estacionales
                    p Los inventarios se usan en temporadas específicas para evitar la producción continua y varían según la demanda de cada temporada. Por ejemplo, durante la temporada de inicio del año escolar, solo se necesitan materiales de tela escolares al inicio del año. Es importante considerar el valor de la demanda al comienzo del año.
                  .col-lg-6.col-8: img(src='@/assets/curso/temas/tema7/18.svg', alt='')
                .row.justify-content-center.mb-5
                  .col-lg-6.mb-lg-0.mb-3
                    h4
                      span.color-acento-contenido Inventarios de seguridad
                    p Los inventarios de seguridad se implementan para prevenir escasez de materias primas y problemas en el transporte, lo que podría interrumpir la manufactura y la entrega de productos finales. Son comúnmente utilizados para suministros mecánicos, con el fin de atender averías de forma rápida y no afectar la producción.
                  .col-lg-6.col-8: img(src='@/assets/curso/temas/tema7/19.svg', alt='')
                .row.justify-content-center.mb-5
                  .col-lg-6.mb-lg-0.mb-3
                    h4
                      span.color-acento-contenido Inventarios especulativos
                    p Los inventarios especulativos tienen como objeto minimizar el riesgo de alzas en los precios no previstas como lo pueden ser una alta inflación en un país o un costo superior al de almacenar los mismos inventarios. 
                  .col-lg-6.col-8: img(src='@/assets/curso/temas/tema7/20.svg', alt='')
                .row.justify-content-center.mb-5
                  .col-lg-6.mb-lg-0.mb-3
                    h4
                      span.color-acento-contenido Inventarios de mercadería
                    p Este tipo de inventario se utilizan con el fin de mantener #[em stock] de inventarios para la venta en el caso que los productos que ofrecemos se venden permanentemente, lo cuales se tiene almacenados como inventarios de respaldo a las ventas; donde mantener cantidades en almacenamiento agilizan el proceso de ventas y facilitan el cumplimiento de las órdenes de compra de los clientes.
                  .col-lg-6.col-8: img(src='@/assets/curso/temas/tema7/21.svg', alt='')
    .titulo-icono.mb-4
      .titulo-icono__texto: h4.text-white.mb-0 Finalidad de los tipos de inventarios
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        p Los inventarios permiten que las empresas tengan un #[em stock] y así evitar el desabastecimiento de productos, por lo tanto, su finalidad se traduce en: 
        h4: span.color-acento-contenido Rentabilidad y productividad
        p Son dos beneficios importantes que se derivan de una adecuada gestión de materiales en una empresa. Al cubrir eficientemente las necesidades de materiales para la producción o manufactura, se pueden alcanzar los objetivos de abastecimiento de bienes y materiales. Esto facilita la creación de productos que satisfagan las necesidades y requerimientos de los clientes, lo que a su vez contribuye a mejorar la rentabilidad y la productividad de la empresa.
      .col-lg-4.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema7/22.png', alt='')
      .col-lg-4
        h4 Contabilidad
        p Mantener el inventario contabilizado y actualizado, registrando todos los movimientos de manera periódica a través del sistema de inventarios que más se ajuste a los requerimientos de la compañía.
        .cajon.color-azul.p-4.mb-4
          p.mb-0 Observe el video que se encuentra en el material complementario “Introducción a la administración de inventarios” allí encontrará la explicación de manera creativa sobre la gestión de inventarios y los porcentajes para mantener un inventario o almacenamiento. 
    Separador 
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 7.3 Clasificación de inventarios
    .row.justify-content-center.mb-5.g-0
      .col-lg-4: img(src='@/assets/curso/temas/tema7/23.png', alt='')
      .col-lg-8
        .p-5(style="background-color: #D2E1F1").h-100.d-flex.align-items-center
          p.mb-0 Es fundamental que todas las empresas tengan un control efectivo de sus inventarios, ya que esto les permite discriminar los diferentes tipos de materiales, insumos, repuestos, entre otros, según sus características. Con el fin de facilitar este control riguroso, existen diversas herramientas y técnicas, como la clasificación ABC y la clasificación según la demanda, entre otras.
    .titulo-icono.mb-4
      .titulo-icono__texto: h4.text-white.mb-0 Clasificación ABC
    p.mb-5(data-aos='fade-right') Esta metodología de clasificación funciona por medio de la segmentación de los productos donde tienen unos criterios como indicadores de importancia de las solicitudes a proveedores y el costo de adquirir estos insumos o en su caso el costo de mantener este inventario almacenado (ver figura 7).
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 7.
      span Clasificación de los inventarios ABC
    .row.justify-content-center.mb-5
      .col-lg-8: img(src='@/assets/curso/temas/tema7/24.svg', alt='La figura explica la clasificación ABC de inventarios en tres categorías: A, B y C. La categoría A comprende productos de alto valor y alto flujo de inventario, con análisis comercial detallado y registros actualizados. La categoría B incluye mercancías con ventas moderadas pero alta rotación, requiriendo mantenimiento y atención. La categoría C abarca productos de baja rotación debido a bajas ventas, con énfasis en simplificar el control de costos e impulsar la rotación de inventarios.') 
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p Con el fin de establecer los niveles de importancia se podría tener en cuenta los siguientes factores:
        .p-3(style="background-color: #F5E6E9 ").mb-4
          .row.justify-content-center.aling-items-center
            .col-6.mb-lg-0.mb-3
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-tshirt(style="color: #9B1F36 ")
                  p.mb-0 Costos unitarios de compra.

                li.d-flex
                  i.fas.fa-tshirt(style="color: #9B1F36 ")
                  p.mb-0 Ventas anuales de productos. 

                li.d-flex
                  i.fas.fa-tshirt(style="color: #9B1F36 ")
                  p.mb-0 Oferta y demanda de los productos. 
            .col-6.mb-lg-0.mb-3
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-tshirt(style="color: #9B1F36 ")
                  p.mb-0 Rendimiento y nivel de respuesta en la entrega de pedidos por los proveedores.
                li.d-flex
                  i.fas.fa-tshirt(style="color: #9B1F36 ")
                  p.mb-0 Aliados estratégicos en los proveedores.
        p La figura anterior ilustra cómo se puede determinar cuáles son los artículos de mayor valor en el inventario, lo que optimiza la gestión administrativa y mejora la toma de decisiones. Una herramienta muy útil en este proceso son los diagramas de Pareto, que han demostrado ser muy efectivos para concentrar la planeación y proyección de la implementación en las causas más importantes de lo que se quiere controlar y mejorar. Gracias a su utilidad, esta herramienta ha permitido establecer metas claras y objetivos de gestión, lo que ha llevado al éxito en la gestión de inventarios.
        .titulo-icono.mb-4
          .titulo-icono__texto: h4.text-white.mb-0 Clasificación según la demanda
        p Es un método para clasificar los inventarios en función de la demanda que tienen los clientes por los productos. Este enfoque se basa en un estudio comercial que define el comportamiento del producto en el mercado según los resultados de un estudio de mercadeo.
        .p-3(style="background-color: #F5E6E9 ").mb-4
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-tshirt(style="color: #9B1F36 ")
              p.mb-0 #[span.color-acento-contenido.fw-bold Demanda independiente:] se determina directamente por el comportamiento del mercado, analizando datos históricos, de los productos vendidos o facturados como respuesta al comportamiento de los clientes.
            li.d-flex
              i.fas.fa-tshirt(style="color: #9B1F36 ")
              p.mb-0 #[span.color-acento-contenido.fw-bold Demanda dependiente:] se relaciona de manera directa con los insumos almacenados en los inventarios, en estos no se mantienen inventarios de productos terminados, porque depende de algunos proveedores para culminar los procesos, hasta obtener el producto final para realizar su respectiva comercialización.
      .col-lg-4.col-8: img(src='@/assets/curso/temas/tema7/25.png', alt='')
    .titulo-icono.mb-4
        .titulo-icono__texto: h4.text-white.mb-0 Lote óptimo
    p Este método procura calcular las unidades óptimas dentro de un lote de producción, calculando de manera premeditada los costos de gestión y mantenimiento mínimos, de acuerdo con el flujo de unidades vendidas. El método se fundamenta en datos históricos o supuestos comportamientos a nivel de la experiencia del profesional encargado, donde inicialmente se tiene en cuenta el periodo de entrega en complemento al tiempo que transcurre entre la emisión de la orden de compra y recepción de la entrega del pedido, donde no se tiene en cuenta el #[em stock] del inventario ni beneficios o costos por el mantener un inventario almacenado.
      br
      br
      | #[span.color-acento-contenido.fw-bold Este método procura determinar el volumen óptimo de pedido que suponga unos costes de gestión totales mínimos], es decir, que la suma de los costes de pedido más los costes de mantenimiento, sea lo más baja posible (ver figura 8).
    .row.justify-content-center.mb-5
      .col-lg-8
        .tarjeta.bg-white.p-4
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 8.
            span  Ejemplo de lote óptimo
          img(src='@/assets/curso/temas/tema7/26.svg', alt='La figura muestra el lote óptimo, el cual busca calcular la cantidad óptima de unidades en un lote de producción. En esta figura se considera el tiempo de entrega y el periodo que transcurre desde la emisión de la orden de compra hasta la recepción del pedido. No se toman en cuenta el inventario en stock ni los beneficios o costos asociados con mantener un inventario almacenado. El objetivo es determinar el volumen de pedido que resulte en los costos totales más bajos, teniendo en cuenta tanto los costos de pedido como los costos de mantenimiento.')
    p.mb-5(data-aos='fade-right') Cuando se implementan o desarrollan las teorías planteadas por profesionales que tienen experiencia, la gráfica queda con la expresión de una sierra. El grafico, debe ser planteado por los periodos en que el producto tiene los comportamientos, bien sea por trimestres, semanas o meses.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p Al tener lotes con cantidades mínimas la expresión que arroja la gráfica es de mayor rotación de inventarios de salidas como de entradas de las unidades, cuando el lote es de cantidades grandes la expresión del grafico, es de movimientos lentos en las entradas y salidas de los reportes gráficos.
        .row.justify-content-center.mb-5.g-0
          .col-lg-6
            .p-5.border-3.h-100(style="background-color: #F5E6E9;border: 0.5px solid #9B1F36 ")
              h4 Las variables son:
              p #[b Q:] lote pedido.
                br
                |#[b Cad:] costo de adquisición. 
                br
                |#[b Cp:] costo de emisión del pedido.
                br
                |#[b V:] ventas Anuales.
                br
                |#[b CA:] costo de almacenamiento.
          .col-lg-6
            .p-5.border-3.h-100(style="background-color: #F5E6E9;border: 0.5px solid #9B1F36 ")
              h4 Cómo calcular costo de emisión del pedido:
              p CP= Cp *(V/Q)
                br
                |Cómo calcular Coste de almacenamiento:
                br
                |CA= Cad*( Q / 2 )
                br
                |Cómo calcular costos totales (CT):
                br
                |CT= V * P + Cp * (V /Q ) + Ca (Q /2)
                br
                |Cómo calcular Lote económico (Q*):
                br
                | Q* = √  Cp * V * 2 / Ca
      .col-lg-4.col-8: img(src='@/assets/curso/temas/tema7/27.png', alt='')
    .titulo-icono.mb-4
      .titulo-icono__texto: h4.text-white.mb-0 Punto de reorden
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema7/28.png', alt='')
      .col-lg-8 
        p Es un concepto utilizado en las compañías manufactureras para gestionar sus inventarios. Se refiere al nivel de existencias de un determinado material o artículo en el cual se debe hacer una solicitud de un nuevo pedido, ya sea porque se ha alcanzado el nivel máximo de existencias o porque se ha llegado al nivel mínimo de carencia.
          br
          br
          | Se tienen dos mecanismos de trabajo:
        .p-4(style="background-color:#D9F6F7 ")
          ul.lista-ul
            li.d-flex
              i.fas.fa-tshirt
              p.mb-0 #[b Por órdenes de pedidos:] el objetivo es tener controladas las unidades de las existencias para cubrir la demanda que pueda llegar a tenerse en un tiempo determinado, en atención a diversos pedidos.
            li.d-flex
              i.fas.fa-tshirt
              p.mb-0 #[b Resurtidos periódicos:] la mayoría de las empresas tiene este método de trabajo donde se tiene un control de unidades por periodos, no siempre se requieren de las mismas unidades durante todo el año, solo se requiere en un periodo determinado. 
    .titulo-icono.mb-4
      .titulo-icono__texto: h4.text-white.mb-0 Cantidad económica de pedidos
    p Una de las herramientas que se utiliza para determinar el monto óptimo de pedido para un artículo de inventario es el modelo de la cantidad económica de pedido (CEP). Tiene en cuenta los diferentes costos financieros y de operación, determinando el monto de pedido óptimo que minimice los costos de inventario de la empresa.
    .row.justify-content-center.mb-5.align-items-center
      .col-lg-8.mb-lg-0.mb-3
        p Se fundamenta en tres posibles escenarios:
        .p-4.mb-4(style="background-color: #D2E1F1")
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-tshirt(style="color: #9B1F36")
              p.mb-0 La empresa proyecta anualmente sus unidades a vender.
            li.d-flex
              i.fas.fa-tshirt(style="color: #9B1F36")
              p.mb-0 La frecuencia con que se utilizan los inventarios.
            li.d-flex
              i.fas.fa-tshirt(style="color: #9B1F36")
              p.mb-0 Calcula las cantidades a vender en los periodos de tiempo, y así mismo se surten nuevamente sin presentar faltas de inventarios o vacíos en las ventas por falta de unidades.
        p Las variables a tener estudiadas y monitoreadas son modelos de inventarios usados por la compañía, registros de costos de inventarios y método analítico que solo se adquiere por la experiencia profesional de inventarios y el comportamiento empresarial que es único dentro de cada compañía.
          br
          br
          | La representación del modelo grafico del CEP (cantidad económica de pedidos) (ver figura 9), se basa en determinar que la cantidad del pedido se mantenga con el costo mínimo total del inventario de la compañía. 
      .col-lg-4.col-8: img(src='@/assets/curso/temas/tema7/29.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .p-4(style="background-color: #F6F6F6")
          .titulo-sexto.color-acento-contenido
            h5 Figura 9. 
            span Representación gráfica CEP (Cantidad económica de pedidos)
          img(src='@/assets/curso/temas/tema7/30.svg', alt='La figura representa la curva de la cantidad económica de pedido, la cual considera los distintos costos financieros y operativos para determinar el monto óptimo de pedido que minimiza los costos de inventario de la empresa.')
      .col-lg-4
        .p-5.border-3(style="background-color: #F5E6E9;border: 0.5px solid #9B1F36 ")
          p #[b CT =] Costo Total.
            br
            |#[b CP =] Costo de pedido. 
            br
            |#[b P =] Costo por pedido. 
            br
            |#[b Q =] Cantidad pedida.
        .p-5.border-3(style="background-color: #F5E6E9;border: 0.5px solid #9B1F36 ")
          p #[b Cómo calcular el costo del Pedido:]
            br
            | U)/(C), donde U = uso durante el periodo y C = cantidad del pedido
            br
            | #[b Cómo calcular el costo del Pedido:]
            br
            | P*(U/Q).
            br
            | #[b Cómo calcular Costo de mantenimiento:]
            br
            | M*(Q/2).
            br
            | #[b Cómo calcular el costo total:]
            br
            | P*(U/Q) + (M*(Q/2) 
    .titulo-icono.mb-4
      .titulo-icono__texto: h4.text-white.mb-0 Inventario justo a tiempo
    p.mb-5(data-aos='fade-right') El inventario justo a tiempo es un método de gestión de inventarios que busca minimizar los costos asociados con el almacenamiento de inventario, al mismo tiempo que garantiza la disponibilidad de los materiales necesarios para la producción, en el siguiente video se profundiza más:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/XgmrdBWTDBs?si=NRu_223TQbYh6GtE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Inventario justo a tiempo
    p.mb-5(data-aos='fade-right') Las ideas mencionadas anteriormente son características importantes que deben ser consideradas en la implementación de un sistema de inventarios con niveles mínimos y máximos. Estos niveles de inventario establecen un punto de equilibrio para mantener ciclos de tiempo cortos desde el momento en que se recibe una orden de pedido hasta la entrega del producto al cliente, lo que permite responder en un límite de tiempo muy corto.
    Separador 
    #t_7_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 7.4 Flujo de inventarios temporales #[em (STOCK)]
    p.mb-5(data-aos='fade-right') El #[em stock] de inventarios esta dado a las existencias de unidades o mercancías que se almacenan, bien sea destinados a completar un producto o unidades que serán destinadas a un cliente por una venta realizada. Se consideran #[em stocks], los inventarios de materiales e insumos que se requieren para la producción manufacturera de un producto tales como telas, botones, hilos etc.
    .row.justify-content-center.mb-5.g-0
      .col-lg-4: img(src='@/assets/curso/temas/tema7/31.png', alt='')
      .col-lg-8
        .p-5(style="background-color: #D2E1F1").h-100.d-flex.align-items-center
          p.mb-0 En la gestión de inventarios, también se consideran los #[em stocks] en proceso, que incluyen las prendas que están siendo fabricadas en los módulos o líneas de producción, ya sea que estén por terminar la confección, que necesiten ser empacadas o que deban tener etiquetas agregadas. Asimismo, se debe considerar el producto terminado, que se almacena en un centro de distribución hasta que se realice el proceso de #[em packing] (alistamiento) de la orden de pedido del cliente. Posteriormente, se lleva a cabo el proceso logístico hasta la entrega al cliente y el proceso comercial de pago por adquirir el producto.
    .titulo-icono.mb-4
      .titulo-icono__texto: h4.text-white.mb-0 Control de #[em stock]
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p El control de inventarios #[span.color-acento-contenido.fw-bold es fundamental para determinar la cantidad óptima de artículos que se deben almacenar y para categorizarlos de manera ordenada en cada espacio de la compañía.] Esto implica ubicar los artículos en una unidad de suministros dentro de la empresa para facilitar su ubicación.
        .p-4(style="background-color: #D9F6F7")
          .row.justify-content-center.align-items-center
            .col-2: img(src='@/assets/curso/temas/tema7/32.svg', alt='')
            .col-lg-10: p Un buen análisis de la oferta y la demanda, así como los cálculos de costos, son variables primordiales para controlar y conocer en la planificación y ejecución de los procesos productivos. Esto permite tomar decisiones informadas, con el objetivo principal de ofrecer un nivel de servicio óptimo para las personas que componen el equipo de trabajo empresarial y para cumplir con los clientes. La figura 10  ilustra la relación entre estas variables
      .col-lg-4.col-8: img(src='@/assets/curso/temas/tema7/33.png', alt='')
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 10.
      span Diagrama de sistemas de control #[em stock]
    img.mb-5(src='@/assets/curso/temas/tema7/34.svg', alt='La figura representa un diagrama de sistemas de control de stock. Comienza con los sistemas de control de stock de inventario, las cantidades de pedidos, el stock de seguridad, el nivel de almacenamiento y el tiempo de entrega. Estos elementos conducen al sistema de equilibrio de almacenamiento.')
    .titulo-icono.mb-4
      .titulo-icono__texto: h4.text-white.mb-0 Inventarios de acuerdo con las órdenes de producción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        h5 
          span.color-acento-contenido  Es planteada por los gerentes de las compañías la siguiente pregunta: ¿Cuánto debe pedir la compañía y cuándo?

        p La planeación adoptada por la compañía suele incluir las referencias y las cantidades proyectadas para las ventas, lo que permite determinar el consumo de insumos y las herramientas necesarias para la ejecución de la colección en las plantas de producción. De esta manera, se pueden integrar los componentes de cada prenda y alcanzar el objetivo final de crear productos de óptima calidad con la cantidad adecuada de unidades para surtir los almacenes y generar ventas. La figura 11 ilustra este proceso.
      .col-lg-4.col-8: img(src='@/assets/curso/temas/tema7/35.png', alt='')
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 11.
      span Ejemplo de un esquema de departamentos y rotación de inventarios
    img(src='@/assets/curso/temas/tema7/36.svg', alt='La figura representa un esquema de departamentos y rotación de inventarios. Inicia con la gestión de información y desarrollo del diseño del producto, pasa por los proveedores de suministros y finaliza con el flujo de proceso del desarrollo del producto, integrándose a través de cada proceso productivo.').mb-5
    p.mb-5(data-aos='fade-right') En la figura anterior se muestra un ejemplo de esquema por departamentos, que ilustra cómo diferentes partes de la creación de una prenda manufacturada se integran desde el desarrollo del diseño hasta la entrega final del producto en las tiendas para su venta y la obtención de ganancias. Cada departamento desempeña un papel fundamental en el proceso productivo, lo que permite trabajar de manera ordenada y eficiente para cumplir con las tareas establecidas que son:
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta(style="background-color: #FFA884 ").p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema7/37.svg' alt='AvatarTop')
        h4.text-center  Proceso creativo 
        p.text-center En esta etapa se aprueba el presupuesto de consumo de materiales y costos estimados de inversión en materiales.
      .tarjeta(style="background-color: #FFA884 ").p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema7/38.svg' alt='AvatarTop')
        h4.text-center Desarrollo de patrones
        p.text-center Se envía el diseño al departamento de patronaje, donde se desarrollan los patrones para simular en el taller de muestras el proceso de confección y crear una muestra de cómo quedaría la prenda. Se realizan las recomendaciones pertinentes para la ejecución de la orden de producción.
      .tarjeta(style="background-color: #FFA884 ").p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema7/39.svg' alt='AvatarTop')
        h4.text-center Generación de orden de compra 
        p.text-center Se especifican los requerimientos de producción, como la cantidad de unidades a producir y en qué tallas. Se genera la orden de compra y se crea la orden de producción.
      .tarjeta(style="background-color: #FFA884 ").p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema7/40.svg' alt='AvatarTop')
        h4.text-center Gestión y control de insumos
        p.text-center El departamento de compras se encarga de la gestión y control de las unidades solicitadas de insumos y materias primas requeridas según el estudio del presupuesto desarrollado. Al llegar los insumos a la empresa, se inicia el proceso de cargue de los inventarios en las bodegas de suministros, donde se almacenan los inventarios iniciales.
      .tarjeta(style="background-color: #FFA884 ").p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema7/41.svg' alt='AvatarTop')
        h4.text-center Integración de los procesos
        p.text-center A medida que se van desarrollando el avance de entrega de los proveedores con la compañía, se van integrando los insumos y materias primas al proceso de producción. En cada uno de los procesos, estos se van integrando al producto final.
    p.mb-5(data-aos='fade-right') La producción de prendas de vestir es un proceso complejo que involucra diversas etapas, desde la adquisición de insumos hasta el almacenamiento y distribución de las prendas terminadas. Cada una de estas etapas requiere de un minucioso proceso de planificación y gestión de inventarios para asegurar la disponibilidad de los materiales y equipos necesarios, así como para garantizar la calidad de los productos finales. En este contexto, el método justo a tiempo se ha convertido en una estrategia clave para optimizar los procesos de producción y reducir los costos asociados al almacenamiento de inventario. En el siguiente video, se presentará una descripción detallada del proceso de producción de prendas de vestir, haciendo énfasis en la importancia del inventario justo a tiempo en cada una de sus etapas:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Jdc0DozHoE0?si=wTTd6s4E0go1G4J0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Ejemplo de tareas
    p.mb-5(data-aos='fade-right') La conclusión es que, una vez que los insumos llegan al centro de suministros, se convierten en inventarios iniciales. A medida que se entregan parcialmente los insumos según los requerimientos de cada una de las plantas de producción, se consideran inventarios en proceso. Finalmente, cuando las prendas terminadas llegan al centro de distribución y se realiza el proceso logístico, se convierten en inventario final. De esta forma, se puede tener un control y seguimiento eficiente de los inventarios, permitiendo una gestión adecuada de los recursos y una optimización de los procesos productivos.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .p-4(style="background-color: #D9F6F7").mb-3
          .row.justify-content-center.align-items-center
            .col-2: img(src='@/assets/curso/temas/tema7/42.svg', alt='')
            .col-lg-10: p Los inventarios solicitados según las órdenes de producción se generan desde el proceso de aprobación de los departamentos administrativos de la compañía. El departamento de compras se encarga de gestionar los requerimientos de acuerdo con el cargue de la creación de la prenda o producto a desarrollar.
        p Para optimizar la gestión de los inventarios, se utilizan herramientas de programación de #[em software] que permiten reservar los inventarios en caso de que se creen referencias que compartan insumos, evitando solicitudes dobles o que se crea que hay inventario disponible, pero este ya esté reservado para otras referencias. 
      .col-lg-4.col-8: img(src='@/assets/curso/temas/tema7/43.png', alt='')
    Separador
    #t_7_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 7.5 Costos de inventarios
    p Los costos de sostener y mantener los inventarios por almacenamiento y ordenamiento generan una sumatoria de costos y gastos, la cual será representada en la siguiente figura 12:
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 12.
      span Descripción gráfica de la clasificación de los costos de inventarios.
    .row.justify-content-center.mb-5
      .col-lg-8: img(src='@/assets/curso/temas/tema7/44.svg', alt='La figura muestra la descripción gráfica de la clasificación de los costos de inventario. Estos se dividen en diferentes categorías: los costos de hacer un pedido, que incluyen los costos de gestión y control; los costos y gastos de mantener un inventario, que engloban los costos de almacenamiento, inversión, seguros, pólizas, gastos de impuestos y costos de riesgo. Finalmente, se incluyen los costos de falta de existencias, que involucran los costos por daños a unidades, pérdida de ventas y pedidos pendientes.')
    p.mb-5(data-aos='fade-right') Se dará explicación a cada punto mencionado en la secuencia y caracterización de los costos de inventarios:
    .titulo-icono.mb-4
      .titulo-icono__texto: h4.text-white.mb-0 El costo de hacer pedidos
    p.mb-5(data-aos='fade-right') También conocido como costo de emisión de pedidos, se refiere a las acciones relacionadas con la adquisición de los suministros necesarios para la elaboración de los lotes de producción. Este costo incluye los gastos asociados con la gestión del pedido a través de los diferentes departamentos, así como el manejo de los materiales para la transmisión del pedido hasta su llegada a la bodega de suministros donde se debe procesar y suministrar.
    .tarjeta.bg-card.p-5.mb-5 
        LineaTiempoC.color-acento-contenido(text-small)
          .row(titulo="1")
            .col-md-8.mb-4.mb-md-0
              h4 El costo de hacer pedidos
              p También conocido como costo de emisión de pedidos, se refiere a las acciones relacionadas con la adquisición de los suministros necesarios para la elaboración de los lotes de producción. Este costo incluye los gastos asociados con la gestión del pedido a través de los diferentes departamentos, así como el manejo de los materiales para la transmisión del pedido hasta su llegada a la bodega de suministros donde se debe procesar y suministrar.
            .col-md-4: img(src='@/assets/curso/temas/tema7/45.png', alt='')
          .row(titulo="2")
            .col-md-8.mb-4.mb-md-0
              h4 El costo de almacenamiento
              p Se refiere a aquellos artículos cuyo comportamiento por periodos determinados está directamente relacionado con la cantidad promedio de insumos disponibles en la bodega de suministros. Los costos de espacio son generados por los metros de las bodegas donde se almacenan los inventarios o suministros, y se realiza una distribución de almacenamiento adecuada conforme a las recomendaciones de almacenamiento de los productos. El cálculo de costos está dado por la ocupación de la bodega, ya sea alquilada, en metros cuadrados o cúbicos por mes, o si la bodega es propia, de todas maneras hay costos asociados a su mantenimiento y uso.
            .col-md-4: img(src='@/assets/curso/temas/tema7/46.png', alt='')
          .row(titulo="3")
            .col-md-8.mb-4.mb-md-0
              h4 El costo de inversión u oportunidad
              p Tiene como propósito plantear una tasa promedio de recuperación de inversión y el tiempo en el cual esta retornará a la compañía para ser utilizada nuevamente como retorno de inversión.
            .col-md-4: img(src='@/assets/curso/temas/tema7/47.png', alt='')
          .row(titulo="4")
            .col-md-8.mb-4.mb-md-0
              h4 Gastos de seguros y pólizas
              p Se deben tomar las medidas suficientes que permitan minimizar riesgos como incendios y daños que puedan generar pérdidas enormes de unidades.
            .col-md-4: img(src='@/assets/curso/temas/tema7/48.png', alt='')
          .row(titulo="5")
            .col-md-8.mb-4.mb-md-0
              h4 Gastos por impuestos
              p Se debe asegurar una correcta política tributaria de la compañía que abarque desde la compra de la materia prima hasta la venta final y la contribución tributaria de los rendimientos de la actividad comercial.
            .col-md-4: img(src='@/assets/curso/temas/tema7/49.png', alt='')
          .row(titulo="6")
            .col-md-8.mb-4.mb-md-0
              h4 Los costos de riesgos por inventario
              p Se refieren a las pérdidas, daños o robos que pueden ocurrir debido a la falta de rotación de las unidades de inventario. Este problema puede ser especialmente grave en el caso de artículos con fechas de vencimiento o un ciclo de vida corto. Además, los costos asociados con la falta de existencias o daños en el almacenamiento en los puntos de venta pueden resultar en la cancelación de órdenes de compra y la pérdida de ingresos para la compañía, así como en clientes insatisfechos.
            .col-md-4: img(src='@/assets/curso/temas/tema7/50.png', alt='')
          .row(titulo="7")
            .col-md-8.mb-4.mb-md-0
              h4 El costo de los pedidos
              p Se refiere a los costos asociados con la solicitud de un producto por parte de un cliente, ya sea a través de una compra física o por otros medios. Si la empresa no tiene el producto en su inventario, será necesario traerlo de otro punto de venta o proveedor, lo que generará costos adicionales para la compañía.
            .col-md-4: img(src='@/assets/curso/temas/tema7/51.png', alt='')
    p.mb-5(data-aos='fade-right') La cantidad óptima del nivel de #[em stock] de inventarios se calcula buscando reducir el costo total de mantenimiento del inventario y determinando un modelo de cantidad económica sostenible para la empresa. Esto se hace a través del cálculo de la frecuencia de intervalos de inventario de acuerdo con la rotación de unidades por períodos determinados, como semanas, meses, trimestres o semestres del año.
    Separador 
    #t_7_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 7.6 Normas técnicas (método de valoración de inventarios)
    p.mb-5(data-aos='fade-right') Los métodos de valoración de inventarios están ligados a procesos contables, donde determina el valor del inventario total y al mismo tiempo el informe discriminando cada unidad que lo compone, su valor en pesos; donde aporta metodologías de rotación y cálculos de fluctuación para toma de decisiones frente a los inventarios obsoletos o sin uso alguno.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .titulo-icono.mb-4
          .titulo-icono__texto: h4.text-white.mb-0 Sistema de inventario periódico
        P El sistema de inventario periódico obliga a las compañías a realizar un conteo físico de los inventarios por períodos determinados por la misma compañía, según el sistema de inventario que maneje y la proyección de planeación para cada una de las fases del inventario.
        h5.text-center: span.color-acento-contenido Los métodos contables en los procesos de compras son los siguientes:
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta(style="background-color: #FFA884 ").p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/tema7/52.svg' alt='AvatarTop')
            h4.text-center  Compras en efectivo 
          .tarjeta(style="background-color: #FFA884 ").p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/tema7/53.svg' alt='AvatarTop')
            h4.text-center Cuentas por pagar  
          .tarjeta(style="background-color: #FFA884 ").p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/tema7/54.svg' alt='AvatarTop')
            h4.text-center Cuentas por cobrar  
          .tarjeta(style="background-color: #FFA884 ").p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/tema7/55.svg' alt='AvatarTop')
            h4.text-center Ventas  
          .tarjeta(style="background-color: #FFA884 ").p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src='@/assets/curso/temas/tema7/56.svg' alt='AvatarTop')
            h4.text-center Valoración de inventarios  
      .col-lg-4.col-8: img(src='@/assets/curso/temas/tema7/57.png', alt='')
    p.mb-5(data-aos='fade-right') Donde lo anteriormente mencionado entra en un proceso de informes financieros, en el cual se contemplan y reconocen los procedimientos contables relacionados con los estados de inventarios, así como la actualización y seguimiento de las inversiones realizadas en cada fase de los proyectos planteados.
    .row.justify-content-center.mb-5
      .col-lg-8
        .p-4(style="background-color: #A8F2F3").mb-3
            .row.justify-content-center.align-items-center
              .col-2: img(src='@/assets/curso/temas/tema7/58.svg', alt='')
              .col-lg-10: p Diríjase al material complementario y observe el video “Sistemas de inventarios permanente y periódico” y lea el artículo “Sistema del inventario periódico”  que explican de manera más amplia los sistemas de inventarios.
    .titulo-icono.mb-4
      .titulo-icono__texto: h4.text-white.mb-0 Sistema de inventario continuo
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p El sistema de inventario continuo implica la contabilización en tiempo real de las operaciones de compras o ventas mediante el sistema de inventario final, en comparación con los registros de conteo físico, donde se determinan los inventarios faltantes y las existencias, comparando la disponibilidad actual y reflejando los incrementos de inventario.
        .p-4(style="background-color: #D2E1F1 ")
          p.mb-0 El inventario continuo se utiliza para monitorear los costos que superan el incremento de valor promedio establecido según los datos históricos. Además, produce informes de manera oportuna para la toma de decisiones y evitar el desbordamiento de las unidades y tener un control adecuado de los espacios disponibles en la bodega de suministros.
      .col-lg-4.col-8: img(src='@/assets/curso/temas/tema7/59.png', alt='')
    h4.mb-5: span.color-acento-contenido Se recomienda tener tres variables muy controladas: 
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #F5D2D9 ").h-100
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema7/60.svg' alt='AvatarTop')
          h5.text-center Almacén o bodega de suministros
          p.text-center Donde se lleva un conteo del flujo de rotación que entra y sale y el saldo que se debe tener.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #F5D2D9 ").h-100
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema7/61.svg' alt='AvatarTop')
          h5.text-center Costo de ventas
          p.text-center Se debe tener control sobre la proyección establecida al inicio del proyecto y sobre el valor generado por las ventas y el flujo de caja dentro de los almacenes. Se debe asegurar el cumplimiento de la rotación del dinero en la empresa en dos factores: retorno de inversión y utilidades.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #F5D2D9 ").h-100
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema7/62.svg' alt='AvatarTop')
          h5.text-center Ventas 
          p.text-center Se manejan y su proceso de intercambio de un producto por dinero, generando flujo de caja.
    .p-5(style="background-color: #ECECEC ")
      .row.justify-content-center.align-items-center
        .col-lg-10
          h4: span.color-acento-contenido Por último, las ventajas de usar sistema de inventarios continuos son: 
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-tshirt(style="color: #9B1F36")
              p.mb-0 Permite obtener información de las ventas, donde por medio de transacciones de ventas se pueden desarrollar cálculos a la rotación de unidades vendidas.
            li.d-flex
              i.fas.fa-tshirt(style="color: #9B1F36")
              p.mb-0 Se puede tener un conteo de valor de utilidad o perdidas por baja rotación de inventarios por ventas bajas.
        .col-lg-2.col-8: img(src='@/assets/curso/temas/tema7/63.svg', alt='')

</template>

<script>
export default {
  name: 'Tema7',
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

<style lang="sass"></style>
