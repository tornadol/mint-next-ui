// Shared 3-level category hierarchy for The Singapore Mint
window.SM_CATEGORIES = [
  { slug:'coins', label:'Coins & Numismatics', groups:[
    { slug:'sm-coins', label:'The Singapore Mint — Coins', subs:[
      { slug:'sg-lunar-coins',    label:'Singapore Lunar Coins' },
      { slug:'macau-bhutan-lunar', label:'Macau & Bhutan Lunar Coin' },
    ]},
    { slug:'intl-coins', label:'International Coins', subs:[
      { slug:'intl-lunar',    label:'Lunar & Auspicious Coins' },
      { slug:'licensed-coins', label:'Licensed Coins' },
      { slug:'other-intl-coins',label:'Other International Coins' },
    ]},
  ]},
  { slug:'medallions', label:'Ingots & Medallions', groups:[
    { slug:'sm-medallions', label:'The Singapore Mint — Medallions', subs:[
      { slug:'sm-lunar-series',    label:'The Singapore Mint Lunar Series' },
      { slug:'lunar-auspicious-med',label:'Lunar & Auspicious Medallions' },
      { slug:'currency-souvenir',  label:'Currency Souvenir' },
      { slug:'sg-thematic',        label:'Singapore Thematic Medallions' },
    ]},
    { slug:'intl-medallions', label:'International Medallions', subs:[
      { slug:'all-intl-medallions', label:'All International Medallions' },
    ]},
  ]},
  { slug:'gifts', label:'Gifts & Collectibles', groups:[
    { slug:'gram-gold', label:'Gram Gold Collection', subs:[
      { slug:'1g-fine-gold', label:'1 Gram 999 Fine Gold Ingots' },
    ]},
    { slug:'festive', label:'Festive / Thematic Gifts', subs:[
      { slug:'lunar-gifts',       label:'Lunar Gifts' },
      { slug:'sacred-blessings',  label:'Sacred Blessings' },
      { slug:'vesak',             label:'Vesak Collectibles' },
      { slug:'deepavali',         label:'Deepavali Collectibles' },
      { slug:'christmas',         label:'Christmas Gifts' },
      { slug:'love-wedding',      label:'Love & Wedding Collection' },
      { slug:'baby',              label:'Baby Collection' },
      { slug:'sg-souvenirs',      label:'Souvenirs from Singapore' },
    ]},
    { slug:'collectibles-other', label:'Collectibles & Others', subs:[
      { slug:'foil-collectibles', label:'Gold & Silver Foil Collectibles' },
      { slug:'figurines',         label:'Figurines' },
      { slug:'jewelry',           label:'Jewelry & Personal Accessories' },
      { slug:'money-banks',       label:'Money Banks' },
      { slug:'ornaments',         label:'Home / Desktop Ornaments' },
    ]},
  ]},
  { slug:'character', label:'Character Collectibles', groups:[
    { slug:'sanrio', label:'Sanrio', subs:[
      { slug:'sanrio-gold',      label:'999 Fine Gold' },
      { slug:'sanrio-medallions',label:'Medallions' },
      { slug:'sanrio-frames',    label:'Frames & Figurines' },
      { slug:'sanrio-accessories',label:'Accessories' },
    ]},
    { slug:'peanuts', label:'Peanuts', subs:[
      { slug:'peanuts-gold',      label:'999 Fine Gold' },
      { slug:'peanuts-medallions',label:'Medallions' },
      { slug:'peanuts-frames',    label:'Frames & Figurines' },
      { slug:'peanuts-accessories',label:'Accessories' },
    ]},
    { slug:'pokemon', label:'Pokemon', subs:[
      { slug:'pokemon-medallions',label:'Medallions' },
    ]},
    { slug:'teletubbies', label:'Teletubbies', subs:[
      { slug:'teletubbies-accessories',label:'Accessories' },
    ]},
    { slug:'strawberry-shortcake', label:'Strawberry Shortcake', subs:[
      { slug:'ssc-accessories',label:'Accessories' },
    ]},
    { slug:'mr-merlion', label:'Mr. Merlion', subs:[
      { slug:'merlion-medallions', label:'Medallions' },
      { slug:'merlion-accessories',label:'Accessories' },
      { slug:'merlion-gold',       label:'999 Fine Gold' },
    ]},
  ]},
  { slug:'catalogue', label:'July / August Catalogue', groups:[
    { slug:'catalogue-all', label:'Catalogue', subs:[
      { slug:'celebrating-sg',   label:'Celebrating Singapore' },
      { slug:'cat-sacred',       label:'Sacred Blessings' },
      { slug:'lunar-goat-2027',  label:'2027 Lunar Goat Preorder' },
      { slug:'cat-international',label:'International' },
      { slug:'cat-sanrio',       label:'Sanrio' },
      { slug:'cat-snoopy',       label:'Snoopy' },
      { slug:'cat-merlion',      label:'Mr. Merlion' },
    ]},
  ]},
  { slug:'promo', label:'Online Promotion', groups:[
    { slug:'promo-all', label:'Promotions', subs:[
      { slug:'promo-licensed',  label:'Licensed Collectibles' },
      { slug:'promo-sale',      label:'Limited Time Sale' },
      { slug:'promo-birthday',  label:'Singapore Birthday Specials' },
    ]},
  ]},
];
