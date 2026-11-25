const newsArticles = [

  {
    title: "Beer, Spirits, and Brisket at Webb's Grainworks in Aliso Viejo",
    slug: "webbs-grainworks-aliso-viejo",
    img: "https://github.com/joshuacortes/ocgrub/blob/main/photos/news-webbs-grainworks-aliso-viejo-600px.jpg?raw=true",
    meta: "Aliso Viejo \u00b7 Brewpub",
    excerpt: "Brewery, distillery, and restaurant in one — with a caboose out back."
  },

  {
    title: "The 58-Ounce Cowboy Ribeye at THE RANCH in Anaheim",
    slug: "the-ranch-restaurant-anaheim",
    img: "https://github.com/joshuacortes/ocgrub/blob/main/photos/news-the-ranch-restaurant-anaheim-600px.jpg?raw=true",
    meta: "Anaheim \u00b7 Steakhouse",
    excerpt: "Anaheim's special-occasion steakhouse, cooking from its own farm."
  },

  {
    title: "Crab and Shrimp Enchiladas at Cha Cha's in Downtown Brea",
    slug: "cha-chas-latin-kitchen-brea",
    img: "https://github.com/joshuacortes/ocgrub/blob/main/photos/news-cha-chas-latin-kitchen-brea-600px.jpg?raw=true",
    meta: "Brea \u00b7 Mexican",
    excerpt: "Downtown Brea's lively Latin anchor since 2009."
  },

  {
    title: "Miso Tsukemen at Ramen & Tsukemen TAO in Buena Park",
    slug: "ramen-tsukemen-tao-buena-park",
    img: "https://github.com/joshuacortes/ocgrub/blob/main/photos/news-ramen-tsukemen-tao-buena-park-600px.jpg?raw=true",
    meta: "Buena Park \u00b7 Ramen",
    excerpt: "Michelin Bib Gourmand ramen — the tsukemen is the move."
  },

  {
    title: "Ropa Vieja and Rum Pepper Shrimp at Habana in Costa Mesa",
    slug: "habana-costa-mesa",
    img: "https://github.com/joshuacortes/ocgrub/blob/main/photos/news-habana-costa-mesa-600px.jpg?raw=true",
    meta: "Costa Mesa \u00b7 Cuban",
    excerpt: "Thirty years of Cuban classics on a candlelit patio."
  },

  {
    title: "The OG Breakfast Burrito at LJ's Lil' Cafe in Cypress",
    slug: "ljs-lil-cafe-cypress",
    img: "https://github.com/joshuacortes/ocgrub/blob/main/photos/news-ljs-lil-cafe-cypress-600px.jpg?raw=true",
    meta: "Cypress \u00b7 Breakfast",
    excerpt: "The burrito shed that went viral — now in a bigger Cypress spot."
  },

  {
    title: "Mixed Grill Kebabs Until 1 AM at Istanbul Grill in Fountain Valley",
    slug: "istanbul-grill-fountain-valley",
    img: "https://github.com/joshuacortes/ocgrub/blob/main/photos/news-istanbul-grill-fountain-valley-600px.jpg?raw=true",
    meta: "Fountain Valley \u00b7 Turkish",
    excerpt: "Halal Turkish until 1 AM — and a Yelp Top 100 pick."
  },

  {
    title: "Lobster Bisque and Chateaubriand at The Cellar in Fullerton",
    slug: "the-cellar-fullerton",
    img: "https://github.com/joshuacortes/ocgrub/blob/main/photos/news-the-cellar-fullerton-600px.jpg?raw=true",
    meta: "Fullerton \u00b7 French",
    excerpt: "Fullerton's special-occasion French room since 1969."
  },

  {
    title: "Falafel Fried to Order at Sababa in Garden Grove",
    slug: "sababa-falafel-shop-garden-grove",
    img: "https://github.com/joshuacortes/ocgrub/blob/main/photos/news-sababa-falafel-shop-garden-grove-600px.jpg?raw=true",
    meta: "Garden Grove \u00b7 Middle Eastern",
    excerpt: "4.8 stars for falafel fried to order."
  },

  {
    title: "Dubai Pancakes in a 1920s Gas Station at The Filling Station in Orange",
    slug: "the-filling-station-cafe-orange",
    img: "https://github.com/joshuacortes/ocgrub/blob/main/photos/news-the-filling-station-cafe-orange-600px.jpg?raw=true",
    meta: "Orange \u00b7 Breakfast",
    excerpt: "Breakfast until 2:30 in a 1920s gas station."
  },

  {
    title: "Chilaquiles and Weekend Menudo at El Cantarito in Placentia",
    slug: "el-cantarito-placentia",
    img: "https://github.com/joshuacortes/ocgrub/blob/main/photos/news-el-cantarito-placentia-600px.jpg?raw=true",
    meta: "Placentia \u00b7 Mexican",
    excerpt: "Old Town Placentia's family Mexican kitchen since 2002."
  },

  {
    title: "Bluefin Tuna Tostadas at Lola Gaspar in Downtown Santa Ana",
    slug: "lola-gaspar-santa-ana",
    img: "https://github.com/joshuacortes/ocgrub/blob/main/photos/news-lola-gaspar-santa-ana-600px.jpg?raw=true",
    meta: "Santa Ana \u00b7 Mexican",
    excerpt: "A Bib Gourmand taqueria in the Santora Building."
  },

  {
    title: "Lobster Enchiladas at Yucatan Grill in Seal Beach",
    slug: "yucatan-grill-seal-beach",
    img: "https://github.com/joshuacortes/ocgrub/blob/main/photos/news-yucatan-grill-seal-beach-600px.jpg?raw=true",
    meta: "Seal Beach \u00b7 Mexican",
    excerpt: "Seal Beach's Yucatecan family spot since 1988."
  },

  {
    title: "Gnocchi Catanzaro at Roma D'Italia in Tustin",
    slug: "roma-ditalia-tustin",
    img: "https://github.com/joshuacortes/ocgrub/blob/main/photos/news-roma-ditalia-tustin-600px.jpg?raw=true",
    meta: "Tustin \u00b7 Italian",
    excerpt: "Old Town Tustin's Italian original since 1961."
  },

  {
    title: "Bún Bò Huế at Ngự Bình in Westminster",
    slug: "ngu-binh-westminster",
    img: "https://github.com/joshuacortes/ocgrub/blob/main/photos/news-ngu-binh-westminster-600px.jpg?raw=true",
    meta: "Westminster \u00b7 Vietnamese",
    excerpt: "OC's only Huế-focused restaurant."
  },

  {
    title: "Hatch Green Chile and Navajo Tacos in La Habra",
    slug: "the-green-chile-la-habra",
    img: "https://github.com/joshuacortes/ocgrub/blob/main/photos/news-the-green-chile-la-habra-600px.jpg?raw=true",
    meta: "La Habra \u00b7 New Mexican",
    excerpt: "New Mexican cooking from a family recipe book — Navajo tacos and stuffed sopapillas."
  },

  {
    title: "Old-School Italian in La Palma at A’Roma",
    slug: "a-roma-ristorante-la-palma",
    img: "https://github.com/joshuacortes/ocgrub/blob/main/photos/news-a-roma-ristorante-la-palma-600px.jpg?raw=true",
    meta: "La Palma \u00b7 Italian",
    excerpt: "Rigatoni alla vodka and fettuccine Alfredo in La Palma's family-run Italian room."
  },

  {
    title: "Pastrami and Fresh Rye at Katella Deli in Los Alamitos",
    slug: "katella-deli-los-alamitos",
    img: "https://github.com/joshuacortes/ocgrub/blob/main/photos/news-katella-deli-los-alamitos-600px.jpg?raw=true",
    meta: "Los Alamitos \u00b7 Deli",
    excerpt: "A 1964 Los Alamitos landmark for pastrami, matzo ball soup, and the bakery case."
  },

  {
    title: "New Late Night Taco Spot Opens in Anaheim",
    slug: "taco-spot-anaheim",
    img: "https://github.com/joshuacortes/ocgrub/blob/main/photos/news-taco-spot-anaheim-600px.jpg?raw=true",
    meta: "Anaheim \u00b7 Late Night",
    excerpt: "Where to go when the late-night craving hits."
  },
  {
    title: "Top 10 Burger Joints in Orange County 2026",
    slug: "top-10-burgers-oc",
    img: "https://github.com/joshuacortes/ocgrub/blob/main/photos/news-top-10-burgers-oc-600px.jpg?raw=true",
    meta: "Orange County \u00b7 Best Of",
    excerpt: "Smash burgers to gourmet stacks, across OC."
  },
  {
    title: "OCGrub Launches New Food Deals Section",
    slug: "ocgrub-deals-launch",
    img: "https://github.com/joshuacortes/ocgrub/blob/main/photos/news-ocgrub-deals-launch-600px.jpg?raw=true",
    meta: "Orange County \u00b7 Deals",
    excerpt: "Free deal submissions for independent OC restaurants, no commissions."
  }
];
