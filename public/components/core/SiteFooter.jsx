function SiteFooter({ Icon, noStores }) {
  const stores = [
    {name:'Coin Gallery (Head Office)',addr:'20 Teban Gardens Crescent, S 608928',tel:'+65 6895 0288',hours:'Mon – Fri, 8.30am – 4.30pm'},
    {name:'Chinatown Point',addr:'133 New Bridge Road, #02-18, S 059413',tel:'+65 6222 2486',hours:'Daily, 11.00am – 9.30pm'},
    {name:'Suntec City Mall',addr:'3 Temasek Blvd, #02-719 East Wing Tower 3, S 038983',tel:'+65 6336 2878',hours:'Daily, 11.00am – 9.30pm'},
  ];
  return (
    <React.Fragment>
      <footer className="site">
        <div className="footer-inner">
          <div className="cols">
            <div className="col">
              <h4>ABOUT US</h4>
              <ul><li><a href="about.html">Our Story</a></li><li><a href="#">News</a></li><li><a href="#">Careers</a></li><li><a href="#">Events</a></li></ul>
            </div>
            <div className="col">
              <h4>GET HELP</h4>
              <ul><li><a href="#">Order Status</a></li><li><a href="#">Delivery</a></li><li><a href="#">Returns</a></li><li><a href="#">Payment Options</a></li><li><a href="#">Find a Store</a></li></ul>
            </div>
            <div className="col">
              <h4>LEGAL</h4>
              <ul><li><a href="#">General Info</a></li><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms of Service</a></li></ul>
            </div>
            <div className="contact-mobile">
              <h4>TALK TO US</h4>
              <ul>
                <li>salesadmin@singaporemint.com.sg</li>
                <li>+65 6566 2626</li>
                <li><a href="#">Send Us Feedbacks</a></li>
              </ul>
              <div className="socials">
                <a href="#" aria-label="Facebook"><Icon name="BrandFacebook" size={16}/></a>
                <a href="#" aria-label="LinkedIn"><Icon name="BrandLinkedin" size={16}/></a>
                <a href="#" aria-label="Twitter"><Icon name="BrandTwitter" size={16}/></a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {!noStores && <section className="stores-strip" style={{background:'#000',padding:'40px 0 32px'}}>
        <div className="stores-inner" style={{padding:'0 56px',maxWidth:1280,margin:'0 auto',boxSizing:'border-box'}}>
          <h2 style={{fontFamily:'var(--font-label)',fontWeight:800,fontSize:22,letterSpacing:'.06em',textTransform:'uppercase',margin:'0 0 36px',color:'#fff'}}>Our Stores</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:40}}>
            {stores.map((s,i)=>(
              <div key={i} style={{borderTop:'2px solid var(--brand-red-800)',paddingTop:20}}>
                <div style={{fontFamily:'var(--font-label)',fontWeight:700,fontSize:14,textTransform:'uppercase',letterSpacing:'.05em',marginBottom:14,color:'#fff'}}>{s.name}</div>
                <div style={{fontFamily:'var(--font-body)',fontSize:14,lineHeight:'22px',color:'var(--ink-300)',marginBottom:6}}>{s.addr}</div>
                <div style={{fontFamily:'var(--font-body)',fontSize:14,lineHeight:'22px',color:'var(--ink-300)',marginBottom:4}}>{s.tel}</div>
                <div style={{fontFamily:'var(--font-body)',fontSize:14,lineHeight:'22px',color:'var(--ink-400)'}}>{s.hours}</div>
              </div>
            ))}
          </div>
          <div className="base" style={{marginTop:40,color:'#fff',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <img src="../../assets/brand/sm-logo-slogan.png" alt="The Singapore Mint" style={{height:28,filter:'brightness(0) invert(1)'}}/>
            © 2019 Singapore Mint. All Rights Reserved.
          </div>
        </div>
      </section>}
    </React.Fragment>
  );
}
window.SiteFooter = SiteFooter;
