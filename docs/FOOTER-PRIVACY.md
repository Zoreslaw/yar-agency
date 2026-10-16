# Footer and privacy preparation

Internal planning notes — 15 October 2026. Policy remains a draft with unconfirmed company details. Local implementation on `feature/footer-privacy`; no deployment or push.

## Confirmed by the user

- Public phone: +48 723 655 123; link target `tel:+48723655123`. No WhatsApp/Telegram availability confirmed.
- Contact and privacy enquiries email: yars.agency@gmail.com (same as the site).
- Instagram: https://www.instagram.com/yar_agcy/ (previously supplied; public profile inspected again today).
- Responsible person confirmed: Шкодюк Вікторія Юріївна / Viktoriia Shkodiuk. User reports JDG. TODO: registered business name/address and confirmation of controller identity from the registration details; do not invent a separate legal entity.
- User confirmed Viktoriia reads enquiries and is responsible for storage/deletion; enquiries remain in email and are not copied to tables, folders or CRM. Contact remains yars.agency@gmail.com. Technical delivery still uses two configured recipients; recipient configuration was not changed.
- User adopted six months after last substantive contact for unconverted enquiries on 16 October 2026. Viktoriia is responsible for manual deletion and monthly review; automation is not implemented.

Keep TODOs in internal drafts, not as a completed policy on the public site. Complete the controller and processing facts before treating the privacy notice as ready for public form collection.

## Adopted enquiry retention — 16 October 2026

- Unconverted enquiries: deletion six months after the last substantive contact, with earlier deletion when the purpose has ended and no separate lawful need remains.
- Review expired enquiries monthly; cover recipient mailboxes, forwarded copies and any working files or CRM entries. No automatic deletion is implemented.
- If collaboration begins, retain only necessary records under a separate contract/accounting/claims schedule; do not apply the unconverted-enquiry rule blindly.
- TODO: confirm practical deletion procedure and provider retention/log/backup settings, including Resend, hosting and recipient email services. Do not promise that all provider copies disappear on a date without verification.
- Six months is the user-adopted operational ceiling for unconverted enquiries, not a statutory period. Separate documented needs/obligations still require their own justified schedule.

Reference: https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en

## Additional social links — research and user confirmation

Inspected the public Instagram profile and its Links panel on 15 October 2026. Bio identifies YAR / ЯР, music/art/events, based in Poland, and mentions wuha_band. Two external links were visible:

- Playlist–YAR x Ukraińska wiosna XIX: https://open.spotify.com/playlist/1OGFrWeRU3vKaK29fANHGg . This is a linked collaborative playlist, not a verified agency Spotify artist/profile account. Optional editorial link; not added to the footer.
- A Monobank jar labelled Ukrainian army. Campaign purpose/current relevance not independently verified; do not add it as a permanent footer link by default.

Initial search did not verify TikTok, Facebook, YouTube or Telegram. On 16 October the user supplied Facebook https://www.facebook.com/share/1V3EckXBp4/?mibextid=wwXIfr and TikTok https://www.tiktok.com/@yar.agency?_r=1&_t=ZN-9AaLQkrzPOd along with the existing Instagram profile. User-supplied Facebook/TikTok destinations are now included in contact/footer links with icons; tracking query parameters omitted. Facebook remains a share URL because a canonical page URL has not been resolved. No YouTube/Telegram link supplied. TikTok could not be read with the web search tool (robots restriction); Instagram was readable through the browser without login. Lack of a verified result does not establish that accounts do not exist. Do not construct profile URLs from a guessed matching handle. Platform footer links such as Threads are not evidence of a YAR account.

## Planned placement

- Contact section: primary questionnaire action, phone/email and social alternatives with a clear hierarchy.
- Footer: original mark, section navigation, concise contact/social links, privacy-policy link and optional verified copyright holder/year.
- Privacy page: controller, purposes/legal bases, data, recipients/processors, international transfers where relevant, retention, rights and complaint contact; include cookies/browser storage information.
- Questionnaire: short processing explanation and policy link before sending. Do not add a mandatory consent checkbox without selecting the appropriate legal basis.
- Before deciding on a cookie banner, inspect the deployed domain's requests/storage and hosting settings. Earlier source review found no analytics/advertising trackers and a legacy read of `yar-stage-light` in localStorage; this is not a deployed-site audit.

## Implemented for review

- Contact section now leads with the questionnaire; email, telephone and Instagram are secondary direct links. Original mouth behavior and original mark preserved.
- Footer has brand, section navigation and contact columns, then a quiet policy row. No unverified social accounts, Spotify profile claim, donation campaign or copyright-holder claim added.
- `public/privacy.html` is an independent Ukrainian page with explicit draft status, noindex, known processing facts, conditional rights and conspicuous pending sections. Includes a cookies/browser-storage section; no consent banner added.
- Questionnaire links to the draft on its first and final steps. Links open a new tab so the mounted answers stay available. No new checkbox, submission or storage behavior.

## Completion checklist

| Task | Needed to close it | Owner / status |
| --- | --- | --- |
| Identify controller | Responsible person supplied: Viktoriia Shkodiuk. Still need registered JDG name/address or CEIDG entry/NIP and confirmation of operator/controller. | Partially closed |
| Describe access and storage | Viktoriia reads and manages enquiries in email, no table/folder/CRM copies. Confirm actual mail providers and technical recipient routing during provider review. | Business workflow confirmed |
| Adopt enquiry retention | Six months after last substantive contact; Viktoriia handles manual deletion/monthly review, contact via site email. | Adopted by user 16 October; automation not implemented |
| Finalise purposes/legal bases | Controller and actual enquiry workflow; then select applicable bases, state legitimate interests if relied on, and remove alternatives from draft. | Pending controller/access facts |
| Verify provider processing | Actual hosting/mail regions, DPA applicability, transfers/safeguards and log/backup retention for Vercel, Resend and recipient mail providers. Existing account settings may need account owner input; never request credentials in chat. | Technical follow-up after mailbox/provider confirmation |
| Decide cookie consent | Inspect the candidate deployment's requests/storage and hosting protection settings; review legacy localStorage preference. Decide banner from actual behavior. | Technical follow-up on deployment; source review alone is insufficient |
| Additional social accounts | Instagram, Facebook and TikTok supplied and linked. Direct canonical Facebook page URL can optionally replace share link; YouTube/Telegram only if later supplied. | Closed for supplied accounts |
| Optional copyright line | Confirm correct holder label for site content and applicable third-party rights. | User — optional; currently omitted |
| Release final policy | Resolve mandatory pending fields, replace draft wording/date with approved facts, recheck links on candidate deployment. | Pending above; not ready for production policy publication |

Legal references checked for draft preparation: EDPB rights/transparency https://www.edpb.europa.eu/sme/be-compliant/respect-individuals-rights_en ; Resend DPA https://resend.com/legal/dpa ; Vercel DPA https://vercel.com/legal/dpa . Provider documents alone do not establish actual account configuration.

16 October clarification: user quoted that the business is JDG rather than spółka and asked what this means. Obtain the actual CEIDG entry/name/NIP and confirm the operator before finalising the controller section; do not infer a separate legal entity from the YAR brand.

16 October decisions supersede earlier pending/proposed references: responsible person, email-only working storage, no CRM/table/folder copies, and six-month retention are confirmed. Draft remains pending JDG registration facts, final legal bases and provider configuration. No recipient env vars, sending logic or account settings changed.
