import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'social',
    title: 'Social Links',
    type: 'document',
    fields: [
        defineField({
            name: 'facebook',
            title: 'Facebook',
            type: 'string',
        }),
        defineField({
            name: 'twitter',
            title: 'Twitter',
            type: 'string',
        }),
        defineField({
            name: 'telegram',
            title: 'Telegram',
            type: 'string',
        }),
        defineField({
            name: 'instagram',
            title: 'Instagram',
            type: 'string',
        }),
        defineField({
            name: 'discord',
            title: 'Discord',
            type: 'string',
        }),
        defineField({
            name: 'medium',
            title: 'Medium',
            type: 'string',
        }),  
    ],


})
