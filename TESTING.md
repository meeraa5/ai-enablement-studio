# Verification record · Engineering Lab upgrade

Run `node --test *.test.mjs`, the package syntax checks, and `node build.mjs`.

## Automated checks

25 tests cover the original data relationships, aggregation, inclusive filters, lesson idempotency, registration constraints, survey replacement, insight-to-action integration, multiple event tasks, plus:

- Verbatim current-source grounding and archived-source exclusion.
- Unsupported-question abstention, selected privacy/instruction boundaries, and sensitive-pattern text omission.
- Conflicting policy rejection and exclusion of unapproved evidence.
- Actual execution and scoring of all 16 evaluation fixtures; visible baseline failures.
- Rejection of action drafts from blocked or baseline answers.
- Required pending state, reviewer, rationale and acknowledgement before approval.
- Payload change detection before dispatch.
- Revision after rejection requiring new review.
- Idempotent normal execution and receipt re-verification.
- Timeout-after-write recovery without duplicate tickets.
- Failure-before-write recovery and retry limits.
- Exactly 180 seconds across eight walkthrough chapters and isolated replay of the real engineering workflow.
- Optional local-model response schema/citation/verbatim-quote validation and admission rejection for cloud names, remote metadata and small stubs.

The live fixture suite currently passes 16/16 guarded cases versus 9/16 baseline cases. These figures refer to finite synthetic fixtures, not a production guarantee. Timing is measured at runtime.

## Browser checks performed locally

- A Finance question returned the exact current meal-policy passage and FIN-03 v2.0 §3.1 citation.
- Drafted a request with the timeout-after-acceptance scenario.
- Requested review, entered a fictional rationale, explicitly acknowledged the mock action and recorded approval.
- Initial dispatch produced Retry needed; retry confirmed FIN-DEMO-0001 with one mock ticket.
- Ran evaluations; observed baseline 9/16, guarded 16/16 and measured runtime p95.
- Executive briefing reflected the saved run, evaluation results, mock receipt and production gaps; these persisted after reload.
- Walkthrough chapter shortcuts replayed evaluations, timeout recovery and the engineering briefing.
- Desktop Lab rendered at 1440×1000 without document horizontal overflow (content width equaled viewport width).

Additional final responsive/deployment observations are recorded with the delivery. No production identity/security certification, formal accessibility audit, independent red team, or multi-browser suite is claimed.

## Optional model scope

CLI help, syntax and validator tests ran. Ollama was not installed or called, no model was downloaded, and no generation was performed. A real local-model evaluation remains future work. The website never imports the runner. Source-reviewed API contracts are linked in README.md.

