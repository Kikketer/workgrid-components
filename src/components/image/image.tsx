import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'sn-image',
  styleUrl: 'image.css',
  shadow: true
})
export class Image {
  @Prop() src: string
  @Prop() alt: string

  render() {
    return <img class={'image'} src={this.src} alt={this.alt} />
  }
}
