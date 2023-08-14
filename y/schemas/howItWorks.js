import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'howItWorks',
    title: 'How It Works',
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
            name: 'menu1Title',
            title: 'Menu1 Title',
            type: 'string',
        }),
        defineField({
            name: 'menu1SubTitle',
            title: 'Menu1 Sub Title',
            type: 'string',
        }),
        defineField({
            name:"menu1Image",
            title:"Menu1 Image",
            type:"image",
            options:{
              hotspot:true
            }   
        }),
        defineField({
            name: 'menu1Points',
            title: 'Menu1 Points ',
            type: 'array',
            of: [{type: 'string'}]
        }),
        defineField({
            name: 'menu2Title',
            title: 'Menu2 Title',
            type: 'string',
        }),
        defineField({
            name: 'menu2SubTitle',
            title: 'Menu2 Sub Title',
            type: 'string',
        }),
        defineField({
            name:"menu2Image",
            title:"Menu2 Image",
            type:"image",
            options:{
              hotspot:true
            }   
        }),
        defineField({
            name: 'menu2Points',
            title: 'Menu2 Points ',
            type: 'array',
            of: [{type: 'string'}]
        }),
        defineField({
            name: 'menu3Title',
            title: 'Menu3 Title',
            type: 'string',
        }),
        defineField({
            name: 'menu3SubTitle',
            title: 'Menu3 Sub Title',
            type: 'string',
        }),
        defineField({
            name:"menu3Image",
            title:"Menu3 Image",
            type:"image",
            options:{
              hotspot:true
            }   
        }),
        defineField({
            name: 'menu3Points',
            title: 'Menu3 Points ',
            type: 'array',
            of: [{type: 'string'}]
        })
    ],


})
