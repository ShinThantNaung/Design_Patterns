import type { Component } from "./Component.ts";
import type { ParentComponent } from "./ParentComponent.ts";
import { Button } from "./Button.ts";
import { Label } from "./Label.ts";
import { Footer } from "./Footer.ts";
import { Header } from "./Header.ts";

const button = new Button();
const label = new Label();
const footer = new Footer();
const header = new Header();

header.addChild(button);
header.addChild(label);

footer.addChild(button);
footer.addChild(button);

header.render();
footer.render();
