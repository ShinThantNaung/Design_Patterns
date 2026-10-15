import type { Component } from "./Component.ts";
import type { ParentComponent } from "./ParentComponent.ts";

export class Footer implements Component, ParentComponent {
  private child: Component[] = [];

  addChild(child: Component): void {
    this.child.push(child);
  }
  removeChild(child: Component): void {
    this.child.pop();
  }

  render(): void {
    console.log("Footer component is rendered");
    this.child.forEach((ch) => {
      ch.render();
    });
  }
}
