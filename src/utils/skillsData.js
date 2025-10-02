export const getSkillsArticles = (skills) => [
  {
    title: skills?.subtitle1, // Frontend
    images: ['HTML', 'CSS', 'Pug', 'SASS']
  },
  {
    title: skills?.subtitle2, // Lenguajes de programación
    images: ['C', 'Java', 'Python', 'JavaScript']
  },
  {
    title: skills?.subtitle3, // Backend / Frameworks
    images: ['NodeJS', 'Express', 'Prisma', 'Flask', 'React', 'Gulp']
  },
  {
    title: skills?.subtitle4, // Bases de datos
    images: ['SQL', 'MySQL', 'PostgreSQL']
  },
  {
    title: skills?.subtitle5, // Control de versiones / DevOps
    images: ['Git', 'GitHub']
  },
  {
    title: skills?.subtitle6, // Diseño / UX
    images: ['AdobeXD', 'Figma', 'Illustrator', 'Photoshop']
  }
]
