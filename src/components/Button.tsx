import { MouseEventHandler } from "react"

export interface IButton {
  onClick?: MouseEventHandler<HTMLButtonElement>; 
}

export const Button: React.FC<IButton> = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      { children }
    </button>
  )
}
