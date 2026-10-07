import { Navigation } from '@/components/navigation';
import { Hero } from '@/sections/hero';
import { About } from '@/sections/about';
import { Work } from '@/sections/work';
import { Research } from '@/sections/research';
import { Skills } from '@/sections/skills';
import { Github } from '@/sections/github';
import { Contact } from '@/sections/contact';

export default function Home() {
  return <><a href="#main" className="skip-link">Skip to content</a><Navigation /><main id="main"><Hero /><About /><Work /><Research /><Skills /><Github /><Contact /></main></>;
}
