export default _ => ({
  // eslint-disable-line

  // link file UUID
  id: '6db4dce0-1350-11e8-8cb6-b9ccc4c4dbbb',

  // canonical URL of the published page
  // https://ig.ft.com/sites/documents/philip-hammond get filled in by the ./configure script
  url: 'https://ig.ft.com/documents/mueller-report/',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date(),

  headline: 'Mueller report: Read the complete, searchable report',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'The redacted 448-page report, as distributed by the US Justice department',

  topic: {
    name: 'Trump Russia ties',
    url: 'https://www.ft.com/trump-russia-ties',
  },

  relatedArticle: {
    text: 'Related article »',
    url: 'https://www.ft.com/content/0cbf2628-61d5-11e9-a27a-fdd51850994c',
  },

  mainImage: {
    title: '',
    description: '',
    url: 'http://ft-ig-images-prod.s3-website-eu-west-1.amazonaws.com/v1/8444391428-t8bph.jpg',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  // byline: [
  // { name: 'FT reporters', url: '' },
  // ],

  // Appears in the HTML <title>
  title: 'Mueller report: Read the complete, searchable report',

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
  socialImage:
    'http://ft-ig-images-prod.s3-website-eu-west-1.amazonaws.com/v1/8444391428-t8bph.jpg',
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
    heading: 'Trump Russia ties',
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
