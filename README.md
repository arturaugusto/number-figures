# number-figures

Small lib to format number to significant figures

The module export two function, `toFigures` and `getResolution`.

Usage:

```javascript
toFigures(1.23,5) === 1.2300
toFigures(1234.567,1) === 1000

getResolution("1.5670000") === 7
getResolution("1123132") === 0
```

Tests avaliable at: https://arturaugusto.github.io/number-figures/
