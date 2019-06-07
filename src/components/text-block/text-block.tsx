import { Component, h } from '@stencil/core'

@Component({
  tag: 'sn-text-block',
  styleUrl: 'text-block.css',
  shadow: true
})
export class TextBlock {
  render() {
    return (
      <p class={'text-block'}>
        <slot />
      </p>
    )
  }
}
