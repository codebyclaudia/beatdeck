import type { SceneDef } from 'beatdeck';

/**
 * Full Beat map covering 100% of slides.md content across 7 scenes and 28 beats.
 */
export const SCENES: SceneDef[] = [
  {
    id: '01',
    title: 'INICIO',
    beats: [
      { name: 'Portada', note: 'Resultados Clustering de Individuos según Perfiles de Riesgo - Claudia Suárez', tolerance: 0.5 },
      { name: 'Índice General', note: 'Índice de la presentación en 12 puntos clave.', tolerance: 0.5 },
      { name: 'Motivación & Preguntas', note: '¿Puede alguna característica demográfica predecir incidentes de ciberseguridad?', tolerance: 0.5 },
      { name: 'Fuera del Alcance', note: 'Exclusiones del estudio (clustering de incidentes puros, otros métodos).', tolerance: 0.5 },
    ],
  },
  {
    id: '02',
    title: 'DATOS & EDA',
    beats: [
      { name: 'Estructura de Datos', note: 'Demografía (4 vars) vs Incidentes (15 vars binarias).', tolerance: 0.5 },
      { name: 'Muestra & Combinatoria', note: '~3,600 individuos, ~250 combinaciones demográficas y 32,768 combinaciones de incidentes.', tolerance: 0.5 },
      { name: 'Análisis de Frecuencia Inicial', note: 'Distribución demográfica de la muestra y comparativa con el censo.', tolerance: 0.5 },
      { name: 'Componentes Múltiples (MCA)', note: 'Proyección MCA: incidentes transversales y sin asociación fuerte previa.', tolerance: 0.5 },
    ],
  },
  {
    id: '03',
    title: 'METODOLOGIA CLUSTERING',
    beats: [
      { name: 'Enfoques de Clustering', note: 'Demografía sola vs Demografía + Incidentes.', tolerance: 0.5 },
      { name: 'Retos Algorítmicos & Datos Mixtos', note: 'Distancia Gower + K-Medoides (PAM), p-value y effect size.', tolerance: 0.5 },
      { name: 'Algoritmo K-Medoides (PAM)', note: 'Flujo de 4 pasos: Inicializar -> Asignar -> Actualizar -> Converger.', tolerance: 0.5 },
      { name: 'Métricas de Evaluación', note: 'Dunn score (>1), Silhouette score (>0.5) y umbral muestral (<5%).', tolerance: 0.5 },
      { name: 'Resultados exp8 vs exp9', note: 'Resultados cuantitativos exp8 (k=8, Silh 0.40) vs exp9 (k=6, Silh 0.35).', tolerance: 0.5 },
    ],
  },
  {
    id: '04',
    title: 'INTERPRETACIÓN CLUSTERS',
    beats: [
      { name: 'Validación Externa & Cohesión', note: 'Consistency (KL-divergence), Prominence, Cohesion (fórmula CR), Value breakdown e Inter-Cluster JS divergence.', tolerance: 0.5 },
      { name: 'Perfiles exp8 (Solo Demografía)', note: 'Detalle de los 8 clusters demográficos identificados.', tolerance: 0.5 },
      { name: 'Perfiles exp9 (Demog + Incidentes)', note: 'Detalle de los 6 clusters de riesgo e incidentes.', tolerance: 0.5 },
    ],
  },
  {
    id: '05',
    title: 'PREDICTABILIDAD',
    beats: [
      { name: 'Concepto Predictabilidad', note: 'Validación externa: influencia de predictores sobre targets (features, valores, clusters).', tolerance: 0.5 },
      { name: 'Validez Estadística General', note: 'n >= 30 CLT, Chi² p < 0.05, Cramér\'s V >= 0.1, Kruskal-Wallis (H, p < 0.05, ε² >= 0.01).', tolerance: 0.5 },
      { name: 'Criterios Value & Feature Level', note: 'Criterios específicos para analyze_value_level y analyze_feature_predictability (Lift CI 90%).', tolerance: 0.5 },
      { name: 'Resultados por Feature', note: 'exp8 (intervalo_edad predice ransomware/impersonation/eavesdropping) vs exp9 (16 combinaciones incidentes).', tolerance: 0.5 },
      { name: 'Resultados por Valor & Cluster', note: 'exp8 nulo vs exp9 incidentes predicen incidentes (8/24 NMI > 5%).', tolerance: 0.5 },
    ],
  },
  {
    id: '06',
    title: 'DISCLAIMERS ENCUESTA',
    beats: [
      { name: 'Frecuencias de Incidentes', note: '58% sufrió incidentes (47% Email Spam, no-spam solo 1/3, resto <= 5%).', tolerance: 0.5 },
      { name: 'Correlación entre Incidentes', note: '42% sufrió 2+ incidentes; alta intercorrelación (media 1.86 incidentes).', tolerance: 0.5 },
      { name: 'Pares Correlacionados sin Spam', note: 'Tabla completa de 15 pares de incidentes correlacionados.', tolerance: 0.5 },
      { name: 'Validez y Sesgos de Muestreo', note: 'Evaluación crítica de la encuesta 2022 y posibles sesgos de infra-reporte.', tolerance: 0.5 },
    ],
  },
  {
    id: '07',
    title: 'CODEBASE & CONCLUSIONES',
    beats: [
      { name: 'Estructura Codebase Python', note: 'Árbol completo de directorios en src/executing_kmedoids.', tolerance: 0.5 },
      { name: 'Links Resultados SharePoint', note: 'Tabla completa de enlaces a resultados de exp8 y exp9.', tolerance: 0.5 },
      { name: 'Conclusiones Clave', note: 'Demografía no predice ciberriesgo; incidentes sí se interrelacionan.', tolerance: 0.5 },
      { name: 'Próximos Pasos', note: 'Árboles de decisión, SHAP, Reglas de Asociación, HDBSCAN, Espectral y PyCaret.', tolerance: 0.5 },
    ],
  },
];

export const TOTAL_BEATS = SCENES.reduce((n, s) => n + s.beats.length, 0);
