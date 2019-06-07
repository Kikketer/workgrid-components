import { Component, Prop, h } from '@stencil/core'
import moment from 'moment'

@Component({
  tag: 'sn-info-header',
  styleUrl: 'info-header.css',
  shadow: true
})
export class InfoHeader {
  @Prop() sourceName: string
  @Prop() sourceImage: string
  @Prop() sentAt: string

  // Pulled from utilities, but could use a similar "common" library
  isCurrentMonth = function(date) {
    return moment()
      .startOf('month')
      .isBefore(date)
  }

  isCurrentYear = function(date) {
    return moment()
      .startOf('year')
      .isBefore(date)
  }

  cardTimestamp = date => {
    const dateAsMoment = moment(date)
    if (this.isCurrentMonth(date)) {
      return dateAsMoment.fromNow()
    } else if (this.isCurrentYear(date)) {
      return dateAsMoment.format('MMM D')
    } else {
      return dateAsMoment.format('MMM D, YYYY')
    }
  }

  render() {
    return (
      <div class={'info-header'}>
        <img class={'source-logo'} src={this.sourceImage} alt={this.sourceName} />
        <div class="source-title-container">
          <h1 class="source-title">{this.sourceName}</h1>
          {this.sentAt && <p class="source-time">{this.cardTimestamp(this.sentAt)}</p>}
        </div>
      </div>
    )
  }
}
