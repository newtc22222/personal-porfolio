export const skills = {
  backend: ['Java', 'Spring Boot', 'JDBC', 'JPA', 'Express', 'NestJS'],
  frontend: ['React', 'React Native', 'Next.js', 'TypeScript', 'JavaScript'],
  interested: ['PHP', 'Go', 'New Technologies'],
  other: ['Git', 'Problem Solving', 'Research', 'English Communication'],
};

export const experience = [
  {
    role: 'Full Stack Developer',
    duration: '2+ years',
    description:
      'Specialized in administrator system domain, working with Java and JavaScript technologies.',
  },
];

export const education = {
  university: 'HCMC University of Technology and Education',
  degree: 'Software Engineer',
  duration: '2019 - 2022',
  achievement: 'Credit Degree',
};

// use as enum
export const tabs = [
  'about',
  'skills',
  'experience',
  'education',
  'contact',
] as const;
