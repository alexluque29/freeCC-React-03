import "../styles/Clear.css";

const Clear = (props) => {
  return (
    <div className="button-clear"
     onClick={props.onClear}>
    {props.children}
    </div>
  );
};

export default Clear;
