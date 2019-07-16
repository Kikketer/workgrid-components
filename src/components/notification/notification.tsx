import { Component, h } from '@stencil/core'

@Component({
  tag: 'sn-notification',
  styleUrl: 'notification.css',
  shadow: true
})
export class MyComponent {
  render() {
    return (
      <div class={'notification'}>
        <slot />
      </div>
    )
  }
}
