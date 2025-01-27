import { A, useParams } from "@solidjs/router";
import type { Dino } from "../types.ts";
import { createSignal } from "solid-js";
import { onMount } from "solid-js";

export default function Dinosaur() {
  const params = useParams();
  const [dinosaur, setDinosaur] = createSignal<Dino>({
    name: "",
    description: "",
  });

  onMount(() => {
    fetch(`/api/${params.selectedDinosaur}`).then((resp) => resp.json()).then(
      (data) => setDinosaur(data),
    );
  });

  return (
    <div class="flex justify-center">
      <main class="mt-10">
        <h1 class="text-4xl font-bold">{dinosaur().name}</h1>
        <p class="mt-4">{dinosaur().description}</p>
        <A class="underline text-blue-600 hover:text-blue-900" href="/">
          Back to all dinosaurs
        </A>
      </main>
    </div>
  );
}
