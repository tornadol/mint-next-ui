/** @type {import('next').NextConfig} */
const pages = ['product-list','product-detail','about','contact','wishlist','compare','checkout','order-history','login','logout'];
module.exports = {
  reactStrictMode: true,
  async redirects(){
    return [
      { source: '/index.html', destination: '/', permanent: false },
      ...pages.map(p => ({ source: `/${p}.html`, destination: `/${p}`, permanent: false })),
    ];
  },
  async rewrites(){
    return {
      beforeFiles: [
        { source: '/', destination: '/ui_kits/website/index.html' },
        ...pages.map(p => ({ source: '/' + p, destination: '/ui_kits/website/' + p + '.html' })),
      ],
    };
  }
};
