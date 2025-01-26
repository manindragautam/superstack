import { For } from "solid-js";
import { A } from "@solidjs/router";
import type { Dino } from "../types.ts";
import data from "../data.json";

const dinosaurs: Array<Dino> = data;

export default function Index() {
  return (
    <div class="flex justify-center">
      <main class="mt-10">
        <h1 class="text-4xl font-bold">
          Welcome to the Dinosaur app
        </h1>
        <p class="mt-4">Click on a dinosaur below to learn more.</p>
        <ul class="list-inside list-disc">
          <For each={dinosaurs}>
            {(dinosaur) => (
              <li class="underline text-blue-600 hover:text-blue-900">
                <A href={`/${dinosaur.name.toLowerCase()}`} class="dinosaur">
                  {dinosaur.name}
                </A>
              </li>
            )}
          </For>
        </ul>
      </main>
    </div>
  );
}
