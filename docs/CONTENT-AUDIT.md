# Content Audit: Resultados Clustering de Individuos según Perfiles de Riesgo

Source: `slides.md` (527 lines)
Author: Claudia Suárez

## Scene 1: Título e Índice
- **Slide 1-2**: Título del proyecto, autora, e índice interactivo de 12 puntos.
- **Beat 1**: Título de la presentación.
- **Beat 2**: Índice temático estructurado.

## Scene 2: Motivación y Datos
- **Slide 3-5**: Preguntas de investigación, fuera de alcance, estructura de datos demográficos (4 vars) vs incidentes (15 vars), y tamaño muestral (~3600 obs, 32k combinaciones).
- **Beat 1**: Preguntas clave de motivación.
- **Beat 2**: Alcance y exclusiones del estudio.
- **Beat 3**: Variables Demográficas vs Incidentes.
- **Beat 4**: Métricas de tamaño muestral y espacio combinatorial.

## Scene 3: Metodología y Análisis Exploratorio (MCA)
- **Slide 6-10**: Dos enfoques de clustering, retos de datos mixtos (distancia Gower + PAM/K-Medoides, p-value, effect size) y Análisis de Componentes Múltiples (MCA).
- **Beat 1**: Comparativa de enfoques (Solo Demografía vs Demografía + Incidentes).
- **Beat 2**: Retos y elecciones algorítmicas (Gower + PAM).
- **Beat 3**: Hallazgos del análisis MCA (incidentes transversales, poca correlación directa con demografía).

## Scene 4: Algoritmo Clustering K-Medoides & Evaluación
- **Slide 11-14**: Pasos del algoritmo K-Medoides (Init, Assign, Update, Converge), métricas (Dunn, Silhouette) y resultados de exp8 vs exp9.
- **Beat 1**: Flujo del algoritmo K-Medoides / PAM.
- **Beat 2**: Definición de métricas de calidad de cluster (Dunn score, Silhouette score).
- **Beat 3**: Comparación de resultados cuantitativos: exp8 (k=8, Silh ~0.4) vs exp9 (k=6, Silh ~0.35).

## Scene 5: Interpretación y Predictabilidad
- **Slide 15-25**: Perfiles de clusters para exp8 y exp9, métricas de consistencia/cohesión, criterios estadísticos (Chi², Cramér's V, Kruskal-Wallis) y capacidad predictiva.
- **Beat 1**: Perfiles demográficos (exp8) y de riesgo (exp9).
- **Beat 2**: Criterios de validación externa y fórmula de Cohesión (CR).
- **Beat 3**: Criterios de significación estadística.
- **Beat 4**: Resultados de predictabilidad (la demografía no predice incidentes; los incidentes predicen otros incidentes).

## Scene 6: Disclaimers de Datos y Frecuencia
- **Slide 26-30**: Frecuencias de incidentes (spam 47%, resto <9%), correlaciones entre tipos de incidentes y validez/sesgos de la encuesta.
- **Beat 1**: Desglose de frecuencias reales de incidentes (Spam vs no-spam).
- **Beat 2**: Intercorrelación entre incidentes de seguridad (42% sufre 2+ incidentes).
- **Beat 3**: Evaluación crítica y sesgos metodológicos de los datos de la encuesta 2022.

## Scene 7: Codebase, Conclusiones y Próximos Pasos
- **Slide 31-34**: Estructura modular en Python (`src/executing_kmedoids`), links a artefactos en SharePoint, conclusiones finales y trabajo futuro.
- **Beat 1**: Arquitectura de la codebase Python (`experiments.py`, R Gower binding, etc.).
- **Beat 2**: Conclusiones principales.
- **Beat 3**: Próximos pasos (Arboles de decisión, SHAP, HDBSCAN, PyCaret).

