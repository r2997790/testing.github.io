console.log("boottour  loaded....");
// Instance the tour
var tour = new Tour({
  steps: [
    {
      element: "body.html.front.not-logged-in.no-sidebars.page-node.i18n-ru:nth-child(2) > div.page:nth-child(6) > div.section.clearfix > div.region.region-header > div.block.block-block:nth-child(4) > div.content > div.front-visa > div.front-visa-1 > div.front-visa-link > > a:nth-child(1)",

      title: "Step One",
      content: "This is the button to load the UK Visa Section",
      placement: "auto"
    },
    {
      element: "body.html.front.not-logged-in.no-sidebars.page-node.i18n-ru:nth-child(2) > div.page:nth-child(6) > div.section.clearfix > div.region.region-header > div.block.block-block:nth-child(2) > div.content > div.header-contscts > div.header-contscts-tels:nth-child(4) > div.header-contscts-tel",
      title: "Step Two",
      content: "Ring this phone number!",
      placement: "auto"
    }


    // {
    //   element: "#myDiv > h3",
    //   title: "Title of my step 3",
    //   content: "Content of my step 3",
    //   placement: "auto"
    // }
  ]
});

// Initialize the tour
tour.init();

// Start the tour
tour.start();