<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda los fundamentos, lineamientos y herramientas necesarias para la planificación del Sistema de Gestión de la Calidad conforme a la Norma Técnica Colombiana NTC ISO 9001. Se analizan los conceptos esenciales de calidad, el enfoque basado en riesgos, la planeación estratégica organizacional, la formulación de políticas y objetivos de calidad, así como los elementos y pasos para la implementación del sistema. Asimismo, se orienta el diseño del plan estratégico y la estructuración del cronograma de actividades, permitiendo comprender la gestión de la calidad como un proceso sistemático enfocado en el cumplimiento de requisitos y la mejora continua organizacional.
    .row.justify-content-center
      .col.col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se describe la estructura temática del componente formativo sobre la planificación del Sistema de Gestión de la Calidad según la NTC ISO 9001, integrando los conceptos de calidad, planeación estratégica, formulación de políticas y objetivos, el ciclo PHVA como base de la mejora continua y el cronograma de actividades para la implementación del sistema.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis
</template>

<script>
export default {
  name: 'Sintesis',
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
