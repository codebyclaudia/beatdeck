import { Reveal, Scene, useScene } from 'beatdeck';
import { ZoomWrapper } from '../components/ZoomWrapper';

function KMedoides_() {
  const { here, b } = useScene();

  return (
    <>
      {/* Beat 0: Validación Externa & Cohesión (CR Formula) */}
      <ZoomWrapper sceneIndex={3} beatIndex={0}>
        <Reveal on={here && b === 0} x={150} y={120}>
          <div className="t-eyebrow">// 06. METODOLOGIA DE INTERPRETACION DE CLUSTERS</div>
        </Reveal>
        <Reveal on={here && b === 0} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 56 }}>Criterios de Validación Interna y Externa</div>
        </Reveal>
        <Reveal on={here && b === 0} x={150} y={270}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, width: 1620 }}>
            <div className="deck-card" style={{ padding: 24, borderRadius: 16 }}>
              <h3 style={{ fontSize: 26, color: '#38bdf8', marginBottom: 12 }}>Consistency</h3>
              <p style={{ fontSize: 20, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                Feature Divergence (KL Divergence): mide cuánto difiere la distribución en un cluster de la global (<code>&gt; 1</code> = divergencia significativa).
              </p>
            </div>
            <div className="deck-card" style={{ padding: 24, borderRadius: 16 }}>
              <h3 style={{ fontSize: 26, color: '#38bdf8', marginBottom: 12 }}>Prominence & Breakdown</h3>
              <p style={{ fontSize: 20, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                Valores de características más frecuentes en el cluster y desglose porcentual detallado por cluster.
              </p>
            </div>
            <div className="deck-card-accent" style={{ padding: 24, borderRadius: 16 }}>
              <h3 style={{ fontSize: 26, color: '#38bdf8', marginBottom: 12 }}>Cohesion (CR Formula)</h3>
              <div style={{ fontSize: 22, color: 'var(--ink-1)', margin: '10px 0', fontFamily: 'monospace', textAlign: 'center', background: 'rgba(0,0,0,0.4)', padding: 10, borderRadius: 8 }}>
                CR = Dist_Inter / Dist_Intra
              </div>
              <p style={{ fontSize: 18, color: 'var(--ink-2)' }}>
                Valores cercanos a 0 indican menor solapamiento entre clusters.
              </p>
            </div>
          </div>
        </Reveal>
      </ZoomWrapper>

      {/* Beat 1: Perfiles exp8 (Solo Demografía) */}
      <ZoomWrapper sceneIndex={3} beatIndex={1}>
        <Reveal on={here && b === 1} x={150} y={120}>
          <div className="t-eyebrow">// 06. INTERPRETACION EXP8 (SOLO DEMOGRAFIA)</div>
        </Reveal>
        <Reveal on={here && b === 1} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 56 }}>Perfiles Demográficos (8 Clusters)</div>
        </Reveal>
        <Reveal on={here && b === 1} x={150} y={270}>
          <div className="deck-card" style={{ padding: 32, borderRadius: 16, width: 1620 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 40px', fontSize: 22, lineHeight: 1.6, color: 'var(--ink-1)' }}>
              <div>• <strong>Cluster 0:</strong> Hombres 35+, est. sup, municipios grandes</div>
              <div>• <strong>Cluster 1:</strong> Mujeres 35+, est. sec, municipios pequeños</div>
              <div>• <strong>Cluster 2:</strong> Mujeres 15–45, est. sup, municipios grandes</div>
              <div>• <strong>Cluster 3:</strong> Hombres 35+, municipios pequeños</div>
              <div>• <strong>Cluster 4:</strong> Hombres 35+, est. sec, municipios grandes</div>
              <div>• <strong>Cluster 5:</strong> Mujeres 35+, est. sec, municipios grandes</div>
              <div>• <strong>Cluster 6:</strong> Mujeres 45+, est. sup, municipios grandes</div>
              <div>• <strong>Cluster 7:</strong> Mujeres 25–54, est. sup, municipios pequeños</div>
            </div>
          </div>
        </Reveal>
      </ZoomWrapper>

      {/* Beat 2: Perfiles exp9 (Demografía + Incidentes) */}
      <ZoomWrapper sceneIndex={3} beatIndex={2}>
        <Reveal on={here && b === 2} x={150} y={120}>
          <div className="t-eyebrow">// 06. INTERPRETACION EXP9 (DEMOGRAFIA + INCIDENTES)</div>
        </Reveal>
        <Reveal on={here && b === 2} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 56 }}>Perfiles Combinados (6 Clusters)</div>
        </Reveal>
        <Reveal on={here && b === 2} x={150} y={270}>
          <div className="deck-card-accent" style={{ padding: 32, borderRadius: 16, width: 1620 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 40px', fontSize: 22, lineHeight: 1.6, color: 'var(--ink-1)' }}>
              <div>• <strong>Cluster 0:</strong> Hombres 25–54, est. sup → <span className="highlight-badge">Alto riesgo incidentes</span></div>
              <div>• <strong>Cluster 1:</strong> Mujeres 35+, est. sup → <span className="highlight-badge">Receptores Spam</span></div>
              <div>• <strong>Cluster 2:</strong> Hombres 35+, grandes pob. → <span className="highlight-badge">Receptores Spam</span></div>
              <div>• <strong>Cluster 3:</strong> Hombres 35+ → <span className="highlight-badge">Bajo riesgo incidentes</span></div>
              <div>• <strong>Cluster 4:</strong> Mujeres 25–54, pob. pequeñas → <span className="highlight-badge">Spam + Malware</span></div>
              <div>• <strong>Cluster 5:</strong> Mujeres 25+ → <span className="highlight-badge">Bajo riesgo incidentes</span></div>
            </div>
          </div>
        </Reveal>
      </ZoomWrapper>
    </>
  );
}

export const KMedoides = () => <Scene index={3}><KMedoides_ /></Scene>;
