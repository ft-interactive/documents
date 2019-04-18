export default _ => ({ // eslint-disable-line

  // link file UUID
  id: '556b88ea-61ed-11e9-b285-3acd5d43599e',

  // canonical URL of the published page
  // https://ig.ft.com/sites/documents/philip-hammond get filled in by the ./configure script
  url: 'https://ig.ft.com/documents/mueller-report',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date(),

  headline: 'Read the the complete, searchable Mueller report',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'The redacted 448-page report, as distributed by the US Justice department',

  topic: {
    name: 'Trump Russia ties',
export default _ => ({ // eslint-disable-line

  relatedArticle: {
    text: 'Related article »',
    url: 'https://www.ft.com/content/53357b54-077a-11e8-9650-9c0ad2d7c5b5',
    url: 'https://www.ft.com/content/21f8a01a-1347-11e8-8cb6-b9ccc4c4dbbb',
  },

  mainImage: {
    title: '',
    description: '',
    url: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3Ac959bdaa-0634-11e8-9e12-af73e8db3c71?source=ig&width=2048',
    // url: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3Ac959bdaa-0634-11e8-9e12-af73e8db3c71?source=ig&width=2048',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'FT reporters', url: '' },
  ],
  // byline: [
    // { name: 'FT reporters', url: '' },
  // ],

  // Appears in the HTML <title>
  title: 'The redacted 448-page report, as distributed by the US Justice department',

  // meta data
  description: '',
