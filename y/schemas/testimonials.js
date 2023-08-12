import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'testimonials',
    title: 'Testimonials',
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
            name: 'testimonials',
            title: 'Testimonials',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            title: 'Name',
                            name: 'name',
                            type: 'string',
                        },
                        {
                            title: 'Description',
                            name: 'description',
                            type: 'string',
                        },
                        {
                            name:"image",
                            title:"Image",
                            type:"image",
                            options:{
                              hotspot:true
                            }   
                        }
                    ]
                }
              
              ]
        }),
    ],


})
