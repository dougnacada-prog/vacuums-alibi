// The Vacuum's Alibi: One Line, 200 Characters — make.fun entry.
// The program writes a single excuse sentence to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I didn't miss that spot — my lidar classified the dust as load-bearing, so I left it standing and logged the floor as structurally sound.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE);
