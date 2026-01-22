import { CaseStudy } from '@/types'

export const caseStudies: CaseStudy[] = [
  {
    id: 'wellbeing-wizard',
    number: '01',
    title: 'Wellbeing Wizard',
    description: 'An innovative AI-powered platform focused on wellbeing education that combines cutting-edge artificial intelligence with personalized learning pathways. The system uses machine learning to adapt content and recommendations based on user behavior and preferences.',
    impact: [
      {
        metric: 'AI-Powered',
        description: 'Personalized learning with NLP',
      },
      {
        metric: 'Adaptive',
        description: 'ML-driven recommendations',
      },
      {
        metric: 'Engaging',
        description: 'Intelligent user experience',
      },
    ],
    techStack: ['AI', 'Machine Learning', 'NLP', 'Neural Networks', 'Next.js', 'React', 'Node.js', 'PostgreSQL', 'TensorFlow'],
    link: '#',
  },
  {
    id: 'uk-public-affairs-platform',
    number: '02',
    title: 'UK Public Affairs AI Platform',
    description: 'Built a comprehensive AI-powered platform for public affairs agencies in the UK, automating critical workflows including intelligent bill tracking, AI bill assistant for legislative Q&A, stakeholder mapping and monitoring, automated research on monitoring items, and strategic intelligence gathering.',
    impact: [
      {
        metric: 'AI-Powered',
        description: 'Intelligent bill tracking & analysis',
      },
      {
        metric: 'Automated',
        description: 'Stakeholder mapping & monitoring',
      },
      {
        metric: 'NLP-Driven',
        description: 'Legislative Q&A assistant',
      },
    ],
    techStack: ['AI', 'NLP', 'Python', 'Django', 'Machine Learning', 'Natural Language Processing', 'PostgreSQL', 'AWS', 'RAG'],
    link: '#',
  },
  {
    id: 'lynx-flow-health',
    number: '03',
    title: 'Lynx Flow Health',
    description: 'Healthcare platform designed to streamline patient management through intelligent AI automation. Features include predictive care recommendations, automated appointment scheduling, NLP-powered patient intake, and real-time health monitoring with anomaly detection.',
    impact: [
      {
        metric: 'AI-Driven',
        description: 'Predictive care & monitoring',
      },
      {
        metric: 'Automated',
        description: 'NLP-powered workflows',
      },
      {
        metric: 'HIPAA',
        description: 'Secure & compliant platform',
      },
    ],
    techStack: ['Healthcare AI', 'NLP', 'Predictive Analytics', 'Anomaly Detection', 'HIPAA Compliance', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
    link: '#',
  },
]
