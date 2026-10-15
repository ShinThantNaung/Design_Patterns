import type { Component } from "./Component.ts";

export class Button implements Component {
  render(): void {
    console.log("A native button has rendered");
  }
}
