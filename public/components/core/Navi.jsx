import React from 'react';
import { Icon } from '../../assets/icons/Icon.jsx';

const LOGO = '../../assets/brand/sm-logo-slogan.png';

const shopItems = [
  { label: 'New Arrivals', href: 'product-list.html#/?tags=New', badge: { text: 'NEW', bg: 'var(--brand-red-800)' } },
  { label: 'Coins & Numismatics', href: 'product-list.html#/coins' },
  { label: 'Ingots & Medallions', href: 'product-list.html#/medallions' },
  { label: 'Gifts & Collectibles', href: 'product-list.html#/gifts' },
  { label: 'Character Collectibles', href: 'product-list.html#/character' },
  { label: 'July / August Catalogue', href: 'product-list.html#/catalogue' },
  { label: 'Online Promotion', href: 'product-list.html#/promo', badge: { text: 'SALE', bg: '#7a6b1a' } },
];

const popularProducts = [
  { img: '../../assets/imagery/coins/coin-01.png', title: 'Landmarks of Singapore Medallion', code: 'L233', price: '$120' },
  { img: '../../assets/imagery/coins/coin-03.png', title: 'Canada Winning Goal 1oz Silver Proof', code: 'L221', price: '$128' },
  { img: '../../assets/imagery/coins/coin-08.png', title: 'Chinese Zodiac Rabbit 1/4 oz Gold Proof', code: 'L288', price: '$640' },
  { img: '../../assets/imagery/coins/coin-11.png', title: 'Merlion 55th Anniversary Silver Medallion', code: 'L299', price: '$208' },
  { img: '../../assets/imagery/coins/coin-07.png', title: 'Peranakan Heritage 1oz Silver Proof', code: 'L266', price: '$168' },
  { img: '../../assets/imagery/coins/coin-12.png', title: 'Orchid Series — Vanda Miss Joaquim', code: 'L301', price: '$88' },
  { img: '../../assets/imagery/coins/coin-13.png', title: 'MRT 40th Anniversary Coloured Medallion', code: 'L310', price: '$108' },
  { img: '../../assets/imagery/coins/coin-05.png', title: 'National Day 2023 Silver Proof Medallion', code: 'S217', price: '$65' },
];

const OVERLAY_NAV = [
  { label:'Shop', href:'product-list.html', subs:['View all','Coins & Numismatics','Ingots & Medallions','Gifts & Collectibles','Character Collectibles','Online Promotion'] },
  { label:'About Us', href:'about.html', subs:['Our Story','Craftsmanship','Milestones','Careers'] },
  { label:'Latest', href:'promotion.html', subs:['Promotions','Events','Catalogues & Order Form','Stay Connected with Us'] },
  { label:'Contact Us', href:'contact.html', subs:['Head Office','Retail Stores','Customer Service','FAQ & Help Centre'] },
];
const OVERLAY_SUB_HREF = {
  'View all':'product-list.html','Coins & Numismatics':'product-list.html#/coins','Ingots & Medallions':'product-list.html#/medallions','Gifts & Collectibles':'product-list.html#/gifts','Character Collectibles':'product-list.html#/character','Online Promotion':'product-list.html#/promo',
  'Our Story':'about.html','Craftsmanship':'about.html','Milestones':'about.html','Careers':'about.html',
  'Promotions':'promotion.html','Events':'events.html','Catalogues & Order Form':'catalogues.html','Stay Connected with Us':'stay-connected.html',
  'Head Office':'contact.html','Retail Stores':'contact.html','Customer Service':'contact.html','FAQ & Help Centre':'faq.html',
};

