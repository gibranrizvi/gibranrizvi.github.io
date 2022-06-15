import resume from './assets/gibran-rizvi-resume.pdf'
import profile from './assets/profile.png'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://gibranrizvi.github.io/profile/',
  title: 'GR.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Gibran Rizvi',
  profile,
  role: 'Fullstack Developer',
  description:
    'I am a full stack developer specialised in developing web and mobile applications. My primary tech stack includes React, React Native, Firebase, NodeJS & ExpressJS.',
  resume,
  social: {
    linkedin: 'https://www.linkedin.com/in/gibranrizvi/',
    github: 'https://github.com/gibranrizvi',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Sey la Vie',
    description:
      'Sey la Vie is a web application designed to connect wholesalers and buyers over a platform which offers product catalogs, multi-vendor functionality and more.',
    stack: ['React', 'Firebase', 'NextJS'],
    livePreview: 'https://seylavie.vercel.app/',
  },
  {
    name: 'Throdle',
    description:
      'Throdle is a premier app community of car and motorsports fans who connect through their shared passion of cars, groups and experiences.',
    stack: ['React Native', 'Swift', 'Kotlin'],
    livePreview: 'https://www.throdle.com/download',
  },
  {
    name: 'Buyers Club',
    description:
      'A full stack web & mobile e-commerce platform with e-wallet functionality, monetary transactions, community marketplace and more.',
    stack: ['React', 'React Native', 'AWS'],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'React',
  'React Native & Expo',
  'Firebase',
  'NodeJS & ExpressJS',
  'NextJS',
  'Rest APIs',
  'Redux',
  'GraphQL',
  'Flutter',
  'Git',
  'HTML',
  'CSS',
  'SASS',
  'TailwindCSS',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'gibranrzv@gmail.com',
}

export { header, about, projects, skills, contact }
