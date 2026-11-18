# Australia Nusantara Heritage Centre website audit and update

18 November 2026

## Audit findings and changes

| Area | Finding | Update |
| --- | --- | --- |
| Design | Several textured or darkened backgrounds competed with the text. The floating story shortcut repeated the main navigation. | Introduced a clear type hierarchy, solid section backgrounds and more space around interactive content. The lead illustration sits in its own frame. |
| Cultural imagery | The three story cards reused generated illustrations, including an illustrated seascape for the Peranakan story. | Used a credited photograph of Indonesian mangroves, a Pekalongan sarong from The Met, and a Peranakan jacket made for a community in Sumatra. The hero artwork is identified as an illustration. |
| Accessibility | The closed mobile menu still accepted keyboard focus. The home link's accessible name omitted its visible wording. Story search offered no feedback on empty results. | Added a skip link and visible focus indicators. The menu closes on Escape, section navigation or focus leaving the header. Story controls expose their selected state and announce results, with a visible clear-filters action. |
| Historical context | The hero displayed precise dates without references. The Cocos date described a sighting, while the entry focused on settlement and community history. | Cited sources for the Makassan and Yolngu, Cocos Malay, pearling and Katanning entries. Described *Bhumi Puger* as the Centre's interpretation and linked to its account. |
| Events and research | The workshop had no date, program ideas showed implied schedules, and the listed research papers had no direct links. | Dated the archived workshop to 27–28 July 2024, retained the proposed programs as ideas, and linked all three listed PDFs. |
| Page assets | The browser fetched 9.25 MB of PNG illustrations. Typefaces loaded from a third party. | Served responsive hero images, lazy-loaded story photographs and hosted the fonts locally. The five page images total 0.87 MB with the largest hero variant, a reduction of about 91%. Social sharing uses a separate JPEG. |

## Colour and typography

| Colour | Hex | Use |
| --- | --- | --- |
| Indigo | `#192c36` | Hero and monogram, drawing on the deep tones of dyed cloth and the sea |
| Eucalyptus | `#354b40` | Living traditions and selected story filters |
| Red clay | `#913d29` | Main actions and the donation section |
| Ochre | `#edb77a` | Accent text and the hero rule |
| Sand | `#eee2d0` | Selected timeline and event entries |
| Warm paper | `#faf6ee` | Reading surfaces and navigation |

The colours combine textile indigo with outback red earth, ochre, sand and eucalyptus. DM Serif Display is used for headings and DM Sans for reading and navigation. Both font licences are included in `public/fonts`.

## Image credits

- **Mangroves** photographed by Suryanto81, CC0. [Wikimedia Commons file record](https://commons.wikimedia.org/wiki/File:Pohon_mangrove.jpg)
- **Sarong (Kain Lepas)**, mid to late 19th century, Pekalongan, Java. The Metropolitan Museum of Art, Rogers Fund, 1930, accession 30.88.2. Public domain. [The Met collection record](https://www.metmuseum.org/art/collection/search/308005)
- **Peranakan woman's jacket**, 1900, Honolulu Museum of Art, photographed by Haa900, CC0. [Wikimedia Commons file record](https://commons.wikimedia.org/wiki/File:Peranakan_woman%27s_jacket,_1900,_Honolulu_Museum_of_Art.JPG)
- The hero and the textile detail above the event panel are existing generated illustrations from the repository.

## Editorial sources

- The Makassan and Yolngu entry uses the National Museum of Australia's dating. The Islands entry is dated from the beginning of settlement. [National Museum of Australia](https://www.nma.gov.au/exhibitions/yalangbara/yolngu) · [Cocos (Keeling) Islands heritage overview](https://www.infrastructure.gov.au/territories-regions/territories/indian-ocean-territories-christmas-island-and-cocos-keeling-islands/cocos-keeling-islands/cocos-keeling-islands-environment-and-heritage)
- The pearling and Katanning entries use Western Australian museum and local government sources. The Centre's account of *Bhumi Puger* is available alongside the timeline. [Western Australian Museum](https://museum.wa.gov.au/whats-on/naked-diving-early-days-pearling-wa) · [Shire of Katanning](https://www.katanning.wa.gov.au/the-story-of-katanning.aspx) · [ANHC Footprints](https://ausnusantarahc.org.au/footprints/)
- The Lebaran overview links to Indonesia's education ministry. The workshop date and research files come from the Centre's archive. The charity information links to the Australian Business Register. [Lebaran traditions](https://itjen.kemendikdasmen.go.id/web/?p=6629) · [ANHC workshop archive](https://ausnusantarahc.org.au/batik-workshop-rites-de-passage/) · [ANHC Research Papers](https://ausnusantarahc.org.au/research-papers/) · [ABN Lookup](https://abr.business.gov.au/ABN/View?abn=15613738561)

## Verification

- `npm run build` and `git diff --check` passed.
- Tested the production preview in Chrome at 320, 390, 768, 1024 and 1440 pixels. Checked horizontal overflow, skip navigation, keyboard focus and menu dismissal, story search and filtering, timeline and event selection, and local image loading.
- Axe reported zero violations in its automated WCAG 2.0 and 2.1 A and AA checks at 390 and 1440 pixels. A full assistive-technology review remains outside these checks.
- Checked external link responses, including byte-range responses from the three research PDFs. The two Australian museums and The Met returned access or rate-limit responses to the command-line check. Their pages were available through independent source lookups.
- Community review of the cultural copy and illustration has not been performed. Verification used the local production preview.
