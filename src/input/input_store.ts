import { writable } from "svelte/store";

export const input_store = writable({
    slider1: 0,
    slider2: 0,
    mousePosition: { x: 0, y: 0 },
    screenMiddle: { x: 0, y: 0 },
    mouseRadius: 0,
    mouseAngle: 0,
});
