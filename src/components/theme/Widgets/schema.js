const Schema = (props) => ({
  title: 'Data',
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
      widget: 'slate_richtext',
      title: 'Organisation',
    },
  },

  required: [],
});

export default Schema;