export function Navi({ items = ['Shop', 'About Us', 'Latest', 'Contact Us'], active = 'Shop', logoSrc = LOGO, sticky = true, overlay = true, style }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [drawerSection, setDrawerSection] = React.useState(null);
  const [shopOpen, setShopOpen] = React.useState(false);
  const [latestOpen, setLatestOpen] = React.useState(false);
  const [ovMenu, setOvMenu] = React.useState(null);
  const [ovLeft, setOvLeft] = React.useState(0);
  const headerRef = React.useRef(null);
  const openOv = React.useCallback((i, e) => {
    setOvMenu(i);
    try {
      const hr = headerRef.current.getBoundingClientRect();
      const ir = e.currentTarget.getBoundingClientRect();
      setOvLeft(Math.max(0, ir.left - hr.left - 48));
    } catch(_){}
  }, []);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [cart, setCart] = React.useState([]);
  const [user, setUser] = React.useState(null);
  const [compare, setCompare] = React.useState([]);
  const [compareOpen, setCompareOpen] = React.useState(false);
  const compareRef = React.useRef(null);
  const compareCloseTimer = React.useRef(null);
  const [wishlist, setWishlist] = React.useState([]);
  const [wishOpen, setWishOpen] = React.useState(false);
  const [logoutModal, setLogoutModal] = React.useState(false);
  const [userMenuOpen, setUserMenuOpen] = React.useState(false);
  const userMenuTimer = React.useRef(null);
  const wishRef = React.useRef(null);
  const wishCloseTimer = React.useRef(null);
  const readWishlist = React.useCallback(() => {
    try {
      const raw = JSON.parse(localStorage.getItem('sm-wishlist') || '[]');
      setWishlist(raw.map(x => typeof x === 'string' ? { img:x } : x).filter(x => x && x.img));
    } catch(_){ setWishlist([]); }
  }, []);
  React.useEffect(() => {
    readWishlist();
    const h = () => readWishlist();
    window.addEventListener('sm-wishlist-updated', h);
    window.addEventListener('storage', h);
    return () => { window.removeEventListener('sm-wishlist-updated', h); window.removeEventListener('storage', h); };
  }, [readWishlist]);
  const removeWish = (img) => {
    const next = wishlist.filter(x => (x.img||x) !== img);
    setWishlist(next);
    try { localStorage.setItem('sm-wishlist', JSON.stringify(next)); } catch(_){}
    window.dispatchEvent(new CustomEvent('sm-wishlist-updated'));
  };
  const clearWishlist = () => {
    setWishlist([]);
    try { localStorage.setItem('sm-wishlist', '[]'); } catch(_){}
    window.dispatchEvent(new CustomEvent('sm-wishlist-updated'));
  };
  const wishAddToCart = (it) => {
    try {
      const list = JSON.parse(localStorage.getItem('sm-cart') || '[]');
      const existing = list.find(x => x.img === it.img);
      if (existing) existing.qty = (existing.qty||1) + 1;
      else list.push({ img:it.img, name:it.name || 'Product', meta:it.meta || (it.sku?it.sku+' \u00b7 45mm':''), price:it.price||0, qty:1 });
      localStorage.setItem('sm-cart', JSON.stringify(list));
      window.dispatchEvent(new CustomEvent('sm-cart-updated'));
    } catch(_){}
  };
  const readCompare = React.useCallback(() => { try { setCompare(JSON.parse(localStorage.getItem('sm-compare') || '[]')); } catch(_){ setCompare([]); } }, []);
  React.useEffect(() => {
    readCompare();
    const h = () => readCompare();
    window.addEventListener('sm-compare-updated', h);
    window.addEventListener('storage', h);
    return () => { window.removeEventListener('sm-compare-updated', h); window.removeEventListener('storage', h); };
  }, [readCompare]);
  React.useEffect(() => {
    const h = (e) => { if (compareRef.current && !compareRef.current.contains(e.target)) setCompareOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  const removeCompare = (img) => {
    const next = compare.filter(x => (x.img||x) !== img);
    setCompare(next);
    try { localStorage.setItem('sm-compare', JSON.stringify(next)); } catch(_){}
    window.dispatchEvent(new CustomEvent('sm-compare-updated'));
  };
  const clearCompare = () => {
    setCompare([]);
    try { localStorage.setItem('sm-compare', '[]'); } catch(_){}
    window.dispatchEvent(new CustomEvent('sm-compare-updated'));
  };
  React.useEffect(() => {
    try { const raw = localStorage.getItem('sm-user'); if (raw) setUser(JSON.parse(raw)); } catch(_){}
    const h = () => { try { const raw = localStorage.getItem('sm-user'); setUser(raw ? JSON.parse(raw) : null); } catch(_){ setUser(null); } };
    window.addEventListener('sm-user-updated', h);
    window.addEventListener('storage', h);
    return () => { window.removeEventListener('sm-user-updated', h); window.removeEventListener('storage', h); };
  }, []);
  const shopRef = React.useRef(null);
  const latestRef = React.useRef(null);

  const readCart = React.useCallback(() => {
    try { setCart(JSON.parse(localStorage.getItem('sm-cart') || '[]')); } catch(_){ setCart([]); }
  }, []);
  React.useEffect(() => {
    readCart();
    const h = () => readCart();
    window.addEventListener('sm-cart-updated', h);
    window.addEventListener('storage', h);
    return () => { window.removeEventListener('sm-cart-updated', h); window.removeEventListener('storage', h); };
  }, [readCart]);
  const writeCart = (next) => {
    setCart(next);
    try { localStorage.setItem('sm-cart', JSON.stringify(next)); } catch(_){}
    window.dispatchEvent(new CustomEvent('sm-cart-updated'));
  };
  const updateQty = (img, delta) => {
    const next = cart.map(it => it.img === img ? { ...it, qty: Math.max(1, (it.qty||1)+delta) } : it);
    writeCart(next);
  };
  const removeItem = (img) => writeCart(cart.filter(it => it.img !== img));
  const cartCount = cart.reduce((n,it)=>n+(it.qty||1), 0);
  const subtotal = cart.reduce((s,it)=>s+(it.price||0)*(it.qty||1), 0);
  const FREE_THRESHOLD = 500;
  const remaining = Math.max(0, FREE_THRESHOLD - subtotal);
  const progress = Math.min(100, Math.round((subtotal / FREE_THRESHOLD) * 100));
  const delivery = subtotal >= FREE_THRESHOLD ? 0 : 15;
  const fmt = (n) => '$' + n.toFixed(2);
  React.useEffect(() => {
    const handler = (e) => {
      if (shopRef.current && !shopRef.current.contains(e.target)) setShopOpen(false);
      if (latestRef.current && !latestRef.current.contains(e.target)) setLatestOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  React.useEffect(() => {
    if (!searchOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setSearchOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [searchOpen]);

  return (
    <>
      <style>{`
        .sm-navi-links{display:flex;gap:8px;margin-left:0;align-items:center}
        .home-logo{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}
        @media(max-width:900px){.home-logo{position:static;top:auto;transform:none}}
        html,body{overflow-x:hidden}
        @media(max-width:900px){.sm-navi-logo{height:24px!important}}
        @media(max-width:600px){.sm-navi-logo{height:22px!important}}
        .sm-navi-right{margin-left:auto;display:flex;align-items:center;gap:16px}
        .sm-navi-overlay{color:#fff}
        .sm-navi-overlay a{color:#fff!important}
        .sm-navi-overlay .sm-nav-item{color:#fff!important}
        .sm-navi-overlay .sm-nav-item:hover{background:rgba(255,255,255,.14)}
        .sm-navi-overlay .sm-nav-item.shop-active{color:#fff!important;background:rgba(255,255,255,.18);border-color:rgba(255,255,255,.3)}
        .sm-navi-overlay .sm-navi-login{color:#fff!important}
        .sm-navi-overlay svg{color:#fff}
        .sm-navi-overlay .sm-navi-logo{filter:brightness(0) invert(1)}
        .sm-navi-overlay .home-logo{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}
        .sm-navi-overlay .sm-navi-links{margin-left:0}
        @media(max-width:900px){.sm-navi-overlay .home-logo{position:static;transform:none}}
        .sm-ov-nav{gap:24px!important;flex-wrap:nowrap}
        /* Overlay header: true 3-column flex so logo is centered by layout and nav can never overlap/clip */
        .sm-navi-overlay .home-logo{position:static!important;left:auto;top:auto;transform:none!important;order:2;margin:0}
        .sm-navi-overlay .sm-ov-nav{order:1;flex:1 1 0;min-width:0;max-width:none}
        .sm-navi-overlay .sm-ov-right{order:3;flex:1 1 0;justify-content:flex-end}
        @media(max-width:900px){.sm-navi-overlay .sm-ov-nav{flex:0 1 auto}.sm-navi-overlay .sm-ov-right{flex:0 0 auto}}
        .sm-ov-nav .sm-nav-item{text-transform:none!important;font-weight:300!important;font-size:15px!important;letter-spacing:0!important;padding:8px 0!important;border-radius:0!important;white-space:nowrap;display:inline-flex!important;align-items:center;gap:5px;cursor:pointer}
        .sm-ov-nav .sm-nav-item .ov-chev{transition:transform .16s;opacity:.85}
        .sm-ov-nav .sm-nav-item:hover .ov-chev{transform:rotate(180deg)}
        .sm-navi-overlay .sm-ov-nav .sm-nav-item:hover{background:transparent!important;opacity:.75}
        .sm-ov-link{font-family:var(--font-label);font-weight:300;font-size:16px;color:#fff!important;text-decoration:none;cursor:pointer}
        .sm-ov-right a,.sm-ov-right button{cursor:pointer}
        .sm-ov-link:hover{opacity:.75}
        .sm-ov-right{gap:24px!important}
        .sm-ov-panel{position:absolute;top:80px;left:0;right:0;background:rgba(44,40,42,.9);box-shadow:0 16px 40px rgba(0,0,0,.18);z-index:39;animation:smFadeIn .16s ease}
        .sm-navi-overlay .sm-ov-panel{background:rgba(44,40,42,.82);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);box-shadow:none}
        .sm-ov-inner{max-width:none;width:100%;margin:0;padding:12px 48px 40px;box-sizing:border-box}
        .sm-ov-list{display:flex;flex-direction:column;gap:2px;max-width:340px}
        .sm-ov-sub{font-family:var(--font-label);font-weight:400;font-size:17px;color:rgba(255,255,255,.88);text-decoration:none;padding:9px 0;cursor:pointer}
        .sm-ov-sub:hover{color:#fff}
        @media(max-width:900px){.sm-ov-nav,.sm-ov-panel{display:none!important}}
        .sm-navi-hamburger{display:none}
        .sm-navi-login{display:inline-flex;align-items:center;gap:8px;color:var(--ink-1000);font-family:var(--font-label);font-weight:700;font-size:16px;text-decoration:none}
        .sm-nav-item{display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:999px;font-family:var(--font-label);font-weight:700;font-size:15px;text-transform:uppercase;letter-spacing:.03em;cursor:pointer;text-decoration:none;border:1px solid transparent;background:transparent;color:var(--ink-1000);transition:background .15s}
        .sm-nav-item:hover{background:var(--ink-25)}
        .sm-nav-item.shop-active{color:var(--brand-red-800);background:#fff0f2;border-color:#fcc}
        .sm-shop-wrap{position:relative}
        .sm-shop-dropdown{position:absolute;top:calc(100% + 10px);left:0;min-width:920px;max-width:96vw;background:#fff;border-radius:6px;box-shadow:0 8px 32px rgba(0,0,0,.14),0 0 0 1px rgba(0,0,0,.06);padding:16px;z-index:120;animation:smFadeIn .14s ease;display:grid;grid-template-columns:repeat(2,1fr);gap:8px 24px;max-height:70vh;overflow-y:auto}
        .sm-shop-top-row{grid-column:1/-1;display:flex;padding-bottom:8px;margin-bottom:4px;border-bottom:1px solid var(--ink-50)}
        .sm-mega-cat{padding:12px 8px;border-radius:6px}
        .sm-mega-cat-title{display:block;font-family:var(--font-label);font-weight:800;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#cf0731;text-decoration:none;padding-bottom:8px;margin-bottom:8px;border-bottom:1px solid var(--ink-50)}
        .sm-mega-cat-title:hover{text-decoration:underline}
        .sm-mega-group{margin-bottom:10px}
        .sm-mega-group-title{font-family:var(--font-label);font-weight:700;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-500);margin-bottom:4px}
        .sm-mega-subs{display:flex;flex-direction:column}
        .sm-mega-sub{font-family:var(--font-body);font-size:13px;color:var(--ink-800);text-decoration:none;padding:4px 6px;border-radius:4px;line-height:1.4}
        .sm-mega-sub:hover{background:var(--ink-25);color:#cf0731}
        @media(max-width:900px){.sm-shop-dropdown{grid-template-columns:1fr;min-width:min(560px,92vw)}}
        z-index:100;animation:smFadeIn .15s ease}
        @keyframes smFadeIn{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}
        .sm-shop-item{display:flex;align-items:center;justify-content:space-between;padding:11px 14px;border-radius:4px;font-family:var(--font-label);font-size:14px;font-weight:600;color:var(--ink-1000);text-decoration:none;cursor:pointer;transition:background .12s}
        .sm-shop-item:hover{background:var(--ink-25)}
        .sm-shop-badge{padding:3px 8px;font-size:11px;font-weight:700;letter-spacing:.06em;color:#fff;border-radius:2px}
        .sm-search-wrap{position:relative;display:inline-flex;align-items:center}
                .sm-search-backdrop{position:fixed;inset:0;z-index:150;background:transparent;animation:smFadeIn .18s ease}
        .sm-search-card{position:absolute;top:calc(100% + 14px);right:0;width:420px;background:#fff;border-radius:6px;box-shadow:0 24px 64px rgba(0,0,0,.24),0 2px 8px rgba(0,0,0,.08);display:flex;flex-direction:column;max-height:calc(100vh - 120px);overflow:hidden;z-index:200;animation:smFadeIn .18s ease}
        .sm-search-inputrow{display:flex;align-items:center;gap:10px;padding:12px 14px;border-bottom:1px solid var(--ink-75)}
        .sm-search-inputrow input{flex:1;border:0;outline:0;font-family:var(--font-body);font-size:15px;color:var(--ink-1000);background:transparent;min-width:0}
        .sm-search-close{background:none;border:0;cursor:pointer;color:var(--ink-500);display:inline-flex;align-items:center;padding:4px;border-radius:4px}
        .sm-search-close:hover{background:var(--ink-25);color:var(--ink-1000)}
        .sm-search-section-title{padding:12px 16px 6px;font-family:var(--font-label);font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-500)}
        .sm-search-list{overflow-y:auto;padding:0 6px 10px;scrollbar-width:thin;scrollbar-color:var(--ink-100) transparent}
        .sm-search-list::-webkit-scrollbar{width:8px}
        .sm-search-list::-webkit-scrollbar-thumb{background:var(--ink-100);border-radius:4px}
        .sm-search-list::-webkit-scrollbar-thumb:hover{background:var(--ink-500)}
        .sm-search-item{display:flex;align-items:center;gap:12px;padding:8px 10px;border-radius:6px;text-decoration:none;color:inherit;cursor:pointer;transition:background .12s}
        .sm-search-item:hover{background:var(--ink-25)}
        .sm-search-thumb{width:48px;height:48px;flex-shrink:0;border:1px solid var(--ink-75);border-radius:6px;display:flex;align-items:center;justify-content:center;background:#fff}
        .sm-search-thumb img{max-width:38px;max-height:38px;object-fit:contain}
        .sm-search-info{display:flex;flex-direction:column;min-width:0}
        .sm-search-title{font-family:var(--font-label);font-weight:700;font-size:13px;color:var(--ink-1000);line-height:1.3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        .sm-search-meta{font-family:var(--font-body);font-size:12px;color:var(--ink-500);margin-top:2px}
        .sm-cart-backdrop{position:fixed;inset:0;z-index:180;background:rgba(0,0,0,.45);animation:smFadeIn .18s ease}
        .sm-cart-panel{position:fixed;top:0;right:0;height:100vh;width:420px;max-width:100vw;background:#fff;z-index:200;display:flex;flex-direction:column;box-shadow:-24px 0 64px rgba(0,0,0,.18);animation:smSlideInRight .22s ease}
        @keyframes smSlideInRight{from{transform:translateX(100%)}to{transform:translateX(0)}}
        .sm-cart-head{display:flex;align-items:center;justify-content:space-between;padding:20px 22px;border-bottom:1px solid var(--ink-75)}
        .sm-cart-title{display:flex;align-items:center;gap:10px;font-family:var(--font-label);font-weight:800;font-size:20px;color:var(--ink-1000)}
        .sm-cart-count{font-family:var(--font-body);font-size:14px;color:var(--ink-500)}
        .sm-cart-close{background:none;border:0;cursor:pointer;color:var(--ink-500);display:inline-flex;align-items:center;padding:6px;border-radius:4px}
        .sm-cart-close:hover{background:var(--ink-25);color:var(--ink-1000)}
        .sm-cart-list{flex:1;overflow-y:auto;padding:8px 22px;scrollbar-width:thin}
        .sm-cart-list::-webkit-scrollbar{width:8px}
        .sm-cart-list::-webkit-scrollbar-thumb{background:var(--ink-100);border-radius:4px}
        .sm-cart-row{display:flex;gap:14px;padding:18px 0;border-bottom:1px solid var(--ink-50);align-items:flex-start}
        .sm-cart-row:last-child{border-bottom:0}
        .sm-cart-thumb{width:80px;height:80px;flex-shrink:0;background:var(--ink-25);border:1px solid var(--ink-75);display:flex;align-items:center;justify-content:center;border-radius:2px}
        .sm-cart-thumb img{max-width:64px;max-height:64px;object-fit:contain}
        .sm-cart-info{flex:1;display:flex;flex-direction:column;gap:6px;min-width:0}
        .sm-cart-name{font-family:var(--font-label);font-weight:700;font-size:14px;color:var(--ink-1000);line-height:1.35}
        .sm-cart-meta{font-family:var(--font-body);font-size:12px;color:var(--ink-500)}
        .sm-cart-qty{display:inline-flex;align-self:flex-start;align-items:center;border:1px solid var(--ink-100);border-radius:2px;overflow:hidden;margin-top:6px}
        .sm-cart-qty button{width:30px;height:30px;background:#fff;border:0;cursor:pointer;color:var(--ink-1000);display:inline-flex;align-items:center;justify-content:center;font-size:16px}
        .sm-cart-qty button:hover{background:var(--ink-25)}
        .sm-cart-qty span{min-width:30px;text-align:center;font-family:var(--font-label);font-weight:600;font-size:14px}
        .sm-cart-side{display:flex;flex-direction:column;align-items:flex-end;gap:8px}
        .sm-cart-remove{width:28px;height:28px;border:1px solid #ffd1d1;background:#fff;color:#cf0731;border-radius:4px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center}
        .sm-cart-remove:hover{background:#cf0731;color:#fff;border-color:#cf0731}
        .sm-cart-price{font-family:var(--font-label);font-weight:700;font-size:14px;color:var(--ink-1000);margin-top:auto;white-space:nowrap}
        .sm-cart-empty{padding:60px 22px;text-align:center;color:var(--ink-500);font-family:var(--font-body)}
        .sm-cart-foot{background:var(--ink-25);padding:22px;display:flex;flex-direction:column;gap:14px;border-top:1px solid var(--ink-75)}
        .sm-cart-line{display:flex;justify-content:space-between;font-family:var(--font-body);font-size:14px;color:var(--ink-1000)}
        .sm-cart-line.total{font-family:var(--font-label);font-weight:800;font-size:16px}
        .sm-cart-progress{background:#fff;border:1px solid var(--ink-75);border-radius:4px;padding:10px 12px}
        .sm-cart-progress-row{display:flex;justify-content:space-between;font-family:var(--font-body);font-size:12px;color:var(--ink-500);margin-bottom:6px}
        .sm-cart-progress-bar{height:4px;background:var(--ink-75);border-radius:2px;overflow:hidden}
        .sm-cart-progress-bar > div{height:100%;background:#cf0731;transition:width .3s}
        .sm-cart-checkout{background:#cf0731;color:#fff;border:0;padding:14px;font-family:var(--font-label);font-weight:700;font-size:14px;letter-spacing:.05em;text-transform:uppercase;cursor:pointer;transition:background .12s}
        .sm-cart-checkout:hover{background:#a30425}
        .sm-cart-continue{background:none;border:0;color:var(--ink-500);font-family:var(--font-body);font-size:14px;cursor:pointer;text-align:center;padding:4px}
        .sm-cart-continue:hover{color:var(--ink-1000);text-decoration:underline}
        @media(max-width:600px){
          .sm-cart-panel{width:100vw}
          .sm-cart-thumb{width:64px;height:64px}
          .sm-cart-thumb img{max-width:52px;max-height:52px}
        }
        @media(max-width:900px){
          .sm-search-card{position:fixed;top:0;left:0;right:0;width:auto;max-width:none;border-radius:0;max-height:100vh;height:100vh}
        }
        .sm-drawer{display:none;position:fixed;inset:0;z-index:50;flex-direction:column}
        .sm-drawer.open{display:flex}
        .sm-drawer-bg{position:absolute;inset:0;background:rgba(0,0,0,.45)}
        .sm-drawer-panel{position:relative;width:80%;max-width:320px;height:100%;background:#fff;display:flex;flex-direction:column;overflow-y:auto;z-index:1}
        .sm-drawer-head{display:flex;align-items:center;justify-content:space-between;padding:20px;border-bottom:1px solid var(--ink-100)}
        .sm-drawer-nav{display:flex;flex-direction:column;padding:8px 0}
        .sm-drawer-nav .sm-drawer-top,.sm-drawer-acc{display:flex;align-items:center;justify-content:space-between;width:100%;box-sizing:border-box;padding:16px 24px;font-family:var(--font-label);font-weight:700;font-size:15px;text-transform:uppercase;letter-spacing:.04em;color:var(--ink-1000);text-decoration:none;border-bottom:1px solid var(--ink-50);background:none;border-left:0;border-right:0;border-top:0;cursor:pointer;text-align:left}
        .sm-drawer-nav .sm-drawer-top:hover,.sm-drawer-acc:hover{background:var(--ink-25)}
        .sm-drawer-acc .acc-chev{transition:transform .18s;color:var(--ink-400);flex-shrink:0}
        .sm-drawer-sub{display:flex;flex-direction:column;background:var(--ink-25);border-bottom:1px solid var(--ink-50)}
        .sm-drawer-sub a{padding:12px 24px 12px 36px;font-family:var(--font-label);font-weight:600;font-size:13.5px;color:var(--ink-700);text-decoration:none;letter-spacing:.02em;text-transform:none}
        .sm-drawer-sub a:hover{background:#fff;color:#cf0731}
        .sm-drawer-nav a{padding:14px 24px;font-family:var(--font-label);font-weight:700;font-size:15px;text-transform:uppercase;letter-spacing:.04em;color:var(--ink-1000);text-decoration:none;border-bottom:1px solid var(--ink-50)}
        .sm-drawer-sub a{padding:12px 24px 12px 36px!important;font-weight:600!important;font-size:13.5px!important;color:var(--ink-700)!important;text-transform:none!important;border-bottom:0!important}
        .sm-drawer-nav a:hover{background:var(--ink-25)}
        .sm-drawer-sub a:hover{background:#fff!important;color:#cf0731!important}
        .sm-drawer-footer{margin-top:auto;padding:24px;border-top:1px solid var(--ink-100);display:flex;flex-direction:column;gap:12px}
        @media(max-width:1024px){
          .sm-navi-links{display:none}
          .sm-navi-hamburger{display:inline-flex!important}
          .sm-navi-login span:last-child{display:none}
          .sm-navi-right{gap:12px}
          .sm-navi-right svg{width:20px!important;height:20px!important}
          .sm-navi-right .sm-navi-login span:first-child{width:24px!important;height:24px!important;font-size:11px!important}
        }
        @media(max-width:600px){
          .sm-navi-right{gap:8px}
          .sm-navi-right svg{width:18px!important;height:18px!important}
        }
        /* Overlay (black) header — mobile declutter */
        @media(max-width:900px){
          .sm-ov-right{gap:14px!important}
          .sm-ov-right svg{width:20px!important;height:20px!important}
        }
        @media(max-width:600px){
          .sm-ov-right{gap:12px!important}
          .sm-ov-right svg{width:20px!important;height:20px!important}
          .sm-ov-right .sm-ov-link{display:none!important}
          .sm-ov-right .sm-ov-icon-extra{display:none!important}
        }
      `}</style>

      <header ref={headerRef} className={overlay ? 'sm-navi-overlay' : ''} onMouseLeave={()=>setOvMenu(null)} style={{
        position: overlay ? (sticky ? 'sticky' : 'relative') : (sticky ? 'sticky' : 'relative'), top: 0, left: 0, right: 0, zIndex: 40,
        width: '100%', height: 80,
        background: overlay ? '#0d0b0c' : 'var(--surface-panel)',
        borderBottom: overlay ? '1px solid rgba(255,255,255,.08)' : '1px solid var(--border-nav)',
        backdropFilter: overlay ? 'none' : 'blur(10px)',
        WebkitBackdropFilter: overlay ? 'none' : 'blur(10px)',
        boxSizing: 'border-box',
        ...style,
      }}>
        <div style={{ height: '100%', maxWidth: 'none', width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', padding: '0 48px', boxSizing: 'border-box' }}>
          <a href="index.html" aria-label="Home" className="home-logo" style={overlay?{display:'inline-flex',alignItems:'center',flexShrink:0,position:'static',left:'auto',top:'auto',transform:'none',order:2,margin:0}:{display:'inline-flex',alignItems:'center',flexShrink:0}}><img className="sm-navi-logo" src={logoSrc} alt="The Singapore Mint" style={{ height: 32, width: 'auto', flexShrink: 0 }} /></a>

          <nav className="sm-navi-links sm-ov-nav" style={overlay?{order:1,flex:'1 1 0',minWidth:0,maxWidth:'none',overflow:'visible'}:undefined}>
            {OVERLAY_NAV.map((c,i)=>(
              <a key={c.label} href={c.href} className="sm-nav-item" onMouseEnter={(e)=>openOv(i,e)}>
                {c.label}
                <svg className="ov-chev" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </a>
            ))}
          </nav>
          <nav className="sm-navi-links" style={{display:'none'}}>
            {/* Shop with dropdown */}
            <div className="sm-shop-wrap" ref={shopRef}>
              <button className={`sm-nav-item${shopOpen ? ' shop-active' : ''}`}
                onClick={(e) => { if (e.shiftKey || e.metaKey || e.ctrlKey) { window.location.href = 'product-list.html'; return; } setShopOpen(o => !o); }}
                onDoubleClick={() => { window.location.href = 'product-list.html'; }}>
                Shop
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{transition:'transform .2s',transform:shopOpen?'rotate(180deg)':'none'}}>
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {shopOpen && (
                <div className="sm-shop-dropdown">
                  <div className="sm-shop-top-row">
                    {shopItems.slice(0,1).map(it => (
                      <a key={it.label} href={it.href || 'product-list.html'} className="sm-shop-item" onClick={() => setShopOpen(false)}>
                        <span>{it.label}</span>
                        {it.badge && <span className="sm-shop-badge" style={{background:it.badge.bg}}>{it.badge.text}</span>}
                      </a>
                    ))}
                  </div>
                  {(window.SM_CATEGORIES || []).map(cat => (
                    <div key={cat.slug} className="sm-mega-cat">
                      <a href={`product-list.html#/${cat.slug}`} className="sm-mega-cat-title" onClick={() => setShopOpen(false)}>{cat.label}</a>
                      {cat.groups.map(g => (
                        <div key={g.slug} className="sm-mega-group">
                          <div className="sm-mega-group-title">{g.label}</div>
                          <div className="sm-mega-subs">
                            {g.subs.map(sub => (
                              <a key={sub.slug} href={`product-list.html#/${cat.slug}/${sub.slug}`} className="sm-mega-sub" onClick={() => setShopOpen(false)}>{sub.label}</a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {items.filter(i => i !== 'Shop').map(i => {
              if (i === 'Latest') {
                const latestItems = [
                  { label:'Promotions', href:'promotion.html' },
                  { label:'Events', href:'events.html' },
                  { label:'Catalogues & Order Form', href:'catalogues.html' },
                  { label:'Stay Connected with Us', href:'stay-connected.html' },
                  { label:'FAQ & Help Centre', href:'faq.html' },
                ];
                return (
                  <div key={i} className="sm-latest-wrap" ref={latestRef} style={{position:'relative'}}>
                    <button className={`sm-nav-item${(i===active||latestOpen) ? ' shop-active' : ''}`} onClick={()=>setLatestOpen(o=>!o)}>
                      {i}
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft:2,transition:'transform .15s',transform:latestOpen?'rotate(180deg)':'none'}}><polyline points="6 9 12 15 18 9"/></svg>
                    </button>
                    {latestOpen && (
                      <div style={{position:'absolute',top:'calc(100% + 10px)',left:0,minWidth:260,background:'#fff',borderRadius:8,boxShadow:'0 8px 32px rgba(0,0,0,.14),0 0 0 1px rgba(0,0,0,.06)',padding:'10px 6px',zIndex:1000}}>
                        {latestItems.map(it => (
                          <a key={it.label} href={it.href} onClick={()=>setLatestOpen(false)} style={{display:'block',padding:'12px 18px',fontFamily:'var(--font-label)',fontWeight:600,fontSize:15,color:'var(--ink-1000)',textDecoration:'none',borderRadius:6,transition:'background .12s'}} onMouseEnter={e=>e.currentTarget.style.background='var(--ink-25)'} onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
                            {it.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              const href = i === 'About Us' ? 'about.html' : i === 'Contact Us' ? 'contact.html' : '#';
              return (
                <a key={i} href={href} className={`sm-nav-item${i === active ? ' shop-active' : ''}`}>{i}</a>
              );
            })}
          </nav>

          {logoutModal && (
            <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,.45)',zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center'}} onClick={()=>setLogoutModal(false)}>
              <div style={{background:'#fff',borderRadius:6,padding:'36px 32px',width:360,boxShadow:'0 20px 60px rgba(0,0,0,.25)',textAlign:'center'}} onClick={e=>e.stopPropagation()}>
                <div style={{width:52,height:52,borderRadius:999,background:'#fff2f4',display:'inline-flex',alignItems:'center',justifyContent:'center',marginBottom:18}}><Icon name="LogOut" size={22} style={{color:'#cf0731'}}/></div>
                <div style={{fontFamily:'var(--font-label)',fontWeight:800,fontSize:18,marginBottom:8}}>Sign out?</div>
                <div style={{fontFamily:'var(--font-body)',fontSize:14,color:'var(--ink-500)',marginBottom:28}}>You'll be signed out of your account. Any unsaved changes will be lost.</div>
                <div style={{display:'flex',gap:12,justifyContent:'center'}}>
                  <button onClick={()=>setLogoutModal(false)} style={{flex:1,padding:'12px 0',border:'1px solid var(--ink-100)',borderRadius:4,background:'#fff',fontFamily:'var(--font-label)',fontWeight:700,fontSize:13,cursor:'pointer'}}>Cancel</button>
                  <button onClick={()=>{
                    try{localStorage.removeItem('sm-user');}catch(_){}
                    window.dispatchEvent(new CustomEvent('sm-user-updated'));
                    setLogoutModal(false);
                    window.location.href='login.html';
                  }} style={{flex:1,padding:'12px 0',border:0,borderRadius:4,background:'#cf0731',color:'#fff',fontFamily:'var(--font-label)',fontWeight:700,fontSize:13,cursor:'pointer'}}>Sign Out</button>
                </div>
              </div>
            </div>
          )}
          {overlay && (
            <div className="sm-navi-right sm-ov-right" style={{order:3,flex:'1 1 0',justifyContent:'flex-end'}}>
              {user && (user.name||user.email) && user.name!=='Guest User'
                ? <a href="account.html#info" className="sm-ov-link">{(user.name||user.email||'').split('@')[0]}</a>
                : <a href="login.html" className="sm-ov-link">Login</a>}
              <a href="wishlist.html" aria-label="Wishlist" className="sm-ov-icon-extra" style={{color:'#fff',display:'inline-flex',position:'relative'}}>
                <Icon name="Heart" size={22}/>
                {wishlist.length>0 && <span style={{position:'absolute',top:-6,right:-8,background:'#cf0731',color:'#fff',fontFamily:'var(--font-label)',fontWeight:700,fontSize:10,minWidth:16,height:16,borderRadius:999,display:'inline-flex',alignItems:'center',justifyContent:'center',padding:'0 4px'}}>{wishlist.length}</span>}
              </a>
              <a href="compare.html" aria-label="Compare products" className="sm-ov-icon-extra" style={{color:'#fff',display:'inline-flex',position:'relative'}}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v17"/><path d="M7 21h10"/><path d="M6 8l-4 8a4 4 0 008 0L6 8z"/><path d="M18 8l-4 8a4 4 0 008 0L18 8z"/><path d="M3 7l9-1 9 1"/></svg>
                {compare.length>0 && <span style={{position:'absolute',top:-6,right:-8,background:'#cf0731',color:'#fff',fontFamily:'var(--font-label)',fontWeight:700,fontSize:10,minWidth:16,height:16,borderRadius:999,display:'inline-flex',alignItems:'center',justifyContent:'center',padding:'0 4px'}}>{compare.length}</span>}
              </a>
              <a href="#" aria-label="Cart" onClick={(e)=>{e.preventDefault();setCartOpen(true);}} style={{color:'#fff',display:'inline-flex',position:'relative'}}>
                <Icon name="ShoppingBag" size={22}/>
                {cartCount>0 && <span style={{position:'absolute',top:-6,right:-8,background:'#cf0731',color:'#fff',fontFamily:'var(--font-label)',fontWeight:700,fontSize:10,minWidth:16,height:16,borderRadius:999,display:'inline-flex',alignItems:'center',justifyContent:'center',padding:'0 4px'}}>{cartCount}</span>}
              </a>
              <button className="sm-navi-hamburger" onClick={()=>setDrawerOpen(true)} style={{background:'none',border:'none',cursor:'pointer',color:'#fff',alignItems:'center',padding:0}}><Icon name="Menu" size={24}/></button>
            </div>
          )}
          <div className="sm-navi-right" style={overlay?{display:'none'}:undefined}>
            {user ? (
              <div style={{position:'relative'}}
                onMouseEnter={()=>{ if(userMenuTimer.current) clearTimeout(userMenuTimer.current); setUserMenuOpen(true); }}
                onMouseLeave={()=>{ userMenuTimer.current = setTimeout(()=>setUserMenuOpen(false), 180); }}>
                <button className="sm-navi-login" aria-label={`Signed in as ${user.name||user.email}`} style={{background:'none',border:0,cursor:'pointer',padding:0}}>
                  <span style={{width:28,height:28,borderRadius:999,background:'#cf0731',color:'#fff',display:'inline-flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-label)',fontWeight:700,fontSize:12}}>{(user.name||user.email||'U').trim()[0].toUpperCase()}</span>
                  <span style={{maxWidth:140,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{(user.name||user.email||'').split('@')[0]}</span>
                </button>
                {userMenuOpen && (
                  <div style={{position:'absolute',top:'100%',right:0,paddingTop:10,minWidth:220,zIndex:160}}>
                    <div style={{background:'#fff',borderRadius:6,boxShadow:'0 12px 32px rgba(0,0,0,.16),0 0 0 1px rgba(0,0,0,.06)',padding:6}}>
                      <div style={{padding:'10px 12px 12px',borderBottom:'1px solid var(--ink-50)',marginBottom:4}}>
                        <div style={{fontFamily:'var(--font-label)',fontWeight:700,fontSize:13,color:'var(--ink-1000)'}}>{user.name||(user.email||'').split('@')[0]}</div>
                        <div style={{fontFamily:'var(--font-body)',fontSize:12,color:'var(--ink-500)',marginTop:2,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{user.email}</div>
                      </div>
                      <a href="account.html#info" style={{display:'flex',alignItems:'center',gap:10,padding:'9px 12px',borderRadius:4,color:'var(--ink-1000)',fontFamily:'var(--font-label)',fontWeight:600,fontSize:13,textDecoration:'none'}} onMouseEnter={e=>e.currentTarget.style.background='var(--ink-25)'} onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
                        <Icon name="Settings" size={16}/> Dashboard
                      </a>
                      <button onClick={()=>{ setUserMenuOpen(false); setLogoutModal(true); }} style={{display:'flex',alignItems:'center',gap:10,padding:'9px 12px',borderRadius:4,color:'#cf0731',fontFamily:'var(--font-label)',fontWeight:600,fontSize:13,background:'none',border:0,cursor:'pointer',width:'100%',textAlign:'left',marginTop:4,borderTop:'1px solid var(--ink-50)',borderRadius:0}} onMouseEnter={e=>e.currentTarget.style.background='#fff2f4'} onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
                        <Icon name="LogOut" size={16}/> Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a href="login.html" className="sm-navi-login" aria-label="Login"><Icon name="User" size={24} /></a>
            )}
                        <div className="sm-search-wrap">
              <a href="#" aria-label="Search" onClick={(e)=>{e.preventDefault();setSearchOpen(o=>!o);}} style={{ color: 'var(--ink-1000)', display: 'inline-flex', alignItems: 'center' }}><Icon name="Search" size={24} /></a>
              {searchOpen && (
                <div className="sm-search-card" onMouseDown={(e)=>e.stopPropagation()}>
                  <div className="sm-search-inputrow">
                    <Icon name="Search" size={20} />
                    <input autoFocus type="text" placeholder="Search coins, ingots, gifts..." />
                    <button className="sm-search-close" aria-label="Close search" onClick={()=>setSearchOpen(false)}>
                      <Icon name="X" size={20} />
                    </button>
                  </div>
                  <div className="sm-search-section-title">Popular Products</div>
                  <div className="sm-search-list">
                    {popularProducts.map(p => (
                      <a key={p.title} href="#" className="sm-search-item" onClick={()=>setSearchOpen(false)}>
                        <div className="sm-search-thumb"><img src={p.img} alt="" /></div>
                        <div className="sm-search-info">
                          <div className="sm-search-title">{p.title}</div>
                          <div className="sm-search-meta">{p.code} · {p.price}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div ref={wishRef} className="sm-nav-extra" style={{position:'relative',display:'inline-flex'}}
              onMouseEnter={()=>{ if(wishCloseTimer.current) clearTimeout(wishCloseTimer.current); setWishOpen(true); }}
              onMouseLeave={()=>{ wishCloseTimer.current = setTimeout(()=>setWishOpen(false), 180); }}>
              <a href="wishlist.html" aria-label="Wishlist" style={{ color: 'var(--ink-1000)', display: 'inline-flex', alignItems: 'center', position:'relative' }}>
                <Icon name="Heart" size={24} />
                {wishlist.length > 0 && <span style={{position:'absolute',top:-6,right:-8,background:'#cf0731',color:'#fff',fontFamily:'var(--font-label)',fontWeight:700,fontSize:10,minWidth:16,height:16,borderRadius:999,display:'inline-flex',alignItems:'center',justifyContent:'center',padding:'0 4px'}}>{wishlist.length}</span>}
              </a>
              {wishOpen && (
                <div style={{position:'absolute',top:'100%',right:0,paddingTop:10,width:320,zIndex:150}}>
                <div style={{background:'#fff',borderRadius:6,boxShadow:'0 12px 32px rgba(0,0,0,.16),0 0 0 1px rgba(0,0,0,.06)',padding:12}}>
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'4px 6px 10px',borderBottom:'1px solid var(--ink-50)'}}>
                    <div style={{fontFamily:'var(--font-label)',fontWeight:800,fontSize:11,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--ink-1000)'}}>Wishlist ({wishlist.length})</div>
                    {wishlist.length > 0 && <button onClick={clearWishlist} style={{background:'none',border:0,color:'#cf0731',fontFamily:'var(--font-label)',fontWeight:700,fontSize:11,letterSpacing:'.06em',textTransform:'uppercase',cursor:'pointer'}}>Clear All</button>}
                  </div>
                  {wishlist.length === 0 ? (
                    <div style={{padding:'24px 8px',textAlign:'center',color:'var(--ink-500)',fontFamily:'var(--font-body)',fontSize:13}}>Your wishlist is empty.</div>
                  ) : (
                    <div style={{maxHeight:320,overflowY:'auto'}}>
                      {wishlist.map((it,i) => (
                        <div key={it.img||i} style={{display:'flex',gap:10,alignItems:'center',padding:'8px 6px',borderRadius:4}}>
                          <div style={{width:48,height:48,border:'1px solid var(--ink-75)',borderRadius:4,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                            <img src={it.img||it} alt="" style={{maxWidth:38,maxHeight:38,objectFit:'contain'}}/>
                          </div>
                          <div style={{flex:1,minWidth:0}}>
                            <div style={{fontFamily:'var(--font-label)',fontWeight:700,fontSize:13,color:'var(--ink-1000)',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{it.name || 'Product'}</div>
                            <div style={{fontFamily:'var(--font-body)',fontSize:12,color:'var(--ink-500)'}}>{it.sku ? it.sku+' · ' : ''}${(it.price||0).toFixed(2)}</div>
                          </div>
                          <button onClick={()=>wishAddToCart(it)} aria-label="Add to cart" title="Add to cart" style={{width:26,height:26,border:'1px solid var(--ink-100)',background:'#fff',color:'var(--ink-1000)',borderRadius:4,cursor:'pointer',display:'inline-flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                            <Icon name="ShoppingBag" size={14}/>
                          </button>
                          <button onClick={()=>removeWish(it.img||it)} aria-label="Remove" style={{width:26,height:26,border:'1px solid #ffd1d1',background:'#fff',color:'#cf0731',borderRadius:4,cursor:'pointer',display:'inline-flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                            <Icon name="X" size={14}/>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  <a href="wishlist.html" style={{display:'block',marginTop:10,background:'#cf0731',color:'#fff',border:0,padding:'12px',fontFamily:'var(--font-label)',fontWeight:700,fontSize:12,letterSpacing:'.06em',textTransform:'uppercase',cursor:'pointer',textAlign:'center',textDecoration:'none',borderRadius:4,pointerEvents: wishlist.length===0?'none':'auto',opacity: wishlist.length===0?.5:1}}>View Wishlist</a>
                </div>
                </div>
              )}
            </div>
            <div ref={compareRef} className="sm-nav-extra" style={{position:'relative',display:'inline-flex'}}
              onMouseEnter={()=>{ if(compareCloseTimer.current) clearTimeout(compareCloseTimer.current); setCompareOpen(true); }}
              onMouseLeave={()=>{ compareCloseTimer.current = setTimeout(()=>setCompareOpen(false), 180); }}>
              <a href="compare.html" aria-label="Compare products" style={{ color: 'var(--ink-1000)', display: 'inline-flex', alignItems: 'center', position:'relative' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4v17"/><path d="M7 21h10"/><path d="M6 8l-4 8a4 4 0 008 0L6 8z"/><path d="M18 8l-4 8a4 4 0 008 0L18 8z"/><path d="M3 7l9-1 9 1"/>
                </svg>
                {compare.length > 0 && <span style={{position:'absolute',top:-6,right:-8,background:'#cf0731',color:'#fff',fontFamily:'var(--font-label)',fontWeight:700,fontSize:10,minWidth:16,height:16,borderRadius:999,display:'inline-flex',alignItems:'center',justifyContent:'center',padding:'0 4px'}}>{compare.length}</span>}
              </a>
              {compareOpen && (
                <div style={{position:'absolute',top:'100%',right:0,paddingTop:10,width:320,zIndex:150}}>
                <div style={{background:'#fff',borderRadius:6,boxShadow:'0 12px 32px rgba(0,0,0,.16),0 0 0 1px rgba(0,0,0,.06)',padding:12}}>
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'4px 6px 10px',borderBottom:'1px solid var(--ink-50)'}}>
                    <div style={{fontFamily:'var(--font-label)',fontWeight:800,fontSize:11,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--ink-1000)'}}>Compare ({compare.length})</div>
                    {compare.length > 0 && <button onClick={clearCompare} style={{background:'none',border:0,color:'#cf0731',fontFamily:'var(--font-label)',fontWeight:700,fontSize:11,letterSpacing:'.06em',textTransform:'uppercase',cursor:'pointer'}}>Clear All</button>}
                  </div>
                  {compare.length === 0 ? (
                    <div style={{padding:'24px 8px',textAlign:'center',color:'var(--ink-500)',fontFamily:'var(--font-body)',fontSize:13}}>No items to compare yet.</div>
                  ) : (
                    <div style={{maxHeight:320,overflowY:'auto'}}>
                      {compare.map(it => (
                        <div key={it.img||it} style={{display:'flex',gap:10,alignItems:'center',padding:'8px 6px',borderRadius:4}}>
                          <div style={{width:48,height:48,border:'1px solid var(--ink-75)',borderRadius:4,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                            <img src={it.img||it} alt="" style={{maxWidth:38,maxHeight:38,objectFit:'contain'}}/>
                          </div>
                          <div style={{flex:1,minWidth:0}}>
                            <div style={{fontFamily:'var(--font-label)',fontWeight:700,fontSize:13,color:'var(--ink-1000)',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{it.name || 'Product'}</div>
                            <div style={{fontFamily:'var(--font-body)',fontSize:12,color:'var(--ink-500)'}}>{it.sku ? it.sku+' · ' : ''}${(it.price||0).toFixed(2)}</div>
                          </div>
                          <button onClick={()=>removeCompare(it.img||it)} aria-label="Remove" style={{width:26,height:26,border:'1px solid #ffd1d1',background:'#fff',color:'#cf0731',borderRadius:4,cursor:'pointer',display:'inline-flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                            <Icon name="X" size={14}/>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  <a href="compare.html" style={{display:'block',marginTop:10,background:'#cf0731',color:'#fff',border:0,padding:'12px',fontFamily:'var(--font-label)',fontWeight:700,fontSize:12,letterSpacing:'.06em',textTransform:'uppercase',cursor:'pointer',textAlign:'center',textDecoration:'none',borderRadius:4,pointerEvents: compare.length===0?'none':'auto',opacity: compare.length===0?.5:1}}>Compare Now</a>
                </div>
                </div>
              )}
            </div>
                        <a href="#" aria-label="Cart" onClick={(e)=>{e.preventDefault();setCartOpen(true);}} style={{ color: 'var(--ink-1000)', display: 'inline-flex', alignItems: 'center', position:'relative' }}>
              <Icon name="ShoppingBag" size={24} />
              {cartCount > 0 && <span style={{position:'absolute',top:-6,right:-8,background:'#cf0731',color:'#fff',fontFamily:'var(--font-label)',fontWeight:700,fontSize:10,minWidth:16,height:16,borderRadius:999,display:'inline-flex',alignItems:'center',justifyContent:'center',padding:'0 4px'}}>{cartCount}</span>}
            </a>
            <button className="sm-navi-hamburger" onClick={() => setDrawerOpen(true)}
              style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink-1000)', alignItems: 'center', padding: 0 }}>
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
        {ovMenu!=null && (
          <div className="sm-ov-panel" onMouseEnter={()=>setOvMenu(ovMenu)}>
            <div className="sm-ov-inner">
              <div className="sm-ov-list" style={{marginLeft:ovLeft}}>
                {OVERLAY_NAV[ovMenu].subs.map(sb=>(
                  <a key={sb} href={OVERLAY_SUB_HREF[sb] || OVERLAY_NAV[ovMenu].href} className="sm-ov-sub">{sb}</a>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile drawer */}
      <div className={`sm-drawer${drawerOpen ? ' open' : ''}`}>
        <div className="sm-drawer-bg" onClick={() => setDrawerOpen(false)} />
        <div className="sm-drawer-panel">
          <div className="sm-drawer-head">
            <a href="index.html" aria-label="Home" style={{display:'inline-flex',alignItems:'center'}} onClick={()=>setDrawerOpen(false)}><img src={logoSrc} alt="The Singapore Mint" style={{ height: 28 }} /></a>
            <button onClick={() => setDrawerOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink-700)', display: 'inline-flex' }}>
              <Icon name="X" size={22} />
            </button>
          </div>
          <nav className="sm-drawer-nav">
            {(() => {
              const latestItems = [
                { label:'Promotions', href:'promotion.html' },
                { label:'Events', href:'events.html' },
                { label:'Catalogues & Order Form', href:'catalogues.html' },
                { label:'Stay Connected with Us', href:'stay-connected.html' },
                { label:'FAQ & Help Centre', href:'faq.html' },
              ];
              const cats = (window.SM_CATEGORIES || []);
              const [msec, setMsec] = [drawerSection, setDrawerSection];
              return (
                <React.Fragment>
                  {/* Shop */}
                  <button className="sm-drawer-acc" onClick={()=>setDrawerSection(s=>s==='shop'?null:'shop')} style={{color: active==='Shop'?'var(--brand-red-800)':'var(--ink-1000)'}}>
                    Shop
                    <svg className="acc-chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{transform:drawerSection==='shop'?'rotate(180deg)':'none'}}><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                  {drawerSection==='shop' && (
                    <div className="sm-drawer-sub">
                      <a href="product-list.html" onClick={()=>setDrawerOpen(false)}>All Products</a>
                      {cats.map(cat => (
                        <a key={cat.slug} href={`product-list.html#/${cat.slug}`} onClick={()=>setDrawerOpen(false)}>{cat.label}</a>
                      ))}
                    </div>
                  )}
                  {/* About Us */}
                  <a href="about.html" className="sm-drawer-top" onClick={()=>setDrawerOpen(false)} style={{color: active==='About Us'?'var(--brand-red-800)':'var(--ink-1000)'}}>About Us</a>
                  {/* Latest */}
                  <button className="sm-drawer-acc" onClick={()=>setDrawerSection(s=>s==='latest'?null:'latest')} style={{color: active==='Latest'?'var(--brand-red-800)':'var(--ink-1000)'}}>
                    Latest
                    <svg className="acc-chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{transform:drawerSection==='latest'?'rotate(180deg)':'none'}}><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                  {drawerSection==='latest' && (
                    <div className="sm-drawer-sub">
                      {latestItems.map(it => (
                        <a key={it.label} href={it.href} onClick={()=>setDrawerOpen(false)}>{it.label}</a>
                      ))}
                    </div>
                  )}
                  {/* Contact Us */}
                  <a href="contact.html" className="sm-drawer-top" onClick={()=>setDrawerOpen(false)} style={{color: active==='Contact Us'?'var(--brand-red-800)':'var(--ink-1000)'}}>Contact Us</a>
                </React.Fragment>
              );
            })()}
          </nav>
          <div className="sm-drawer-footer">
            <a href="login.html" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--ink-1000)', fontFamily: 'var(--font-label)', fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
              <Icon name="User" size={20} /> My Account
            </a>
            <a href="wishlist.html" onClick={()=>setDrawerOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--ink-1000)', fontFamily: 'var(--font-label)', fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
              <Icon name="Heart" size={20} /> Wishlist
            </a>
            <a href="compare.html" onClick={()=>setDrawerOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--ink-1000)', fontFamily: 'var(--font-label)', fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v17"/><path d="M7 21h10"/><path d="M6 8l-4 8a4 4 0 008 0L6 8z"/><path d="M18 8l-4 8a4 4 0 008 0L18 8z"/><path d="M3 7l9-1 9 1"/></svg> Compare
            </a>
            <a href="#" onClick={(e)=>{e.preventDefault();setDrawerOpen(false);setCartOpen(true);}} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--ink-1000)', fontFamily: 'var(--font-label)', fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
              <Icon name="ShoppingBag" size={20} /> Cart
            </a>
          </div>
        </div>
      </div>
      {searchOpen && (
        <div className="sm-search-backdrop" onMouseDown={()=>setSearchOpen(false)} />
      )}

      {cartOpen && (<>
        <div className="sm-cart-backdrop" onMouseDown={()=>setCartOpen(false)} />
        <aside className="sm-cart-panel" role="dialog" aria-label="Shopping cart">
          <div className="sm-cart-head">
            <div className="sm-cart-title"><Icon name="ShoppingBag" size={22}/> Your Cart</div>
            <div style={{display:'flex',alignItems:'center',gap:14}}>
              <span className="sm-cart-count">{cartCount} {cartCount===1?'item':'items'}</span>
              <button className="sm-cart-close" aria-label="Close cart" onClick={()=>setCartOpen(false)}><Icon name="X" size={20}/></button>
            </div>
          </div>
          {cart.length === 0 ? (
            <div className="sm-cart-empty">Your cart is empty.</div>
          ) : (
            <div className="sm-cart-list">
              {cart.map(it => (
                <div key={it.img} className="sm-cart-row">
                  <div className="sm-cart-thumb"><img src={it.img} alt=""/></div>
                  <div className="sm-cart-info">
                    <div className="sm-cart-name">{it.name}</div>
                    <div className="sm-cart-meta">{it.meta}</div>
                    <div className="sm-cart-qty">
                      <button onClick={()=>updateQty(it.img,-1)} aria-label="Decrease">−</button>
                      <span>{it.qty||1}</span>
                      <button onClick={()=>updateQty(it.img,1)} aria-label="Increase">+</button>
                    </div>
                  </div>
                  <div className="sm-cart-side">
                    <button className="sm-cart-remove" aria-label="Remove item" onClick={()=>removeItem(it.img)}><Icon name="X" size={14}/></button>
                    <div className="sm-cart-price">{'$' + ((it.price||0)*(it.qty||1)).toFixed(2)}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="sm-cart-foot">
            <div className="sm-cart-line"><span>Subtotal</span><span style={{fontWeight:800}}>{fmt(subtotal)}</span></div>
            <div className="sm-cart-line" style={{color:'var(--ink-500)'}}><span>Delivery</span><span>{delivery===0?'Free':fmt(delivery)}</span></div>
            <div className="sm-cart-progress">
              <div className="sm-cart-progress-row">
                <span>{remaining>0 ? `Add ${fmt(remaining)} more for free delivery` : 'You have free delivery!'}</span>
                <span>{progress}%</span>
              </div>
              <div className="sm-cart-progress-bar"><div style={{width:progress+'%'}}/></div>
            </div>
            <button className="sm-cart-checkout" disabled={cart.length===0} style={cart.length===0?{opacity:.55,cursor:'not-allowed'}:{}} onClick={()=>{ if(cart.length){ setCartOpen(false); window.location.href='checkout.html'; } }}>
              Proceed to Checkout · {fmt(subtotal + delivery)}
            </button>
            <button className="sm-cart-continue" onClick={()=>setCartOpen(false)}>Continue Shopping</button>
          </div>
        </aside>
      </>)}
    </>
  );
}
export default Navi;
