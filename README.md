# material-ui-split-button
Split button component for the Material-UI library

## Installation

```shell-script
npm install material-ui-split-button --save
```

## Usage
### To embed the button anywhere on your page:
```jsx
<MuiSplitButton
  renderMenu={({ handleClose }) => {
    <MenuItem
      button
      onClick={handleClose}
    >
      <ListItemText
        primary="Click me to close the menu"
      />
    </MenuItem>
  }}
>
  Button Text Goes Here
</MuiSplitButton>
```

Please refer to `src/demo` for examples.

## Options

### Any properties not listed here will be spread to the underlying Button component
### See https://material-ui.com/api/button/

<table>
  <tr>
    <th> Name </th>
    <th> Type </th>
    <th> Description </th>
    <th> Default </th>
  </tr>
  <tr>
    <td> renderMenu </td>
    <td> function </td>
    <td> (required) Render prop used for displaying the menu. The **handleClose** method is passed to this, which closes the menu</td>
    <td> </td>
  </tr>
  <tr>
    <td> position </td>
    <td> string </td>
    <td> (optional) The position of the menu button - can be either **left** or **right** </td>
    <td> right </td>
  </tr>
  <tr>
    <td> MenuButtonProps </td>
    <td> object </td>
    <td> (optional) Properties to pass to the menu button component. See https://material-ui.com/api/button/ </td>
    <td> {} </td>
  </tr>
  <tr>
    <td> MenuProps </td>
    <td> object </td>
    <td> (optional) Properties to pass to the menu component. See https://material-ui.com/api/menu/ </td>
    <td> {} </td>
  </tr>
</table>

## License
Uses the [MIT License](https://opensource.org/licenses/MIT)
