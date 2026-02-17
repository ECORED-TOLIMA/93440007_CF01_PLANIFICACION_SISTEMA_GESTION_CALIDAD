export default {
  global: {
    Name:
      'Direccionamiento estratégico del Sistema de Gestión de la Calidad NTC ISO 9001',
    Description:
      'El componente aborda la planificación estratégica del Sistema de Gestión de la Calidad conforme a la NTC ISO 9001. Presenta fundamentos conceptuales, lineamientos para la planificación, identificación de riesgos y oportunidades, formulación de políticas y objetivos de calidad, así como elementos para la implementación del sistema, orientados al fortalecimiento del direccionamiento estratégico organizacional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
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
        titulo: 'Fundamentos del Sistema de Gestión de la Calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos y principios de la calidad',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Conceptos y definiciones en la NTC ISO 9001:2015',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Enfoque basado en riesgos, oportunidades y partes interesadas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Ciclo PHVA en el Sistema de Gestión de la Calidad',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Planificación del Sistema de Gestión de la Calidad según la NTC ISO 9001',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Acciones para abordar riesgos y oportunidades (Numeral 6.1)',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Objetivos de calidad y planificación para lograrlos (Numeral 6.2)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Planificación de los cambios (Numeral 6.3)',
            hash: 't_2_3',
          },
        ],
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Planeación estratégica organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto de estrategia organizacional',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Concepto y etapas de la planeación estratégica',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Beneficios de la planeación estratégica',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Misión, visión y objetivos organizacionales',
            hash: 't_3_4',
          },
        ],
      },

      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Política y direccionamiento de la calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Directrices para la gestión de la calidad',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Política de calidad según la NTC ISO 9001',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Lineamientos para la formulación de objetivos de calidad',
            hash: 't_4_3',
          },
        ],
      },

      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Implementación del Sistema de Gestión de la Calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Responsabilidad y liderazgo de la dirección',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Elementos para la implementación del Sistema de Gestión de la Calidad',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Pasos para la implementación del Sistema de Gestión de la Calidad',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Formulación del plan estratégico para el SGC',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo:
              'Cronograma de actividades para la implementación del Sistema de Gestión de la Calidad',
            hash: 't_5_5',
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
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  // complementario: [
  //   {
  //     tema: '',
  //     referencia: '',
  //     tipo: 'Sitio web',
  //     link: '',
  //   },
  // ],
  glosario: [
    {
      termino: 'Acciones para abordar riesgos y oportunidades',
      significado:
        'Conjunto de medidas y estrategias que se implementan para minimizar riesgos y aprovechar oportunidades que puedan afectar el cumplimiento de los objetivos de calidad en una organización, según la NTC ISO 9001:2015.',
    },

    {
      termino: 'Ciclo PHVA',
      significado:
        'Modelo de gestión basado en las fases Planear, Hacer, Verificar y Actuar, utilizado para la mejora continua del Sistema de Gestión de la Calidad.',
    },

    {
      termino: 'Dirección',
      significado:
        'Órgano o conjunto de personas responsables de establecer la política, objetivos y liderazgo en la gestión de la calidad dentro de la organización.',
    },

    {
      termino: 'Enfoque basado en riesgos',
      significado:
        'Método que identifica, evalúa y gestiona riesgos y oportunidades para prevenir efectos adversos y mejorar los resultados del Sistema de Gestión de la Calidad.',
    },

    {
      termino: 'Misión',
      significado:
        'Declaración que describe el propósito fundamental de la organización, su razón de ser y los objetivos que busca cumplir.',
    },

    {
      termino: 'NTC ISO 9001:2015',
      significado:
        'Norma internacional que establece los requisitos para un Sistema de Gestión de la Calidad, enfocada en la satisfacción del cliente y la mejora continua.',
    },

    {
      termino: 'Objetivos de calidad',
      significado:
        'Metas específicas, medibles y alineadas con la política de calidad, diseñadas para mejorar continuamente los procesos y resultados de la organización.',
    },

    {
      termino: 'Partes interesadas',
      significado:
        'Personas, grupos u organizaciones que afectan o se ven afectadas por las actividades de la organización y su desempeño en la calidad.',
    },
    {
      termino: 'Planeación estratégica',
      significado:
        'Proceso de definición de estrategias y acciones que permiten a la organización alcanzar su misión, visión y objetivos a largo plazo.',
    },

    {
      termino: 'Política de calidad',
      significado:
        'Declaración formal de la dirección que establece el compromiso de la organización con la calidad, la mejora continua y la satisfacción del cliente.',
    },

    {
      termino: 'Plan estratégico',
      significado:
        'Documento que contiene los objetivos, estrategias, acciones y recursos necesarios para alcanzar la misión y visión de la organización.',
    },

    {
      termino: 'Riesgo',
      significado:
        'Posibilidad de que ocurra un evento que afecte negativamente el cumplimiento de los objetivos de calidad de la organización.',
    },

    {
      termino: 'Visión',
      significado:
        'Proyección futura que describe lo que la organización aspira a ser y alcanzar en el largo plazo.',
    },

    {
      termino: 'Sistema de Gestión de la Calidad (SGC)',
      significado:
        'Conjunto de políticas, procesos, procedimientos y recursos interrelacionados que una organización implementa para dirigir y controlar la calidad de sus productos, servicios y procesos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Abuhav, I. (2017). <em> ISO 9001:2015 – A complete guide to quality management systems</em>. Routledge / CRC Press.',
      link: '',
    },

    {
      referencia:
        'Buenos Negocios. (2013). <em> Implementar un sistema de calidad en 9 pasos</em>.',
      link: '',
    },

    {
      referencia:
        'Canela López, J. R. (2004). <em> La gestión por calidad total en la empresa moderna. Alfaomega</em>.',
      link: '',
    },

    {
      referencia:
        'Cantú Delgado, H. (1997). <em> Desarrollo de una cultura de calidad</em> (1.ª ed.). McGraw Hill.',
      link: '',
    },

    {
      referencia:
        'Carriel Palma, R. J., Barros Merizalde, C. K., & Fernández Flores, F. M. (2018). <em> Sistema de gestión y control de la calidad: Norma ISO 9001:2015</em>. Recimundo.',
      link:
        'https://www.recimundo.com/index.php/es/article/view/151?utm_source=chatgpt.com',
    },

    {
      referencia:
        'Chiavenato, I. (2001). <em> Administración: Proceso administrativo</em>. McGraw Hill.',
      link: '',
    },

    {
      referencia:
        'Deming, W. E. (s.f.). <em> Calidad, productividad y competitividad: La salida de la crisis</em>.',
      link: '',
    },

    {
      referencia:
        'Fred, R. (1997). <em> Conceptos de administración estratégica. Prentice Hall Hispanoamericana</em>.',
      link: '',
    },

    {
      referencia:
        'Geocities. (s.f.). <em> ISO 9000 para pequeñas y medianas empresas (pymes)<em>.',
      link: '',
    },

    {
      referencia:
        'Harrington, J., & Harrington, J. Jr. (1997). <em> Administración total del mejoramiento continuo</em>. McGraw Hill.',
      link: '',
    },

    {
      referencia:
        'International Organization for Standardization (ISO). (2015). <em> ISO 9001:2015 – Quality management systems – Requirements.</em> ISO.',
      link: '',
    },

    {
      referencia:
        'Maldonado, J. Á. (2015). <em> Fundamentos de calidad total</em>.',
      link: '',
    },

    {
      referencia:
        'Sánchez Azor, S. (2017). <em> Gestión de la calidad (ISO 9001/2015)</em>. Editorial Elearning, S.L.',
      link: '',
    },

    {
      referencia:
        'Serna Gómez, H. (2008). <em>Gerencia estratégica</em> (10.ª ed.). 3R Editores.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Alejandro Mantilla Cáceres',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Claudia Milena Hernández Naranjo',
          cargo: 'Asesora Pedagógica',
          centro:
            'Centro Industrial del Mantenimiento Integral - Regional Santander',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor Pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑADOR Y DESARROLLADOR DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
}
