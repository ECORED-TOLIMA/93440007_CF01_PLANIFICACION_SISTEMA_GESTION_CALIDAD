<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Planificación del Sistema de Gestión de la Calidad según la NTC ISO 9001
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La planificación del Sistema de Gestión de la Calidad constituye una etapa fundamental para garantizar que la organización establezca acciones orientadas al cumplimiento de los requisitos de la norma NTC ISO 9001 y al logro de sus objetivos estratégicos. Este proceso permite definir cómo se desarrollarán las actividades necesarias para asegurar la calidad de los productos y servicios, considerando el contexto organizacional, las necesidades de las partes interesadas y los riesgos y oportunidades que pueden influir en el desempeño del sistema.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-md-7.col-8.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema2/img02.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C02.color-primario.p-4.mb-3.p-3
          p.mb-0(data-aos="fade-down") La norma establece que la planificación debe realizarse de manera estructurada, articulando la política de calidad, los objetivos organizacionales y los procesos requeridos para alcanzarlos. En este sentido, la organización debe identificar los factores internos y externos que pueden afectar el cumplimiento de los resultados esperados, así como establecer mecanismos que permitan prevenir desviaciones y promover la mejora continua.
        p.mb-0(data-aos="fade-down") Asimismo, la planificación facilita la asignación adecuada de recursos, responsabilidades y tiempos de ejecución, permitiendo que el sistema de gestión opere de manera coherente y alineada con el direccionamiento estratégico institucional. Este proceso también contribuye a fortalecer la toma de decisiones basada en evidencia, el control de los procesos y la evaluación permanente del desempeño organizacional.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .tarjeta.tarjeta--C03.p-4
          .row.justify-content-center
            .col.col-lg-10.order-lg-1.order-2
              p.mb-0(data-aos="fade-down") La NTC ISO 9001 integra la planificación del Sistema de Gestión de la Calidad a través de lineamientos específicos orientados a la gestión de riesgos y oportunidades, la definición de objetivos de calidad y la planificación de los cambios, elementos que permiten garantizar la sostenibilidad y eficacia del sistema dentro de la organización.
            .col.col-lg-2.col-auto.order-lg-2.order-1.mb-3
              figure
                img(src='@/assets/curso/tema2/img03.svg', alt='Imagen decorativa')
    separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Acciones para abordar riesgos y oportunidades (Numeral 6.1)
    .row.justify-content-center.mb-4
      .col.col-lg-2.col-md-7.col-8.order-lg-1.order-1.mb-3
        figure
          img(src='@/assets/curso/tema2/img04.svg', alt='Imagen decorativa')
      .col.col-lg-10.col-12.order-lg-2.order-2
        p(data-aos="fade-down") El numeral 6.1 de la NTC ISO 9001 establece que la organización debe planificar acciones para abordar los riesgos y oportunidades que puedan afectar el logro de los resultados previstos del Sistema de Gestión de la Calidad (SGC). Este enfoque permite anticipar situaciones que generen desviaciones en los procesos, fortalecer la capacidad de respuesta organizacional y promover la mejora continua.
        p.mb-0(data-aos="fade-down") La identificación de riesgos y oportunidades se realiza considerando el contexto organizacional, las necesidades y expectativas de las partes interesadas y los procesos del SGC.
    .row.align-items-center.mb-5(data-aos="flip-down")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Riesgos y oportunidades en el SGC
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col.col-lg-10.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C04.p-5
            .row.justify-content-center.mb-3
              .col-lg-4.col-4
                figure(data-aos="flip-up")
                  img(src='@/assets/curso/tema2/img05.svg', alt='Imagen decorativa')
            h4.text-center(data-aos="fade-down") Riesgos
            p.mb-0.text-center Eventos o condiciones que pueden afectar negativamente el cumplimiento de los objetivos de calidad.
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-4.col-4
                figure(data-aos="flip-up")
                  img(src='@/assets/curso/tema2/img06.svg', alt='Imagen decorativa')
            h4.text-center(data-aos="fade-down") Oportunidades
            p.mb-0.text-center Circunstancias que pueden favorecer el desempeño organizacional, la innovación y el mejoramiento de los procesos.
    .BG04.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema2/img12.png", alt="alt")
        .col-lg-8
          p.text-center La organización puede implementar diversas estrategias, entre ellas:
          SlyderF.custom.color-acento-botones(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema2/img07.svg", alt="alt").img100.m-auto
              p Evitar el riesgo eliminando la causa que lo genera.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema2/img08.svg", alt="alt").img100.m-auto
              p Reducir la probabilidad de ocurrencia del riesgo.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema2/img09.svg", alt="alt").img100.m-auto
              p Minimizar las consecuencias del riesgo si llega a materializarse.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema2/img10.svg", alt="alt").img100.m-auto
              p Compartir o transferir el riesgo mediante acuerdos con terceros.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/tema2/img11.svg", alt="alt").img100.m-auto
              p Aprovechar oportunidades que contribuyan al logro de los objetivos estratégicos y de calidad.
    p.mb-5(data-aos="fade-down") Con el fin de facilitar la comprensión de cómo se aplican las acciones frente a los riesgos y oportunidades dentro del Sistema de Gestión de la Calidad, a continuación, se presenta un ejemplo que relaciona estos elementos con posibles estrategias de tratamiento en el contexto organizacional.
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col.col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Ejemplo de tratamiento de riesgos y oportunidades
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Elemento
                th(data-aos="fade-down")(style= "width: 40%") Descripción
                th(data-aos="fade-down")(style= "width: 40%") Ejemplo
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Riesgo
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Situación que puede afectar el cumplimiento de los objetivos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Fallas en procesos que generan reprocesos.
              tr
                td(data-aos="fade-down") Oportunidad
                td(data-aos="fade-down") Situación que favorece el desempeño organizacional.
                td(data-aos="fade-down") Implementación de nuevas tecnologías.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Acción
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Estrategia definida para gestionar riesgos u oportunidades.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Capacitación del personal o automatización de procesos.
    p.mb-0(data-aos="fade-down") La planificación de estas acciones debe integrarse a los procesos del SGC, garantizando su implementación, seguimiento y evaluación. Esto permite que el sistema funcione de manera preventiva, favoreciendo la eficacia de los procesos, la satisfacción del cliente y el cumplimiento de los requisitos normativos.
    separador 
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Objetivos de calidad y planificación para lograrlos (Numeral 6.2)
    p.mb-5(data-aos="fade-down") El numeral 6.2 de la NTC ISO 9001 establece que la organización debe definir objetivos de calidad coherentes con la política de calidad, el direccionamiento estratégico y los requisitos aplicables. Estos objetivos permiten orientar las acciones organizacionales hacia el mejoramiento continuo, el cumplimiento de las necesidades del cliente y el fortalecimiento del desempeño del Sistema de Gestión de la Calidad (SGC).
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-5.col-8.order-lg-1.order-1
        figure
          img(src='@/assets/curso/tema2/img13.png', alt='Imagen decorativa')
      .col.col-lg-7.order-lg-2.order-2
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--C01.p-4
              p(data-aos="fade-down") Los objetivos de calidad deben formularse considerando criterios que faciliten su seguimiento y evaluación. La norma establece que estos deben ser medibles, pertinentes al contexto organizacional, comunicados al personal y actualizados cuando sea necesario.
              .row.justify-content-center
                .col.col-lg-10
                  .tarjeta.tarjeta--blanca.p-3
                    p.text-bold(data-aos="fade-down") Los objetivos deben:
                    ul.lista-ul--color.mb-0(data-aos="fade-down")
                      li
                        i.fas.fa-folder
                        p.mb-0 Estar alineados con la política de calidad.
                      li
                        i.fas.fa-folder
                        p.mb-0 Ser medibles y verificables.
                      li
                        i.fas.fa-folder
                        p.mb-0 Considerar requisitos del cliente y requisitos legales aplicables.
                      li
                        i.fas.fa-folder
                        p.mb-0 Ser comunicados dentro de la organización.
                      li.mb-0
                        i.fas.fa-folder
                        p.mb-0 Mantenerse documentados y actualizados.
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-10.col-12
        .cajon.cajon.C02
          .row.justify-content-center
            .col.col-lg-4.col-md-8.col-12.order-lg-2.order-1
              figure
                img(src='@/assets/curso/tema2/img14.jpg', alt='Imagen decorativa')
            .col.col-lg-8.col-12.order-lg-1.order-2.p-4
              .row.justify-content-center
                .col.col-lg-10.col-12
                  p.mb-2(data-aos="fade-down") Para garantizar el cumplimiento de los objetivos, la organización debe establecer una planificación que incluya:
                .col.col-lg-10.col-12
                  .tarjeta.tarjeta--blanca.p-3
                    ul.lista-ul--color.mb-0(data-aos="fade-down")
                      li
                        i.fas.fa-folder
                        p.mb-0 Actividades necesarias para alcanzar los objetivos.
                      li
                        i.fas.fa-folder
                        p.mb-0 Recursos requeridos.
                      li
                        i.fas.fa-folder
                        p.mb-0 Responsables de la ejecución.
                      li
                        i.fas.fa-folder
                        p.mb-0 Tiempos de cumplimiento.
                      li.mb-0
                        i.fas.fa-folder
                        p.mb-0 Métodos para evaluar los resultados.
    p.mb-5(data-aos="fade-down") Con el propósito de facilitar la comprensión de la formulación y planificación de los objetivos de calidad dentro del Sistema de Gestión de la Calidad, a continuación, se presentan algunos ejemplos que relacionan los objetivos con indicadores, metas y estrategias orientadas al cumplimiento de los resultados organizacionales.
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Ejemplos de objetivos de calidad
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 25%") Objetivo de calidad
                th(data-aos="fade-down")(style= "width: 25%") Indicador
                th(data-aos="fade-down")(style= "width: 25%") Meta
                th(data-aos="fade-down")(style= "width: 25%") Estrategia
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Mejorar la satisfacción del cliente.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Nivel de satisfacción del cliente.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Alcanzar 90 % de satisfacción anual.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Implementar encuestas y planes de mejora del servicio.
              tr
                td(data-aos="fade-down") Reducir reprocesos en producción.
                td(data-aos="fade-down") Porcentaje de reprocesos.
                td(data-aos="fade-down") Disminuir reprocesos en 15 %.
                td(data-aos="fade-down") Capacitar al personal y mejorar controles de calidad.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Optimizar tiempos de respuesta al cliente.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Tiempo promedio de atención.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Reducir tiempo en 20 %.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Implementar herramientas tecnológicas y estandarizar procesos.
              tr
                td(data-aos="fade-down") Fortalecer competencias del talento humano.
                td(data-aos="fade-down") Número de capacitaciones ejecutadas.
                td(data-aos="fade-down") Ejecutar plan anual de formación.
                td(data-aos="fade-down") Desarrollar programas de capacitación continua.
    .row.justify-content-center.mb-0
      .col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-9(data-aos="flip-up")
              img(src='@/assets/curso/tema2/img15.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              p.mb-0 La adecuada planificación de los objetivos de calidad permite a la organización orientar sus esfuerzos hacia resultados medibles, facilitando el control del desempeño, la toma de decisiones basada en evidencia y la mejora continua del Sistema de Gestión de la Calidad.
    separador 
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Planificación de los cambios (Numeral 6.3)
    p.mb-5(data-aos="fade-down") El numeral 6.3 de la NTC ISO 9001 establece que cuando una organización determina la necesidad de realizar cambios en el Sistema de Gestión de la Calidad (SGC), estos deben llevarse a cabo de manera planificada y controlada. La planificación de los cambios permite garantizar que las modificaciones no afecten la integridad del sistema, el cumplimiento de los requisitos ni el logro de los objetivos de calidad.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img16.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los cambios pueden originarse por diversos factores, como la implementación de nuevas tecnologías, modificaciones en los procesos, cambios en la estructura organizacional, ajustes en requisitos legales o contractuales, o la búsqueda de oportunidades de mejora. En este sentido, la organización debe analizar previamente el impacto que pueden generar estos cambios y establecer acciones que permitan su adecuada implementación.
    p.mb-5(data-aos="fade-down") A continuación, se presentan los aspectos que se deben considerar en la planificación de los cambios, en donde la organización debe evaluar:
    .row.justify-content-center.align-items-center.mb-5
      .col.col-lg-10.col-12
        .cajon.cajon.C02
          .row.justify-content-center
            .col.col-lg-6.col-md-7.col-8.order-lg-2.order-1
              figure
                img(src='@/assets/curso/tema2/img17.svg', alt='Imagen decorativa')
            .col.col-lg-6.col-12.order-lg-1.order-2.p-4
              ol.lista-ol--cuadro.lista-ol--separador.mb-0
                li
                  .lista-ol--cuadro__vineta
                    span.text-bold 1
                  | El propósito y las consecuencias potenciales del cambio.
                li
                  .lista-ol--cuadro__vineta
                    span.text-bold 2
                  | La integridad del Sistema de Gestión de la Calidad.
                li
                  .lista-ol--cuadro__vineta
                    span.text-bold 3
                  | La disponibilidad de recursos necesarios.
                li
                  .lista-ol--cuadro__vineta
                    span.text-bold 4
                  | La asignación de responsabilidades y autoridades.
                li
                  .lista-ol--cuadro__vineta
                    span.text-bold 5
                  | Los posibles riesgos asociados al cambio.
    p.mb-5(data-aos="fade-down") Con el fin de facilitar la comprensión de la aplicación de los cambios dentro del Sistema de Gestión de la Calidad, la siguiente tabla presenta ejemplos de situaciones organizacionales y las acciones que permiten planificar su implementación de manera controlada.
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Ejemplos de planificación de cambios en el SGC
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Tipo de cambio
                th(data-aos="fade-down")(style= "width: 35%") Impacto posible
                th(data-aos="fade-down")(style= "width: 35%") Acción de planificación
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Implementación de un nuevo #[em software].
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Modificación de procesos y capacitación del personal.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Elaborar plan de capacitación y actualización de procedimientos.
              tr
                td(data-aos="fade-down") Cambio en requisitos legales.
                td(data-aos="fade-down") Ajustes en documentación y procesos operativos.
                td(data-aos="fade-down") Revisar normatividad aplicable y actualizar procedimientos.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Reestructuración organizacional.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Cambios en funciones y responsabilidades.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Redefinir roles y actualizar manuales de funciones.
              tr
                td(data-aos="fade-down") Incorporación de nuevas tecnologías.
                td(data-aos="fade-down") Transformación de métodos de trabajo.
                td(data-aos="fade-down") Realizar pruebas piloto y seguimiento del desempeño.
    .row.justify-content-center.mb-0
      .col-lg-10.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-9(data-aos="flip-up")
              img(src='@/assets/curso/tema2/img18.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              p.mb-0 La planificación adecuada de los cambios permite a la organización adaptarse a nuevas condiciones del entorno, fortalecer la eficiencia de los procesos y garantizar la mejora continua del Sistema de Gestión de la Calidad, asegurando el cumplimiento de los requisitos establecidos en la NTC ISO 9001.

</template>

<script>
export default {
  name: 'Tema2',
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
