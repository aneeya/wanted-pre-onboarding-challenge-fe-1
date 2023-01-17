export interface BTCustom {
  text: string
  type: "button" | "reset" | "submit"
  size: {width: string, height: string}
  onClick?: () => void
  styler?: "noborder" | "loginstate"
  disabled?: boolean
  color?: "ok" 
}