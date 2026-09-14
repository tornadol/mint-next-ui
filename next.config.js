/** @type {import('next').NextConfig} */

const pageMap = [
  { slug: 'about',           file: 'About' },
  { slug: 'account',         file: 'Account' },
  { slug: 'article',         file: 'Article' },
  { slug: 'cart',            file: 'Cart' },
  { slug: 'catalogues',      file: 'CatalogueOrders' },
  { slug: 'checkout',        file: 'Checkout' },
  { slug: 'coin-recycling',  file: 'CoinRecycling' },
  { slug: 'collection',      file: 'Collection' },
  { slug: 'compare',         file: 'Compare' },
  { slug: 'corporate-gifts', file: 'CorporateGifts' },
  { slug: 'wishlist',        file: 'Favourites' },
  { slug: 'login',           file: 'Login' },
  { slug: 'membership',      file: 'Membership' },
  { slug: 'news',            file: 'News' },
  { slug: 'order-received',  file: 'OrderReceived' },
  { slug: 'payment',         file: 'Payment' },
  { slug: 'product',         file: 'Product' },
  { slug: 'register',        file: 'Register' },
  { slug: 'shop',            file: 'Shop' },
  { slug: 'stores',          file: 'Stores' },
];

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: false },
      // PascalCase .html URLs → clean slugs
      ...pageMap.map(({ slug, file }) => ({
        source: `/${file}.html`,
        destination: `/${slug}`,
        permanent: false,
      })),
      // Legacy slug aliases kept for backward compatibility
      { source: '/product-list',   destination: '/shop',      permanent: false },
      { source: '/product-detail', destination: '/product',   permanent: false },
      { source: '/order-history',  destination: '/catalogues', permanent: false },
      { source: '/order-tracking', destination: '/catalogues', permanent: false },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        // Root → Homepage
        { source: '/', destination: '/Homepage.html' },
        // Clean slugs → static HTML files in /public
        ...pageMap.map(({ slug, file }) => ({
          source: `/${slug}`,
          destination: `/${file}.html`,
        })),
        // PascalCase paths → static HTML files (used by in-page links)
        ...pageMap.map(({ file }) => ({
          source: `/${file}`,
          destination: `/${file}.html`,
        })),
      ],
    };
  },
};
