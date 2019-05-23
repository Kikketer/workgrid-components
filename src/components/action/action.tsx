import {Component, Prop, h} from '@stencil/core';

@Component({
  tag: 'workgrid-action',
  styleUrl: 'action.css',
  shadow: true
})
export class Action {
  /**
   * The label
   */
  @Prop() label: string;

  render() {
    return <p class={'thing'}>{this.label}</p>;
  }
}
