# Review: Alien Field Notes entry

Entry line in `main.ts` (unchanged by this review):

> Checked in for two days: one shared moon, weather that changed hourly without notice, and every local asking if I came in peace — 4 stars, would orbit again.

## 1. Judge criteria

The bounty asks for an alien tourist's one-line review of Earth. The gate is 1–200 characters on a single line.

- **Funniness:** Steady rather than explosive. "One shared moon" (an amenity complaint) and "would orbit again" are the best beats. "Came in peace" is a familiar joke.
- **Originality:** Mixed. The hotel-guest framing is fresh. "Came in peace" and "would X again" are common angles.
- **Reads like a real review:** Strongest criterion. It follows the check-in / list of complaints / star rating / "would ___ again" shape, and "two days" matches the bounty title.
- **Tight writing:** Tight at 157 characters, with a clean three-item list. The em dash is the only stylistic soft spot.

## 2. Local run

`MAKEFUN_OUTPUT_DIR=out node main.ts` writes `entry.txt`: 160 bytes, 157 characters plus 1 newline. The em dash is 3 bytes in UTF-8. The output is a single line, well within the 200-character gate.

## 3. Risks in pairwise comparisons

1. **Overlap with common alien jokes:** Partly exposed. "Came in peace" is well worn, though it's flipped into a complaint about the locals. "Would orbit again" is a twist, not a straight cliché.
2. **Em dash:** Mildly exposed. Some judges read it as a sign of AI-written text. It's kept because the line must not change.
3. **4-star rating:** Low exposure. It's realistic, but the missing star isn't used as a punchline.
4. **No single knockout punchline:** Exposed. The line wins on structure and polish, not one big laugh.

## 4. Determinism

Two consecutive runs produced byte-identical output (`diff` empty, same SHA-256 `05e5715297bc8422b95340dbadf850a0ce3e714b3b9da7bfa462a80711bf7c93`). The entry is a constant string.
