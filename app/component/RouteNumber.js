import React from 'react';
import cx from 'classnames';
import Icon from './Icon';
import IconWithBigCaution from './IconWithBigCaution';
import ComponentUsageExample from './ComponentUsageExample';
import { realtimeDeparture as exampleRealtimeDeparture } from './ExampleData';

const LONG_ROUTE_NUMBER_LENGTH = 6;

function RouteNumber(props) {
  let mode = props.mode.toLowerCase();

  if (mode === 'bicycle' || mode === 'car') {
    mode += '-withoutBox';
  }

  const longText = props.text && props.text.length >= LONG_ROUTE_NUMBER_LENGTH;

  return (
    <span className={cx('route-number', props.className, { vertical: props.vertical })}>
      {props.hasDisruption ?
        <IconWithBigCaution
          className={mode}
          img={`icon-icon_${mode}`}
        /> :
        <Icon
          className={mode}
          img={`icon-icon_${mode}`}
        />
      }
      {props.vertical ? <br /> : null}
      <span className={cx('vehicle-number', mode, { 'overflow-fade': longText && props.fadeLong, long: longText })}>
        {props.text}
      </span>
    </span>);
}

RouteNumber.description = (
  <div>
    <p>Display mode icon and route number with mode color</p>
    <ComponentUsageExample>
      <RouteNumber
        mode={exampleRealtimeDeparture.pattern.route.mode}
        text={exampleRealtimeDeparture.pattern.route.shortName}
      />
    </ComponentUsageExample>
    <ComponentUsageExample description="in vertical configuration">
      <RouteNumber
        mode={exampleRealtimeDeparture.pattern.route.mode}
        text={exampleRealtimeDeparture.pattern.route.shortName}
        vertical
      />
    </ComponentUsageExample>
  </div>);

RouteNumber.propTypes = {
  mode: React.PropTypes.string.isRequired,
  text: React.PropTypes.node,
  vertical: React.PropTypes.bool,
  className: React.PropTypes.string,
  hasDisruption: React.PropTypes.bool,
  fadeLong: React.PropTypes.bool,
};

RouteNumber.displayName = 'RouteNumber';
export default RouteNumber;
