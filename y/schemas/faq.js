import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'faq',
    title: 'Faq',
    type: 'document',
    fields: [
        {
            title: 'Faq Data',
            name: 'faq',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            title: 'Question',
                            name: 'question',
                            type: 'string',
                        },
                        {
                            title: 'Answer',
                            name: 'answer',
                            type: 'string',
                        }
                    ]
                }
              
              ]
        }
    ],
})
