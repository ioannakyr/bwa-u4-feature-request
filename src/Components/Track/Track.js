import React from 'react';
import ReactDOM from 'react-dom';
import './Track.css';

export class Track extends React.Component {

  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(e) {
    this.props.onAdd(this.props.track);
  }

  removeTrack(e) {
    this.props.onRemove(this.props.track);
  }

  renderAction() {
   if(this.props.isRemoval) {
      return <a onClick={this.removeTrack}>-</a>;
    } else {
      return <a onClick={this.addTrack}>+</a>;
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{/*<!-- track name will go here -->*/}</h3>
          <p>{/*<!-- track artist will go here--> */}| {/*<!-- track album will go here -->*/}</p>
        </div>
        <a className="Track-action">{/*<!-- + or - will go here -->*/}</a>
      </div>
    );
  }
}
