# Questionnaire scenarios — 17 October 2026

The questionnaire is an initial conversation, not a full production brief. Required answers are contact name, reply email and a short request. Project/organization, role and music/socials are optional. Direct contact remains available on the page for clients who prefer a conversation.

| Client situation | Path | Necessary context | Optional detail / avoided friction |
| --- | --- | --- | --- |
| New artist, no live history or finished plan | Other idea or management | Request in their own words | No sales, links, audience or dates required |
| Artist/group seeking ongoing management | Artist management | What they want to delegate and current situation | Goals and existing team; no concert service checklist |
| Existing manager needs one service | Separate task | Task and desired result | Readiness and optional calendar; their role can be added without implying replacement of their management |
| Artist organizing a concert | Concert | What help is needed | City/date; extra performance questions are collapsed |
| Venue/promoter/organizer | Concert or separate task | Event/request | Organization and contact person are separate; no obligation to supply their own music |
| Artist looking for performance opportunities | Concert | Free-form request accepts finding a performance | No venue/date/sales requirement |
| Tour planned or being assembled | Tour/trip | What needs organizing | Readiness, ordered route, calendar, free-form crew; all optional |
| Promo/design/photo request | Separate task | Desired help | No ticket sales, set length or band-configuration questionnaire |
| Uncertain enquiry | Other idea | Short description | No extra second-step fields |

## Input decisions

- Socials/music accept multiline text, handles, names and links. Email renders this as escaped text, never arbitrary clickable URLs.
- Calendar remains a date/range selector, clearable and optional. A half-selected range prompts completion or clearing; no text date field.
- Route is ordered city rows with add/remove controls. Suggestions are a small local convenience list, not a city directory or service-area claim. Any city can be entered and repeated. Empty route is allowed. No external location requests.
- Previous shows, expected attendance, performance format/duration, event context and touring crew accept natural language and uncertainty.
- Removed audience-demographic and merch questions from initial enquiry. They can be discussed when relevant.
- Management, concert, tour, task and other enquiry each retain their own detail draft when switching within the mounted form. Shared contact data stays shared. Closing/reopening retains the current step and selected draft; refreshing the page clears it. Persistent storage is not added.
- Review has direct edit controls for format, contact data and details. Only applicable fields reach the server/email.
- Optional project name/role and additional concert details use disclosures. Compact one-column modal starts at 900px; very narrow screens stack format choices.

## Scope

No new service commitments, response SLA, external city provider or delivery guarantee. Existing email integration retained; API tests use a mocked mail provider, not live messages.
