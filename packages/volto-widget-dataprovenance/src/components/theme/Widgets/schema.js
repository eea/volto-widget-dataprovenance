const Schema = (props) => ({
  title: 'source',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['title', 'link', 'organisation'],
    },
  ],

  properties: {
    title: {
      type: 'string',
      title: 'Title',
    },
    link: {
      widget: 'url',
      title: 'Url',
    },
    organisation: {
      title: 'Organisation',
    },
  },

  required: [],
});

export default Schema;
