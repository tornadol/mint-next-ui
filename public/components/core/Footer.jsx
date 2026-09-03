import React from 'react';
const LOGO = '../../assets/brand/sm-logo-slogan.png';

const Col = ({ title, links }) => (
  <div style={{ minWidth: 180 }}>
    <div style={{ font: 'var(--text-label)', color: '#fff', textTransform: 'uppercase', marginBottom: 20 }}>{title}</div>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
      {links.map(l => (
        <li key={l}><a href="#" style={{ color: 'var(--ink-300)', fontFamily: 'var(--font-label)', fontSize: 14, lineHeight: '28px' }}>{l}</a></li>
      ))}
    </ul>
  </div>
);

export function Footer({ style }) {
  return (
    <footer style={{ background: '#000', color: '#fff', padding: '64px 56px 40px', ...style }}>
      <div style={{ display: 'flex', gap: 96, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 260 }}>
          <img src={LOGO} alt="The Singapore Mint" style={{ height: 32, filter: 'invert(1)' }} />
          <p style={{ marginTop: 20, color: 'var(--ink-300)', fontFamily: 'var(--font-label)', fontSize: 14, lineHeight: '28px', maxWidth: 320 }}>
            Commemorative coins, medallions and gifts, crafted in Singapore since 1968.
          </p>
        </div>
        <Col title="Shop" links={['Coins', 'Medallions', 'Corporate gifts', 'Sale']} />
        <Col title="About" links={['Our story', 'Craftsmanship', 'Press', 'Careers']} />
        <div style={{ minWidth: 220 }}>
          <div style={{ font: 'var(--text-label)', color: '#fff', textTransform: 'uppercase', marginBottom: 20 }}>Talk to us</div>
          <div style={{ color: 'var(--ink-300)', fontFamily: 'var(--font-label)', fontSize: 14, lineHeight: '28px' }}>
            salesadmin@singaporemint.com.sg<br />+65 6566 2626<br /><a href="#" style={{ color: 'var(--ink-300)', textDecoration: 'underline' }}>Send Us Feedbacks</a>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', marginTop: 40, paddingTop: 20, display: 'flex', justifyContent: 'space-between', color: 'var(--ink-300)', fontFamily: 'var(--font-label)', fontSize: 12 }}>
        <span>© {new Date().getFullYear()} The Singapore Mint. All rights reserved.</span>
        <span>Made in Singapore</span>
      </div>
    </footer>
  );
}
export default Footer;
