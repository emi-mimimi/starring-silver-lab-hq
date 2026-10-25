/* All words on the site live here. Change text in this file; the pages read it. */
window.SITE = {
  name: "Starring Silver Lab",
  tagline: "Shining, just because.",
  place: "Handmade silver jewelry",
  idea: "Handmade fine-silver jewelry for people who would rather wear what feels like them.",

  groups: [
    { id: "idea", label: "The idea" },
    { id: "plan", label: "The plan" }
  ],

  /* ready:false shows "coming next" until the page is built */
  pages: [
    { id: "brand",    href: "brand.html",    name: "Brand",            line: "Why we exist and how we look",  color: "var(--t-story)",  group: "idea", ready: true },
    { id: "customer", href: "customer.html", name: "Customer",         line: "Who buys, and why it fits",     color: "var(--t-people)", group: "idea", ready: true },
    { id: "product",  href: "product.html",  name: "Product",          line: "What we make, at what price",   color: "var(--t-make)",   group: "idea", ready: true },
    { id: "business", href: "business.html", name: "Business model",   line: "How each piece makes money",    color: "var(--t-money)",  group: "plan", ready: true },
    { id: "roadmap",  href: "roadmap.html",  name: "Roadmap",          line: "Where we go, and when",         color: "var(--t-run)",    group: "plan", ready: true }
  ],

  brand: {
    why: {
      eyebrow: "Why we exist",
      role: "Starring",
      who: "you",
      title: "Be the main character of your own story.",
      line: "Wear what feels like you, every day, whether or not anyone notices."
    },

    chapters: [
      { id: "lead",
        title: "In stories, you always know who the main character is.",
        body: "In anime, dramas and films, faces are often drawn simple and alike. What gives the lead away is the detail: the hair, the outfit, the one accessory only they would wear." },
      { id: "trend",
        title: "Real life went the other way.",
        body: "Everyday style got grayer and more mass-made. Everyone chases the same trend, so everyone ends up wearing the same thing." },
      { id: "split",
        title: "Online, we found our people. On Monday, we still play it safe.",
        body: "Liking something niche is normal now, and there's a community for everything. But in everyday life most people still pick the safe option, afraid of being judged for looking different.",
        left: "Online", right: "Monday, 9 a.m." },
      { id: "detail",
        title: "So we make the detail.",
        body: "Imperfect silver pieces that feel like little found treasures. Simple enough to wear every day, and priced fairly for real silver, so nobody saves them for a special day.",
        hint: "Tap someone to try another piece" }
    ],

    close: {
      lines: ["Not to make you stand out.", "Not to make you blend in.", "Just to let you be you."],
      tagline: "Shining, just because."
    },

    values: {
      title: "What we believe",
      items: [
        { name: "Keep it casual", line: "Pieces you forget you're wearing, from people who talk like friends.", color: "var(--t-sell)" },
        { name: "Uniquely you", line: "Unique because it's you, not to be different.", color: "var(--t-story)" },
        { name: "Joy, both ways", line: "If it stops being fun, for customers or for us, we change it.", color: "var(--accent)" },
        { name: "Lab mindset", line: "We experiment with what we make, never with what we've promised.", color: "var(--t-people)" }
      ]
    }
  },

  customer: {
    hero: {
      eyebrow: "Our customer",
      title: "People who finish every outfit with a detail that's theirs.",
      line: "And who can make that detail real silver, every day, not just on special days.",
      hint: "Tap a tag",
      tags: [
        { label: "Mid-to-senior career", detail: "Mid-to-senior level or running their own business: a stable career and the pay to buy real silver without a second thought." },
        { label: "Well off, loves accessories", detail: "Comfortable or wealthy, from career pay, a business or family money. If they love accessories and can treat themselves, real silver is within reach." },
        { label: "Around 25 to 35", detail: "A soft range. Career stage matters more than age, and we lean young and free-spirited." },
        { label: "Mostly women", detail: "Mostly women and feminine men, who already shop for small, personal pieces." },
        { label: "On Instagram & TikTok", detail: "Where they find small shops and new pieces." },
        { label: "Wears it on a Monday", detail: "Everyday wear, not something saved for a special occasion." }
      ]
    },

    moments: {
      title: "When they buy",
      items: [
        { when: "Monday", line: "Wear something that feels like them to work." },
        { when: "Payday", line: "Treat themselves after a career win." },
        { when: "A friend's birthday", line: "Give a gift with a story behind it." },
        { when: "The weekend", line: "Match pieces with friends." }
      ]
    },

    fit: {
      title: "Why we fit",
      tabs: { pains: "Pains", gains: "Gains" },
      heads: { pains: ["Their pain", "How we relieve it"], gains: ["What they hope for", "How we create it"] },
      pains: [
        { them: "Cheap silver tarnishes or irritates skin", us: "Fine silver 99.9%, labeled honestly, with care advice in every parcel" },
        { them: "The same designs on every Shopee shop", us: "Our own designs, never catalog copies" },
        { them: "Not sure it's real silver", us: "Honest purity labels, real photos and videos of each piece being made" },
        { them: "Afraid of scams when paying ahead", us: "A clear deposit rule now, buyer-protected channels later" },
        { them: "Handmade brands feel expensive", us: "Priced fairly for real silver: above mass-made, below luxury" }
      ],
      gains: [
        { them: "A piece that feels one-of-a-kind", us: "Imperfect on purpose, never sloppy" },
        { them: "A story behind it", us: "Process content shows how each piece was made" },
        { them: "Feel like the main character, every day", us: "Made for daily wear, and a brand that says just be you" },
        { them: "Looks good in photos", us: "Photogenic pieces, shot as they really are" },
        { them: "Something that lasts", us: "Real silver and care that continues after the sale" }
      ]
    }
  },

  product: {
    hero: {
      eyebrow: "What we make",
      title: "Little found treasures, in real silver.",
      glow: "real silver",
      line: "Small pieces made by hand, imperfect on purpose, and made to be worn every day.",
      parts: [
        { id: "pendant", label: "Pendant", mat: "Fine silver 99.9%", detail: "Shaped by hand from silver clay. The fire burns the clay away and leaves almost pure silver." },
        { id: "stone", label: "Stone", mat: "Lab-made CZ", detail: "Set in the clay before firing, so it has to survive the heat. Natural stones come later." },
        { id: "ring", label: "Jump ring", mat: "925 sterling, bought in", detail: "Fine silver is soft. Sterling is harder, so it holds the joint that takes the most wear." },
        { id: "cord", label: "Chain", mat: "925 sterling, bought in", detail: "Chains, and velvet cords for chokers, come from other makers. Every part is labelled with what it really is." },
        { id: "shape", label: "The shape", mat: "Imperfect on purpose", detail: "Uneven edges and texture are a choice. The finish is always clean: no sharp edges, no cracks." }
      ]
    },

    shelf: {
      title: "The pieces",
      groups: [
        { id: "now", label: "Now", line: "Silver clay" },
        { id: "next", label: "Next", line: "Cast 925" },
        { id: "later", label: "Later", line: "More to wear" }
      ],
      items: [
        { id: "pendant", group: "now", icon: "pendant", name: "Pendants", mat: "Fine silver 99.9% on a 925 chain", line: "Stars, flowers and little dangly things. Simple enough for every day." },
        { id: "choker", group: "now", icon: "choker", name: "Velvet chokers", mat: "Fine silver 99.9% on velvet", line: "A small pendant worn close to the neck, on soft velvet cord." },
        { id: "earrings", group: "now", icon: "earrings", name: "Earrings", mat: "Fine silver 99.9%, 925 hooks", line: "Small drops that move when you do." },
        { id: "cast", group: "next", icon: "cast", name: "Best-sellers in 925", mat: "925 sterling, cast by a workshop", line: "The designs people ask for most, carved once, cast in sterling and ready to ship." },
        { id: "bracelet", group: "later", icon: "bracelet", name: "Charm bracelets", mat: "925 sterling", line: "A plain bracelet with charms you choose: a stone, a star, a tiny bowl." },
        { id: "ring", group: "later", icon: "ring", name: "Rings", mat: "925 sterling", line: "Rings need harder silver than clay gives, so they come with the cast line." }
      ],
      custom: { name: "Custom pieces", tag: "Any stage", mat: "Paid in full before we start", line: "Simple, clear requests, at any stage of the brand." }
    },

    price: {
      title: "A fair price for real silver",
      line: "Above mass-made silver, far below brand-name silver. The difference is the design.",
      max: 3000000,
      start: "clay",
      about: "About",
      andUp: "and up",
      ticks: [ { v: 0, label: "0₫" }, { v: 1000000, label: "1M" }, { v: 2000000, label: "2M" }, { v: 3000000, label: "3M" } ],
      rows: [
        { id: "mass", name: "Mass-made 925", sub: "For comparison", from: 340000, to: 800000,
          note: "Sterling pieces from a large online shop, made in volume, so the same design goes to everyone. Earrings from about 340,000₫, necklaces about 800,000₫, before shipping." },
        { id: "cast", name: "Cast 925", sub: "Next · estimate", ours: true, est: true, from: 730000, to: 890000,
          note: "Sterling costs far less per gram than silver clay, so cast pieces can cost less. An estimate until we have casting quotes." },
        { id: "clay", name: "Silver clay", sub: "Now", ours: true, from: 570000, to: 1525000,
          note: "From a small pendant on its own to a larger necklace with chain. Silver clay is paid for by the gram: a small pendant uses about 1.5 g, a larger one about 3.5 g." },
        { id: "brand", name: "Brand-name silver", sub: "For comparison", from: 2400000, to: null,
          note: "Silver bracelets and necklaces from the big jewelry brands start at about 2,400,000₫." }
      ]
    },

    cost: {
      title: "What a piece costs",
      line: "Where the money from one sale goes, and what we keep.",
      priceLabel: "Price",
      start: "profit",
      kinds: {
        silver:    { name: "Silver",           color: "var(--t-make)" },
        chain:     { name: "Chain",            color: "var(--t-sell)" },
        stone:     { name: "Stone",            color: "var(--t-people)" },
        packaging: { name: "Packaging",        color: "var(--t-run)" },
        making:    { name: "Making",           color: "var(--t-story)" },
        shipping:  { name: "Shipping",         color: "var(--t-money)" },
        profit:    { name: "Profit",           color: "var(--accent)" }
      },
      sizes: [ { id: "small", name: "Small", sub: "1.5 g" }, { id: "large", name: "Larger", sub: "3.5 g" } ],
      forms: [ { id: "necklace", name: "Necklace" }, { id: "pendant", name: "Pendant only" } ],
      pieces: [
        { id: "small-necklace", price: 925000, parts: [
          { id: "silver",    amount: 300000, note: "1.5 g of silver clay, at 200,000₫ a gram." },
          { id: "chain",     amount: 250000, note: "A plain 925 sterling chain, bought in. We'll buy chains wholesale, but that price isn't known yet, so this is an estimate from current wholesale listings." },
          { id: "stone",     amount: 30000,  note: "One lab-made CZ stone, fired in with the silver." },
          { id: "packaging", amount: 15000,  note: "Minimal packaging and a QR care card. An estimate until we buy in bulk." },
          { id: "making",    amount: 52500, note: "1.5 hours of hand work, at 35,000₫ an hour." },
          { id: "shipping",  amount: 40000,  note: "Free shipping in Vietnam on orders from 900,000₫. Planned at 40,000₫ an order, the most a parcel costs from Ho Chi Minh City." },
          { id: "profit",    amount: 237500, note: "About 26% of the price. We aim for 30% before shipping and never less than 25% after it." }
        ] },
        { id: "small-pendant", price: 570000, parts: [
          { id: "silver",    amount: 300000, note: "1.5 g of silver clay, at 200,000₫ a gram." },
          { id: "stone",     amount: 30000,  note: "One lab-made CZ stone, fired in with the silver." },
          { id: "packaging", amount: 15000,  note: "Minimal packaging and a QR care card. An estimate until we buy in bulk." },
          { id: "making",    amount: 52500, note: "1.5 hours of hand work, at 35,000₫ an hour." },
          { id: "shipping",  amount: 10000,  note: "Orders under 900,000₫ pay a flat 30,000₫ for shipping. We cover the rest, about 10,000₫." },
          { id: "profit",    amount: 162500, note: "About 29% of the price, after shipping." }
        ] },
        { id: "large-necklace", price: 1525000, parts: [
          { id: "silver",    amount: 700000, note: "3.5 g of silver clay, at 200,000₫ a gram." },
          { id: "chain",     amount: 250000, note: "A plain 925 sterling chain, bought in. We'll buy chains wholesale, but that price isn't known yet, so this is an estimate from current wholesale listings." },
          { id: "stone",     amount: 30000,  note: "One lab-made CZ stone, fired in with the silver." },
          { id: "packaging", amount: 15000,  note: "Minimal packaging and a QR care card. An estimate until we buy in bulk." },
          { id: "making",    amount: 70000, note: "2 hours of hand work, at 35,000₫ an hour." },
          { id: "shipping",  amount: 47600,  note: "Free shipping in Vietnam: about 40,000₫ for the parcel plus 0.5% insurance on its declared value." },
          { id: "profit",    amount: 412400, note: "About 27% of the price. We aim for 30% before shipping and never less than 25% after it." }
        ] },
        { id: "large-pendant", price: 1170000, parts: [
          { id: "silver",    amount: 700000, note: "3.5 g of silver clay, at 200,000₫ a gram." },
          { id: "stone",     amount: 30000,  note: "One lab-made CZ stone, fired in with the silver." },
          { id: "packaging", amount: 15000,  note: "Minimal packaging and a QR care card. An estimate until we buy in bulk." },
          { id: "making",    amount: 70000, note: "2 hours of hand work, at 35,000₫ an hour." },
          { id: "shipping",  amount: 45900,  note: "Free shipping in Vietnam: about 40,000₫ for the parcel plus 0.5% insurance on its declared value." },
          { id: "profit",    amount: 309100, note: "About 26% of the price. We aim for 30% before shipping and never less than 25% after it." }
        ] }
      ]
    }
  },

  business: {
    hero: {
      eyebrow: "How we make money",
      title: "Paid first, made second.",
      glow: "Paid first,",
      line: "We buy silver only for pieces that are already paid for, so no money sits on a shelf.",
      steps: [
        { id: "order", name: "Order", line: "A customer orders a piece from a drop, or asks for a custom one, by message or on our website." },
        { id: "pay",   name: "Pay",   line: "Custom pieces are paid in full before we start. Drops are paid, at least in part, before we make them." },
        { id: "buy",   name: "Buy silver", line: "Silver is bought for paid orders and planned drops only. Nothing is made to sit in stock." },
        { id: "make",  name: "Make",  line: "Made by hand in about 3 to 5 days." },
        { id: "ship",  name: "Ship",  line: "Free shipping in Vietnam on orders from 900,000₫, and tracked post abroad. Every parcel gets a QR code to the care guide." }
      ]
    },

    channels: {
      title: "Where we sell, and what we keep",
      line: "The same 925,000₫ necklace, sold through each channel.",
      price: 925000,
      cost: 647500,
      labels: { cost: "Cost to make", fee: "Fees and shipping", keep: "We keep" },
      start: "direct",
      list: [
        { id: "direct", name: "Direct", sub: "Now", fee: 40000, keep: 237500,
          note: "Orders by message on Instagram and TikTok, and on our own website, paid by bank transfer. No platform takes a cut; the only cost on top is free shipping, about 40,000₫ an order." },
        { id: "tiktok", name: "TikTok Shop", sub: "Later", fee: 151000, keep: 126500,
          note: "A 6% transaction fee, a category commission of around 10% (estimate) and 3,000₫ per order. To keep 30% here, the price would need to be about 1,205,000₫." },
        { id: "shopee", name: "Shopee", sub: "Later", fee: 194250, keep: 83250,
          note: "A 13.5–16.5% fixed fee plus a 6% transaction fee, about 21% in all. To keep 30% here, the price would need to be about 1,320,000₫." }
      ]
    },

    streams: {
      title: "Ways money comes in",
      start: "made",
      list: [
        { id: "made", name: "Pieces made to order", when: "Now", live: true, line: "Drops of new designs, made after they're paid for. Our main income." },
        { id: "custom", name: "Custom pieces", when: "Any stage", live: true, line: "Simple, clear requests, paid in full before we start." },
        { id: "cast", name: "Cast 925 best-sellers", when: "Later", line: "Our most-asked designs, cast in sterling by a workshop in batches and ready to ship. Sales no longer depend on our making hours." },
        { id: "workshops", name: "Workshops", when: "Later", line: "Make-your-own silver clay sessions, as a side income. A similar silver workshop in Ho Chi Minh City charges from about 950,000₫ per person." }
      ],
      hub: "Starring Silver Lab"
    },

    team: {
      title: "Who does the work",
      line: "AI does the repeated work. People decide, approve and make.",
      cols: ["Now", "Later"],
      who: {
        founder: { name: "Founder", color: "var(--accent)" },
        ai: { name: "AI", color: "var(--t-people)" },
        team: { name: "Teammate", color: "var(--t-story)" },
        partner: { name: "Partner", color: "var(--t-money)" }
      },
      rows: [
        { job: "Making pieces", now: [["founder", "Founder"]], later: [["partner", "Casting workshop"], ["partner", "Silversmith"]] },
        { job: "Photos and filming", now: [["founder", "Founder"]], later: [["team", "Teammate"]] },
        { job: "Video editing", now: [["ai", "AI rough cut"], ["founder", "Founder polishes"]], later: [["ai", "AI rough cut"], ["team", "Teammate finishes"]] },
        { job: "Captions and content", now: [["ai", "AI drafts"], ["founder", "Founder approves"]], later: [["ai", "AI drafts"], ["team", "Teammate approves"]] },
        { job: "Customer replies", now: [["founder", "Founder"]], later: [["ai", "AI drafts, sends routine ones"]] },
        { job: "Orders and weekly numbers", now: [["founder", "Founder"]], later: [["ai", "AI"]] },
        { job: "Money, refunds, custom quotes", now: [["founder", "Founder"]], later: [["founder", "Founder"]] }
      ]
    }
  },

  landing: {
    startTag: "Start here"
  },

  pager: { home: "Home", prev: "Back", next: "Next" }
};
