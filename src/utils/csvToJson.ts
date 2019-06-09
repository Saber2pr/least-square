/*
 * @Author: saber2pr
 * @Date: 2019-06-09 14:13:36
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-09 14:13:59
 */
import { isNumber } from './isNumber'

export function csvtoJson(csv: string) {
  const arr = csv.split('\n').map(r => r.split(','))
  const head = arr[0]

  const data = arr
    .slice(1)
    .filter(r => !r.includes(''))
    .map(r =>
      r.reduce(
        (out, value, index) => ({
          ...out,
          [head[index]]: isNumber(value) ? Number(value) : value
        }),
        {}
      )
    )

  return JSON.stringify(data, null, 2)
}
