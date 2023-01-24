interface ComponentStructure {
  element: HTMLElement;
}

class Component implements ComponentStructure {
  element: HTMLElement;
  class: string;

  constructor(parentElement: Element, tagName: string, className: string) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    parentElement.appendChild(this.element);
  }
}
export default Component;
