import { defineField } from "sanity";

// schemas/user.js
export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
          }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
          }),
    ],
  };
  