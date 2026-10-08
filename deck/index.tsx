import { defineDeck } from 'beatdeck';
import '../themes/neutral.css';
import './enhanced.css';
import { config } from './deck.config';
import { SCENES } from './scenes';
import { initialLive, timeline, type Live } from './timeline';
import { ParticleBackground } from './components/ParticleBackground';
import { Open } from './scenes/01-Open';
import { Motivacion } from './scenes/02-Motivacion';
import { Metodologia } from './scenes/03-Metodologia';
import { KMedoides } from './scenes/04-KMedoides';
import { Resultados } from './scenes/05-Resultados';
import { Disclaimers } from './scenes/06-Disclaimers';
import { Conclusiones } from './scenes/07-Conclusiones';

/** Every layer of the stage, back to front. All stay mounted; each shows itself for its own scene. */
function Stage() {
  return (
    <>
      <ParticleBackground />
      <Open />
      <Motivacion />
      <Metodologia />
      <KMedoides />
      <Resultados />
      <Disclaimers />
      <Conclusiones />
    </>
  );
}

export default defineDeck<Live>({
  id: 'clustering-perfiles-riesgo-animated',
  title: config.title,
  lang: 'es',
  scenes: SCENES,
  Stage,
  initialLive,
  timeline,
  fonts: ['400 100px "Inter Variable"', '600 100px "Inter Variable"', '400 32px "JetBrains Mono Variable"'],
  qrUrl: config.qrUrl,
});
