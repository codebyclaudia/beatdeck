import { Reveal, Scene, useScene } from 'beatdeck';
import { ZoomWrapper } from '../components/ZoomWrapper';

const CORRELATION_PAIRS_LEFT = [
  { a: 'hate_or_extremist_content', b: 'adult_content_exposure', pct: '38.9%' },
  { a: 'privacy_violation', b: 'adult_content_exposure', pct: '37.8%' },
  { a: 'ransomware_attack', b: 'adult_content_exposure', pct: '36.6%' },
  { a: 'device_theft', b: 'adult_content_exposure', pct: '35.2%' },
  { a: 'unauthorized_access', b: 'adult_content_exposure', pct: '35.0%' },
  { a: 'ransomware_attack', b: 'communication_eavesdropping', pct: '34.4%' },
  { a: 'privacy_violation', b: 'service_disruption', pct: '33.9%' },
  { a: 'communication_eavesdropping', b: 'identity_impersonation', pct: '33.6%' },
];

const CORRELATION_PAIRS_RIGHT = [
  { a: 'ransomware_attack', b: 'identity_impersonation', pct: '33.3%' },
  { a: 'ransomware_attack', b: 'hate_or_extremist_content', pct: '32.3%' },
  { a: 'ransomware_attack', b: 'privacy_violation', pct: '32.3%' },
  { a: 'ransomware_attack', b: 'service_disruption', pct: '32.3%' },
  { a: 'communication_eavesdropping', b: 'adult_content_exposure', pct: '31.2%' },
  { a: 'communication_eavesdropping', b: 'service_disruption', pct: '31.2%' },
  { a: 'unauthorized_access', b: 'identity_impersonation', pct: '31.0%' },
];

