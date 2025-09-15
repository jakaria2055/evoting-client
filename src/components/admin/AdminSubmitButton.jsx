import AdminStore from '../../store/AdminStore';

function AdminSubmitButton(props) {
  let {isFormSubmit} = AdminStore();
  
  if (isFormSubmit === false) {
    return (
      <button onClick={props.onClick} type="button" className={props.className}>
        {props.text}
      </button>
    );
  } else {
    return (
      <button disabled={true} className={props.className}>
        <div className="spinner-border spinner-border-sm" role="status"></div> Processing
      </button>
    );
  }
}

export default AdminSubmitButton