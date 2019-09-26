# [documents](https://ig.ft.com/sites/documents/philip-hammond)

> A simple IG page for displaying DocumentCloud players.

[![Build Status][circle-image]][circle-url] [![Dependency Status][devdeps-image]][devdeps-url]

## Local

```
npm start
```

Build/compile, start a dev server and watches for changes.

# Deploy

1. Write code in a branch.
2. Make a PR. CI will automatically:
    * build and test the branch
    * deploy green builds to the review site
3. Do quick smoke testing of the review build
4. Get a code review. Once you get a thumbs up, merge into master.
5. CI will build, test and deploy a build to Production.


## Uses Starter Kit

This project was scaffolded with [Stater Kit @0256a14](https://github.com/ft-interactive/starter-kit/tree/0256a14).

## Licence

This software is published by the Financial Times under the [MIT licence](https://opensource.org/licenses/MIT).

Please note the MIT licence only covers the software, and does not cover any FT content or branding incorporated into the software or made available using the software. FT content is copyright © The Financial Times Limited, and FT and 'Financial Times' are trademarks of The Financial Times Limited, all rights reserved. For more information about republishing FT content, please contact our [republishing department](https://ft.com/republishing).

<!-- badge URLs -->
[circle-url]: https://circleci.com/gh/ft-interactive/documents
[circle-image]: https://circleci.com/gh/ft-interactive/documents/tree/master.svg?style=shield

[devdeps-url]: https://david-dm.org/ft-interactive/documents#info=devDependencies
[devdeps-image]: https://img.shields.io/david/dev/ft-interactive/documents.svg?style=flat-square
