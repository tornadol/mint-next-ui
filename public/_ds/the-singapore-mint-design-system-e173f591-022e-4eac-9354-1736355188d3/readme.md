# The Singapore Mint — Design System

A brand and UI system for **The Singapore Mint** e-commerce experience: an online store for
minted collectibles — gold & silver coins, medallions & ingots, figurines & ornaments, fine
jewellery, currency notes and international collectibles — with membership pricing, pre-orders,
cart & checkout, editorial "News & Announcements", and corporate gifting.

This system was reverse-engineered from the attached Figma file
**"The Singapore Mint Website - Review.fig"** (pages R1–R4; R4 is the most complete revision).
Everything here — tokens, type, components — is extracted from that source; values are copied
verbatim and never snapped to a grid. The file defines **no Figma Variables and no named text
styles**, so the token and type systems below were authored by hand from the file's measured
colours, fonts and sizes.

> Source of truth: the Figma file itself. If a value here disagrees with a public reference,
> the Figma file wins.

---

## Content fundamentals

**Voice.** Warm, heritage-proud, quietly premium. Copy speaks *to* the customer ("Discover our
new arrivals", "Stay connected with us") and *about* the Mint in the third person ("Proudly
minting Singapore's story"). It leans on craft, occasion and national heritage rather than hype.

**Casing.**
- Headlines & section titles: **sentence case**, serif (Domine) — "Gallop into a prosperous New
  Year", "Singapore heritage in full bloom", "A spirited start to 2026".
- Eyebrows, nav, labels, buttons: **UPPERCASE**, Kumbh Sans, letter-spacing ~0.08em — "SHOP",
  "PRE-ORDER", "ADD TO CART", "LEARN MORE", "-10%".
- Body & product meta: sentence case — "5 troy oz 999.9 Fine Gold Proof Coin".

**Tone & vibe.** Celebratory around themes (Lunar New Year / Year of the Horse, Botanic Gardens
anniversary), factual on product specs (metal, weight, fineness, mintage year), reassuring on
service (lifetime guarantee, returns). Prices are shown as `S$33,700.00`. Occasion and
storytelling frame the merchandise ("Celebrate 2026…designed for gifting and good fortune").

**No emoji.** The brand does not use emoji. Meaning is carried by line icons, labels and
photography. Unicode is used only for currency (S$) and standard punctuation.

---

## Visual foundations

**Colour.** A **warm gold** (`#ac854f`) is the core identity, paired with a decisive **brand red**
(`#ee313d` in the logo, `#ed1b2f` for promos/membership). Grounds are mostly **white** and a pale
**sand** (`#ddd9c9`) for hero panels; deep **black** for the footer and utility bars. Reds signal
CTAs, sale pricing and membership; gold signals premium/heritage moments. A link **blue**
(`#1b92ed`) appears for Singpass/utility. Max 1–2 background colours per view. See the *Colors*
foundation cards.

**Type.** Two families do all the work: **Domine** (serif) for editorial headlines and section
titles, and **Kumbh Sans** (sans) for everything functional — nav, body, controls, labels, price.
**Host Grotesk** appears rarely for fine print. All three are genuine Google Fonts and match the
source exactly (no substitutions). Labels/eyebrows are uppercase Kumbh Sans at 10–12px with
0.08em tracking.

**Layout.** Generous full-width sections stacked vertically; a ~1440px content field with ~40px
gutters; a slim desktop nav (~72px). Category and collection blocks use big rectangular tiles.
Imagery is frequently **full-bleed** (hero horse illustration, orchid coin, membership band).

**Backgrounds & imagery.** Real product photography on white, plus themed full-bleed art
(illustrated Lunar-New-Year horse, macro florals). Warm, rich, saturated for hero/theme moments;
clean and neutral for the product grid. No gradients-as-decoration, no noise textures — grounds
are flat colour or photography. Watermark-style oversized motifs appear behind gold theme panels
(e.g. embossed horse on the gold band).

**Corners & cards.** The brand skews **sharp**: product cards, labels, hero panels and category
tiles are **square (radius 0)** with hairline `#dcdddd` borders and little or no shadow. Inputs
use a small radius. The one consistently round element is the **circular add-to-cart FAB** and
other icon buttons (pill/999px). Product shadows, where present, are soft and low
(`0 8px 24px rgba(0,0,0,.3)` for lifted imagery).

**Borders & dividers.** Hairline 1px in `#dcdddd`/`#eeeeee`; thin rules separate list rows and
footer columns.

**Elevation.** Mostly flat. Shadows are reserved for the floating add-to-cart button and lifted
product renders. No heavy drop shadows on cards.

**Motion.** Restrained. Hover reveals bestseller/alt states and darkens CTAs; carousels and
"on-scroll" sticky product cards slide in. Use a standard ease (`cubic-bezier(.4,0,.2,1)`),
~150–240ms. No bounces.

**Hover / press.** Buttons darken slightly on hover (red → deeper red) and show an `inactive`
greyed state when unavailable; cards swap to a `hover` variant (alt image / quick-add). Icon
buttons use subtle background/opacity shifts. Press states are colour shifts, not scale.

**Transparency & blur.** Sparse. Slight scrims over full-bleed imagery to keep headline contrast;
otherwise solid fills.

---

## Iconography

- **Custom line-icon set** drawn in the file (~33 glyphs): navigation and utility (Account, Cart,
  Search, Filter, Menu, Close, Dropdown, Left/Right Arrow, Tick, Add/Subtract, Open Link) plus
  benefit/marketing glyphs (Shield, Shipping, Packaging, Timer, Discount, Customer Service, and a
  "Benefits" subset: Box, Pre-Order, Shield, Shipping, Support, Verified). These are single-colour
  and paint with `currentColor`. Access them via the **`Icon`** wrapper: `<Icon name="IconsCart"
  size={24} />`. Full name list in `components/icons/Icon.d.ts`.
- **Social icons**: a 26-platform set (`SocialIcons`) with `original` (brand colour) and
  `negative` (mono) variants — Instagram, Facebook, YouTube, TikTok, X, LinkedIn, WhatsApp,
  Telegram, etc.
- **Payment marks**: Visa, Mastercard, Amex (`PaymentMethod*`) at three sizes.
- No icon font and no emoji. Everything is vector, extracted verbatim from the source.

All icons and brand imagery were copied out of the file — never redrawn. Product/editorial
bitmaps are wired through the generated `components/**/fig-assets.css` maps.

## Brand assets

- `assets/logo.svg` — primary lockup (red monogram + black wordmark; the wordmark uses
  `currentColor`-equivalent black).
- `assets/logo-white.svg` — for dark grounds (white wordmark, red monogram retained).
The logo was reconstructed from the file's `Logo` component vector paths (the file ships no raster
or standalone SVG logo). Do not recolour the monogram outside brand red.

