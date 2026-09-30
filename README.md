# Aaliyah & Daniel — wedding invitation

A mobile-first ivory and champagne invitation built with TypeScript, React, Tailwind CSS and the Next.js-compatible Vinext runtime used by Sites.

## Personalise
- `lib/wedding.ts`: couple, date and timezone, venues, timeline, story, dress colours, photographs and RSVP endpoint.
- `lib/themes.ts`: semantic colour tokens. Add another theme and change the wedding theme key.
- `components/wedding/Invitation.tsx`: opening, navigation and hero.
- `components/wedding/Sections.tsx`: individually reusable countdown, story, details, timeline, dress code, gallery, RSVP and closing components.
- `app/layout.tsx`: social metadata. Update its trusted origin and record metadata for a new couple.
- `app/wedding/aaliyah-and-daniel/page.tsx`: shareable wedding route. Root is the same invitation.

The names, story, date and Georgetown venues are sample content; verify all details before sharing with guests. Stock photographs are illustrative and do not depict an actual Aaliyah and Daniel wedding in Guyana.

## RSVP integration
This version does not send or store replies. The interface explicitly identifies the demonstration. Set `rsvpEndpoint` to a production HTTPS endpoint to enable delivery. The adapter posts JSON `{name, attendance, guests, message, weddingSlug}`. A decline sets guests to zero. The endpoint must validate all fields, enforce invitation limits, prevent duplicates and abuse, persist replies and return a successful HTTP status only after acceptance. Network failures remain visible and allow retry. Do not put secrets in the client configuration.

## Development
Use Node 22.13 or newer. Run `npm ci`, `npm run dev`, `npx tsc --noEmit`, and `npm run build`. The Sites workflow packages the Worker output. This is not a static HTML-only project.

## Imagery and fonts
Photographs from Unsplash, resized locally to WebP at 800/1600 widths:
- Ben Atkins (hero): https://unsplash.com/photos/bride-and-groom-sharing-a-kiss-outside-a-grand-estate-B4qVLPOvZzc
- Thomas AE (bouquet): https://unsplash.com/photos/295NLwGdrKM
- Photos by Lanty (table): https://unsplash.com/photos/clear-wine-glass-lot-on-table-O38Id_cyV4M
- John Marfe Bitoon (alternate portrait): https://unsplash.com/photos/a-bride-and-groom-share-a-tender-kiss-8ZisMVPDTXg
- Marius Muresan (alternate portrait): https://unsplash.com/photos/a-bride-and-groom-kissing-under-a-pergolan-DAU1eMU1Qf8

Local fonts: Cormorant Garamond and Italianno, from Google Fonts (SIL Open Font License). Body copy uses the device sans-serif font. Replace the sample photography with the customer's own consistent engagement album for a commissioned invitation.

## Validation
TypeScript check; browser checks at 390, 768 and 1440 pixels; manual visual review; gallery keyboard dismissal and controls; RSVP accept/decline; calendar download; route metadata; reduced motion. Preview and final build results are reported with the delivery.

## September 2026 edit: envelope and Indian luxury styling
The existing invitation has been retained. `EnvelopeOpening.tsx` adds the five physical envelope layers and a 3.8-second sequence, with a brief reveal for reduced-motion users. Only the embossed seal is clickable. The main invitation is mounted behind the envelope but remains inert and hidden from assistive technology until opening completes. Focus moves to the hero afterward; timers and scroll locks are cleaned up.

`app/envelope.css` contains opening choreography and restrained cultural styling; `lib/themes.ts` adds the `indian-ivory` theme. The new sample date is December 12, 2026 (Guyana UTC−04:00); the RSVP deadline is November 12. Calendar timestamps and metadata use the new date.

Current couple photographs are real stock photography by ARTO SURAJ, with matching subjects:
- Landscape portrait: https://unsplash.com/photos/U24mGMjnIIo
- Vertical portrait: https://unsplash.com/photos/d9RsO9BHFVQ

The gold wax seal was generated specifically for this invitation and optimized with transparency. Previous photographs remain in the source history; the invitation now references the new Indian couple photographs. The existing venues remain sample venues and need confirmation for a real invitation.
