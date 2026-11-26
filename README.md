# The Moon Gets One Star

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5/Krwanz/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5/Krwanz/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5)

An entry for the [The Moon Gets One Star](https://make.fun/bounty/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5) bounty on [make.fun](https://make.fun).

## The entry

One one-star review of the Moon, 107 characters:

> **One star. It only works nights, never answers emails, and still gets called beautiful. Worst coworker ever.**

It reads like a real review because it is one: a rating, a grievance, and
the reason the Moon earned its single star. The joke treats the Moon as
the office coworker everyone knows — night shift only, unreachable, yet
universally praised — and the punchline lands on the very last word.

## How it works

`main.ts` (Node 22) writes exactly that one review to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), then
re-reads the file and verifies it against the gate: 1–120 characters,
not only white space. It exits non-zero if the check fails.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## Play

Use referral code `a15ed58m` on make.fun.
