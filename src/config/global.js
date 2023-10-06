export default {
  global: {
    componenteFormativo: 'Control de calidad e inventarios ',
    descripcionCurso:
      'La globalización y la creación de nuevos productos impulsan nuevos planes para la gestión de inventarios en compañías textileras. La gestión es crucial para controlar aspectos logísticos y requiere control y gestión de inventarios iniciales, en proceso y finales. Herramientas estadísticas y programas de mejora continua se utilizan para garantizar el cumplimiento de las especificaciones de calidad y se necesitan procedimientos para identificar errores y proponer acciones de mejora.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/a4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Calidad',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Enfoque de la calidad desde su entorno',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistema de Gestión de Calidad SGC',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'ISO 9000 Organización Internacional de Normalización',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Control de calidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Control estadístico de la calidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Gestión de inventarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Tipos de inventarios',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Métodos de inventarios',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Clasificación de inventarios',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: '7.4.	Flujo de inventarios temporales <em>(STOCK)</em>',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Costos de inventarios',
            hash: 't_7_5',
          },
          {
            numero: '7.6',
            titulo: 'Normas técnicas (método de valoración de inventarios)',
            hash: 't_7_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/922500_CF020_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Enfoque de la calidad desde su entorno',
      referencia: 'Salvador, S. (2015) <em>¿Qué es la calidad?</em>. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Qx80GpgUfag&feature=youtu.be',
    },
    {
      tema: 'Sistema de Gestión de Calidad SGC',
      referencia:
        'Virtual Training Lteam. (2016). <em>Beneficios de un sistema de Gestión de calidad.</em> YouTube. ',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=yOImNgNYoMg',
    },
    {
      tema: 'Sistema de Gestión de Calidad SGC',
      referencia:
        'Procem Consultores. (2019) <em>¿Qué son las Normas ISO?</em>. YouTube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=QrWsBj6ARG0',
    },
    {
      tema: 'Control de calidad ',
      referencia:
        'Gutiérrez Pulido, H. (2013). <em>Control estadístico de la calidad y Seis Sigma</em>.Tercera edición McGraw-Hill Interamericana.',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=280',
    },
    {
      tema: 'Control de calidad ',
      referencia:
        'Evans, J. R. & Lindsay, W. M. (2020). <em>Administración y control de la calidad. Cengage Learning.</em> ',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=10765      ',
    },
    {
      tema: 'Métodos de inventarios',
      referencia: 'SENA. (2021). <em>Métodos de sistemas de inventarios.</em> ',
      tipo: 'PDF',
      descarga: '/downloads/Anexo_01.pdf',
    },
    {
      tema: 'Finalidad de los tipos de inventarios',
      referencia:
        'Goal Project. (s.f.). <em>Introducción a la administración de inventarios.</em>  YouTube.  ',
      tipo: 'Video',
      link: 'https://youtu.be/eWULmSLfu3E  ',
    },
    {
      tema: 'Sistema de inventario periódico',
      referencia:
        'Contabilidad Más Excel. (2020). 20 <em>Qué son los Sistemas de Inventario Permanente y Periódico.</em> YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_TZp8zVILo0  ',
    },
    {
      tema: 'Sistema de inventario periódico',
      referencia:
        'FAEDIS. (s.f.). Unidad 2. <em>Sistema del inventario periódico. Universidad Militar Nueva Granada.</em> ',
      tipo: 'Página web ',
      link:
        'http://virtual.umng.edu.co/distancia/ecosistema/ovas/administracion_empresas/contabilidad_de_costos/unidad_2/medios/documentacion/p4h1.pdf  ',
    },
  ],
  glosario: [
    {
      termino: 'Anomalía',
      significado:
        'algo que se separa de lo normal, cambios que se desvían de lo esperado.',
    },
    {
      termino: 'Costo de venta',
      significado:
        'es lo que se invierte para hacer una venta representado en lo que se pagó para tener disponible el producto para la venta.',
    },
    {
      termino: 'Costos',
      significado:
        'el costo es el desembolso económico que se realiza para la producción de algún bien o la oferta de algún servicio. El costo incluye la compra de insumos, el pago de la mano de obra, los gastos en la producción y los gastos administrativos, entre otras actividades.',
    },
    {
      termino: 'Cuentas por cobrar',
      significado:
        'las cuentas por cobrar representan derechos de cobro que se espera recibir en efectivo. Las cuentas por cobrar representan sumas que adeudan las entidades a una empresa por la venta de productos y servicios.',
    },
    {
      termino: 'Cuentas por pagar',
      significado:
        'las cuentas por pagar representan la suma que se adeuda en una fecha específica por la compra de productos o servicios. Las cuentas por cobrar representan sumas que adeudan las entidades a una empresa por la venta de productos y servicios.',
    },
    {
      termino: 'Escrutinio',
      significado: 'examinar algo de manera minuciosa.',
    },
    {
      termino: 'Homologación',
      significado:
        'certificar que algo cumple unas normas o requisitos reglamentados.',
    },
    {
      termino: 'Inventario',
      significado:
        'el inventario es un conjunto de bienes en existencia destinados a realizar una operación, sea de compra, alquiler, venta, uso o transformación y de esta manera asegurar el servicio a los clientes internos y externos. Debe aparecer, contablemente, dentro del activo como un activo circulante.',
    },
    {
      termino: 'Lecciones aprendidas',
      significado:
        'conocimientos adquiridos sobre experiencias de procesos anteriores, a través de la reflexión y el análisis. Trata tanto de factores positivos como negativos.',
    },
    {
      termino: 'Materias primas',
      significado:
        'una materia prima es cualquier bien que se transforma a través de un proceso de producción para obtener un bien de consumo. Así pues, existen algunos bienes que no puedes ser utilizados directamente por los consumidores y que necesitan pasar por un proceso de producción para conseguir transformarlo en un producto.',
    },
    {
      termino: 'Mesura',
      significado:
        'prudencia y recato que se debe tener en diferentes situaciones.',
    },
    {
      termino: 'Orden de pedido',
      significado:
        'concepto de orden de pedido de un cliente. Una orden de compra o nota de pedido es un documento que un comprador entrega a un vendedor para solicitar ciertas mercaderías. En él se detalla la cantidad a comprar, el tipo de producto, el precio, las condiciones de pago y otros.',
    },
    {
      termino: 'Orden de producción',
      significado:
        'las órdenes de producción se usan para gestionar la conversión de los materiales adquiridos en productos manufacturados. Las órdenes de producción dirigen el trabajo por los distintos centros de trabajo o de máquina de la planta.',
    },
    {
      termino: 'Pragmático',
      significado:
        'se le da prioridad a lo práctico, y menos a la teoría. Lo útil es lo más importante.',
    },
    {
      termino: 'Premisa',
      significado:
        'afirmación que se hace de algo, y que sirve como base de partida, para utilizarse en una actividad posterior.',
    },
    {
      termino: 'Rigor',
      significado:
        'precisión, exactitud, firmeza, muy poca tolerancia, exigencia alta.',
    },
    {
      termino: 'Simetría',
      significado:
        'se refiere a medidas, tamaños y posiciones. que tienen corresponsabilidad con otras partes del todo',
    },
    {
      termino: 'Sinergia',
      significado: 'trabajar en conjunto, cooperación.',
    },
    {
      termino: '<em>Stock</em> inventario',
      significado:
        'el <em>stock</em> o inventario de existencias es el conjunto de materiales y/o mercancías que se almacenan, ya sean destinados a completar el proceso productivo o tengan como destino la venta al cliente.',
    },
    {
      termino: 'Ventas',
      significado:
        'ventas son las actividades realizadas para incentivar potenciales clientes a realizar una determinada compra. El concepto de ventas es muy amplio, pero básicamente consiste en el acto de negociación en el cual una parte es el vendedor y la otra el comprador.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alliot Group. (2013). <em>Niveles de Inventarios Adecuados.</em> FAEDIS. (2019). Unidad 3. Gestión de Inventarios. ',
      link:
        'http://virtual.umng.edu.co/distancia/ecosistema/ovas/administracion_empresas/logistica/unidad_3/DM.pdf',
    },
    {
      referencia:
        'Gutiérrez Pulido, H. (2020). <em>Calidad y productividad.</em> Quinta edición McGraw-Hill Interamericana',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=10411',
    },
    {
      referencia:
        'Martínez Robles, A. (2013). <em>Capítulo III Los Inventarios. Control de inventario con análisis de la demanda para la empresa “Sport B”.</em> [Tesis de grado] Oficina General del sistema de Bibliotecas UNMSM.',
      link:
        'https://sisbib.unmsm.edu.pe/bibvirtualdata/Tesis/Basic/martinez_ra/cap03.pdf',
    },

    {
      referencia:
        'Negocios, Marketing y Finanzas. (2019). <em>Tipos de inventarios.</em> yosoyempleo ',
      link: 'https://yosoyempleo.es/tipos-de-inventarios/',
    },
    {
      referencia:
        'Universidad Continental. (2019). ISO 9001: <em>¿Qué es y por qué es importante para la calidad educativa?</em> [Articulo Blog].  ',
      link:
        'https://blogs.ucontinental.edu.pe/iso-9001-que-es-y-por-que-es-importante-para-la-calidad-educativa/impacto-positivo/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ericka Alexandra Blanco Sánchez',
          cargo: 'Experto Temático',
          centro: 'Regional Antioquía - Diseño, confección y moda',
        },
        {
          nombre: 'Liliana María Ceballos Gutiérrez',
          cargo: 'Asesora Metodóloga Diseño y Desarrollo Curricular',
          centro: 'Regional Antioquía - Diseño, confección y moda',
        },
        {
          nombre: 'Víctor Manuel Isaza Córdoba',
          cargo: 'Diseño y Desarrollo Curricular',
          centro: 'Regional Antioquía - Diseño, confección y moda',
        },
        {
          nombre: 'Pedro Luis Sossa Ramírez',
          cargo: 'Diseño y Desarrollo Curricular',
          centro: 'Regional Antioquía - Diseño, confección y moda',
        },
        {
          nombre: 'María Inés Machado Lópe',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Vilma Lucia Perilla',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital – Centro de Gestión Industrial',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Revisor Metodológico y Pedagógico',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñador instruccional',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura.',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fabian Zarate',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres ',
          cargo: 'Storyboard e Ilustración ',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres ',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Mary Jeans Palacio ',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
