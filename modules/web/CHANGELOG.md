## In progress

#### Breaking Changes

 * Updated to `ESLint 4.x` release line.

#### Features

 * Enabled new `no-access-state-in-setstate` rule that prevents referencing
   the `this.state` while within the `this.setState` call. Use the updating
   variant of `this.setState((previousState: State) => { value: previousState.value + 1 })`
   for this.

## 1.0.1 (June 2, 2017)

#### Fix

 * Set `react/jsx-wrap-multilines` to `off` by default.

#### Support

 * Removed `web.js` file entry.

## 1.0.0 (June 2, 2017)

 * Initial release.
