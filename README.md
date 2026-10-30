# AI Enablement Studio

**Turning AI curiosity into confident adoption.**

An independent portfolio concept connecting employee AI learning, enablement coordination, survey insights, and executive reporting. All records are synthetic. This is not an official Everpure product and has not been endorsed or commissioned by any company.

## Watch the three-minute walkthrough

[Open the captioned walkthrough](https://meeraa5.github.io/ai-enablement-studio/demo.html) · [Explore the application](https://meeraa5.github.io/ai-enablement-studio/)

The walkthrough has eight chapters, captions, play/pause, seeking, and replay. It runs real application screens and domain operations in isolated demo memory; it does not change a visitor's app progress. It is an interactive presentation, not an MP4 recording.

## Run locally

Install Node.js 20 or later. No package installation, API key, paid service, or account is required to explore the app.

```sh
node server.mjs
```

Open http://127.0.0.1:4173/demo.html for the walkthrough or http://127.0.0.1:4173/ for the app. Stop with Ctrl+C.

```sh
node --test model.test.mjs presentation.test.mjs
node --check app.js
node --check model.js
node --check demo.js
node --check presentation.js
node build.mjs
```

Equivalent npm scripts are included. The production files are the HTML, CSS and JavaScript files at the repository root. Hash routing also works under a GitHub Pages repository subpath.

## What works

- Employee and Coordinator demo views; no fake login.
- Searchable resource library with useful content, related resources, review dates and Draft → Review → Approved → Published workflow.
- Five role-based learning paths with objectives, examples, exercises, reminders, completion and resume.
- Events with capacity-aware registration/cancellation, facilitator, date, related resources, lifecycle checklist, independent attendance, feedback and follow-ups.
- Validated adoption survey with progress, optional comments, multiple-choice and checkbox inputs. One current response per local demo participant.
- Analytics filters, sample sizes, confidence/usefulness distributions, usage frequency, barriers, training needs and department comparison.
- Transparent barrier-to-action recommendations linked to initiatives and scheduled workshops.
- Coordinator tasks with owner, due date, priority, statuses, dependency validation, filtering/sorting, event/resource links and notes.
- Communications planner with draft/review/publication/completion states. Saving a communication does not send it.
- Executive briefing generated from current data, with owners, milestones, risks, decisions needed, clipboard and print/save-PDF.
- Local persistence, reset, responsive layouts and an additional skippable in-app tour.

## Signature workflow

Fictional survey response → updated metrics → transparent recommendation → owned initiative → related workshop → current executive briefing. These screens share the same dataset.

## Architecture and data

Dependency-free ES modules were selected for a browser-local prototype with no backend or model calls. This avoids paid APIs and unnecessary infrastructure.

| File | Responsibility |
| --- | --- |
| index.html, styles.css | App entry point and responsive/print design system |
| model.js | Synthetic records, selectors, calculations and domain operations |
| app.js | Views, navigation, forms, shared state and localStorage |
| demo.html, demo.css, demo.js | Captioned walkthrough player |
| presentation.js | Eight chapter definitions and deterministic isolated demo replay |
| server.mjs, build.mjs | Local preview and static validation |
| model.test.mjs, presentation.test.mjs | Node built-in test suite |

The seed has 150 anonymous participants across five departments, 120 responses, learning records, eight resources, four events, 62 registrations, three tasks and a communication draft. Participant IDs join responses, lessons and registration records. Tasks link to barriers, resources and events. Events can have multiple preparation/follow-up tasks; a separate originating-initiative pointer connects the signature flow. The local learner uses the fictional ID demo.

All mutations use one shared state object and are saved locally. The walkthrough instead starts from a fresh disposable seed for each chapter and replays the actual domain operations. No data is uploaded to an AI service. Dynamic text is escaped; native dialogs and semantic labels support keyboard use. Charts have text counts and percentages.

## Metric definitions

The repeatable demo snapshot is October 30, 2026. Initial reporting period: September 1–October 30, inclusive.

| Metric | Definition |
| --- | --- |
| Participants | Synthetic participant records in the department scope |
| Active learners | Distinct participants with recorded learning activity in the selected period |
| Learning participation | Active learners / synthetic participants |
| Completed activities | Records marked complete; not verified proficiency |
| Regular AI use | Weekly or Daily responses / responses in the selected period and department |
| Confidence | Self-reported 1–5 scale; arithmetic mean or distribution |
| Usefulness | Distribution of self-reported 1–5 scale |
| Time savings | Arithmetic mean of selected 0, 0.5, 1, 2 or 4 hours/week, including zero |
| Barriers/interests | Selections / respondents; multiple selections allowed |
| Monthly adoption trend | Regular-use share within each monthly response cohort |
| Registrations/attendance | Separate current operational record counts |
| Recommendation priority | Every selected barrier yields a predefined action; High at ≥30%, otherwise Medium |

Empty samples display no estimate. Self-reported savings are unverified and do not establish productivity gains or ROI. Different monthly cohorts do not demonstrate a causal learning effect. Attendance is not sustained adoption. Department comparisons intentionally show all departments for selected dates; ties use the documented category order in model.js. Tasks, events, communication and briefing operational sections reflect the current snapshot, independent of survey filters.

## Free deployment

This public repository uses GitHub Pages with the included github.io address. In Settings → Pages select Deploy from a branch → main → /(root). No custom domain, paid backend, AI API, paid build workflow, or billing setup is needed. Publish only the static assets. Optional Google Fonts has system-font fallbacks. Free provider terms may change; this project does not configure a paid plan or automatic upgrade.

## Three-minute executive demonstration

| Time | Story |
| --- | --- |
| 0:00–0:20 | Establish the challenge and show calculated program indicators. |
| 0:20–0:40 | Show practical resource content and responsible-use guidance. |
| 0:40–1:05 | Complete a role-based lesson and resume learning. |
| 1:05–1:30 | Add a fictional employee pulse; the response count becomes 121. |
| 1:30–1:55 | Inspect the time-to-learn barrier and transparent recommendation. |
| 1:55–2:20 | Turn the recommendation into an initiative with owner and status. |
| 2:20–2:40 | Schedule a linked learning sprint and its planning checklist. |
| 2:40–3:00 | Show the initiative and workshop in the executive briefing. |

Two-minute live version: spend 20 seconds each on overview and learning, 25 on the pulse, 35 on creating/scheduling the action, and 20 on the briefing.

## Validation and limitations

10 automated tests passed; browser checks covered the three core journeys, resource publishing, communications, copy, cancellation/reset, mobile layout and walkthrough controls. See TESTING.md for the exact scope.

This is a single-user local prototype. Demo roles are not authorization; localStorage is not a production security architecture. Data is not synchronized across people/devices. The date is fixed, responses and outcomes are fictional, attendance/completion are manually recorded, and no actual messages or invitations are sent. Resource approvals are not multi-person audited approvals. Printing uses the browser's print dialog. This has not had a production security, multi-browser or formal accessibility audit.

Next improvements: authenticated shared workspaces, server-enforced permissions, audit logs, policy-controlled retention, calendar integration, reviewed learning assessments and consented longitudinal adoption measurement.

## Portfolio summary

Designed and implemented an independent enterprise AI enablement concept joining role-based learning, program operations, adoption analytics and leadership reporting. Built a connected survey-to-action workflow with transparent metrics, synthetic data, local persistence and responsive design, without paid APIs or unnecessary backend infrastructure.
