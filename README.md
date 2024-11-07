# Braun Bauen - Hugo
The Braun Bauen website built with Hugo. Currently live at [braunbauen.com]().

# Usage
All commands are declared in the `Makefile`

## Initialization
1. Reference [Hugo's documentation](https://gohugo.io/installation/macos/) to ensure Go and Hugo are installed
1. Clone repo and cd into directory
2. Run `npm install`

## Development
TailwindCSS has been set up using the Tailwind CLI, so development requires running two commands simulitaniously in two terminals.
1. Run `make server` - this will run Hugo's server and render draft content
2. Run `make tw-watch` - this starts Tailwind's CLI watching the files for changes

## Build
Run `make build`


# TODO
- [ ] Rework contact copy
- [ ] Fix Header scale on reload
- [ ] Fade out header border similar to logo?
- [ ] Animate swiper gradient on scroll 
- [x] Look into Hugo compression [Hugo Doc](https://gohugo.io/hugo-pipes/postprocess/)
- [x] Create scripts for tailwind dev and build
- [x] Fix header middle spacing
- [x] Fix body/main stylings
- [x] Change profile to "has increased my enjoyment and passion for my work" "very enjoyable/rewarding" or something
- [x] "Lead student developer team" - "Collaborated with mutliple departments..."
- [x] Create experience/education shortcode
- [x] Resume-item mobile refine
- [x] Link Socials / Github / Contact
- [x] Print styles for resume page
- [x] N: button hovers - outline, bg transparent, darker green white text.
- [x] N: logo text align
- [x] N: hash / hash h1 wrap - remove on mobile
- [x] print: move web dev up, "portfolio at ..."
- [x] Header shadow
- [x] x logo to twitter
- [x] durations lighter gray
- [x] N: add favicon - scale down
- [x] N: Change nav colors to fulfill contrast ratio
- [x] Footer: one/two lines if using alt logo, make icon not draggable, fix text highlight
- [x] Email: tooltip green bg on copy, add copy icon next to email in footer
- [x] Fix lighthouse errors
- [x] Footer width
- [x] Test out print styles, should it be forced to one page or two?
- [x] Portfolio items
- [x] Who text update
- [x] Section header mobile decrease
- [x] Contact Section
- [x] Re-check lighthouse
- [x] Fix header/footer resolution
- [x] 404 page
- [x] After domain set, change root links to domain
- [x] Update endowments image after changes
- [x] Swap title/location resume-item
