import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'vs',
    title: 'Vs',
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
            name: 'manuallyTitle',
            title: 'Manually Title',
            type: 'string',
        }),
        defineField({
            name: 'manuallyPoints',
            title: 'Manually Points ',
            type: 'array',
            of: [{type: 'string'}]
        }),
        defineField({
            name: 'automagicallyTitle',
            title: 'Automagically Title',
            type: 'string',
        }),
        defineField({
            name: 'autoMagicallyPoints',
            title: 'Auto Magically Points ',
            type: 'array',
            of: [{type: 'string'}]
        })
    ],


})
