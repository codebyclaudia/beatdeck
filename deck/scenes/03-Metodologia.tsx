import { Reveal, Scene, useScene, CountUp } from 'beatdeck';
import { ZoomWrapper } from '../components/ZoomWrapper';

const PAM_STEPS = [
  { step: '1. Inicialización', desc: 'Seleccionar k medoides iniciales en el espacio de datos.' },
  { step: '2. Asignación', desc: 'Asignar cada individuo al medoide más cercano (distancia Gower).' },
  { step: '3. Actualización', desc: 'Intercambiar medoides si reduce el costo de distancia total.' },
  { step: '4. Convergencia', desc: 'Repetir hasta que no haya cambios en los medoides.' }
];

function Metodologia_() {
  const { here, b, entry } = useScene();

  return (
    <>
      {/* Beat 0: Enfoques de Clustering */}
      <ZoomWrapper sceneIndex={2} beatIndex={0}>
        <Reveal on={here && b === 0} x={150} y={120}>
          <div className="t-eyebrow">// 03. ENFOQUES DE CLUSTERING</div>
        </Reveal>
        <Reveal on={here && b === 0} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 64 }}>Dos Enfoques de Análisis</div>
        </Reveal>
        <Reveal on={here && b === 0} x={150} y={300}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, width: 1620 }}>
            <div className="deck-card" style={{ padding: 40, borderRadius: 16 }}>
              <h3 style={{ fontSize: 36, color: '#38bdf8', marginBottom: 20 }}>Enfoque 1: Solo Demografía</h3>
              <p style={{ fontSize: 28, color: 'var(--ink-1)', lineHeight: 1.6 }}>
                Agrupa individuos basándose exclusivamente en perfiles demográficos y posteriormente analiza las estadísticas de incidentes de cada grupo.
              </p>
              <div style={{ marginTop: 24, fontSize: 24, color: 'var(--ink-2)' }}>
                • ¿Qué grupos demográficos presentan mayor riesgo?
              </div>
            </div>
            <div className="deck-card-accent" style={{ padding: 40, borderRadius: 16 }}>
              <h3 style={{ fontSize: 36, color: '#38bdf8', marginBottom: 20 }}>Enfoque 2: Demografía + Incidentes</h3>
              <p style={{ fontSize: 28, color: 'var(--ink-1)', lineHeight: 1.6 }}>
                Agrupa considerando simultáneamente demografía e incidentes para identificar patrones atípicos y combinaciones frecuentes.
              </p>
              <div style={{ marginTop: 24, fontSize: 24, color: 'var(--ink-2)' }}>
                • ¿Qué subgrupos muestran riesgo inesperado?
              </div>
            </div>
          </div>
        </Reveal>
      </ZoomWrapper>

      {/* Beat 1: Retos Algorítmicos */}
      <ZoomWrapper sceneIndex={2} beatIndex={1}>
        <Reveal on={here && b === 1} x={150} y={120}>
          <div className="t-eyebrow">// 03. METODOLOGIA & RETOS</div>
        </Reveal>
        <Reveal on={here && b === 1} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 64 }}>Tipos de Datos Mixtos e Interpretación</div>
        </Reveal>
        <Reveal on={here && b === 1} x={150} y={300}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, width: 1620 }}>
            <div className="deck-card" style={{ padding: 36, borderRadius: 16 }}>
              <h3 style={{ fontSize: 32, color: 'var(--ink)', marginBottom: 20 }}>1. Algoritmo & Distancias</h3>
              <div style={{ fontSize: 26, color: 'var(--ink-2)', lineHeight: 1.8 }}>
                • <strong>Medición de distancias:</strong> <span className="highlight-badge">Coeficiente de Gower</span><br/>
                • <strong>Algoritmo de clustering:</strong> <span className="highlight-badge">K-Medoides (PAM)</span>
              </div>
            </div>
            <div className="deck-card" style={{ padding: 36, borderRadius: 16 }}>
              <h3 style={{ fontSize: 32, color: 'var(--ink)', marginBottom: 20 }}>2. Interpretación & Fiabilidad</h3>
              <div style={{ fontSize: 26, color: 'var(--ink-2)', lineHeight: 1.8 }}>
                • <strong>p-value:</strong> Probabilidad de que la correlación sea fruto del azar.<br/>
                • <strong>Effect size:</strong> Magnitud de la diferencia respecto a la media global.
              </div>
            </div>
          </div>
        </Reveal>
      </ZoomWrapper>

      {/* Beat 2: Algoritmo K-Medoides (PAM) */}
      <ZoomWrapper sceneIndex={2} beatIndex={2}>
        <Reveal on={here && b === 2} x={150} y={120}>
          <div className="t-eyebrow">// 05. CLUSTERING PARTIPCIONAL</div>
        </Reveal>
        <Reveal on={here && b === 2} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 64 }}>
            Algoritmo K-Medoides <span className="highlight-badge" style={{ fontSize: 40 }}>(PAM)</span>
          </div>
        </Reveal>
        {PAM_STEPS.map((s, idx) => (
          <Reveal key={s.step} on={here && b === 2} x={150 + idx * 400} y={300} delay={idx * 80}>
            <div className="deck-card" style={{ padding: 24, borderRadius: 16, width: 370, height: 320 }}>
              <div style={{ fontSize: 26, fontWeight: 700, color: '#38bdf8', marginBottom: 16 }}>{s.step}</div>
              <div style={{ fontSize: 22, color: 'var(--ink-2)', lineHeight: 1.6 }}>{s.desc}</div>
            </div>
          </Reveal>
        ))}
      </ZoomWrapper>

      {/* Beat 3: Métricas de Evaluación */}
      <ZoomWrapper sceneIndex={2} beatIndex={3}>
        <Reveal on={here && b === 3} x={150} y={120}>
          <div className="t-eyebrow">// 05. EVALUACION DE CLUSTERS</div>
        </Reveal>
        <Reveal on={here && b === 3} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 64 }}>Métricas de Calidad</div>
        </Reveal>
        <Reveal on={here && b === 3} x={150} y={300}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, width: 1620 }}>
            <div className="deck-card-accent" style={{ padding: 36, borderRadius: 16 }}>
              <h3 style={{ fontSize: 32, color: '#38bdf8', marginBottom: 16 }}>
                Dunn Score <span className="highlight-badge">[0, ∞]</span>
              </h3>
              <p style={{ fontSize: 24, color: 'var(--ink-2)', lineHeight: 1.6 }}>
                Resultado <span className="text-highlight">&gt; 1</span> indica clusters compactos y sin solapamiento entre sí.
              </p>
              <h3 style={{ fontSize: 32, color: '#38bdf8', marginTop: 32, marginBottom: 16 }}>
                Silhouette Score <span className="highlight-badge">[-1, 1]</span>
              </h3>
              <p style={{ fontSize: 24, color: 'var(--ink-2)', lineHeight: 1.6 }}>
                Resultado <span className="text-highlight">&gt; 0.5</span> indica alta cohesión interna y bajo solapamiento.
              </p>
            </div>
            <div className="deck-card" style={{ border: '1px solid rgba(239, 68, 68, 0.4) !important', padding: 36, borderRadius: 16 }}>
              <h3 style={{ fontSize: 32, color: '#f87171', marginBottom: 16 }}>Tamaño de Muestra &lt; 5%</h3>
              <p style={{ fontSize: 24, color: 'var(--ink-2)', lineHeight: 1.6 }}>
                Clusters con menos del 5% del total de la muestra (&lt;180 individuos) son demasiado pequeños y sus resultados no son estadísticamente representativos.
              </p>
            </div>
          </div>
        </Reveal>
      </ZoomWrapper>

      {/* Beat 4: Comparativa exp8 vs exp9 */}
      <ZoomWrapper sceneIndex={2} beatIndex={4}>
        <Reveal on={here && b === 4} x={150} y={120}>
          <div className="t-eyebrow">// 05. RESULTADOS DE EXPERIMENTOS</div>
        </Reveal>
        <Reveal on={here && b === 4} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 64 }}>
            Comparativa: <span className="text-highlight">exp8</span> vs <span className="text-highlight">exp9</span>
          </div>
        </Reveal>
        <Reveal on={here && b === 4} x={150} y={300}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, width: 1620 }}>
            <div className="deck-card-accent" style={{ padding: 40, borderRadius: 16 }}>
              <h3 style={{ fontSize: 36, color: '#38bdf8', marginBottom: 20 }}>exp8: Solo Demografía</h3>
              <div style={{ fontSize: 28, lineHeight: 1.8, color: 'var(--ink-1)' }}>
                • <strong>k óptimo:</strong> k = <CountUp value={8} from={2} entry={entry} ms={800} /><br/>
                • <strong>Dunn Score:</strong> <CountUp value={0.09} from={0} entry={entry} ms={1000} decimals={2} /><br/>
                • <strong>Silhouette Score:</strong> <CountUp value={0.40} from={0} entry={entry} ms={1000} decimals={2} /><br/>
                • <strong>Clusters &lt; 5% sample:</strong> 1
              </div>
            </div>
            <div className="deck-card" style={{ border: '1px solid rgba(139, 92, 246, 0.4) !important', padding: 40, borderRadius: 16 }}>
              <h3 style={{ fontSize: 36, color: '#a78bfa', marginBottom: 20 }}>exp9: Demografía + Incidentes</h3>
              <div style={{ fontSize: 28, lineHeight: 1.8, color: 'var(--ink-1)' }}>
                • <strong>k óptimo:</strong> k = <CountUp value={6} from={2} entry={entry} ms={800} /><br/>
                • <strong>Dunn Score:</strong> <CountUp value={0.05} from={0} entry={entry} ms={1000} decimals={2} /><br/>
                • <strong>Silhouette Score:</strong> <CountUp value={0.35} from={0} entry={entry} ms={1000} decimals={2} /><br/>
                • <strong>Clusters &lt; 5% sample:</strong> 1
              </div>
            </div>
          </div>
        </Reveal>
      </ZoomWrapper>
    </>
  );
}

export const Metodologia = () => <Scene index={2}><Metodologia_ /></Scene>;
