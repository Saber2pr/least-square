/*
 * @Author: saber2pr
 * @Date: 2019-06-08 21:18:15
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-09 00:25:53
 */
export namespace LS {
  export type Point = {
    x: number
    y: number
  }

  export type Data = Array<Point>

  export type Result = {
    x_: number
    y_: number
    xy_: number
    x2_: number
    x_2: number
    k: number
    b: number
  }

  export function x_(data: Data) {
    return r_(data, 'x')
  }

  export function y_(data: Data) {
    return r_(data, 'y')
  }

  export function r_(data: Data, type: keyof Point) {
    return data.reduce((out, cur) => cur[type] + out, 0) / data.length
  }

  export function xy_(data: Data) {
    return data.reduce((out, cur) => cur.x * cur.y + out, 0) / data.length
  }

  export function x2_(data: Data) {
    return data.reduce((out, cur) => cur.x * cur.x + out, 0) / data.length
  }

  export function k(xy_: number, x_: number, y_: number, x2_: number) {
    if (x2_ - x_ * x_ === 0) return 0
    return (xy_ - x_ * y_) / (x2_ - x_ * x_)
  }

  export function b(y_: number, k: number, x_: number) {
    return y_ - k * x_
  }

  export function exec(data: Data): Result {
    const x_ = LS.x_(data)
    const y_ = LS.y_(data)

    const xy_ = LS.xy_(data)
    const x2_ = LS.x2_(data)

    const k = LS.k(xy_, x_, y_, x2_)
    const b = LS.b(y_, k, x_)

    return {
      x_,
      y_,
      xy_,
      x2_,
      x_2: x_ * x_,
      k,
      b
    }
  }
}
