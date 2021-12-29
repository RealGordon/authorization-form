//import React from 'react';
//import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false,
      message:"",
	  attempt:0
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const passwordEl = e.target.parentElement.querySelector(
      'input[type="password"]');
     const password=passwordEl.value;
    const auth = password == this.state.password;
    if(!auth)passwordEl.value="";
	const attempt=this.state.attempt;
    this.setState({
      authorized: auth,
      message:(!auth?"wrong password!":""),
      attempt:!auth?attempt+1:attempt
    });
  }

  render() {
    const remove={};
    const login=(<form action="#"
    onSubmit={this.authorize}>
    <input type="password"
    placeholder="Password"
    {...remove} />
    <input type="submit" />

    </form>);
    const contactInfo=(  <ul>
          <li>
           client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>);
    return (
      <div id="authorization">
        <h1>{this.state.authorized?"Contact":"Enter the Password"}</h1>
      { !this.state.authorized && this.state.message!=="" && <p>{this.state.message+"("+this.state.attempt+")"}</p>}
      {this.state.authorized?contactInfo:login}
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />, 
  document.getElementById('app')
);