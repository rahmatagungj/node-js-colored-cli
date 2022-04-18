const COLOR: string[] = [
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
]
const MODE: string[] = [
  "reset",
  "bold",
  "dim",
  "italic",
  "underline",
  "blink",
  "reverse",
  "hide",
  "strike",
]

let colored: {} = {}

let generateColors: any = (S: string = "", A: number = 30, T: string[] = COLOR): any =>
  T.map(
    (a: string, i: number): ((t: any) => string) =>
      (ownColors[a + S] = (t: any): string => `\x1b[${i + A}m${t}\x1b[0m`)
  ) && generateColors

generateColors()("Bg", 40)("", 0, MODE)

module.exports = colored