function Disclaimers_() {
  const { here, b } = useScene();

  return (
    <>
      {/* Beat 0: Frecuencia de Incidentes */}
      <ZoomWrapper sceneIndex={5} beatIndex={0}>
        <Reveal on={here && b === 0} x={150} y={120}>
          <div className="t-eyebrow">// 08. DISCLAIMERS SOBRE DATOS DE LA ENCUESTA</div>
        </Reveal>
        <Reveal on={here && b === 0} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 56 }}>Distribución y Frecuencias de Incidentes</div>
        </Reveal>
        <Reveal on={here && b === 0} x={150} y={280}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40, width: 1620 }}>
            <div className="deck-card-accent" style={{ padding: 32, borderRadius: 16 }}>
              <h3 style={{ fontSize: 32, color: '#38bdf8', marginBottom: 20 }}>Frecuencia General</h3>
              <ul style={{ fontSize: 24, lineHeight: 1.7, color: 'var(--ink-1)' }}>
                <li>• <strong>58% de la muestra</strong> ha sufrido al menos un incidente de ciberseguridad.</li>
                <li>• Sin contar <em>Email Spam</em>, solo <strong>1/3 de la muestra</strong> ha sufrido incidentes.</li>
                <li>• Los incidentes no-spam son raros (&lt;9%), por lo que no hay suficientes observaciones para análisis estadísticamente potentes.</li>
              </ul>
            </div>
            <div className="deck-card" style={{ padding: 32, borderRadius: 16 }}>
              <h3 style={{ fontSize: 32, color: 'var(--ink)', marginBottom: 20 }}>Frecuencias Principales</h3>
              <ul style={{ fontSize: 24, lineHeight: 1.7, color: 'var(--ink-2)' }}>
                <li>• <strong>Email spam:</strong> <span className="highlight-badge">47%</span></li>
                <li>• <strong>adult_content:</strong> <span className="highlight-badge">9%</span></li>
                <li>• <strong>service_disruption:</strong> <span className="highlight-badge">8%</span></li>
                <li>• <strong>malware_infection:</strong> <span className="highlight-badge">6%</span></li>
                <li>• <strong>Resto de incidentes:</strong> ≤ 5% (&lt;180 pers)</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </ZoomWrapper>

      {/* Beat 1: Correlación entre Incidentes */}
      <ZoomWrapper sceneIndex={5} beatIndex={1}>
        <Reveal on={here && b === 1} x={150} y={120}>
          <div className="t-eyebrow">// 08. INTERCORRELACION DE INCIDENTES</div>
        </Reveal>
        <Reveal on={here && b === 1} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 56 }}>Asociación Significativa entre Incidentes</div>
        </Reveal>
        <Reveal on={here && b === 1} x={150} y={280}>
          <div className="deck-card" style={{ padding: 36, borderRadius: 16, width: 1620 }}>
            <div style={{ fontSize: 28, color: 'var(--ink-1)', lineHeight: 1.6, marginBottom: 20 }}>
              Los incidentes de ciberseguridad muestran alta intercorrelación entre sí:
            </div>
            <ul style={{ fontSize: 24, lineHeight: 1.8, color: 'var(--ink-2)' }}>
              <li>• <strong>Promedio de incidentes:</strong> 1.86 incidentes por persona afectada.</li>
              <li>• <strong>Multi-incidencia:</strong> El 42% de los afectados sufrió 2 o más incidentes.</li>
              <li>• <strong>Combinaciones más comunes:</strong></li>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginTop: 12, color: '#38bdf8', fontSize: 22 }}>
                <div>• Spam + Contenido Adulto: <strong>6.5%</strong></div>
                <div>• Spam + Caída Servicios: <strong>5.7%</strong></div>
                <div>• Malware + Spam: <strong>4.3%</strong></div>
              </div>
            </ul>
          </div>
        </Reveal>
      </ZoomWrapper>

      {/* Beat 2: Tabla Completa de Pares Correlacionados sin Spam */}
      <ZoomWrapper sceneIndex={5} beatIndex={2}>
        <Reveal on={here && b === 2} x={150} y={120}>
          <div className="t-eyebrow">// 08. COMBINACIONES CORRELACIONADAS SIN SPAM</div>
        </Reveal>
        <Reveal on={here && b === 2} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 48 }}>Pares con Alta Solapación de Co-ocurrencia (% A en B)</div>
        </Reveal>
        <Reveal on={here && b === 2} x={150} y={260}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30, width: 1620 }}>
            <div className="deck-card" style={{ padding: 20, borderRadius: 12 }}>
              <table style={{ width: '100%', fontSize: 18, borderCollapse: 'collapse', color: 'var(--ink-1)' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(56,189,248,0.4)', textAlign: 'left', color: '#38bdf8' }}>
                    <th style={{ padding: 8 }}>Incident 1 (A)</th>
                    <th style={{ padding: 8 }}>Incident 2 (B)</th>
                    <th style={{ padding: 8 }}>% A en B</th>
                  </tr>
                </thead>
                <tbody>
                  {CORRELATION_PAIRS_LEFT.map((p, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: 6, fontSize: 16 }}>{p.a}</td>
                      <td style={{ padding: 6, fontSize: 16 }}>{p.b}</td>
                      <td style={{ padding: 6, fontWeight: 700, color: '#38bdf8' }}>{p.pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="deck-card" style={{ padding: 20, borderRadius: 12 }}>
              <table style={{ width: '100%', fontSize: 18, borderCollapse: 'collapse', color: 'var(--ink-1)' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(56,189,248,0.4)', textAlign: 'left', color: '#38bdf8' }}>
                    <th style={{ padding: 8 }}>Incident 1 (A)</th>
                    <th style={{ padding: 8 }}>Incident 2 (B)</th>
                    <th style={{ padding: 8 }}>% A en B</th>
                  </tr>
                </thead>
                <tbody>
                  {CORRELATION_PAIRS_RIGHT.map((p, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: 6, fontSize: 16 }}>{p.a}</td>
                      <td style={{ padding: 6, fontSize: 16 }}>{p.b}</td>
                      <td style={{ padding: 6, fontWeight: 700, color: '#38bdf8' }}>{p.pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </ZoomWrapper>

      {/* Beat 3: Sesgos y Validez */}
      <ZoomWrapper sceneIndex={5} beatIndex={3}>
        <Reveal on={here && b === 3} x={150} y={120}>
          <div className="t-eyebrow">// 08. EVALUACION CRITICA DE DATOS</div>
        </Reveal>
        <Reveal on={here && b === 3} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 56 }}>Validez de la Encuesta (2022)</div>
        </Reveal>
        <Reveal on={here && b === 3} x={150} y={280}>
          <div className="deck-card-accent" style={{ padding: 36, borderRadius: 16, width: 1620 }}>
            <div style={{ fontSize: 26, lineHeight: 1.7, color: 'var(--ink-1)' }}>
              Las frecuencias reportadas de incidentes leves (spam, exposición a contenido inapropiado) son sensiblemente inferiores a la prevalencia real observada en la población general.
            </div>
            <div style={{ fontSize: 24, lineHeight: 1.7, color: '#38bdf8', marginTop: 24, fontWeight: 600 }}>
              ➔ Conclusión metodológica: Es plausible que existan sesgos de infra-reporte o limitaciones en el diseño del muestreo de la encuesta de 2022.
            </div>
          </div>
        </Reveal>
      </ZoomWrapper>
    </>
  );
}

export const Disclaimers = () => <Scene index={5}><Disclaimers_ /></Scene>;
