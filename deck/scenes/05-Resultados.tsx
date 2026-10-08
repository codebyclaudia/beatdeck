import { Reveal, Scene, useScene } from 'beatdeck';
import { ZoomWrapper } from '../components/ZoomWrapper';

function Resultados_() {
  const { here, b } = useScene();

  return (
    <>
      {/* Beat 0: Concepto Predictabilidad */}
      <ZoomWrapper sceneIndex={4} beatIndex={0}>
        <Reveal on={here && b === 0} x={150} y={120}>
          <div className="t-eyebrow">// 07. ANALISIS DE PREDICTABILIDAD</div>
        </Reveal>
        <Reveal on={here && b === 0} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 56 }}>Validación Externa</div>
        </Reveal>
        <Reveal on={here && b === 0} x={150} y={270}>
          <div className="deck-card-accent" style={{ padding: 36, borderRadius: 16, width: 1620 }}>
            <div style={{ fontSize: 28, color: '#38bdf8', fontWeight: 600, marginBottom: 16 }}>
              Mide cuánto un predictor influye realmente sobre una variable objetivo (target)
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30, fontSize: 24, color: 'var(--ink-1)', marginTop: 20 }}>
              <div>
                <h4 style={{ color: 'var(--ink)', marginBottom: 10 }}>1. Features como predictores</h4>
                • Feature completa: <code>intervalo_edad</code><br/>
                • Valor de feature: <code>intervalo_edad = 0.75</code>
              </div>
              <div>
                <h4 style={{ color: 'var(--ink)', marginBottom: 10 }}>2. Clusters como predictores</h4>
                • Valor de cluster: <code>cluster = 2</code>
              </div>
            </div>
          </div>
        </Reveal>
      </ZoomWrapper>

      {/* Beat 1: Validez Estadística General */}
      <ZoomWrapper sceneIndex={4} beatIndex={1}>
        <Reveal on={here && b === 1} x={150} y={120}>
          <div className="t-eyebrow">// 07. REQUISITOS ESTADISTICOS</div>
        </Reveal>
        <Reveal on={here && b === 1} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 56 }}>Parámetros Generales de Validez</div>
        </Reveal>
        <Reveal on={here && b === 1} x={150} y={260}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, width: 1620 }}>
            {/* Card 1: n >= 30 */}
            <div className="deck-card-accent" style={{ padding: '28px 32px', borderRadius: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <span className="highlight-badge" style={{ fontSize: 24, fontWeight: 700, padding: '6px 16px' }}>n ≥ 30</span>
                <span style={{ fontSize: 18, color: '#38bdf8', letterSpacing: '0.05em', fontWeight: 600, textTransform: 'uppercase' }}>Teorema Central del Límite</span>
              </div>
              <h3 style={{ fontSize: 26, color: '#ffffff', marginBottom: 10, fontWeight: 600 }}>Tamaño Muestral Mínimo</h3>
              <p style={{ fontSize: 20, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>
                Umbral estadístico indispensable. Con menos de 30 observaciones, las distribuciones muestrales no son fiables para inferencia.
              </p>
            </div>

            {/* Card 2: p-value < 0.05 */}
            <div className="deck-card-accent" style={{ padding: '28px 32px', borderRadius: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <span className="highlight-badge" style={{ fontSize: 24, fontWeight: 700, padding: '6px 16px' }}>p-value &lt; 0.05</span>
                <span style={{ fontSize: 18, color: '#38bdf8', letterSpacing: '0.05em', fontWeight: 600, textTransform: 'uppercase' }}>Test Chi-Cuadrado (χ²)</span>
              </div>
              <h3 style={{ fontSize: 26, color: '#ffffff', marginBottom: 10, fontWeight: 600 }}>Significancia / Independencia</h3>
              <p style={{ fontSize: 20, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>
                Menos del 5% de probabilidad de asociación por puro azar. Requiere una frecuencia esperada &gt;5 ocurrencias por celda.
              </p>
            </div>

            {/* Card 3: Cramer's V >= 0.1 */}
            <div className="deck-card-accent" style={{ padding: '28px 32px', borderRadius: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <span className="highlight-badge" style={{ fontSize: 24, fontWeight: 700, padding: '6px 16px' }}>V ≥ 0.1</span>
                <span style={{ fontSize: 18, color: '#38bdf8', letterSpacing: '0.05em', fontWeight: 600, textTransform: 'uppercase' }}>Cramér's V</span>
              </div>
              <h3 style={{ fontSize: 26, color: '#ffffff', marginBottom: 10, fontWeight: 600 }}>Fuerza de Asociación</h3>
              <p style={{ fontSize: 20, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>
                Mide la intensidad y similitud entre la distribución del predictor y la variable objetivo (target).
              </p>
            </div>

            {/* Card 4: Kruskal-Wallis & epsilon^2 >= 0.01 */}
            <div className="deck-card-accent" style={{ padding: '28px 32px', borderRadius: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <span className="highlight-badge" style={{ fontSize: 24, fontWeight: 700, padding: '6px 16px' }}>ε² ≥ 0.01</span>
                <span style={{ fontSize: 18, color: '#38bdf8', letterSpacing: '0.05em', fontWeight: 600, textTransform: 'uppercase' }}>Kruskal-Wallis (H & p &lt; 0.05)</span>
              </div>
              <h3 style={{ fontSize: 26, color: '#ffffff', marginBottom: 10, fontWeight: 600 }}>Separación de Rangos</h3>
              <p style={{ fontSize: 20, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>
                Magnitud del efecto entre rangos de grupo. Un tamaño de efecto ε² &gt; 0.01 resulta en una diferencia no desestimable.
              </p>
            </div>
          </div>
        </Reveal>
      </ZoomWrapper>

      {/* Beat 2: Criterios Value & Feature Level */}
      <ZoomWrapper sceneIndex={4} beatIndex={2}>
        <Reveal on={here && b === 2} x={150} y={120}>
          <div className="t-eyebrow">// 07. CRITERIOS DE ANALISIS PIPELINE</div>
        </Reveal>
        <Reveal on={here && b === 2} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 56 }}>Criterios de Evaluación por Función</div>
        </Reveal>
        <Reveal on={here && b === 2} x={150} y={270}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30, width: 1620 }}>
            <div className="deck-card" style={{ padding: 32, borderRadius: 16 }}>
              <h3 style={{ fontSize: 28, color: '#38bdf8', marginBottom: 16 }}><code>analyze_value_level_predictability</code></h3>
              <ul style={{ fontSize: 22, lineHeight: 1.7, color: 'var(--ink-2)' }}>
                <li>• n_observations ≥ 10</li>
                <li>• Chi² p-value &lt; 0.05</li>
                <li>• Cramér’s V ≥ 0.1</li>
                <li>• Confidence Interval del Lift: 90% (std dev &lt; 1.645)</li>
                <li>&nbsp;&nbsp;➔ <code>&lt; 1</code>: Factores protectores | <code>&gt; 1</code>: Factores de riesgo</li>
                <li>• Kruskal–Wallis: p &lt; 0.05, ε² ≥ 0.01</li>
              </ul>
            </div>
            <div className="deck-card" style={{ padding: 32, borderRadius: 16 }}>
              <h3 style={{ fontSize: 28, color: '#38bdf8', marginBottom: 16 }}><code>analyze_feature_predictability</code></h3>
              <ul style={{ fontSize: 22, lineHeight: 1.7, color: 'var(--ink-2)' }}>
                <li>• n_observations ≥ 10</li>
                <li>• Chi² p-value &lt; 0.05</li>
                <li>• Cramér’s V ≥ 0.1</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </ZoomWrapper>

      {/* Beat 3: Resultados por Feature */}
      <ZoomWrapper sceneIndex={4} beatIndex={3}>
        <Reveal on={here && b === 3} x={150} y={120}>
          <div className="t-eyebrow">// 07. RESULTADOS POR FEATURE</div>
        </Reveal>
        <Reveal on={here && b === 3} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 56 }}>Predictabilidad por Feature Completa</div>
        </Reveal>
        <Reveal on={here && b === 3} x={150} y={270}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30, width: 1620 }}>
            <div className="deck-card" style={{ padding: 32, borderRadius: 16 }}>
              <h3 style={{ fontSize: 28, color: '#38bdf8', marginBottom: 16 }}>exp8 (Solo Demografía)</h3>
              <p style={{ fontSize: 22, lineHeight: 1.6, color: 'var(--ink-2)' }}>
                <code>intervalo_edad</code> predice únicamente:
              </p>
              <ul style={{ fontSize: 20, lineHeight: 1.6, color: 'var(--ink-1)', marginTop: 10 }}>
                <li>• ransomware_attack</li>
                <li>• identity_impersonation</li>
                <li>• communication_eavesdropping</li>
              </ul>
              <div style={{ marginTop: 16, fontSize: 20, color: 'var(--accent)' }}>
                NMI &lt; 1%, Cramér’s V ≈ 0.1 (Asociación débil)
              </div>
            </div>
            <div className="deck-card-accent" style={{ padding: 32, borderRadius: 16 }}>
              <h3 style={{ fontSize: 28, color: '#38bdf8', marginBottom: 16 }}>exp9 (Demografía + Incidentes)</h3>
              <p style={{ fontSize: 22, lineHeight: 1.6, color: 'var(--ink-2)' }}>
                <strong>16 combinaciones de incidentes</strong> predicen otros incidentes de seguridad.
              </p>
              <div style={{ marginTop: 16, fontSize: 22, color: 'var(--ink-1)' }}>
                • Normalized Mutual Info: <strong>NMI ∈ [7.5%, 11%]</strong><br/>
                • Cramér’s V: <strong>V ∈ [0.20, 0.30]</strong>
              </div>
            </div>
          </div>
        </Reveal>
      </ZoomWrapper>

      {/* Beat 4: Resultados por Valor & Por Cluster */}
      <ZoomWrapper sceneIndex={4} beatIndex={4}>
        <Reveal on={here && b === 4} x={150} y={120}>
          <div className="t-eyebrow">// 07. RESULTADOS POR VALOR Y CLUSTER</div>
        </Reveal>
        <Reveal on={here && b === 4} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 56 }}>Predictabilidad por Valor y Cluster</div>
        </Reveal>
        <Reveal on={here && b === 4} x={150} y={270}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30, width: 1620 }}>
            <div className="deck-card" style={{ padding: 32, borderRadius: 16 }}>
              <h3 style={{ fontSize: 28, color: '#38bdf8', marginBottom: 16 }}>Por Valor de Feature</h3>
              <ul style={{ fontSize: 22, lineHeight: 1.6, color: 'var(--ink-2)' }}>
                <li>• <strong>exp8:</strong> Ninguna asociación estadísticamente significativa encontrada.</li>
                <li>• <strong>exp9:</strong> Todas las asociaciones significativas tienen como predictor incidentes de seguridad previos.</li>
              </ul>
            </div>
            <div className="deck-card-accent" style={{ padding: 32, borderRadius: 16 }}>
              <h3 style={{ fontSize: 28, color: '#38bdf8', marginBottom: 16 }}>Por Cluster</h3>
              <ul style={{ fontSize: 22, lineHeight: 1.6, color: 'var(--ink-2)' }}>
                <li>• <strong>exp8:</strong> Ninguna asociación significativa encontrada.</li>
                <li>• <strong>exp9:</strong> 8 de 24 asociaciones significativas presentan más del 5% de Normalized Mutual Information (NMI).</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </ZoomWrapper>
    </>
  );
}

export const Resultados = () => <Scene index={4}><Resultados_ /></Scene>;
