import React from 'react';
import { connect } from 'react-redux'
import './slacc-client.css';
import { increment } from '../actions'

class slaccClient extends React.Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

  increment(e) {
    this.props.dispatch(increment());
  }

  sendForm() {
    const { scomp, dispatch } = this.props;
    dispatch({ type: 'USER_FETCH_REQUESTED', payload: {scomp}})
  }

  render() {
    return (
      <div className="slacc-client">
        <header className="slacc-client-header">
          scoby: {this.props.scomp}

          <button type="button" className="btn btn-primary" onClick={this.increment}>Add</button>
          <button type="button" className="btn btn-primary" onClick={this.sendForm}>Send</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { scomp: state.scoby };
}


const connectedSlacc = connect(mapStateToProps)(slaccClient)
export { connectedSlacc as Slacc};