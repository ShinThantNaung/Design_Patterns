import type { Component } from "./Component.ts";
export interface ParentComponent {
  addChild(child: Component): void;
  removeChild(child: Component): void;
}
