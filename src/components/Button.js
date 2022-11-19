import '../styles/Button.css'

const Button = (props) => {

const isOper = (valor) => {
  return isNaN (valor) && (valor !==".") && (valor !=="=")

}

  return (
    <button
    className={`button-container ${isOper(props.children) ? 'oper' : null}`.trimEnd()}
      onClick={() => props.onInput(props.children)}>
      {props.children}
    </button>
  )
} 

export default Button