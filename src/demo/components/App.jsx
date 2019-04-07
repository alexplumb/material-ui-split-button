import React from 'react';
import { MenuItem, Grid } from '@material-ui/core';
import MuiSplitButton from '../..';

export default () => (
  <div>
    <MuiSplitButton
      variant="outlined"
      color="secondary"
      href="https://www.google.com"
      renderMenu={({ handleClose }) => (
        <React.Fragment>
          <MenuItem onClick={handleClose}>
            Test Menu Item
          </MenuItem>
        </React.Fragment>
      )}
    >
      MuiSplitButton
    </MuiSplitButton>

    <br />
    <br />

    <Grid container spacing={32}>
      <Grid item md={3}>
        <MuiSplitButton
          variant="contained"
          color="primary"
          fullWidth
          renderMenu={({ handleClose }) => (
            <React.Fragment>
              <MenuItem onClick={handleClose}>
                Test Menu Item
              </MenuItem>
            </React.Fragment>
          )}
        >
          Full Width
        </MuiSplitButton>
      </Grid>

      <Grid item md={3}>
        <MuiSplitButton
          variant="text"
          color="inherit"
          renderMenu={({ handleClose }) => (
            <React.Fragment>
              <MenuItem onClick={handleClose}>
                Test Menu Item
              </MenuItem>
            </React.Fragment>
          )}
        >
          Text Button!!
        </MuiSplitButton>
      </Grid>
    </Grid>
  </div>
);
