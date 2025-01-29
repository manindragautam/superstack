import { For } from "solid-js";
import { A } from "@solidjs/router";
import type { Dino } from "../types.ts";
import { onMount } from "solid-js";
import { createSignal } from "solid-js";

export default function Index() {
  const [dinosaurs, setDinosaurs] = createSignal<Array<Dino>>([]);
  onMount(() => {
    fetch("/api")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDinosaurs(data);
      });
  });

  return (
    <div class="flex justify-center">
      <main class="mt-10">
        <h1 class="text-4xl font-bold">
          Welcome to Super Stack Template
        </h1>
        <p class="mt-4">Click on a dinosaur below to learn more.</p>
        <ul class="list-inside list-disc">
          <For each={dinosaurs()}>
            {(dinosaur) => (
              <li class="underline text-blue-600 hover:text-blue-900">
                <A href={`/dinosaur/${dinosaur.name.toLowerCase()}`} class="dinosaur">
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
