export default _ => ({ // eslint-disable-line

  // link file UUID
  id: '5603b318-6614-11e6-8310-ecf0bddad227',

  // canonical URL of the published page
  // https://ig.ft.com/sites/documents/philip-hammond get filled in by the ./configure script
  url: 'https://ig.ft.com/documents/philip-hammond',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date('2016-08-22T09:00:00Z'),

  headline: 'Philip Hammond: The documents',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'The documents that show the  Chancellor\'s early business dealings ',

  topic: {
    name: 'UK Politics & Policy',
    url: 'https://www.ft.com/world/uk/politics',
  },

  relatedArticle: {
    text: 'Related article »',
    url: 'https://www.ft.com/content/ecc02856-5e56-11e6-a72a-bd4bf1198c63',
  },

  mainImage: {
    title: 'Philip Hammond',
    description: 'Philip Hammond leaflet from 1994',
    url: 'https://image.webservices.ft.com/v1/images/raw/ftcms:4cbc475a-662a-11e6-8310-ecf0bddad227?source=ig',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Leila Haddou', url: 'https://www.ft.com/search?q=Leila+Haddou' },
    { name: 'Kate Allen', url: 'https://www.ft.com/stream/authorsId/Q0ItMDAxNzEwMQ==-QXV0aG9ycw==' },
  ],

  // Appears in the HTML <title>
  title: 'Philip Hammond documents',

  // meta data
  description: '',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
 socialImage: 'https://image.webservices.ft.com/v1/images/raw/ftcms:4cbc475a-662a-11e6-8310-ecf0bddad227?source=ig',
  // socialHeadline: '',
  // socialSummary:  '',

  // TWITTER
  // twitterImage: '',
  // twitterCreator: '@individual's_account',
  // tweetText:  '',
  // twitterHeadline:  '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',

  onwardjourney: {

    // list (methode list) or topic
    type: 'topic',

    // topic or list id
    id: 'TnN0ZWluX1BOX1BvbGl0aWNpYW5fNDA1-UE4=',

    // a heading is provided automatically if not set (peferred)
    heading: 'Philip Hammond',
  },

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
