import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'prompt',
      title: 'Prompt',
      type: 'string',
    }),
    defineField({
      name: 'words',
      title: 'Words',
      type: 'string',
    }),
    defineField({
      name: 'user',
      title: 'User',
      type: 'reference',
      to: {type: 'user'},
    }),
    defineField({
      name: 'outputImage',
      title: 'Output Image',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],
})
