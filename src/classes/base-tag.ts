import { BaseTagProps } from '../Types/types';

export default class BaseTag {
  tag: string;
  className: string[];
  text: string;
  node: HTMLElement;

  constructor({ tag = 'div', className = [], text = '' }: BaseTagProps) {
    (this.tag = tag), (this.className = className);
    this.text = text;

    this.node = document.createElement(this.tag);
    this.node.classList.add(...className);
    this.node.innerText = this.text;
  }

  
}
