export class Renderer {
    private container: HTMLDivElement;
    private template: string;
  
    constructor(template: string) {
      this.template = template;
  
      // Create a new div element
      this.container = document.createElement('div');
  
      // Create a new paragraph element
      const p = document.createElement('p');
  
      // Add some text to the paragraph element
      p.innerHTML = this.template;
  
      // Append the paragraph to the div
      this.container.appendChild(p);
    }
  
    // Add a method to return the created elements
    getElements() {
      return this.container.outerHTML;
    }
  }