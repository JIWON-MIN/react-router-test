import {withRouter} from "react-router-dom";


export default withRouter(function LoginButton(props){

  function login(){
    setTimeout(()=>{
      // 페이지 이동
      props.history.push('/');
    }, 1000);
  }

  return <button onClick={login}>login</button>
});