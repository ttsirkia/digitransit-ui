import React from 'react';
import Relay from 'react-relay';
import { FormattedMessage } from 'react-intl';
import Icon from './Icon';
import config from '../config';

class DisruptionInfoButton extends React.Component {
  static propTypes = {
    toggleDisruptionInfo: React.PropTypes.func,
    alerts: React.PropTypes.object,
  };

  render() {
    if (!config.disruption || config.disruption.showInfoButton) {
      return (
        <div
          className={'cursor-pointer disruption-info'}
          onClick={this.props.toggleDisruptionInfo}
        >
          <FormattedMessage id="disruptions" defaultMessage="Disruptions" />
          {this.props.alerts && this.props.alerts.alerts && this.props.alerts.alerts.length > 0 &&
            <Icon img={'icon-icon_caution'} className={'disruption-info'} />}
        </div>
      );
    }
    return null;
  }
}

export default Relay.createContainer(DisruptionInfoButton, {
  fragments: {
    alerts: () => Relay.QL`
    fragment on QueryType {
      alerts {
        id
      }
    }
    `,
  },
});
