import React from 'react';

class App extends React.Component {

  state = {
    value: '',
    emails: []
  }
  
  handleChange = (evt) => {
    this.setState({
      value: evt.target.value
    });
  };

  handleAdd = (evt) => {
      evt.preventDefault();
        
      var email = this.state.value.trim();
        
      if (email) {
        this.setState({
          emails: [...this.state.emails, email],
          value: ''
        });
      }
  };

  handleDelete = (toBeRemoved) => {
    this.setState({
      emails: this.state.emails.filter(email => email !== toBeRemoved)
    });
  };

  render() {
    return (
      <React.Fragment>
      {this.state.emails.map(email => (
      <div key={email}>
        {email}
    
        <button
          type="button"
          onClick={() =>  this.handleDelete(email)}
        >
        </button>
      </div>
      ))}

      <input
        placeholder="Input the mail address"
        value={this.state.value}
        onChange={this.handleChange}
        onClick={this.handleAdd}
      />
      </React.Fragment>
    );
  }
}

export default App;
