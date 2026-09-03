function SiteFooter({ Icon, noStores }) {
  const stores = [
    {name:'Coin Gallery (Head Office)',addr:'20 Teban Gardens Crescent, S 608928',tel:'+65 6895 0288',hours:'Mon – Fri, 8.30am – 4.30pm'},
    {name:'Chinatown Point',addr:'133 New Bridge Road, #02-18, S 059413',tel:'+65 6222 2486',hours:'Daily, 11.00am – 9.30pm'},
    {name:'Suntec City Mall',addr:'3 Temasek Blvd, #02-719 East Wing Tower 3, S 038983',tel:'+65 6336 2878',hours:'Daily, 11.00am – 9.30pm'},
  ];
  return (
    <React.Fragment>
      <style>{`.member-banner{background:linear-gradient(105deg, #a80018 0%, #cc0020 40%, #e01028 62%, #c1001c 100%)!important}.member-banner::before{content:"";position:absolute;inset:0;background:url('../../assets/imagery/member-wave.jpg') center/cover no-repeat;opacity:.5;mix-blend-mode:overlay;pointer-events:none}.member-inner{position:relative;z-index:1;flex-direction:column!important;text-align:center;gap:14px!important}.member-banner p{white-space:nowrap}@media(max-width:768px){.member-inner{gap:16px!important;padding:32px 24px!important}.member-banner h3{font-size:22px!important;line-height:1.3}.member-banner p{white-space:normal;max-width:420px;margin:6px auto 0}.member-banner .btn-dark{width:100%!important;max-width:320px}}`}</style>
      <section className="member-banner" style={{width:'100vw',position:'relative',left:'50%',right:'50%',marginLeft:'-50vw',marginRight:'-50vw',background:'linear-gradient(105deg, #a80018 0%, #cc0020 40%, #e01028 62%, #c1001c 100%)',color:'#fff',overflow:'hidden'}}>
        <div className="member-inner" style={{maxWidth:1280,margin:'0 auto',padding:'44px 56px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:14,boxSizing:'border-box'}}>
          <h3 style={{fontFamily:'var(--font-label)',fontWeight:700,fontSize:32,margin:0,lineHeight:1.1,textTransform:'uppercase',letterSpacing:'.01em'}}>Become a member &amp; Get 15% off</h3>
          <p style={{fontFamily:'var(--font-body)',margin:0,opacity:.92,whiteSpace:'nowrap'}}>Be first to receive updates on new collections, inspiration, gift ideas and exclusive access</p>
          <button className="btn-dark" style={{marginTop:8,background:'transparent',color:'#fff',padding:'13px 40px',fontFamily:'var(--font-label)',fontWeight:600,fontSize:14,textTransform:'uppercase',letterSpacing:'.06em',border:'1px solid rgba(255,255,255,.7)',borderRadius:999,cursor:'pointer',whiteSpace:'nowrap'}}>Sign Up</button>
        </div>
      </section>
      <style>{`
        .smf{position:relative;width:100vw;left:50%;right:50%;margin-left:-50vw;margin-right:-50vw;background:#1f1f1f;color:#fff;overflow:hidden;font-family:'Mona Sans',Inter,system-ui,sans-serif}
        .smf::before{content:"";position:absolute;inset:0;background:#0a0406 url('../../assets/imagery/hero-bg-red.png') center/cover no-repeat;opacity:.5;pointer-events:none}
        .smf::after{content:"";position:absolute;inset:0;background:url('../../assets/imagery/noise.png');opacity:.34;mix-blend-mode:screen;pointer-events:none}
        .smf-inner{position:relative;z-index:1;width:100%;max-width:none;margin:0;padding:0 48px;box-sizing:border-box}
        .smf-grid{display:grid;grid-template-columns:1fr 1fr;align-items:stretch}
        .smf-intro{display:flex;flex-direction:column;justify-content:space-between;padding:36px 40px 28px 0;gap:24px}
        .smf-logo{width:64px;height:48px;object-fit:contain;filter:brightness(0) invert(1)}
        .smf-member p{font-size:18px;font-weight:400;line-height:1.3;letter-spacing:-.02em;max-width:520px;margin:0 0 16px}
        .smf-cols{display:grid;grid-template-columns:repeat(3,1fr);align-items:stretch}
        .smf-col{border-left:1px solid rgba(255,255,255,.15);padding:36px 40px 28px;display:flex;flex-direction:column}
        .smf-col h4{font-size:16px;font-weight:500;line-height:32px;letter-spacing:-.03em;text-transform:uppercase;margin:0 0 12px}
        .smf-col ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:2px}
        .smf-col a{font-size:14px;font-weight:500;line-height:24px;color:#fff;opacity:.85;text-decoration:none}
        .smf-col a:hover{opacity:1}
        .smf-circle{width:40px;height:40px;border-radius:999px;border:1px solid rgba(255,255,255,.30);color:#fff;display:inline-flex;align-items:center;justify-content:center;background:transparent;cursor:pointer;transition:border-color .15s}
        .smf-circle:hover{border-color:rgba(255,255,255,.80)}
        .smf-socials{display:flex;gap:12px;margin-top:auto;padding-top:20px}
        .smf-bottom{position:relative;z-index:1;width:100%;max-width:none;margin:0;padding:16px 48px 28px;box-sizing:border-box;display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px 24px;border-top:1px solid rgba(255,255,255,.15)}
        .smf-bottom span{font-size:14px;color:rgba(255,255,255,.60)}
        .smf-acc-cb{display:none}
        .smf-acc{display:flex;align-items:baseline;justify-content:space-between;gap:12px}
        .smf-chev{display:none;flex:0 0 auto;align-self:center;transition:transform .25s;opacity:.7}
        .smf-acc-body{display:block}
        .smf a:focus-visible,.smf-circle:focus-visible{outline:2px solid #fff;outline-offset:3px;border-radius:4px}
        @media(max-width:920px){.smf-grid{grid-template-columns:1fr;gap:40px}.smf-intro{padding-right:0}}
        @media(max-width:560px){.smf-inner{padding:28px 22px 18px}.smf-grid{gap:0}.smf-intro{padding:6px 0 22px;gap:16px}.smf-logo{width:52px;height:40px}.smf-member p{font-size:15px;line-height:1.4;margin:0 0 14px}.smf-cols{grid-template-columns:1fr}.smf-col{border-left:0;margin:0 -22px;padding:16px 22px 0;border-top:1px solid rgba(255,255,255,.15)}.smf-col h4{line-height:1.4;margin:0}.smf-acc{cursor:pointer;padding-bottom:16px}.smf-chev{display:block}.smf-acc-body{max-height:0;overflow:hidden;transition:max-height .28s ease}.smf-acc-cb:checked ~ .smf-acc-body{max-height:420px}.smf-acc-cb:checked ~ .smf-acc{padding-bottom:12px}.smf-acc-cb:checked ~ .smf-acc .smf-chev{transform:rotate(180deg)}.smf-col a{line-height:22px}.smf-acc-body{padding-bottom:0}.smf-acc-cb:checked ~ .smf-acc-body{padding-bottom:16px}.smf-socials{padding-top:14px}.smf-bottom{padding:14px 22px 22px;gap:6px}.smf-bottom span{font-size:12px}}
      `}</style>
      <footer className="smf">
        <div className="smf-inner">
          <div className="smf-grid">
            <div className="smf-intro">
              <img className="smf-logo" src="../../assets/brand/sm-logo-mark.png" alt=""/>
              <div className="smf-member">
                <p>Platinum &amp; Gold members can enjoy Members' Price on eligible products by placing orders through the order form.</p>
                <a className="smf-circle" href="catalogues.html" aria-label="View order form">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </a>
              </div>
            </div>
            <div className="smf-cols">
              <div className="smf-col">
                <input type="checkbox" id="smf-acc-1" className="smf-acc-cb"/>
                <label htmlFor="smf-acc-1" className="smf-acc"><h4>Customer care</h4><svg className="smf-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg></label>
                <div className="smf-acc-body">
                <ul>
                  <li><a href="contact.html">Contact</a></li>
                  <li><a href="#">Shipping &amp; Delivery</a></li>
                  <li><a href="faq.html">FAQ</a></li>
                  <li><a href="#">Privacy policy</a></li>
                  <li><a href="#">Term &amp; Service</a></li>
                  <li><a href="contact.html">Locate our store</a></li>
                </ul>
                </div>
              </div>
              <div className="smf-col">
                <input type="checkbox" id="smf-acc-2" className="smf-acc-cb"/>
                <label htmlFor="smf-acc-2" className="smf-acc"><h4>Explore</h4><svg className="smf-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg></label>
                <div className="smf-acc-body">
                <ul>
                  <li><a href="events.html">Events</a></li>
                  <li><a href="catalogues.html">E-Catalog</a></li>
                  <li><a href="product-list.html#/medallions">Lion Bullion</a></li>
                  <li><a href="#">Customize corporate gifts</a></li>
                </ul>
                </div>
              </div>
              <div className="smf-col">
                <input type="checkbox" id="smf-acc-3" className="smf-acc-cb"/>
                <label htmlFor="smf-acc-3" className="smf-acc"><h4>About &amp; Resource</h4><svg className="smf-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg></label>
                <div className="smf-acc-body">
                <ul>
                  <li><a href="about.html">About us</a></li>
                  <li><a href="promotion.html">Latest news</a></li>
                </ul>
                <div className="smf-socials">
                  <a className="smf-circle" href="#" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                  <a className="smf-circle" href="#" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
                  <a className="smf-circle" href="#" aria-label="X"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16M20 4L4 20"/></svg></a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="smf-bottom">
          <span>Coin Gallery (Head Office), 20 Teban Gardens Crescent, S 608928 (Mon - Fri 8.30am to 4.30pm)</span>
          <span>© 2019 Singapore Mint. All Rights Reserved.</span>
        </div>
      </footer>
    </React.Fragment>
  );
}
function ChatBubble(){ return null; }
window.SiteFooter = SiteFooter;
