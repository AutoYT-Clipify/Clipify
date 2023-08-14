import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'newTestimonials',
    title: 'New Testimonials',
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
        {
            title: 'New Testimonials Data',
            name: 'newTestimonialsData',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            title: 'Title',
                            name: 'title',
                            type: 'string',
                        },
                        {
                            title: 'Detail',
                            name: 'detail',
                            type: 'string',
                        }
                    ]
                }
              
              ]
        }
    ],
})
