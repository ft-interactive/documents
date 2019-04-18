export default _ => ({
  // eslint-disable-line

  // link file UUID
  id: '04715cce-0840-11e8-9650-9c0ad2d7c5b5',

  // canonical URL of the published page
  // https://ig.ft.com/sites/documents/philip-hammond get filled in by the ./configure script
  url: 'https://ig.ft.com/documents/mueller-report',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date(),

  headline: 'Read the the complete, searchable Mueller report',

  // summary === standfirst (Summary is what the content API calls it)
  summary:
    'House Republicans release previously classified memo which alleges FBI surveillance abuses against Donald Trump’s campaign during the 2016 election',

  topic: {
    name: 'Trump Russia ties',
    url: 'https://www.ft.com/trump-russia-ties',
  },

  relatedArticle: {
    text: 'Related article »',
    url: 'https://www.ft.com/content/53357b54-077a-11e8-9650-9c0ad2d7c5b5',
  },

  mainImage: {
    title: '',
    description: '',
    url:
      'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3Ac959bdaa-0634-11e8-9e12-af73e8db3c71?source=ig&width=2048',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [{ name: 'FT reporters', url: '' }],

  // Appears in the HTML <title>
  title: 'Read the the complete, searchable Mueller report',

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
    'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3Aa4154ae8-0844-11e8-9650-9c0ad2d7c5b5?source=ig&width=2048',
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

  // onwardjourney: {
  //
  //   // list (methode list) or topic
  //   type: 'topic',
  //
  //   // topic or list id
  //   id: 'TnN0ZWluX1BOX1BvbGl0aWNpYW5fNDA1-UE4=',
  //
  //   // a heading is provided automatically if not set (peferred)
  //   heading: 'Philip Hammond',
  // },

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
