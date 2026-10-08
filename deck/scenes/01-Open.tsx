import { Reveal, Scene, useScene } from 'beatdeck';
import { config } from '../deck.config';
import { ZoomWrapper } from '../components/ZoomWrapper';

const AGENDA_ITEMS = [
  '1. Introducción', '2. Datos', '3. Metodología', '4. Análisis Exploratorio',
  '5. Clustering (PAM)', '6. Interpretación', '7. Predictabilidad', '8. Disclaimers Encuesta',
  '9. Codebase Python', '10. Links Resultados', '11. Conclusiones', '12. Próximos Pasos'
];

function Open_() {
  const { here, b } = useScene();
  const isTitle = here && b === 0;
  const isAgenda = here && b === 1;
  const isMotiv = here && b === 2;
  const isAlcance = here && b === 3;

  return (
    <>
      {/* Beat 0: Title Slide */}
      <ZoomWrapper sceneIndex={0} beatIndex={0}>
        <Reveal on={isTitle} x={150} y={220}>
          <div className="t-eyebrow">// PROYECTO CIBERSEGURIDAD & DEMOGRAFIA</div>
        </Reveal>
        <Reveal on={isTitle} x={150} y={300} ms={1000}>
          <div className="deck-card-accent" style={{ padding: '40px 48px', borderRadius: 20, width: 1550 }}>
            <div className="t-statement" style={{ fontSize: 80, lineHeight: 1.15 }}>
              {config.title}
              <div style={{ marginTop: 24 }}>
                <span className="text-highlight" style={{ fontSize: 36 }}>
                  {config.subtitle}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal on={isTitle} x={150} y={690}>
          <div className="t-meta" style={{ fontSize: 32, color: 'var(--ink-2)' }}>
            Ponente: <span className="highlight-badge" style={{ fontSize: 28 }}>{config.author}</span>
          </div>
        </Reveal>
      </ZoomWrapper>

      {/* Beat 1: Agenda */}
      <ZoomWrapper sceneIndex={0} beatIndex={1}>
        <Reveal on={isAgenda} x={150} y={120}>
          <div className="t-eyebrow">// ESTRUCTURA DE LA PRESENTACION</div>
        </Reveal>
        <Reveal on={isAgenda} x={150} y={180}>
          <div className="t-statement" style={{ fontSize: 64 }}>
            Índice de <span className="text-highlight">Contenidos</span>
          </div>
        </Reveal>
        {AGENDA_ITEMS.map((item, idx) => {
          const col = idx % 3;
          const row = Math.floor(idx / 3);
          const posX = 150 + col * 530;
          const posY = 290 + row * 130;
          return (
            <Reveal key={item} on={isAgenda} x={posX} y={posY} delay={idx * 30}>
              <div className="deck-card" style={{
                padding: '20px 24px',
                borderRadius: '12px',
                width: 490,
                fontSize: 26,
                fontWeight: 500,
                color: 'var(--ink-1)',
                display: 'flex',
                alignItems: 'center',
              }}>
                <span className="highlight-badge" style={{ padding: '2px 10px', marginRight: 14 }}>
                  {idx + 1}.
                </span>
                {item.replace(/^\d+\.\s*/, '')}
              </div>
            </Reveal>
          );
        })}
      </ZoomWrapper>

      {/* Beat 2: Motivación & Preguntas Clave */}
      <ZoomWrapper sceneIndex={0} beatIndex={2}>
        <Reveal on={isMotiv} x={150} y={120}>
          <div className="t-eyebrow">// 01. INTRODUCCION & MOTIVACION</div>
        </Reveal>
        <Reveal on={isMotiv} x={150} y={200}>
          <div className="t-statement" style={{ fontSize: 64 }}>Preguntas Clave del Estudio</div>
        </Reveal>
        <Reveal on={isMotiv} x={150} y={320}>
          <div className="deck-card-accent" style={{ padding: 40, borderRadius: 16, width: 1600 }}>
            <div style={{ fontSize: 34, lineHeight: 1.5, color: 'var(--ink)' }}>
              • ¿Puede alguna característica <span className="text-highlight">demográfica</span> predecir si vas a sufrir incidentes de ciberseguridad?
            </div>
            <div style={{ fontSize: 34, lineHeight: 1.5, color: 'var(--ink)', marginTop: 24 }}>
              • ¿Cómo varían los problemas según <span className="highlight-badge">edad</span>, <span className="highlight-badge">género</span> o <span className="highlight-badge">ubicación</span>?
            </div>
            <div style={{ fontSize: 34, lineHeight: 1.5, color: '#38bdf8', marginTop: 24, fontWeight: 600 }}>
              ➔ Objetivo: Descubrir la relación real entre perfiles demográficos e incidencias de seguridad.
            </div>
          </div>
        </Reveal>
      </ZoomWrapper>

      {/* Beat 3: Fuera del Alcance */}
      <ZoomWrapper sceneIndex={0} beatIndex={3}>
        <Reveal on={isAlcance} x={150} y={120}>
          <div className="t-eyebrow">// 01. LIMITES DE INVESTIGACION</div>
        </Reveal>
        <Reveal on={isAlcance} x={150} y={200}>
          <div className="t-statement" style={{ fontSize: 64 }}>Fuera del Alcance</div>
        </Reveal>
        <Reveal on={isAlcance} x={150} y={320}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, width: 1600 }}>
            <div className="deck-card" style={{ border: '1px solid rgba(239, 68, 68, 0.4) !important', padding: 36, borderRadius: 16 }}>
              <h3 style={{ fontSize: 36, color: '#f87171', marginBottom: 20 }}>Excluido en esta fase</h3>
              <p style={{ fontSize: 28, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                Analizar combinaciones de incidentes pura y exclusivamente (clustering basado solo en incidentes de seguridad).
              </p>
            </div>
            <div className="deck-card" style={{ border: '1px solid rgba(56, 189, 248, 0.4) !important', padding: 36, borderRadius: 16 }}>
              <h3 style={{ fontSize: 36, color: '#38bdf8', marginBottom: 20 }}>Trabajo Futuro</h3>
              <p style={{ fontSize: 28, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                Probar otros métodos de clustering y clustering secuencial en fases posteriores.
              </p>
            </div>
          </div>
        </Reveal>
      </ZoomWrapper>
    </>
  );
}

export const Open = () => <Scene index={0}><Open_ /></Scene>;
