import { For } from "solid-js";
import { A } from "@solidjs/router";
import type { Dino } from "../types.ts";
import data from "../data.json" with { type: "json" };

const dinosaurs: Array<Dino> = data;

export default function Index() {
  return (
    <main class="content">
      <h1>Welcome to the Dinosaur app</h1>
      <p>Click on a dinosaur below to learn more.</p>
      <ul>
        <For each={dinosaurs}>
          {(dinosaur) => (
            <li>
              <A href={`/${dinosaur.name.toLowerCase()}`} class="dinosaur">
                {dinosaur.name}
              </A>
            </li>
          )}
        </For>
      </ul>
    </main>
  );
}
