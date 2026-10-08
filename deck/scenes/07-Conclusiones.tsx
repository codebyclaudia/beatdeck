import { Reveal, Scene, useScene, Terminal } from 'beatdeck';
import { SHAREPOINT_LINKS } from '../deck.config';
import { ZoomWrapper } from '../components/ZoomWrapper';

function Conclusiones_() {
  const { here, b } = useScene();

  return (
    <>
      {/* Beat 0: Estructura Codebase Python Tree */}
      <ZoomWrapper sceneIndex={6} beatIndex={0}>
        <Reveal on={here && b === 0} x={150} y={120}>
          <div className="t-eyebrow">// 09. ARQUITECTURA DE LA CODEBASE</div>
        </Reveal>
        <Reveal on={here && b === 0} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 56 }}>Pipeline Python Modular</div>
        </Reveal>
        <Reveal on={here && b === 0} x={150} y={270}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 30, width: 1620 }}>
            <div className="deck-card" style={{ padding: 24, borderRadius: 16 }}>
              <h3 style={{ fontSize: 24, color: '#38bdf8', marginBottom: 12 }}>Árbol de Directorios <code>src/executing_kmedoids</code></h3>
              <Terminal lines={[
                { t: 'src/executing_kmedoids' },
                { t: '├── auxiliary/' },
                { t: '│   ├── clustering_model_validation.py' },
                { t: '│   ├── clustering.py' },
                { t: '│   ├── compute_gower.r' },
                { t: '│   ├── config.py' },
                { t: '│   ├── data_preprocessing.py' },
                { t: '│   ├── experiments.py' },
                { t: '│   ├── interpretation.py' },
                { t: '│   ├── predictability.py' },
                { t: '│   └── visualization.py' },
                { t: '├── clustering_alternative_methods.ipynb' },
                { t: '└── kmedoids_clustering.py' },
              ]} />
            </div>
            <div className="deck-card-accent" style={{ padding: 32, borderRadius: 16 }}>
              <h3 style={{ fontSize: 28, color: '#38bdf8', marginBottom: 16 }}>Diseño de la Codebase</h3>
              <ul style={{ fontSize: 22, lineHeight: 1.8, color: 'var(--ink-1)' }}>
                <li>• Ejecución desde root project dir.</li>
                <li>• <code>experiments.py</code> orquesta cada experimento.</li>
                <li>• Reutilización óptima de matrices de distancia Gower.</li>
                <li>• Scripts en <code>src</code> gestionan logging, control de artefactos y distribución condicional.</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </ZoomWrapper>

      {/* Beat 1: Tabla Completa de Links SharePoint */}
      <ZoomWrapper sceneIndex={6} beatIndex={1}>
        <Reveal on={here && b === 1} x={150} y={120}>
          <div className="t-eyebrow">// 10. LINKS A RESULTADOS PRINCIPALES</div>
        </Reveal>
        <Reveal on={here && b === 1} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 56 }}>Enlaces a Artefactos en SharePoint</div>
        </Reveal>
        <Reveal on={here && b === 1} x={150} y={260}>
          <div className="deck-card" style={{ padding: 24, borderRadius: 16, width: 1620, maxHeight: 680, overflowY: 'auto' }}>
            <table style={{ width: '100%', fontSize: 18, borderCollapse: 'collapse', color: 'var(--ink-1)' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(56,189,248,0.4)', textAlign: 'left', color: '#38bdf8' }}>
                  <th style={{ padding: 10 }}>Nombre del Artefacto</th>
                  <th style={{ padding: 10 }}>Categoría</th>
                  <th style={{ padding: 10 }}>Enlace SharePoint</th>
                </tr>
              </thead>
              <tbody>
                {SHAREPOINT_LINKS.map((link, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <td style={{ padding: 10, fontWeight: 600 }}>{link.name}</td>
                    <td style={{ padding: 10 }}><span className="highlight-badge">{link.category}</span></td>
                    <td style={{ padding: 10 }}>
                      <a href={link.url} target="_blank" rel="noreferrer" style={{ color: '#38bdf8', textDecoration: 'underline' }}>
                        Ver en SharePoint ↗
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </ZoomWrapper>

      {/* Beat 2: Conclusiones Clave */}
      <ZoomWrapper sceneIndex={6} beatIndex={2}>
        <Reveal on={here && b === 2} x={150} y={120}>
          <div className="t-eyebrow">// 11. CONCLUSIONES</div>
        </Reveal>
        <Reveal on={here && b === 2} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 56 }}>Conclusiones Principales</div>
        </Reveal>
        <Reveal on={here && b === 2} x={150} y={280}>
          <div className="deck-card-accent" style={{ padding: 40, borderRadius: 16, width: 1620 }}>
            <ul style={{ fontSize: 28, lineHeight: 1.8, color: 'var(--ink-1)' }}>
              <li>1. <strong>La demografía no predice ciberriesgo:</strong> Los factores demográficos no presentan asociaciones fuertes con incidentes; la segmentación por perfiles demográficos no identifica subgrupos de riesgo claros.</li>
              <li>2. <strong>Baja frecuencia de incidentes no-spam (&lt;10%):</strong> Complica la extracción de predictores estadísticamente robustos.</li>
              <li style={{ color: '#38bdf8', fontWeight: 600 }}>3. <strong>Poder predictivo de incidentes previos:</strong> Los incidentes de seguridad sí tienen cierto poder predictivo significativo sobre otros incidentes.</li>
            </ul>
          </div>
        </Reveal>
      </ZoomWrapper>

      {/* Beat 3: Próximos Pasos */}
      <ZoomWrapper sceneIndex={6} beatIndex={3}>
        <Reveal on={here && b === 3} x={150} y={120}>
          <div className="t-eyebrow">// 12. PROXIMOS PASOS</div>
        </Reveal>
        <Reveal on={here && b === 3} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 56 }}>Líneas Futuras de Trabajo</div>
        </Reveal>
        <Reveal on={here && b === 3} x={150} y={280}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, width: 1620 }}>
            <div className="deck-card" style={{ padding: 32, borderRadius: 16 }}>
              <h3 style={{ fontSize: 28, color: '#38bdf8', marginBottom: 16 }}>Modelado Supervisado</h3>
              <ul style={{ fontSize: 22, lineHeight: 1.7, color: 'var(--ink-2)' }}>
                <li>• Árboles de decisión + explicabilidad SHAP.</li>
                <li>• Reglas de asociación para patrones de riesgo (ej: <em>"Edad 40+, rural → 3× riesgo phishing"</em>).</li>
                <li>• Subclústers incluyendo variables adicionales de la encuesta.</li>
              </ul>
            </div>
            <div className="deck-card" style={{ padding: 32, borderRadius: 16 }}>
              <h3 style={{ fontSize: 28, color: '#38bdf8', marginBottom: 16 }}>Algoritmos Alternativos</h3>
              <ul style={{ fontSize: 22, lineHeight: 1.7, color: 'var(--ink-2)' }}>
                <li>• Clustering Jerárquico, HDBSCAN y Espectral.</li>
                <li>• Análisis Exploratorio con <strong>PyCaret</strong> (notebook <code>clustering_alternative_methods.ipynb</code> a medio implementar).</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </ZoomWrapper>
    </>
  );
}

export const Conclusiones = () => <Scene index={6}><Conclusiones_ /></Scene>;
