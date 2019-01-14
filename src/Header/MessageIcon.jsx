import Icon from 'uxcore-icon';
import Tooltip from 'uxcore-tooltip';
import React from 'react';
import PropTypes from 'prop-types';

const getMessage = (message) => {
  if (!message || typeof message !== 'string') return null;
  const lines = message.split(/(\n|\r|\t)/gi).filter(line => {
    return /\w/gi.test(line)
  });
  return (
    <div style={{
      textAlign: lines.length > 1 ? 'left' : 'center'
    }}>
      {
        lines.map(line => {
          return line ? (
            <p>{line}</p>
          ) : null
        })
      }
    </div>
  )
}
const MessageIcon = (props) => {
  if (!props.message) {
    return <noscript />;
  }
  return (
    <Tooltip
      overlay={(
        <div className="kuma-uxtable-column-message">
          {getMessage(props.message)}
        </div>
      )}
      placement="top"
    >
      <Icon usei name="xinxitishicopy" className={`${props.prefixCls}-icon`} />
    </Tooltip>
  );
};

MessageIcon.propTypes = {
  message: PropTypes.string,
  prefixCls: PropTypes.string,
};

MessageIcon.defaultProps = {
  message: '',
  prefixCls: undefined,
};


export default MessageIcon;
