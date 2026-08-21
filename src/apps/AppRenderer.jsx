import Resume from './Resume/Resume';
import About from './About/About';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Certifications from './Certifications/Certifications';
import Contact from './Contact/Contact';
import Explorer from './Explorer/Explorer';
import Browser from './Browser/Browser';
import Code from './Code/Code';
import Paint from './Paint/Paint';
import Recycle from './Recycle/Recycle';
import Personalize from './Personalize/Personalize';
import GamesHub from './Games/GamesHub/GamesHub';
import Notes from './Notes/Notes';

const componentMap = {
  resume: Resume,
  about: About,
  experience: Experience,
  projects: Projects,
  skills: Skills,
  certifications: Certifications,
  contact: Contact,
  explorer: Explorer,
  browser: Browser,
  code: Code,
  paint: Paint,
  recycle: Recycle,
  personalize: Personalize,
  games: GamesHub,
  notes: Notes,
};

export default function AppRenderer({ id }) {
  const Component = componentMap[id];

  if (!Component) return null;

  return <Component />;
}