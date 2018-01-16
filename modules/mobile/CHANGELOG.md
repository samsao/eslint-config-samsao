## 2.0.2 (In progress)

## 2.0.1 (January 16, 2018)

#### Breaking Changes

 * Switched to normal dependencies instead of peer ones.

 * Updated to `ESLint 4.x` release line.

#### Features

 * Enabled new `no-access-state-in-setstate` rule that prevents referencing
   the `this.state` while within the `this.setState` call. Use the updating
   variant of `this.setState((previousState: State) => { value: previousState.value + 1 })`
   for this.

## 1.0.1 (June 2, 2017)

 * Wrong manipulation made publish this release.

## 1.0.0 (June 2, 2017)

 * Initial release.
