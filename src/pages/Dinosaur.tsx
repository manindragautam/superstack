import { A, useParams } from "@solidjs/router";
import type { Dino } from "../types.ts";
import data from "../data.json";
import { createSignal } from "solid-js";
import { onMount } from "solid-js";

export default function Dinosaur() {
  const params = useParams();
  const [dinosaur, setDinosaur] = createSignal<Dino>({
    name: "",
    description: "",
  });

  onMount(async () => {
    const resp = await data.find((x) =>
      x.name.toLowerCase() == params.selectedDinosaur
    );
    const dino = resp as Dino;
    setDinosaur(dino);
    console.log("Dinosaur", dino);
  });

  return (
    <div class="content">
      <h1>{dinosaur().name}</h1>
      <p>{dinosaur().description}</p>
      <A href="/">Back to all dinosaurs</A>
    </div>
  );
}
