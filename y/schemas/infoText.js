import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'infoText',
    title: 'Info Text',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
    ],
})
