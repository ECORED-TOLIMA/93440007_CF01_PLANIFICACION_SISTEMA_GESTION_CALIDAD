<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Política y direccionamiento de la calidad
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La política y el direccionamiento de la calidad constituyen elementos fundamentales dentro del Sistema de Gestión de la Calidad, ya que orientan la toma de decisiones, la planeación estratégica y la ejecución de los procesos organizacionales. Estos lineamientos permiten establecer el compromiso institucional con el cumplimiento de los requisitos aplicables, la satisfacción de las necesidades de los clientes y el mejoramiento continuo del desempeño organizacional.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-md-7.col-8.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema4/img02.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p(data-aos="fade-down") El direccionamiento de la calidad se fundamenta en la definición clara de principios, propósitos y objetivos que guían el desarrollo de las actividades, asegurando la coherencia entre la estrategia organizacional y la gestión de los procesos. En este sentido, la alta dirección desempeña un papel determinante al establecer las directrices que orientan la cultura organizacional hacia el enfoque al cliente, la gestión basada en procesos, la gestión del riesgo y la mejora continua.
        .cajon.cajon.C02.color-primario.p-4.mb-3.p-3
          p.mb-0(data-aos="fade-down") De acuerdo con la NTC ISO 9001 en su versión vigente, la política de calidad debe ser apropiada al propósito y contexto de la organización, proporcionar un marco de referencia para el establecimiento de los objetivos de calidad y promover el cumplimiento de los requisitos legales, reglamentarios y organizacionales. Asimismo, debe ser comunicada, comprendida y aplicada en todos los niveles de la organización, garantizando la participación activa del talento humano en el logro de los resultados previstos.
    .row.justify-content-center.mb-0
      .col.col-lg-10.order-lg-2.order-2
        .tarjeta.tarjeta--C01.p-4
          p.mb-0(data-aos="fade-down") El direccionamiento de la calidad permite articular la política organizacional con los planes estratégicos, facilitando la formulación de objetivos medibles, la asignación de recursos, el seguimiento del desempeño y la implementación de acciones de mejora que contribuyan a la sostenibilidad y competitividad institucional.
    separador 
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Directrices para la gestión de la calidad
    .row.justify-content-center.mb-4
      .col.col-lg-7.col-12.order-lg-1.order-2
        .row.justify-content-center
          .col.col-lg-2.col-md-7.col-auto.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema4/img03.svg', alt='Imagen decorativa')
          .col.col-lg-10.col-12.mb-4
            p.mb-0(data-aos="fade-down") Las directrices para la gestión de la calidad corresponden a las orientaciones establecidas por la organización para asegurar el cumplimiento de los requisitos del Sistema de Gestión de la Calidad y el logro de los resultados planificados. Estas directrices permiten definir la forma en que se desarrollan, controlan y mejoran los procesos, garantizando la coherencia entre la estrategia organizacional y las actividades operativas.
          .col.col-12
            p.mb-0(data-aos="fade-down") Dentro del marco de la NTC ISO 9001 en su versión vigente, las directrices de gestión de la calidad se sustentan en principios que orientan la toma de decisiones y fortalecen el desempeño institucional. Entre los principales lineamientos se encuentran:
      .col.col-lg-5.col-md-7.col-auto.mb-3.order-lg-2.order-1
        figure
          img(src='@/assets/curso/tema4/img04.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema4/img05.svg' alt='AvatarTop')
          h4.text-center Enfoque al cliente
          p Orientado a comprender y satisfacer las necesidades y expectativas de los usuarios y demás partes interesadas.
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema4/img06.svg' alt='AvatarTop')
          h4.text-center Liderazgo
          p Promueve el compromiso de la alta dirección en la definición de políticas, objetivos y recursos necesarios para el funcionamiento del sistema.
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema4/img07.svg' alt='AvatarTop')
          h4.text-center Participación del talento humano
          p Reconoce la importancia del trabajo colaborativo y el desarrollo de competencias para el cumplimiento de los procesos.
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema4/img08.svg' alt='AvatarTop')
          h4.text-center Gestión basada en procesos
          p Permite identificar, controlar y mejorar las actividades que generan valor dentro de la organización.
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema4/img09.svg' alt='AvatarTop')
          h4.text-center Mejora continua
          p Impulsa la evaluación permanente del desempeño organizacional y la implementación de acciones correctivas y preventivas.
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema4/img10.svg' alt='AvatarTop')
          h4.text-center Toma de decisiones basada en evidencias
          p Favorece el análisis de información confiable para orientar la gestión organizacional.
        .tarjeta.tarjeta--BG05.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema4/img11.svg' alt='AvatarTop')
          h4.text-center Gestión de las relaciones con las partes interesadas
          p Fortalece la articulación con proveedores, aliados estratégicos y demás actores que influyen en el desempeño institucional.
    .col.mb-0
      .tarjeta.tarjeta--C01.p-4
        p.mb-0(data-aos="fade-down") La aplicación de estas directrices permite a la organización estructurar un Sistema de Gestión de la Calidad sólido, alineado con el direccionamiento estratégico y orientado al cumplimiento de los requisitos normativos. Asimismo, facilita la optimización de los recursos, la estandarización de los procesos y el fortalecimiento de la cultura de calidad dentro de la organización.
    separador 
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Política de calidad según la NTC ISO 9001
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-2.col-md-7.col-8.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema4/img12.svg', alt='Imagen decorativa')
      .col.col-lg-10.col-12.order-lg-2.order-2
        p(data-aos="fade-down") La política de calidad corresponde a la declaración formal mediante la cual la alta dirección establece la orientación estratégica de la organización frente al Sistema de Gestión de la Calidad. Este documento define el compromiso institucional con el cumplimiento de los requisitos aplicables, la satisfacción de las necesidades del cliente y el mejoramiento continuo de los procesos.
        .cajon.cajon.C02.p-3
          p.mb-0(data-aos="fade-down") De acuerdo con la NTC ISO 9001 en su versión vigente, la política de calidad debe estar alineada con el contexto organizacional, el direccionamiento estratégico y los objetivos institucionales, además de ser comunicada, comprendida y aplicada en todos los niveles de la organización.
    p.mb-5(data-aos="fade-down") A continuación, se presentan los elementos que debe contener una política de calidad:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Elementos de la política de calidad según la NTC ISO 9001
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 40%") Elemento
                th(data-aos="fade-down")(style= "width: 60%") Descripción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Propósito organizacional
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Define la razón de ser de la organización y su orientación estratégica.
              tr
                td(data-aos="fade-down") Compromiso con el cliente
                td(data-aos="fade-down") Establece la intención de satisfacer necesidades y expectativas.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Cumplimiento de requisitos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Incluye el compromiso con requisitos legales, normativos y organizacionales.
              tr
                td(data-aos="fade-down") Mejora continua
                td(data-aos="fade-down") Evidencia la intención de optimizar el desempeño del sistema.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Marco para objetivos de calidad
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Sirve como base para la formulación de metas institucionales.
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-5.col-8.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema4/img13.png', alt='Imagen decorativa')
      .col.col-lg-7.order-lg-2.order-2
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--C01.p-3
              p.mb-3(data-aos="fade-down") Para la elaboración de la política de calidad, la organización puede considerar los siguientes lineamientos:
              .row.justify-content-center
                .col.col-lg-10
                  .tarjeta.tarjeta--blanca.px-3.py-2
                    p.text-bold(data-aos="fade-down") 
                    ol.lista-ol--cuadro.lista-ol.mb-0
                      li
                        .lista-ol--cuadro__vineta
                          span.text-bold 1
                        | Analizar el contexto organizacional y las partes interesadas.
                      li
                        .lista-ol--cuadro__vineta
                          span.text-bold 2
                        | Identificar el propósito y direccionamiento estratégico.
                      li
                        .lista-ol--cuadro__vineta
                          span.text-bold 3
                        | Establecer compromisos relacionados con la calidad del servicio o producto.
                      li
                        .lista-ol--cuadro__vineta
                          span.text-bold 4
                        | Garantizar coherencia con los objetivos organizacionales.
                      li
                        .lista-ol--cuadro__vineta
                          span.text-bold 5
                        | Comunicar la política a todo el personal y partes interesadas pertinentes.
    .row.justify-content-center.mb-4
      .col.col-lg-10
        p(data-aos="fade-down") Algunos ejemplos de políticas de calidad son los siguientes:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col.col-lg-9.position-relative
        .avatar
          figure
            img(src="@/assets/curso/tema4/img14.svg", alt="Imagen decorativa").img280
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema4/img15.svg", alt="Imagen decorativa").img100
            .col
              h4 Ejemplo 1. Servicios de formación
              p.mb-0 Ofrecer servicios de formación integral mediante programas pertinentes y de alta calidad, orientados al desarrollo de competencias laborales, garantizando la satisfacción de los usuarios, el cumplimiento de los requisitos normativos y el mejoramiento continuo de los procesos institucionales.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema4/img16.svg", alt="Imagen decorativa").img100
            .col
              h4 Ejemplo 2. Sector productivo
              p.mb-0 Fabricar productos que cumplan con estándares técnicos y requisitos del cliente, mediante procesos controlados, el fortalecimiento del talento humano, la innovación tecnológica y la mejora continua del Sistema de Gestión de la Calidad.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema4/img17.svg", alt="Imagen decorativa").img100
            .col
              h4 Ejemplo 3. Prestación de servicios
              p Prestar servicios oportunos y confiables, orientados a la satisfacción del cliente, mediante el cumplimiento de los requisitos legales, el desarrollo de procesos eficientes y la implementación de estrategias de mejora continua.
    p.mb-0(data-aos="fade-down") La formulación de la política de calidad constituye un elemento fundamental dentro del direccionamiento estratégico de la organización, ya que establece el marco de referencia para la definición de los objetivos de calidad y orienta la toma de decisiones institucionales. Asimismo, su adecuada comunicación, comprensión y aplicación en todos los niveles organizacionales favorece el fortalecimiento de la cultura de calidad, el cumplimiento de los requisitos normativos y el desarrollo de procesos orientados a la mejora continua.
    separador 
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Lineamientos para la formulación de objetivos de calidad
    p.mb-5(data-aos="fade-down") Los objetivos de calidad constituyen resultados específicos que la organización establece con el propósito de cumplir la política de calidad y orientar el desempeño del Sistema de Gestión de la Calidad. De acuerdo con la NTC ISO 9001 en su versión vigente, los objetivos deben ser coherentes con el direccionamiento estratégico, medibles y orientados al mejoramiento continuo de los procesos.
    .BG04.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema4/img18.png", alt="alt")
        .col-lg-8
          p.text-center La formulación de objetivos de calidad permite transformar las intenciones organizacionales en acciones concretas que facilitan la evaluación del desempeño institucional y la toma de decisiones basada en evidencias. Para su adecuada estructuración, la organización debe considerar los siguientes lineamientos:
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema4/img19.svg", alt="alt").img100.m-auto
              p Deben ser coherentes con la política de calidad.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema4/img20.svg", alt="alt").img100.m-auto
              p Deben ser medibles y permitir el seguimiento de su cumplimiento.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema4/img21.svg", alt="alt").img100.m-auto
              p Deben tener en cuenta los requisitos del cliente y de las partes interesadas.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema4/img22.svg", alt="alt").img100.m-auto
              p Deben ser comunicados y comprendidos dentro de la organización.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema4/img23.svg", alt="alt").img100.m-auto
              p Deben actualizarse cuando sea necesario.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema4/img24.svg", alt="alt").img100.m-auto
              p Deben contribuir al mejoramiento continuo del Sistema de Gestión de la Calidad.
    .row.justify-content-center.mb-5
      .col.col-lg-8.order-lg-2.order-2
        .tarjeta.tarjeta--C01.p-4
          p.mb-0(data-aos="fade-down") Con el fin de facilitar su formulación, es recomendable que los objetivos de calidad se estructuren considerando criterios que permitan evaluar su viabilidad y pertinencia organizacional.
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Elementos de la política de calidad según la NTC ISO 9001
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 40%") Criterio
                th(data-aos="fade-down")(style= "width: 60%") Descripción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Claridad
                td(data-aos="fade-down")(style="background-color: #F6F6F6") El objetivo debe expresar de manera precisa el resultado que se desea alcanzar.
              tr
                td(data-aos="fade-down") Medición
                td(data-aos="fade-down") Debe incluir indicadores que permitan evaluar el grado de cumplimiento.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Alcance
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Debe establecer el proceso, área o nivel organizacional al que aplica.
              tr
                td(data-aos="fade-down") Tiempo
                td(data-aos="fade-down") Debe definir un periodo determinado para su cumplimiento.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Viabilidad
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Debe considerar los recursos disponibles y la capacidad organizacional.
              tr
                td(data-aos="fade-down") Coherencia
                td(data-aos="fade-down") Debe alinearse con la política de calidad y el direccionamiento estratégico.
    .row.justify-content-center.mb-5
      .col.col-lg-10.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") Los objetivos de calidad pueden aplicarse en diferentes niveles organizacionales, tales como el nivel estratégico, táctico y operativo, lo que permite articular las acciones institucionales y facilitar el control de los resultados.
    .row.justify-content-center.mb-5
      .col.col-lg-6.order-lg-2.order-2
        .tarjeta.tarjeta--C01.p-4
          p.mb-0(data-aos="fade-down") Un ejemplo de objetivos de calidad corresponde al caso de una organización dedicada a la prestación de servicios de formación, la cual establece:
    .row.mb-5
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img25.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C07(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Incrementar el nivel de satisfacción de los usuarios en un porcentaje determinado durante un periodo establecido.
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img26.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C07(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Fortalecer las competencias del talento humano mediante programas de formación y actualización.
      .col.col-lg-3.col-12.col-lg.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img27.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C07(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Mejorar la eficiencia de los procesos institucionales mediante la implementación de acciones de mejora continua.
      .col.col-lg-3.col-12.col-lg.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img28.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C07(style= "width: 100%")
            .p-4(data-aos="fade-down")
              p.text-center Garantizar el cumplimiento de los requisitos normativos y reglamentarios aplicables a la organización.
    p.mb-0(data-aos="fade-down") La adecuada formulación y seguimiento de los objetivos de calidad permite a la organización evaluar su desempeño, identificar oportunidades de mejora y fortalecer la eficacia del Sistema de Gestión de la Calidad, contribuyendo al cumplimiento de los resultados estratégicos y a la satisfacción de las necesidades de las partes interesadas.

</template>

<script>
export default {
  name: 'Tema4',
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
