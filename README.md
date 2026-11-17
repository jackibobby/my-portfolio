# Full Stack Developer Portfolio (Next.js + React)

## Run it
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

## Make it yours
1. **`src/data/site.js`** holds your name, WhatsApp number, email, socials, skills and all 8 apps.
   - `whatsapp`: digits only with country code, e.g. `2348012345678`.
   - Add `live` and `code` links on each project to show buttons in its details window.
2. **Your picture**: click "Add your photo" on the home page (saved in your browser), or put a file at `public/profile.jpg` to make it permanent for everyone.
3. **Light / dark mode**: toggle in the navbar; the choice is remembered and follows the device by default.
4. **Add an app**: copy an object in `projects`, change `kind` to one of `dashboard, site, crypto, store, bank, books, game, tracker` for its preview.

## WhatsApp automation
- Floating chat widget with an auto greeting and quick-reply buttons that open WhatsApp with a ready message.
- The contact form opens WhatsApp with the visitor's message filled in.
- Optional: copy `.env.example` to `.env.local` and add Meta WhatsApp Cloud API credentials. Form messages are then pushed straight to your WhatsApp by `src/app/api/contact/route.js`. Note that Meta may require an approved message template for business-initiated messages outside the 24-hour window.

## Deploy
Push to GitHub and import into Vercel (add the env vars there if you use the API).
