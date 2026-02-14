<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos="fade-down") Este componente presenta los aspectos fundamentales de la planificación estratégica del Sistema de Gestión de la Calidad, abordando los principios, conceptos y lineamientos establecidos en la NTC ISO 9001 que orientan el direccionamiento organizacional. Se enfoca en la comprensión de la planificación del sistema, la identificación de riesgos y oportunidades, y la formulación de políticas y objetivos de calidad alineados con el contexto institucional.
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-4.col-8.col-md-7.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/intro/img01.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-secundario.p-4.mb-3.p-3
          p.mb-0(data-aos="fade-down") El propósito de este componente es fortalecer las competencias relacionadas con la estructuración del Sistema de Gestión de la Calidad, reconociendo la importancia de la planeación estratégica, el liderazgo directivo y la implementación de procesos que contribuyan al mejoramiento continuo y al cumplimiento de los requisitos normativos. A través del análisis conceptual, el estudio de lineamientos técnicos y la aplicación de herramientas de planificación, se promueve una visión integral del funcionamiento del sistema dentro de la organización.
        p.mb-0(data-aos="fade-down") El desarrollo de los temas se realiza mediante un enfoque teórico-práctico que permite comprender los fundamentos de la gestión de la calidad, analizar los elementos del direccionamiento estratégico y formular planes orientados al fortalecimiento de los procesos organizacionales. De esta manera, se busca que el aprendiz adquiera capacidades para planificar e implementar estrategias que favorezcan la eficiencia, la toma de decisiones y la satisfacción de las partes interesadas.
    p.mb-5(data-aos="fade-down") Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center           
      .col.col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/721LyzzIUGQ?si=9AJrDjaUmzGTDyN9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
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
