import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'sn-action',
  styleUrl: 'action.css',
  shadow: true
})
export class Action {
  @Prop() label: string
  @Prop() type: string

  handleClick = () => {
    console.log('Action is doing something special')
  }

  render() {
    return (
      <button class={`action ${this.type}`} onClick={this.handleClick}>
        {this.label}
      </button>
    )
  }
}
