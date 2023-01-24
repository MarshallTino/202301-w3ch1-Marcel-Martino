import characters from "./characters/characters";
import Component from "./componentConstructors/Component/Component";

const appContainer = document.querySelector(".app")!;
const example = new Component(
  appContainer,
  "ul",
  "characters-list row list-unstyled"
);
