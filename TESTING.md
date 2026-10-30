# Verification record

## Automated

Run `node --test *.test.mjs`, `node --check app.js`, `node --check model.js` and `node build.mjs`.

The Node tests cover deterministic seed relationships, sample sizes and denominators, inclusive date/department filtering, empty data, lesson idempotency and serialized persistence, registration capacity/past-date protection, survey validation and current-response replacement, recommendation priorities and deduplication, initiative/workshop visibility in briefings, and multiple tasks linked to an event.

## Browser journeys exercised

Using the local application in the in-app Chromium browser:

- Employee/Coordinator switch and role selection.
- Lesson completion, continuation, reload persistence and Resume path indicator.
- Resource search for privacy, guide detail, and sample-policy label.
- Session registration and confirmation; feedback submission for a past session.
- All required adoption-pulse fields, checkboxes, 7/7 progress and submission confirmation.
- Response count changed from 120 to 121; regular-use count from 48 to 49.
- Time-to-learn recommendation created a linked initiative; owner/status edits saved.
- Initiative scheduled a workshop; executive briefing included initiative, owner, status, related workshop and updated response counts.
- Copy-to-clipboard returned the generated briefing content.
- A created session was moved to a past demo date; recorded demo attendance and lifecycle checklist; submitted and reviewed feedback.
- Follow-up task creation and completion. This exposed a one-to-one link constraint; fixed to permit multiple event tasks and retested successfully.
- Created a resource and advanced Draft → Review → Approved → Published.

Final checks: session cancellation restored the Register control; reset restored the survey response count to 120 and persisted after reload; the department matrix rendered; no warning/error entries appeared in the browser runtime log. Tested the responsive layout at 1440×1000 and 390×844. The mobile page had equal document and viewport widths (375 CSS pixels excluding browser scrollbar), with no document horizontal overflow. Guided journey next/skip controls worked. Mobile navigation scrolls horizontally by design. Added mobile reset and an always-visible synthetic-data disclosure. Optional fonts have system fallbacks.

Final automated run: **8 tests passed, 0 failed**. JavaScript syntax checks and static production validation passed. Local index.html returned HTTP 200.

No claim is made that a production security review, accessibility certification, browser print rendering audit, or multi-browser suite was performed.

## Captioned walkthrough verification

Added two tests for the eight-chapter, exactly 180-second presentation and isolated replay of real domain operations. Total: 10 automated tests. Browser checks verified start/pause, chapter seeking, recommendation detail, and the final briefing with 121 responses, the fictional owner, and the linked workshop. No browser warning/error logs were observed during those checks. The demo is captioned, not a recorded video.
