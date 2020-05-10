console.log("boottour  loaded....");
// Instance the tour
var tour = new Tour({
  steps: [
    {
      element: "#block-block-9 > div > div > div.front-visa-2 > div.front-visa-link > a",
      title: "Step One",
      content: "Press the Orange Button!",
      placement: "auto"
    },
    {
      element: "#block-block-3 > div > div > div:nth-child(4) > div",
      title: "Step Two",
      content: "Here's the phone number. Call it!",
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