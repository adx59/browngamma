# Changelog

## Changes

### 09/14 - Drakeson
Redesign
- Editorial / print direction: paper ground with black poster bands (hero, Join); Swiss rules, numbered section labels, small captions
- Single type family: Archivo 400–900, oversized 900-weight headlines (replaces Montserrat/Playfair)
- Texture concentrated on a few graphics: CSS halftone + grain on hero and discipline photos, rough-cutout About figure with misregistered red plate
- Team cards: bordered, centered, round portraits; name/role/belt rows reserve fixed heights so every card matches; belt shown as dot + label
- Trimmed: scroll-cue arrow, pulsing CTA, duplicated "Get in Touch" button, "Our Disciplines" sub-heading, Contact nav item (footer covers it), hover-lift on every card
- Photos added to About, both discipline cards, and the Join section (using existing banner shots)
Structural
- Hero slideshow is auto-generated from images/banner/ via manifest.json (GitHub Action) with a filename-probe fallback
- Team pages (current + past) and home-page teaser all render from eboard-data.json (new `current` / `past` shape)
- Members without a photo render as a compact list instead of empty placeholder cards
- Single shared header/footer markup across pages; scroll-spy, mobile nav, reveal kept
Misc
- og:image, iframe title, lazy-loading, escaped JSON rendering

### 09/13 - Drakeson
Structural
- Migrated leadership cards to json
Content
- updated eboard and coach list
- moved former eboard to new "past leadership" section
Visual
- updated year of graduation/student status formatting
- Standardized card sizing and layout
- Updated fonts and colors
- Added hover animations
Misc
- SEO changes (metadata, alt text, sitemap)

### 03/03 - Kevin
- Added Kirsten to the website

### 03/02 - Kevin
- Removed Tom as coach
- Created "Club Update" section and added anonymous feedback form and feature on Brown alumni Magazine
- G-cal color change (hex code added in URL "color&23xxxxxx")

### 02/18 - Kevin
- Embedded Google Calendar in week view
- E-board belts
- E-board ordering (Sayid up to Finance, Adam down to just Web, etc.)

### 02/16 - Kevin
- Favicon

## Ideas
- [See GAMMA Drive Doc](https://docs.google.com/document/d/1vgcGLU7VihVC5PdG9E7Rx5vKVdfcvbqXes9chCFnHlw/edit?usp=sharing)

### Fixed
- Broken Instagram link in footer