---

## File index (manifest)

- `styles.css` — global entry point (link this one file). `@import`s the tokens and component
  image maps.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`.
- `components/` — reusable UI primitives grouped by concern (below). Each has `<Name>.jsx` +
  `<Name>.d.ts`; a card `.html` per directory populates the Design System tab.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing).
- `ui_kits/website/` — high-fidelity click-through recreation of the storefront.
- `assets/` — logo variants.
- `SKILL.md` — Agent-Skills manifest.

### Components

**Brand** — `Logo`

**Buttons & CTAs** (`components/buttons/`) — `CTAsButtonsDesktop`, `CTAsButtonsMobile`,
`CTAsAddToCartDesktop`, `CTAsAddToCartMobile`, `CTAsArrowDesktop`, `CTAsLinkCTADesktop`,
`CTAsLinkCTAMobile`

**Forms & Inputs** (`components/forms/`) — `TextFieldsDesktop`, `TextFieldsMobile`,
`TextFieldsMobile2`, `Checkbox`, `InteractionsCheckbox`, `RadioButton`, `InteractionsRadioButton`,
`Toggle`, `InteractionsToggle`, `SearchBarDesktop`, `SearchBarMobile`,
`InteractionsQuantitySelectorDesktop`, `InteractionsQuantitySelectorMobile`,
`InteractionsFilterDropdown`, `LocationPickerDesktop`, `LocationPickerMobile`,
`NewsletterSignupDesktop`, `NewsletterSignupMobile`, `IconsAdd`, `IconsSubtract`, `IconsSearch`,
`IconsFlag`, `IconsNavTick`, `IconsCloseDropdown`, `IconsDropdown`

**Content & Editorial** (`components/content/`) — `BlogArticleDesktop`, `BlogArticleDesktop2`,
`BlogArticleMobile`, `LabelsDesktop`, `LabelsDesktop2`, `LabelsMobile`, `NewsAndAnnouncements`

**Product & Collection** (`components/product/`) — `ProductCardsMarketingItemDesktop`,
`ProductCardsMarketingItemMobile`, `ProductCardsShopItemDesktop`, `ProductCardsShopItemMobile`,
`ProductCardsCartItemFull`, `ProductCardsCartItemAdd`, `ProductCardsCartItemMobile`,
`ProductCardsPromotionalShopCard`, `ProductPgStickyCTADesktop`, `ProductPgStickyCTAMobile`,
`CollectionItemDesktop`, `CollectionItemMobile`, `CategoryItemHomepageDesktop`,
`CategoryItemShopPageDesktop`, `CategoryItemShopPageMobile`

**Navigation & Wayfinding** (`components/navigation/`) — `NavigationNavBarDesktop`,
`NavigationNavBarMobile`, `NavigationFooterMobile`, `NavigationNavBarDesktopNavigation` (desktop
footer), `PaginationCheckoutStatusDesktop`, `PaginationCheckoutStatusMobile`, `BlogFilterDesktop`,
`BlogFilterMobile`, `InteractionsSortingFilterDesktop`, `IconsAccount`, `IconsCart`, `IconsClose`,
`IconsDiscount`, `IconsLeftArrow`, `IconsMenu`, `IconsOpenLink`, `IconSocialFacebook`

**Payment** (`components/payment/`) — `PaymentMethodVisa`, `PaymentMethodMastercard`,
`PaymentMethodAmex`

**Social** (`components/social/`) — `SocialIcons`

**Icons** (`components/icons/`) — `Icon` (wrapper over 33 glyphs; see `Icon.d.ts`)

**Device chrome** (`components/device/`) — `StatusBarIPhone13`, `StatusBarTime`, `URLBar`, `Icons`

### Intentional additions

- **`Icon`** (`components/icons/`) — a thin wrapper over the file's individual icon glyphs, so
  consumers render any glyph by name (`<Icon name="IconsCart" />`) instead of importing 33 separate
  components. The glyphs themselves are all from the source.

### Notes & caveats

- **Fonts load via the Google Fonts CDN**, not self-hosted. All three faces are exact matches to
  the source — no substitution. For offline/production self-hosting, drop the binaries in
  `assets/fonts/` and replace the `@import` in `tokens/fonts.css` with `@font-face` rules.
- Shared components (icons, `Logo`, `SocialIcons`, CTA/label primitives) that appear in several
  concern folders are de-duplicated: one canonical implementation, the rest re-export it, so a name
  resolves to a single definition on the bundle namespace.
- Some very large product/editorial photos exceed the extractor's per-image budget and were
  dropped from a couple of components' fills — those spots fall back to a neutral placeholder box.
- Device-chrome components carry SF-family font references (system fallback) as in the source.
