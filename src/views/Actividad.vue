<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos fundamentales relacionados con la planificación del Sistema de Gestión de la Calidad, el direccionamiento estratégico, la formulación de políticas y objetivos de calidad, el ciclo PHVA y la estructuración del cronograma para la implementación del sistema conforme a la NTC ISO 9001.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué busca principalmente un Sistema de Gestión de la Calidad?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir únicamente los costos operativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantizar el cumplimiento de requisitos y la mejora continua.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Aumentar la cantidad de personal dentro de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar todos los riesgos organizacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 2,
          texto: 'La NTC ISO 9001 establece lineamientos para:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Manejo financiero empresarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Gestión ambiental y seguridad en el trabajo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Implementación de Sistemas de Gestión de la Calidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Seguridad industrial exclusivamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 3,
          texto: 'La planificación de la calidad permite:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Improvisar procesos organizacionales y de partes interesadas.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Eliminar la documentación.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Reducir la participación del personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Establecer objetivos, recursos y actividades necesarias para cumplir requisitos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 4,
          texto: '¿Cuál es un principio de gestión de la calidad?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Centralización total de decisiones.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Enfoque al cliente.', esCorrecta: true },
            { id: 'c', texto: 'Eliminación del liderazgo.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Control exclusivo de resultados financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 5,
          texto: 'La política de calidad debe estar alineada con:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El direccionamiento estratégico de la organización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Las decisiones individuales del personal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El presupuesto anual únicamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las normas internas de convivencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 6,
          texto: 'Los objetivos de calidad deben caracterizarse por ser:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Generales y ambiguos.', esCorrecta: false },
            { id: 'b', texto: 'Confidenciales.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Medibles y coherentes con la política de calidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Exclusivos para la gerencia de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 7,
          texto: 'El liderazgo de la dirección en el SGC implica:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Promover el compromiso con la calidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Delegar completamente la responsabilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar la comunicación organizacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar la participación del personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 8,
          texto: '¿Cuál es un elemento clave para implementar un SGC?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminación del control documental.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducción del talento humano.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Desconocimiento del contexto organizacional.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Gestión de recursos.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 9,
          texto:
            'Identificar actividades críticas en la implementación del SGC permite:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Priorizar acciones estratégicas.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Evitar la planificación.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Reducir la participación de los procesos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar controles internos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 10,
          texto: 'El plan estratégico en el SGC orienta:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Actividades improvisadas dentro de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Acciones organizacionales hacia el cumplimiento de objetivos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Procesos exclusivamente administrativos.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Decisiones individuales.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        // Continúa mismo patrón:

        {
          id: 11,
          texto: 'El ciclo PHVA es conocido también como:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ciclo financiero.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Ciclo administrativo tradicional.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Ciclo Deming.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Ciclo de auditoría externa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 12,
          texto: 'La fase Planear del ciclo PHVA consiste en:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Evaluar resultados.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Ejecutar las actividades planificadas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Definir solo los indicadores de gestión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Formular políticas organizacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 13,
          texto: 'La fase Hacer del ciclo PHVA corresponde a:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejecutar las actividades planificadas.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Evaluar resultados.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Formular políticas organizacionales.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Definir indicadores.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 14,
          texto: 'La fase Verificar permite:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar controles y mediciones de procesos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diseñar estrategias comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Realizar seguimiento y medición de procesos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Implementar planes financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 15,
          texto: 'La fase Actuar busca:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Implementar acciones correctivas y de mejora.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mantener los errores organizacionales presentados.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Suspender procesos.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Eliminar la evaluación del desempeño.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 16,
          texto: 'El ciclo PHVA contribuye principalmente a:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La reducción de responsabilidades.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'El aumento de jerarquías.', esCorrecta: false },
            {
              id: 'c',
              texto: 'La eliminación de procesos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La mejora continua organizacional.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 17,
          texto: 'Un cronograma de actividades permite:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar actividades, tiempos y responsables.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Improvisar tareas dentro de la organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar el control de procesos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la comunicación organizacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 18,
          texto: 'El tiempo estimado dentro del cronograma facilita:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desconocer la duración de actividades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Planificar y controlar el desarrollo del SGC.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar la asignación de recursos del SGC.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Limitar la supervisión.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 19,
          texto: 'La asignación de responsables dentro del cronograma permite:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Desorganizar procesos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Garantizar seguimiento y cumplimiento de actividades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar el liderazgo y cumplimiento de actividades.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Evitar el control interno.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },

        {
          id: 20,
          texto: 'Un Sistema de Gestión de la Calidad promueve:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La improvisación organizacional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El aislamiento de los procesos claves.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La reducción del compromiso institucional dentro de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La cultura de calidad y toma de decisiones basada en evidencias.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia buen dominio de los conceptos del Sistema de Gestión de la Calidad y su aplicación en los procesos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
