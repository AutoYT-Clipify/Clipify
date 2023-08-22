import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'showcase2',
    title: 'Showcase2',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'detail',
            title: 'Detail',
            type: 'string',
        }),

    ],


})
