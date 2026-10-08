import { Navigation } from '@/components/navigation';
import { Hero } from '@/sections/hero';
import { About } from '@/sections/about';
import { Work } from '@/sections/work';
import { Research } from '@/sections/research';
import { Skills } from '@/sections/skills';
import { Experience } from '@/sections/experience';
import { Education } from '@/sections/education';
import { Achievements } from '@/sections/achievements';
import { Activities } from '@/sections/activities';
import { Contact, Footer } from '@/sections/contact';

export default function Home() {
  return <><a href="#main" className="skip-link">Skip to content</a><Navigation /><main id="main"><Hero /><About /><Skills /><Experience /><Work /><Research /><Education /><Achievements /><Activities /><Contact /></main><Footer /></>;
}
