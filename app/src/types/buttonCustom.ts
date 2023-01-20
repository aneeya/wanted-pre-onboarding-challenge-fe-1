export interface BTCustom {
  text: string
  type: "button" | "reset" | "submit"
  size?: string
  onClick?: () => void
  styler?: "noborder" | "loginstate"
  disabled?: boolean
  color?: string 
}

