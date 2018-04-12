import React from 'react';
import ReactDOM from 'react-dom';
import './TrackList.css';
import {Track} from '../Track/Track';

export class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => <Track key={track.id} track={track}
          //name={this.props.track.name} artist={this.props.track.artist}
          //  album={this.props.track.album}
          onAdd={this.props.onAdd} onRemove={this.props.onRemove}
          isRemoval={this.props.isRemoval}
             />)}
      </div>
    );
  }
}
