import { Component, Prop, Event, EventEmitter, h } from '@stencil/core'

@Component({
  tag: 'sn-smart-notification',
  styleUrl: 'smart-notification.css',
  shadow: true
})
export class SmartNotification {
  @Prop() sourceImage: string
  @Prop() sourceName: string
  @Prop() sentAt: string
  @Event() onAction: EventEmitter
  @Event() showDetail: EventEmitter

  actionHandler = e => {
    e.stopPropagation()
    console.log('Handling action at the notification level')
    this.onAction.emit({ a: 'a' })
  }

  onShowDetail = e => {
    e.stopPropagation()
    if (e.target.tagName === 'A') return
    this.showDetail.emit()
  }

  render() {
    return (
      <div class={'smart-notification'} onClick={this.onShowDetail}>
        <sn-info-header source-name={this.sourceName} source-image={this.sourceImage} sent-at={this.sentAt} />
        <div class={'body-container'}>
          <sn-text-block>
            Hey this is content{' '}
            <a href={'https://www.google.com?q=🔥'} target={'_blank'}>
              Google
            </a>
          </sn-text-block>
          <sn-image src={'https://cdn.dev.workgrid.com/connectors/lyssa_mock/building.jpg'} alt={'Building'} />
        </div>
        <div class={'action-container'}>
          <sn-action label={'Do Something'} onClick={this.actionHandler} />
        </div>
      </div>
    )
  }
}
