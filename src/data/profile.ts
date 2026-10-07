export const profile = {
  name: 'Rinto Saha',
  role: 'Software engineering · AI · Security',
  introduction: 'Computer Science student building full-stack platforms, exploring applied AI, and thinking carefully about the systems people trust.',
  about: 'I work at the intersection of software engineering, applied AI, and security. My projects span healthcare workflows, personal safety applications, and the algorithms that support them.',
  approach: 'I’m interested in what happens beyond the interface: how data moves, where trust begins, and how a system behaves when something goes wrong.',
  github: 'https://github.com/saha-rinto-604',
  linkedin: 'https://www.linkedin.com/in/rinto-saha-7853522ab/',
  email: '',
  portrait: '/images/rinto-saha.jpg',
  portraitAlt: 'Rinto Saha wearing a dark suit and red tie outdoors',
  interests: [
    { number: '01', title: 'Software supply-chain security', body: 'Understanding the signals that make a software dependency trustworthy—and how static analysis and machine learning can support that decision.', tags: ['Dependency analysis', 'Malicious package detection'] },
    { number: '02', title: 'Evidence-grounded AI', body: 'Exploring systems that keep verified facts separate from generated explanations, with explicit boundaries around uncertainty and sensitive data.', tags: ['Applied machine learning', 'Responsible AI'] },
  ],
  principles: [
    { number: '01', title: 'Start with the system.', body: 'Understand the workflow, the data, and the failure modes before choosing the tools.' },
    { number: '02', title: 'Make trust explicit.', body: 'Treat access boundaries, validation, and sensitive information as part of the design.' },
    { number: '03', title: 'Let evidence lead.', body: 'Distinguish an implemented feature from a plan, and a promising idea from a measured result.' },
  ],
};
export const navigation = [
  ['About', '#about'], ['Work', '#work'], ['Research', '#research'],
  ['Skills', '#skills'], ['GitHub', '#github'],
] as const;
