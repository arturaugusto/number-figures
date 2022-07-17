function toFigures(number, n) {
  /*
  number: Number
  n: Number
  returns a String with `number` formated to `n` significant figures
  */
  let numberFloat = parseFloat(parseFloat(number).toPrecision(n))
  let expoentPre = parseInt(numberFloat.toExponential().split('e')[1])
  let res = numberFloat.toPrecision(Math.max(n, expoentPre+1))
  if (res.indexOf('e') !== -1) {
    return parseFloat(res).toFixed(0)
  }
  return res
}

function getResolution(numberStr) {
  /*
  numberStr: A string representation of a number
  returns the number decimal places
  */
  numberStr = numberStr.replace('E','e').replace('0e', '1e').replaceAll('0', '1')
  numberStr = parseFloat(numberStr).toString()
  if (numberStr.includes('e')) {
    return parseFloat(numberStr.split('e')[1])
  }
  let numberStrSplit = numberStr.split('.').map(x => x.trim())
  if (numberStrSplit.length > 2) return // invalid number
  if (numberStrSplit.length === 2 && numberStrSplit[1]) {
    return numberStrSplit[1].length
  }
  return 0
}

export {toFigures, getResolution}