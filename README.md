# Priya & Rohan — wedding invitation

The existing invitation, refined with burgundy stationery, an antique-gold P & R seal, an ivory card with animated SVG mehendi corners, and real Indian wedding photography.

## Personalise
- `lib/wedding.ts`: centralized names, date, venue, story, timeline, dress palette, photos and RSVP endpoint.
- `lib/themes.ts`: semantic palette; active theme `bridal-burgundy`.
- `components/wedding/EnvelopeOpening.tsx`: layered 4.2-second opening, keyboard support and reduced-motion alternative.
- `components/wedding/NameBridge.tsx`: measured card-to-hero typography transition.
- `components/wedding/Ornaments.tsx`: original vector corners, dividers and finite petals.
- `app/luxury.css`: refined opening and section choreography.
- `app/layout.tsx`: metadata derives from the wedding configuration.
- `/wedding/priya-and-rohan`: shareable route; the existing route remains compatible.

Parc Rayne at Rahaman’s Park, Houston, East Bank Demerara, Guyana is the provided venue. Ceremony details and times are unconfirmed. Calendar downloads use an all-day December 12, 2026 event until times are supplied. The timeline is explicitly an outline. Date, story and RSVP deadline remain demonstration content.

## RSVP
This demonstration does not send or store replies. Set `rsvpEndpoint` to an HTTPS backend to enable delivery. The adapter posts `{name, attendance, guests, message, weddingSlug}`. Declines set guests to zero. Validate and store replies on the server and return success only after acceptance. Keep secrets out of client configuration.

## Development
TypeScript, React and Sites’ Next-compatible Vinext runtime. Use Node 22.13 or newer: `npm ci`, `npm run dev`, `npx tsc --noEmit`, `npm run build`.

## Assets
Matching real stock couple photos by ARTO SURAJ on Unsplash:
- https://unsplash.com/photos/U24mGMjnIIo
- https://unsplash.com/photos/d9RsO9BHFVQ

Reception table by Photos by Lanty: https://unsplash.com/photos/O38Id_cyV4M

Images are locally optimized WebP with responsive variants. The custom P & R wax-seal asset was generated and optimized with transparency. SVG ornaments were authored for this invitation. Local Cormorant Garamond and Italianno fonts use the SIL Open Font License. Stock images illustrate the demonstration and are not photographs of an actual Priya and Rohan wedding in Guyana.

## Validation
Browser checks cover 360, 375, 390, 412, 430, 768 and 1440 pixel viewports, keyboard/reduced-motion opening, image loading, horizontal overflow, full-screen gallery navigation/dismissal, RSVP accept/decline and demo feedback, directions and all-day calendar downloads. Actual animation frames and page sections are visually inspected.
