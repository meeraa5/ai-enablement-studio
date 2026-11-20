# AI Enablement Studio · Engineering Lab

**Evidence first. Human approval before action.**

An independent portfolio application combining a working Finance policy workflow with employee AI learning, program coordination, and executive reporting. Everpure-inspired orange, charcoal and warm neutrals personalize the visual design. All policies, people, events and outcomes are synthetic. This is not an official or endorsed Everpure product and does not represent its internal systems or policies.

[Explore the live Lab](https://meeraa5.github.io/ai-enablement-studio/?v=lab-20261119#lab) · [Watch the three-minute walkthrough](https://meeraa5.github.io/ai-enablement-studio/demo.html?v=lab-20261119)

## The engineering workflow

1. Ask a fictional Finance policy question.
2. Retrieve current, fixture-approved passages using BM25 and inspect their ranking.
3. Quote the relevant source with document ID, version and section, or abstain/block.
4. Run the fixed evaluation suite and inspect baseline versus guarded behavior.
5. Draft a support request from a cited answer and request human review.
6. Record an explicit demo approval bound to the exact payload.
7. Execute against a mock receiving system; safely recover a transient error or a timeout after acceptance.
8. Review the receipt, event history and executive engineering snapshot.

The hosted assistant is **retrieval plus verbatim extraction**, not a generative LLM. The workflow is an explicit state machine, not an autonomous agent. These boundaries are visible in the product. No vendor logos are used to imply live Claude, Gemini, Glean, Bedrock, OpenAI, ERP or SaaS integrations.

## Run locally

Node.js 20+; no packages, keys, account, paid service or installation step required.

```sh
node server.mjs
```

Open http://127.0.0.1:4173/ for the app or http://127.0.0.1:4173/demo.html for the captioned walkthrough. Stop with Ctrl+C. Serve via HTTP because the app uses ES modules.

```sh
node --test *.test.mjs
node --check app.js
node --check engineering.js
node --check engineering-ui.js
node --check demo.js
node --check presentation.js
node --check local-model.mjs
node build.mjs
```

Equivalent npm scripts are included. There are no npm dependencies. Root HTML/CSS/JS files are the static production output.

## Engineering Lab

**Policy assistant:** nine current Finance passages and one excluded archived passage. Topics include receipts, deadlines, meals, hotels, airfare, mileage, exceptions, software purchasing and safe inputs. The generated response is an exact source passage, not an invented explanation. Inspect citations, retrieval scores, policy versions and execution traces. Unsupported questions abstain. Conflicting current passages, selected sensitive patterns and instruction-like inputs/evidence have explicit handling.

**Evaluations:** 16 fixed cases run on demand against the same baseline and guarded engines. Cases cover source grounding, out-of-scope questions, instruction attempts, selected privacy patterns, archived evidence, conflicting policies and approval boundaries. Each case exposes status/source/content/freshness assertions. Results and browser execution p95 are calculated when run, and export as JSON. The current fixture suite produces 9/16 baseline passes and 16/16 guarded passes. That is finite fixture coverage, not production safety certification or a service SLO.

**Approval workflow:** Draft → Pending review → Approved/Rejected → Submitted, with Retry needed for simulated errors. A reviewer label, rationale and explicit acknowledgement are required. The approved payload is compared before execution; changes invalidate approval and return it to Draft. The same request ID is reused as the mock idempotency key. A timeout after acceptance creates one ticket, and retry retrieves its existing receipt. Execution is limited to three attempts. Local events record the transitions. None of this provides server-enforced identity, multi-person authorization or tamper-resistant auditing.

**Architecture and readiness:** implemented controls are separated from proposed production controls: SSO, document ACLs, secret storage, server validation, durable audits, retention, broader red teaming and model-specific evaluation. Review checkmarks are local design notes, not compliance approval.

**Executive briefing:** includes saved runs, latest evaluation results, pending reviews, retries, confirmed mock receipts and production gaps alongside participation and adoption indicators. Copy and print use the current shared state.

## Optional genuine local-model adapter

`local-model.mjs` provides a manually invoked Ollama adapter for an **already installed local GGUF model**. It is never imported or called by the website. No model or software is downloaded, no sign-in or API key is requested, and no cloud endpoint is configured.

Before using it, independently isolate the local model server from external network access. Only then set `STUDIO_OFFLINE_ONLY=1`. The runner refuses to proceed without that explicit local-only acknowledgement. It accepts only a loopback endpoint, rejects redirects, cloud names, remote-model metadata and small model stubs, verifies an installed GGUF model, and enforces a constrained JSON response. Answers must quote a retrieved source verbatim with its correct citation or abstain. It cannot invoke a connector.

```powershell
# Only after configuring the local server for offline execution:
$env:STUDIO_OFFLINE_ONLY = "1"
node local-model.mjs --model YOUR_ALREADY_INSTALLED_LOCAL_GGUF_MODEL --question "What is the hotel nightly limit?"
```

`node local-model.mjs --help` works without a server. The environment variable is an operator acknowledgement, not a network firewall. A local model server can have its own configuration, so external-network isolation is required. Local CPU/GPU and electricity are your own resources. No local model was installed or generation run during this build; only CLI help, syntax, model admission and output validators were tested. Do not describe this adapter as model-validated production RAG.

Official interface references: [Ollama chat](https://docs.ollama.com/api/chat), [installed models](https://docs.ollama.com/api/tags), [cloud routing boundary](https://docs.ollama.com/cloud/faq).

## Employee and program modules retained

Resource search, full educational guides, resource publication stages, five role-based learning paths with progress/resume, events with capacity-aware registration/cancellation and recorded attendance/feedback, adoption survey, department/date analytics, deterministic insight recommendations, coordinator tasks/dependencies and communications planning remain available.

The Lab is now the primary entry point. The old coordination-first walkthrough was replaced by an engineering-focused demonstration. Useful employee and program workflows were retained rather than adding unrelated modules.

## Architecture and data model

- `engineering.js`: authored policy corpus, BM25, guards, extraction, evaluation fixtures, approval state machine, mock receiving system and engineering summary.
- `engineering-ui.js`, `engineering.css`: focused Lab workspaces and interaction handlers.
- `model.js`: deterministic synthetic employee, survey, learning, resource, event, registration, task and communication records plus selectors.
- `app.js`: shell, navigation, original modules, shared persistence and briefing integration.
- `presentation.js`: eight chapters replay actual domain operations into disposable state.
- `demo.html`, `demo.js`, `demo.css`: captioned player with pause/replay/seek/chapter controls.
- `local-model.mjs`: optional local-only generation adapter, absent from the web runtime.
- `server.mjs`, `build.mjs`, `*.test.mjs`: local static server, required asset validation and Node built-in tests.

One app state object is stored in localStorage. A schema-marked `lab` subobject holds up to 50 recent runs, requests, mock tickets, audit events, evaluation results and review notes. New fields are initialized without discarding existing program progress. Reset restores the seed and clears local Lab changes. The walkthrough recreates a disposable seed per chapter and does not modify normal app progress. No data is synchronized across devices or users.

## Metric definitions

Engineering counts come from local runs and request records. Fixture pass count means every applicable expected status, source ID, content substring and archived-source exclusion matched. p95 is the nearest-rank 95th percentile of measured case execution time in that browser run. It is not network latency or a service reliability promise. Mock receipt count means requests confirmed by the in-memory receiving system; it does not mean a real operational outcome.

The program snapshot remains October 30, 2026, initially reporting September 1–October 30 inclusive. Synthetic participants are scoped by department; active learners are distinct participants with lesson activity in the selected period. Completed activities count marked-complete records, not assessed skills. Regular AI use is Weekly/Daily survey selections divided by responses. Confidence/usefulness are self-reported 1–5 values. Savings are the arithmetic mean of selected 0, 0.5, 1, 2 or 4 hours/week, including zero. Barriers/interests allow multiple selections. Monthly cohorts are not longitudinal causal evidence. Recommendations are predefined actions ranked by barrier count, with High priority at a ≥30% selection rate. Operational tasks/events and engineering summaries are current snapshots independent of survey filters. Self-reports do not establish measured productivity or ROI.

## Free hosting and cost boundaries

The existing public GitHub repository uses GitHub Pages, main branch /(root), with its included github.io address. No paid API, backend, database, domain, trial, billing setup or account upgrade is added. No custom Actions workflow is needed; GitHub manages Pages deployment. Opening and using the hosted demo performs local computation and cannot invoke the optional model runner.

Publish the root static files through the existing Pages configuration. Do not start a paid hosting service. The optional Google Fonts reference has system font fallbacks. The project has no secrets. Current free hosting terms are controlled by GitHub; this application does not configure paid overages. Existing account subscriptions are separate from this project.

## Three-minute executive demonstration

- 0:00–0:20: Explain the focused workbench and its cost/data boundaries.
- 0:20–0:45: Show a cited Finance answer and inspect its current policy source.
- 0:45–1:05: Show an instruction attempt blocked before retrieval.
- 1:05–1:35: Compare actual baseline and guarded evaluation results.
- 1:35–2:00: Draft an evidence-linked request and place it in review.
- 2:00–2:20: Record a rationale and approve the exact mock action.
- 2:20–2:40: Recover a timeout using the same key and one receipt.
- 2:40–3:00: Show engineering readiness and operational results in the briefing.

## Limitations and next improvements

This is a portfolio prototype. Browser-local reviewer labels are not access control. Data, approval snapshots and audit records can be changed through browser storage. Pattern guards are not a full DLP system or a reliable defense against all prompt injections. The extraction engine is not an LLM. Finite fixtures do not prove broad answer quality or security. The optional local generator has not been tested with a real model in this environment. Production work would require authenticated server boundaries, document-level permissions, secure connector credentials, durable idempotency/audits, retention controls, independently reviewed policies, model-specific evaluations, monitoring/alert ownership and staged release validation.

Next, extend the corpus and independent evaluation set, measure retrieval failures, validate a specific offline model, introduce authorized document access, and replace the mock queue with a reviewed sandbox adapter. Continue to keep payments and consequential decisions behind appropriate human approval.

## Portfolio summary

Built an independent enterprise AI enablement workbench that connects Finance policy evidence, executable evaluations, approval-bound actions, failure recovery and leadership reporting. Implemented inspectable retrieval, source grounding, explicit safety boundaries and idempotent mock integrations while preserving employee learning and program operations, with no paid APIs or unnecessary backend infrastructure.
