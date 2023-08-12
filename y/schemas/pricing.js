import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'pricing',
    title: 'Pricing',
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
                title: 'Plan',
                name: 'plan',
                type: 'array',
                of: [
                    {
                        type: 'object',
                        fields: [
                            defineField({
                                name: 'basic',
                                title: 'Basic',
                                type: 'object',
                                fields: [
                                    {
                                        title: 'Plan Name',
                                        name: 'planName',
                                        type: 'string'
                                    }
                                    ,{
                                      title: 'Original Price',
                                      name: 'originalPrice',
                                      type: 'number'
                                    },
                                    {
                                      title: 'Pricing Monthly',
                                      name: 'pricingMonthly',
                                      type: 'number'
                                    },
                                    {
                                      title: 'Pricing Yearly',
                                      name: 'pricingYearly',
                                      type: 'number'
                                    },
                                    {
                                        title: 'Discount',
                                        name: 'discount',
                                        type: 'number'
                                    },
                                    {
                                        title: 'Final Price',
                                        name: 'finalPrice',
                                        type: 'number'  
                                    },
                                    {
                                        title: 'Features',
                                        name: 'features',
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
                                                    }
                                                ]
                                            }
                                          
                                          ]
                                    }
                                  ]
                            }),
                            defineField({
                                name: 'standard',
                                title: 'Standard',
                                type: 'object',
                                fields: [
                                    {
                                        title: 'Plan Name',
                                        name: 'planName',
                                        type: 'string'
                                    }
                                    ,{
                                      title: 'Original Price',
                                      name: 'originalPrice',
                                      type: 'number'
                                    },
                                    {
                                      title: 'Pricing Monthly',
                                      name: 'pricingMonthly',
                                      type: 'number'
                                    },
                                    {
                                      title: 'Pricing Yearly',
                                      name: 'pricingYearly',
                                      type: 'number'
                                    },
                                    {
                                        title: 'Discount',
                                        name: 'discount',
                                        type: 'number'
                                    },
                                    {
                                        title: 'Final Price',
                                        name: 'finalPrice',
                                        type: 'number'  
                                    },
                                    {
                                        title: 'Features',
                                        name: 'features',
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
                                                    }
                                                ]
                                            }
                                          
                                          ]
                                    }
                                  ]
                            }),
                            defineField({
                                name: 'pro',
                                title: 'Pro',
                                type: 'object',
                                fields: [
                                    {
                                        title: 'Plan Name',
                                        name: 'planName',
                                        type: 'string'
                                    }
                                    ,{
                                      title: 'Original Price',
                                      name: 'originalPrice',
                                      type: 'number'
                                    },
                                    {
                                      title: 'Pricing Monthly',
                                      name: 'pricingMonthly',
                                      type: 'number'
                                    },
                                    {
                                      title: 'Pricing Yearly',
                                      name: 'pricingYearly',
                                      type: 'number'
                                    },
                                    {
                                        title: 'Discount',
                                        name: 'discount',
                                        type: 'number'
                                    },
                                    {
                                        title: 'Final Price',
                                        name: 'finalPrice',
                                        type: 'number'  
                                    },
                                    {
                                        title: 'Features',
                                        name: 'features',
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
                                                    }
                                                ]
                                            }
                                          
                                          ]
                                    }
                                  ]
                            }),
                        ]
                    }
                  
                  ]

        })
    ]
})
