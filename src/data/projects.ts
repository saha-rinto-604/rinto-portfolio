export type Project = {
  slug: string; number: string; name: string; category: string; status: string;
  headline: string; description: string; stack: string[]; repo: string;
  nodes: string[]; engineering: string; evidence: { label: string; path: string }[];
};
export const projects: Project[] = [
  {
    slug: 'clinora', number: '01', name: 'Clinora AI', category: 'Healthcare · Applied AI', status: 'In development',
    headline: 'Clinora AI',
    description: 'A healthcare project for managing medical reports, verified patient information, doctor-led care, and privacy-conscious research. AI-assisted explanations stay separate from verified clinical facts and do not replace medical advice.',
    stack: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'FastAPI'],
    repo: 'https://github.com/saha-rinto-604/Clinora_AI',
    nodes: ['Report upload', 'OCR extraction', 'Patient verification', 'Grounded explanation'],
    engineering: 'A Spring backend coordinates access and persistence, while separate Python services handle OCR and report interpretation. The public code also contains governed research modules; their integration and evaluation remain development work.',
    evidence: [
      { label: 'Report API', path: 'backend/src/main/java/com/clinora/patients/api/PatientReportController.java' },
      { label: 'AI service', path: 'ai-service/README.md' },
      { label: 'Architecture & setup', path: 'README.md' },
    ],
  },
  {
    slug: 'shesafe', number: '02', name: 'SheSafe', category: 'Mobile · Personal safety', status: 'Development prototype',
    headline: 'SheSafe',
    description: 'A mobile safety application for users, volunteers, police, and administrators. It brings together SOS alerts, live location sharing, responder coordination, route context, verification, and incident chat.',
    stack: ['React Native', 'Expo', 'Node.js', 'Express', 'MySQL'],
    repo: 'https://github.com/saha-rinto-604/SheSafe',
    nodes: ['Report incident', 'Share location', 'Notify responders', 'Coordinate response'],
    engineering: 'Incident routes apply account and volunteer checks. Backend modules coordinate dispatch, notifications, location context, and messages. Device permissions and external service configuration are required; this is not a certified emergency service.',
    evidence: [
      { label: 'Incident routes', path: 'backend/src/modules/incidents/incident.routes.js' },
      { label: 'Dispatch controller', path: 'backend/src/modules/incidents/incident.controller.js' },
      { label: 'Mobile application', path: 'app/resqher-mobile/package.json' },
    ],
  },
  {
    slug: 'resqher', number: '03', name: 'ResQher', category: 'Web · Earlier prototype', status: 'Prototype',
    headline: 'ResQher',
    description: 'An earlier web-based safety application built with Laravel. It supports emergency alerts, location tracking, and coordination between users, volunteers, law enforcement, and administrators.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Laravel', 'MySQL'],
    repo: 'https://github.com/saha-rinto-604/ResQher',
    nodes: ['User location', 'Volunteer availability', 'Response coordination'],
    engineering: 'Role-oriented routes, location storage, and incident-history models show the web implementation. It predates the separate SheSafe mobile project and needs a security review before any real deployment.',
    evidence: [
      { label: 'Web routes', path: 'routes/web.php' },
      { label: 'Application controllers', path: 'app/Http/Controllers' },
    ],
  },
];
export const academic = [
  { name: 'AI algorithms', description: 'A* search and simulated annealing in Python.', url: 'https://github.com/saha-rinto-604/Aritifical-Intelligence', language: 'Python' },
  { name: 'Operating systems', description: 'Shell commands, scripting, and coursework notes.', url: 'https://github.com/saha-rinto-604/Operating-Systems', language: 'Shell' },
  { name: 'Programming foundations', description: 'C exercises in strings, structures, and number algorithms.', url: 'https://github.com/saha-rinto-604/Structured_Language_Programming_with_C', language: 'C' },
];
