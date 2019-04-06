import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  flex: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
});

@withStyles(styles)
export default class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <>
      </>
    );
  }
}
