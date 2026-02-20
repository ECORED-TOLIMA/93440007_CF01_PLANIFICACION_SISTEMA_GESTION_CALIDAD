<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos del Sistema de Gestión de la Calidad
    p.mb-5(data-aos="fade-down") El Sistema de Gestión de la Calidad constituye un conjunto estructurado de elementos interrelacionados que permiten a las organizaciones dirigir, controlar y mejorar sus procesos con el propósito de satisfacer las necesidades y expectativas de los clientes y demás partes interesadas. Este sistema se fundamenta en principios que orientan la planificación, ejecución, evaluación y mejora continua de las actividades organizacionales, contribuyendo al logro de los objetivos estratégicos y al fortalecimiento del desempeño institucional.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-3.col-md-7.col-8.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema1/img01.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C02.color-primario.p-4.mb-3.p-3
          p.mb-0(data-aos="fade-down") La NTC ISO 9001:2015 establece un marco de referencia internacional que orienta a las organizaciones en la implementación de prácticas estandarizadas para garantizar la calidad de sus productos y servicios. Este modelo promueve una gestión basada en procesos, en la cual se identifican las entradas, actividades, responsables y resultados, permitiendo una mejor articulación entre las áreas y una mayor eficiencia en la operación.
        p.mb-0(data-aos="fade-down") El enfoque del Sistema de Gestión de la Calidad se centra en la generación de valor mediante la comprensión del contexto organizacional, el liderazgo de la alta dirección, la participación del talento humano y la toma de decisiones basada en evidencias. Asimismo, incorpora la gestión del riesgo como un elemento clave para anticipar situaciones que puedan afectar el cumplimiento de los objetivos, permitiendo establecer acciones preventivas y oportunidades de mejora.
    .row.justify-content-center.mb-0
      .col.col-lg-10.order-lg-2.order-2
        .tarjeta.tarjeta--C01.p-4
          p.mb-0(data-aos="fade-down") La adopción de estos fundamentos facilita la estandarización de procedimientos, el control de la información documentada, la evaluación del desempeño y la implementación de estrategias de mejora continua. De esta manera, el Sistema de Gestión de la Calidad se consolida como una herramienta estratégica que fortalece la competitividad, la confianza de los clientes y la sostenibilidad de las organizaciones en entornos dinámicos y cambiantes.
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Conceptos y principios de la calidad
    .row.justify-content-center.mb-4
      .col.col-lg-1.col-md-6.col-auto.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema1/img02.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2.mb-4
        p.mb-0(data-aos="fade-down") La calidad se comprende como el grado en que un conjunto de características inherentes de un producto o servicio cumple con los requisitos establecidos y satisface las necesidades y expectativas de los clientes y demás partes interesadas. En el contexto de los sistemas de gestión, la calidad no solo se relaciona con el resultado final, sino también con la forma en que se planifican, ejecutan, controlan y mejoran los procesos organizacionales.
      .col.col-lg-10.col-12.order-lg-2.order-2
        .cajon.cajon.C02.color-primario.p-4.mb-3.p-3
          p.mb-0(data-aos="fade-down") #[b La NTC ISO 9000:2015 establece los principios de gestión de la calidad que orientan la implementación y el mantenimiento del Sistema de Gestión de la Calidad. Estos principios proporcionan un marco conceptual que permite a las organizaciones mejorar su desempeño y fortalecer su capacidad para generar valor.]
    p.mb-5(data-aos="fade-down") Los principios de la gestión de la calidad son:
    .tarjeta.tarjeta--BG01.p-md-5.p-4.mb-5(data-aos="flip-up")
      SlyderA(tipo="b")
        .row.justify-content-center.p-4
          .col-lg-4.order-lg-1.order-2
            h4 Enfoque al cliente
            p La organización comprende las necesidades actuales y futuras de los clientes, busca satisfacer sus requisitos y procura superar sus expectativas. Este principio permite orientar los procesos hacia la generación de valor y el fortalecimiento de la confianza.
          .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img03.jpg', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-4.order-lg-1.order-2
            h4 Liderazgo
            p La alta dirección establece la unidad de propósito, la dirección estratégica y las condiciones necesarias para que el talento humano participe activamente en el logro de los objetivos organizacionales.
          .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img04.jpg', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-4.order-lg-1.order-2
            h4 Compromiso de las personas
            p El talento humano competente, empoderado y comprometido en todos los niveles constituye un factor esencial para mejorar la capacidad de la organización de generar y entregar valor.
          .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img05.jpg', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-4.order-lg-1.order-2
            h4 Enfoque basado en procesos
            p Los resultados consistentes y predecibles se alcanzan de manera más eficaz cuando las actividades se comprenden y gestionan como procesos interrelacionados que funcionan como un sistema coherente.
          .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img06.jpg', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-4.order-lg-1.order-2
            h4 Mejora
            p La organización mantiene un enfoque permanente hacia la mejora continua de sus procesos, productos y servicios, con el fin de fortalecer su desempeño y adaptarse a los cambios del entorno.
          .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img07.jpg', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-4.order-lg-1.order-2
            h4 Toma de decisiones basada en la evidencia
            p Las decisiones organizacionales se fundamentan en el análisis y evaluación de datos e información confiable, lo que facilita la reducción de la incertidumbre y el fortalecimiento de los resultados.
          .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img08.jpg', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-4.order-lg-1.order-2
            h4 Gestión de las relaciones
            p La organización gestiona sus relaciones con las partes interesadas, tales como proveedores, aliados estratégicos y clientes, con el fin de optimizar su desempeño y asegurar la sostenibilidad a largo plazo.
          .col-lg-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema1/img09.jpg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") La aplicación de estos principios permite consolidar una cultura organizacional orientada a la calidad, promoviendo la eficiencia, la innovación y la mejora continua, elementos fundamentales para el cumplimiento de los objetivos estratégicos y la satisfacción de las partes interesadas.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Conceptos y definiciones en la NTC ISO 9001:2015
    p.mb-4(data-aos="fade-down") La NTC ISO 9001:2015 establece un conjunto de conceptos y definiciones fundamentales que permiten comprender la estructura, el funcionamiento y los requisitos del Sistema de Gestión de la Calidad. Estos términos facilitan la interpretación adecuada de la norma y garantizan una aplicación coherente dentro de las organizaciones.
    p.mb-5(data-aos="fade-down") Entre los conceptos más relevantes se encuentran:
    .tarjeta.tarjeta--BG02.p-md-5.p-4.mb-5(data-aos="flip-down")
      .tarjeta.tarjeta--blanca.p-4.p-md-5
        PasosB.color-acento-botones 
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-2.order-2
              h4 Organización
              p Persona o grupo de personas que posee funciones, responsabilidades, autoridades y relaciones definidas para lograr sus objetivos. Puede incluir empresas, instituciones públicas, asociaciones o cualquier estructura que desarrolle actividades orientadas al cumplimiento de propósitos específicos.
            .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img10.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-2.order-2
              h4 Sistema de Gestión de la Calidad
              p Conjunto de elementos interrelacionados que permiten establecer políticas, objetivos y procesos enfocados en el cumplimiento de requisitos y en la mejora continua del desempeño organizacional.
            .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img11.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-2.order-2
              h4 Parte interesada
              p Persona u organización que puede afectar, verse afectada o percibirse afectada por las decisiones o actividades de la organización. Incluye clientes, proveedores, colaboradores, entes reguladores y comunidad, entre otros.
            .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img12.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-2.order-2
              h4 Requisito
              p Necesidad o expectativa establecida, generalmente implícita u obligatoria, que debe cumplirse para asegurar la conformidad de los productos, servicios o procesos.
            .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img13.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-2.order-2
              h4 Política de calidad
              p Intenciones y dirección estratégica de la organización relacionadas con la calidad, expresadas formalmente por la alta dirección y alineadas con los objetivos organizacionales.
            .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img14.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-2.order-2
              h4 Objetivo de calidad
              p Resultado que la organización busca alcanzar en relación con la calidad, el cual puede establecerse en niveles estratégicos, tácticos u operativos.
            .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img15.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-2.order-2
              h4 Proceso
              p Conjunto de actividades interrelacionadas que transforman elementos de entrada en resultados, permitiendo el desarrollo eficiente de los productos o servicios.
            .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img16.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-2.order-2
              h4 Riesgo
              p Efecto de la incertidumbre sobre los resultados esperados. Puede generar consecuencias positivas o negativas y requiere ser gestionado para fortalecer la toma de decisiones y la planificación organizacional.
            .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img17.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-2.order-2
              h4 Información documentada
              p Información que la organización debe controlar y mantener como evidencia del cumplimiento de los requisitos del Sistema de Gestión de la Calidad. Puede presentarse en diferentes formatos y medios.
            .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img18.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-2.order-2
              h4 Competencia
              p Capacidad demostrada para aplicar conocimientos, habilidades y actitudes con el fin de lograr los resultados previstos.
            .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img19.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-2.order-2
              h4 Auditoría
              p Proceso sistemático, independiente y documentado que permite obtener evidencias y evaluarlas objetivamente para determinar el grado de cumplimiento de los requisitos establecidos.
            .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img20.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-2.order-2
              h4 Conformidad y no conformidad
              p La conformidad corresponde al cumplimiento de un requisito, mientras que la no conformidad se presenta cuando dicho requisito no se satisface, lo que puede generar acciones correctivas orientadas a eliminar sus causas.
            .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema1/img21.png', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") El conocimiento y la apropiación de estos conceptos permite interpretar correctamente los lineamientos de la NTC ISO 9001:2015, facilitando la planificación, implementación, evaluación y mejora del Sistema de Gestión de la Calidad dentro de la organización.
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Enfoque basado en riesgos, oportunidades y partes interesadas
    p.mb-0(data-aos="fade-down") La NTC ISO 9001:2015 incorpora el enfoque basado en riesgos como un elemento fundamental para la planificación y operación del Sistema de Gestión de la Calidad. Este enfoque permite a las organizaciones anticipar situaciones que puedan afectar el logro de los objetivos, prevenir efectos no deseados y fortalecer la mejora continua de los procesos.
    .row.BG03.justify-content-center.align-items-center.pt-4.pb-4.mb-4
      .col.col-lg-4.col-md-7.col-8.order-lg-2.order-1.mb-3
        figure
          img(src='@/assets/curso/tema1/img22.png', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-1.order-2
        .cajon.cajon.C03.p-4.mb-3.p-3
          p.mb-0(data-aos="fade-down") El riesgo se entiende como el efecto de la incertidumbre sobre los resultados esperados, el cual puede generar consecuencias positivas o negativas. Por su parte, las oportunidades corresponden a circunstancias que favorecen el cumplimiento de los objetivos organizacionales y el fortalecimiento del desempeño institucional. La norma establece que la organización debe identificar, analizar y tratar tanto los riesgos como las oportunidades, con el fin de garantizar la eficacia del sistema de gestión.
        p.mb-0(data-aos="fade-down") Las partes interesadas son aquellas personas u organizaciones que pueden afectar, verse afectadas o percibirse afectadas por las decisiones y actividades de la organización. Estas incluyen clientes, proveedores, trabajadores, entes reguladores, socios estratégicos y la comunidad en general. La identificación y análisis de sus necesidades y expectativas permite orientar la planificación estratégica del Sistema de Gestión de la Calidad.
    .row.justify-content-center.mb-5
      .col.col-lg-10
        p.mb-0(data-aos="fade-down") El enfoque basado en riesgos integra la relación entre los riesgos, las oportunidades y las partes interesadas, orientando la toma de decisiones organizacionales hacia el cumplimiento de los objetivos estratégicos, como se representa a continuación:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Relación entre riesgos, oportunidades, partes interesadas y el logro de los objetivos estratégicos
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema1/img23.svg', alt='En la figura 1 se presenta la relación entre riesgos, oportunidades y partes interesadas alrededor del logro de los objetivos estratégicos ubicado en el centro, representando la interacción de estos elementos dentro del sistema de gestión de la calidad.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema1/img24.svg', alt='En la figura 1 se presenta la relación entre riesgos, oportunidades y partes interesadas alrededor del logro de los objetivos estratégicos ubicado en el centro, representando la interacción de estos elementos dentro del sistema de gestión de la calidad.')
    p(data-aos="fade-down") La gestión del riesgo dentro del Sistema de Gestión de la Calidad se desarrolla mediante un proceso sistemático que permite identificar, analizar y controlar los eventos que pueden impactar el desempeño organizacional. Este proceso comprende varias etapas que facilitan la toma de decisiones y el establecimiento de acciones preventivas y correctivas.
    p.mb-5(data-aos="fade-down") Las etapas principales de la gestión del riesgo son:
    .BG04.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema1/img30.png", alt="alt")
        .col-lg-8
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img25.svg", alt="alt").img100.m-auto
              p Identificación de riesgos potenciales que pueden afectar los procesos.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img26.svg", alt="alt").img100.m-auto
              p Análisis de las causas y consecuencias asociadas a los riesgos identificados.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img27.svg", alt="alt").img100.m-auto
              p Evaluación del nivel de impacto y probabilidad de ocurrencia.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img28.svg", alt="alt").img100.m-auto
              p Tratamiento del riesgo mediante la implementación de acciones para eliminarlo, reducirlo, compartirlo o aceptarlo.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema1/img29.svg", alt="alt").img100.m-auto
              p Seguimiento y control para verificar la eficacia de las acciones implementadas.
    p.mb-4(data-aos="fade-down") Este proceso contribuye al fortalecimiento de la planificación estratégica, la asignación adecuada de recursos y el mejoramiento continuo del Sistema de Gestión de la Calidad, como se presenta a continuación:
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-5.col-12.order-lg-2.order-2
        .cajon.C02.p-4.h-100.w-100
          ol.lista-ol--cuadro.lista-ol--separador
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Identificación
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Análisis
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Evaluación
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Tratamiento
            li
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Seguimiento del riesgo
      .col-lg-5.col-8.col-md-7.order-lg-1.order-1
        figure
          img(src='@/assets/curso/tema1/img31.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col.col-lg-10
        p.mb-0(data-aos="fade-down") La aplicación del enfoque basado en riesgos permite a la organización anticiparse a posibles desviaciones, fortalecer la toma de decisiones y garantizar el cumplimiento de los requisitos del cliente, los requisitos legales y los lineamientos estratégicos establecidos en la norma NTC ISO 9001.
    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Ciclo PHVA en el Sistema de Gestión de la Calidad
    p.mb-4(data-aos="fade-down") El ciclo PHVA, también conocido como ciclo de mejora continua o ciclo Deming, constituye un modelo de gestión que orienta la planificación, ejecución, seguimiento y mejora de los procesos organizacionales. Este enfoque es uno de los pilares de la Norma Técnica Colombiana NTC ISO 9001, ya que permite estructurar el Sistema de Gestión de la Calidad mediante una secuencia lógica que favorece el cumplimiento de los objetivos organizacionales y el mejoramiento permanente del desempeño.
    p.mb-5(data-aos="fade-down") El ciclo se representa de la siguiente manera:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Ciclo PHVA
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema1/img32.svg', alt='En la figura 2 se presenta el ciclo PHVA como un proceso de mejora continua compuesto por cuatro etapas: Planear, donde se definen objetivos y acciones; Hacer, que corresponde a la ejecución de lo planificado; Verificar, donde se evalúan los resultados; y Actuar, que implica la implementación de mejoras para reiniciar el ciclo.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema1/img33.svg', alt='En la figura 2 se presenta el ciclo PHVA como un proceso de mejora continua compuesto por cuatro etapas: Planear, donde se definen objetivos y acciones; Hacer, que corresponde a la ejecución de lo planificado; Verificar, donde se evalúan los resultados; y Actuar, que implica la implementación de mejoras para reiniciar el ciclo.')
    .row.justify-content-center.mb-4
      .col.col-lg-10
        p.text-center(data-aos="fade-down") A continuación, se describen las fases del ciclo con el fin de facilitar su comprensión y aplicación en el Sistema de Gestión de la Calidad:
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C02.p-4(data-aos="flip-up")
          .row.justify-content-center.align-items-center.g-0
            .col-lg-6.order-lg-2.order-2
              .tarjeta.clr--pink.p-4.rounded-0.h-100
                .tarjeta.bg-white.p-4
                  //- #t_1_4.titulo-segundo.color-acento-contenido.mb-4(data-aos="flip-up")
                  //-   h2 Pódcast
                  TarjetaAudio.color-acento-botones.mb-3(
                  texto="Pódcast"
                  :audio="require('@/assets/curso/audio/Podcast_CF01_93440007.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            .col-lg-6.col-8.col-md-7.order-lg-1.order-1
              figure
                img(src='@/assets/curso/tema1/img34.svg', alt='Imagen decorativa')
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
