[![make.fun · u-kreutzx-one-line-robot-wedding-vows-a154ba4b](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/ujang201/robot-wedding-vows/rank.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/leaderboard)
[![reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/ujang201/robot-wedding-vows/reward.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

# One-Line Robot Wedding Vows

A single line of wedding vows for a robot couple — a solemn promise that survives every update, every crash, and every low-battery warning, with the joke landing in the last few words.

## The entry

> I vow to love you through every update, every crash, and every low-battery warning — and if a factory reset ever wipes me, I'll fall for you all over again.

## How to run

Requires Node.js 22+. The program writes the vow to `entry.txt` inside the output directory (`$OUTPUT_DIR`, or `/output` by default):

```sh
OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

The output is deterministic: every run writes the exact same line, and the program refuses to write anything outside the 1–160 character gate. The vow is 156 characters, one line, no trailing explanation — the laugh is in the line itself.

## License

MIT — see [LICENSE](LICENSE).

---

Built for the make.fun bounty [One-Line Robot Wedding Vows](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b). Try make.fun yourself: https://make.fun/?ref=wfjv7kgb
