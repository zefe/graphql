const courses = [
  {
    _id: '54564654545',
    title: 'Curso de Graphql',
    teacher: 'Juan lamp',
    description: 'Curso basico de graphql',
    topic: 'Base de datos'
  },
  {
    _id: '8989898998',
    title: 'Curso de Programacion',
    teacher: 'Juan lamp',
    description: 'Curso basico de programacion',
    topic: 'JavaScript'
  },
  {
    _id: '878787878',
    title: 'Curso de SQL',
    teacher: 'Juan lamp',
    description: 'Curso basico de sql',
    topic: 'Base de datos'
  },
]

module.exports = {
  getCourses: () => {
    return courses
  }
}