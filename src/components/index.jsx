import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Button, SvgIcon,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  buttonPositionLeft: {
    borderLeftWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    '&:hover': {
      borderLeftWidth: 0,
    },
  },
  buttonPositionRight: {
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    '&:hover': {
      borderRightWidth: 0,
    },
  },
  menuPositionLeft: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  menuPositionRight: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  menuButton: {
    width: theme.spacing.unit * 4,
    minWidth: theme.spacing.unit * 4,
    paddingLeft: 0,
    paddingRight: 0,
  },
  buttonFullWidth: {
    width: `calc(100% - ${theme.spacing.unit * 4}px)`,
  },
});

@withStyles(styles)
export default class MuiSplitButton extends React.Component {
  static propTypes = {
    position: PropTypes.oneOf(['left', 'right']),
    classes: PropTypes.object.isRequired,
    MenuButtonProps: PropTypes.object,
    variant: PropTypes.oneOf([
      'text',
      'outlined',
      'contained',
    ]),
    color: PropTypes.oneOf([
      'default',
      'inherit',
      'primary',
      'secondary',
    ]),
    className: PropTypes.string,
    fullWidth: PropTypes.bool,
    children: PropTypes.node.isRequired,
  }

  static defaultProps = {
    position: 'right',
    MenuButtonProps: {},
    variant: 'text',
    color: 'default',
    className: '',
    fullWidth: false,
  }

  state = {
    anchorEl: null,
  };

  menuButton = () => {
    const { anchorEl } = this.state;
    const {
      MenuButtonProps = {}, classes, position = 'right', variant, color,
    } = this.props;

    const { className = '', ...restProps } = MenuButtonProps;

    return (
      <Button
        aria-owns={anchorEl ? 'material-ui-split-button-menu' : undefined}
        aria-haspopup="true"
        onClick={e => this.setState({ anchorEl: e.currentTarget })}
        variant={variant}
        color={color}
        {...restProps}
        className={classNames(
          position === 'left' ? classes.menuPositionLeft : classes.menuPositionRight,
          classes.menuButton,
          className,
        )}
      >
        <SvgIcon>
          <path d="M7 10l5 5 5-5z" />
        </SvgIcon>
      </Button>
    );
  };

  render() {
    const {
      classes,
      className = '',
      fullWidth = false,
      children,
      position = 'right',
      MenuButtonProps,
      ...restProps
    } = this.props;

    return (
      <div className={classes.root}>
        {position === 'left' && this.menuButton()}

        <Button
          {...restProps}
          className={classNames(
            position === 'left' ? classes.buttonPositionLeft : classes.buttonPositionRight,
            fullWidth && classes.buttonFullWidth,
            className,
          )}
        >
          {children}
        </Button>

        {position === 'right' && this.menuButton()}
      </div>
    );
  }
}
