type mediaType = 'blog' | 'talk' | 'book' | 'video' | 'tweet' | 'collection'

type tagsType =
  | 'front end development'
  | 'software development'
  | 'system designs'
  | 'productivity'
  | 'software career'
  | 'imposter syndrome'

export type resourceType = {
  id: number
  title: string
  url: string
  author: string | string[]
  summary: string
  type: mediaType
  tags?: tagsType
  recommended?: boolean
}

/* Copy this template for new entries */
// {
//   id:,
//   title: '',
//   summary: "",
//   author: "",
//   type: '',
//   tags: '',
//   url: '',
// },

export const resources: resourceType[] = [
  {
    id: 11,
    title: 'The Deliverate Engineer',
    summary:
      "Good engineering careers don't just happen by accident. It takes a deliberate approach. He spent the last 30 years working as a programmer and manager at bit tech and many other places. Fifteen of those years were as a principal engineer, thirteen as a manager.",
    author: 'Jogn L. Miller',
    type: 'collection',
    tags: 'software career',
    url: 'https://www.youtube.com/@TheDeliberateEngineer/',
  },
  {
    id: 10,
    title:
      'Imposter Syndrome: Overcoming Self-Doubt in Success - Heather Downing - NDC Oslo 2023',
    summary:
      "Impostor Syndrome almost killed my tech career. I've discovered a lot about what triggers me and the fallout from letting it take over your working life.I'll tell you my story, and the lessons I learned in order to overcome it. Think you aren't good enough? Let's talk about it.",
    author: ['Heather Downing', 'NDC Conference'],
    type: 'talk',
    tags: 'imposter syndrome',
    url: 'https://www.youtube.com/watch?v=atYHKU0VJQE',
  },
  {
    id: 9,
    title: 'nemil',
    summary: 'Tech. Career. Crypto.',
    author: 'nemil',
    type: 'blog',
    tags: 'software career',
    url: 'https://nemil.com/tags/notes-to-a-young-software-engineer/',
  },
  {
    id: 8,
    title: 'Not Only Code',
    summary: 'Tech. Career. Leadership.',
    author: 'Gregory',
    type: 'blog',
    tags: 'software career',
    url: 'https://www.notonlycode.org/',
    recommended: true,
  },
  {
    id: 7,
    title: 'Kent C. Dodds',
    summary: 'One stop shop for everything you need to build JavaScript apps.',
    author: 'Kent C. Dodds',
    type: 'blog',
    tags: 'front end development',
    url: 'https://kentcdodds.com/',
    recommended: true,
  },
  {
    id: 6,
    title: 'Lee Robinson – Developer, writer, creator.',
    summary: '',
    author: 'Lee Robinson',
    type: 'blog',
    tags: 'front end development',
    url: 'https://leerob.io/',
  },
  {
    id: 5,
    title: 'Overreacted — A blog by Dan Abramov',
    summary: '',
    author: 'Dan Abramov',
    type: 'blog',
    tags: 'front end development',
    url: 'https://overreacted.io/',
  },
  {
    id: 4,
    title: "Don't Call Yourself A Programmer, And Other Career Advice",
    summary: '',
    author: 'Patrick McKenzie',
    type: 'blog',
    url: 'https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/',
  },

  {
    id: 3,
    title: 'How to apply SOLID principles in React applications',
    summary: '',
    author: 'Tomas Gold',
    type: 'blog',
    url: 'https://medium.com/@tomgold_48918/how-to-apply-solid-principles-in-react-applications-6c964091a982',
  },
  {
    id: 2,
    title: 'The Pragmatic Programmer',
    summary: 'The #1 newsletter for engineering managers and senior engineers',
    author: 'Gergely Orosz',
    type: 'blog',
    url: 'https://blog.pragmaticengineer.com/',
    recommended: true,
  },
  {
    id: 1,
    title: 'Eloquent JavaScript',
    summary: '',
    author: 'Marijin Haverbeke',
    type: 'book',
    url: 'https://eloquentjavascript.net/Eloquent_JavaScript.pdf',
  },
]
