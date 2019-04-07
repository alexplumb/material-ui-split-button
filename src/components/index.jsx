import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Button, SvgIcon, Menu,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    borderRadius: theme.spacing.unit / 2,
  },
  rootContained: {
    boxShadow: theme.shadows[4],
  },
  button: {
    flex: '1 0 auto',
    boxShadow: 'none',
  },
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
    flex: 'none',
    boxShadow: 'none',
  },
  buttonFullWidth: {
    width: '100%',
    display: 'flex',
  },
});

class MuiSplitButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };

    this.menuButton = this.menuButton.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen(e) {
    this.setState({ anchorEl: e.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  menuButton() {
    const { anchorEl } = this.state;
    const {
      MenuButtonProps = {}, classes, position = 'right', variant, color,
    } = this.props;

    const { className = '', ...restProps } = MenuButtonProps;

    return (
      <Button
        aria-owns={anchorEl ? 'material-ui-split-button-menu' : undefined}
        aria-haspopup="true"
        onClick={this.handleOpen}
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
  }

  render() {
    const { anchorEl } = this.state;

    const {
      classes,
      className = '',
      fullWidth = false,
      children,
      position = 'right',
      variant,
      MenuButtonProps,
      renderMenu,
      MenuProps,
      ...restProps
    } = this.props;

    return (
      <div className={classNames(
        classes.root,
        variant === 'contained' && classes.rootContained,
        fullWidth && classes.buttonFullWidth,
      )}
      >
        {position === 'left' && this.menuButton()}

        <Button
          variant={variant}
          {...restProps}
          className={classNames(
            position === 'left' ? classes.buttonPositionLeft : classes.buttonPositionRight,
            classes.button,
            className,
          )}
        >
          {children}
        </Button>

        {position === 'right' && this.menuButton()}

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          getContentAnchorEl={null}
          anchorOrigin={{
            horizontal: 'left',
            vertical: 'bottom',
          }}
          {...MenuProps}
        >
          <div>
            {renderMenu({
              handleClose: this.handleClose,
            })}
          </div>
        </Menu>
      </div>
    );
  }
}

MuiSplitButton.propTypes = {
  position: PropTypes.oneOf(['left', 'right']),
  classes: PropTypes.object.isRequired,
  MenuButtonProps: PropTypes.object,
  MenuProps: PropTypes.object,
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
  renderMenu: PropTypes.func.isRequired,
};

MuiSplitButton.defaultProps = {
  position: 'right',
  MenuButtonProps: {},
  MenuProps: {},
  variant: 'text',
  color: 'default',
  className: '',
  fullWidth: false,
};

export default withStyles(styles)(MuiSplitButton);
