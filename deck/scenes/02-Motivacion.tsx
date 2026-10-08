import { Reveal, Scene, useScene, CountUp } from 'beatdeck';
import { ZoomWrapper } from '../components/ZoomWrapper';

function Motivacion_() {
  const { here, b, entry } = useScene();

  return (
    <>
      {/* Beat 0: Estructura de Datos */}
      <ZoomWrapper sceneIndex={1} beatIndex={0}>
        <Reveal on={here && b === 0} x={150} y={120}>
          <div className="t-eyebrow">// 02. DATOS DEL ESTUDIO</div>
        </Reveal>
        <Reveal on={here && b === 0} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 64 }}>
            Demografía <span style={{ color: 'var(--ink-3)' }}>vs</span> <span className="text-highlight">Incidentes de Seguridad</span>
          </div>
        </Reveal>
        <Reveal on={here && b === 0} x={150} y={290}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 40, width: 1620 }}>
            <div className="deck-card" style={{ padding: 32, borderRadius: 16 }}>
              <h3 style={{ fontSize: 32, color: '#38bdf8', marginBottom: 24 }}>Variables Demográficas (4)</h3>
              <ul style={{ fontSize: 26, lineHeight: 1.8, color: 'var(--ink-1)' }}>
                <li><strong>sexo_binario:</strong> <span className="highlight-badge">{'{0-1}'}</span></li>
                <li><strong>nivel_estudios:</strong> <span className="highlight-badge">{'{0-2}'}</span></li>
                <li><strong>tipo_municipio:</strong> <span className="highlight-badge">{'{0-5}'}</span></li>
                <li><strong>intervalo_edad:</strong> <span className="highlight-badge">{'{0-4}'}</span></li>
              </ul>
            </div>
            <div className="deck-card" style={{ padding: 32, borderRadius: 16 }}>
              <h3 style={{ fontSize: 32, color: '#38bdf8', marginBottom: 24 }}>15 Incidentes de Seguridad (Binarias)</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px 20px', fontSize: 20, color: 'var(--ink-2)' }}>
                <div>• malware_infection</div>
                <div>• service_disruption</div>
                <div>• device_theft</div>
                <div>• data_loss</div>
                <div>• hate_content</div>
                <div>• privacy_violation</div>
                <div>• email_spam</div>
                <div>• adult_content</div>
                <div>• eavesdropping</div>
                <div>• impersonation</div>
                <div>• bank_hacking</div>
                <div>• ransomware</div>
                <div>• unauthorized_access</div>
                <div>• other_issues</div>
              </div>
            </div>
          </div>
        </Reveal>
      </ZoomWrapper>

      {/* Beat 1: Muestra & Combinatoria */}
      <ZoomWrapper sceneIndex={1} beatIndex={1}>
        <Reveal on={here && b === 1} x={150} y={120}>
          <div className="t-eyebrow">// 02. COMPLEJIDAD DEL ESPACIO DE DATOS</div>
        </Reveal>
        <Reveal on={here && b === 1} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 64 }}>Tamaño de Muestra y Combinatoria</div>
        </Reveal>
        <Reveal on={here && b === 1} x={150} y={320}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, width: 1620 }}>
            <div className="deck-card-accent" style={{ padding: 40, borderRadius: 16, textAlign: 'center' }}>
              <div style={{ fontSize: 84, fontWeight: 800, color: '#38bdf8' }}>
                <CountUp value={3600} from={0} entry={entry} ms={1200} prefix="~" locale="es-ES" />
              </div>
              <div style={{ fontSize: 28, marginTop: 16, color: 'var(--ink-1)' }}>Individuos encuestados</div>
              <div style={{ fontSize: 20, marginTop: 8, color: 'var(--ink-3)' }}>(0 valores NaN)</div>
            </div>
            <div className="deck-card" style={{ padding: 40, borderRadius: 16, textAlign: 'center' }}>
              <div style={{ fontSize: 84, fontWeight: 800, color: 'var(--ink)' }}>
                <CountUp value={250} from={0} entry={entry} ms={1000} prefix="~" locale="es-ES" />
              </div>
              <div style={{ fontSize: 28, marginTop: 16, color: 'var(--ink-1)' }}>Combinaciones demográficas</div>
            </div>
            <div className="deck-card-accent" style={{ padding: 40, borderRadius: 16, textAlign: 'center' }}>
              <div style={{ fontSize: 84, fontWeight: 800, color: '#38bdf8' }}>
                <CountUp value={32768} from={0} entry={entry} ms={1500} locale="es-ES" />
              </div>
              <div style={{ fontSize: 28, marginTop: 16, color: 'var(--ink-1)' }}>Combinaciones incidentes (2¹⁵)</div>
            </div>
          </div>
        </Reveal>
      </ZoomWrapper>

      {/* Beat 2: Análisis de Frecuencia Datos Iniciales */}
      <ZoomWrapper sceneIndex={1} beatIndex={2}>
        <Reveal on={here && b === 2} x={150} y={120}>
          <div className="t-eyebrow">// 04. ANALISIS DE FRECUENCIA DATOS INICIALES</div>
        </Reveal>
        <Reveal on={here && b === 2} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 56 }}>Representatividad de la Muestra</div>
        </Reveal>
        <Reveal on={here && b === 2} x={150} y={280}>
          <div className="deck-card-accent" style={{ padding: 40, borderRadius: 16, width: 1620 }}>
            <div style={{ fontSize: 32, fontWeight: 600, color: '#38bdf8', marginBottom: 20 }}>
              ¿Es la distribución demográfica de la muestra equilibrada y representativa?
            </div>
            <ul style={{ fontSize: 26, lineHeight: 1.8, color: 'var(--ink-1)' }}>
              <li>• Se analiza si la mezcla de variables (no solo % de mujeres o % &gt;35 años, sino sus combinaciones cruzadas) coincide con la población real.</li>
              <li>• Faltaría comparar detalladamente los resultados con un censo oficial para validar si la muestra presenta sesgos de selección.</li>
            </ul>
          </div>
        </Reveal>
      </ZoomWrapper>

      {/* Beat 3: Componentes Múltiples (MCA) */}
      <ZoomWrapper sceneIndex={1} beatIndex={3}>
        <Reveal on={here && b === 3} x={150} y={120}>
          <div className="t-eyebrow">// 04. ANALISIS EXPLORATORIO (MCA)</div>
        </Reveal>
        <Reveal on={here && b === 3} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 56 }}>Análisis de Componentes Múltiples (MCA)</div>
        </Reveal>
        <Reveal on={here && b === 3} x={150} y={280}>
          <div className="deck-card" style={{ padding: 36, borderRadius: 16, width: 1620 }}>
            <div style={{ fontSize: 26, lineHeight: 1.6, color: 'var(--ink-1)' }}>
              Valores demográficos tomados como principales y proyectados los incidentes de ciberseguridad sobre ellos:
            </div>
            <ul style={{ fontSize: 24, lineHeight: 1.8, color: 'var(--ink-2)', marginTop: 16 }}>
              <li>• <strong>Ausencia de asociación fuerte:</strong> No se aprecia asociación clara (ni positiva ni negativa) entre variables demográficas e incidentes.</li>
              <li>• <strong>Incidentes cerca del origen (0):</strong> Los incidentes aparecen de forma transversal y dispersa.</li>
              <li>• <strong>Outlier principal:</strong> `nivel_estudios == 0`, explicado por su muy baja frecuencia en la muestra.</li>
              <li style={{ color: '#38bdf8', marginTop: 16, fontWeight: 600 }}>
                ➔ Conclusión MCA: Ningún factor demográfico parece ser predictor determinante. La segmentación por distancia no devolverá una estructura clara.
              </li>
            </ul>
          </div>
        </Reveal>
      </ZoomWrapper>
    </>
  );
}

export const Motivacion = () => <Scene index={1}><Motivacion_ /></Scene>;
