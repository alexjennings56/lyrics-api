import React from 'react';
import { Rnd } from "react-rnd";
// import Draggable, {DraggableCore} from 'react-draggable';
import './App.css';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: '', song: '', lyrics: '', width: '',
            height: '',
            x: 1,
            y: 1
        };

        this.handleArtistChange = this.handleArtistChange.bind(this);
        this.handleSongChange = this.handleSongChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleArtistChange(event) {
        this.setState({artist: event.target.value});
        // Also store the song name in state
    }

    handleSongChange(event) {
        this.setState({song: event.target.value});
        // Also store the song name in state
    }

    handleSubmit(event) {
        event.preventDefault();
        this.getLyrics()
        // when the form gets submitted, send a new fetch request to the API using the artist and song the user typed in
    }

    getLyrics = () => {
        fetch (`https://api.lyrics.ovh/v1/${this.state.artist}/${this.state.song}`)
            .then((data) => {
                return data.json()
        })
            .then((data) => {
                console.log(data)
                this.setState({lyrics: data.lyrics})
            })
    }

    render() {
        return (
            <Rnd
                size={{ width: this.state.width, height: this.state.height }}
                position={{ x: this.state.x, y: this.state.y }}
                onDragStop={(e, d) => {
                    this.setState({ x: d.x, y: d.y });
                }}
                onResizeStop={(e, direction, ref, delta, position) => {
                    this.setState({
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position
                    });
                }}
            >
                <div className='handle'>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Artist Name:
                    <input type="text" value={this.state.artist} onChange={this.handleArtistChange} onMouseDown={e => e.stopPropagation()}/>
                    Song Name:
                    <input type="text" value={this.state.song} onChange={this.handleSongChange} onMouseDown={e => e.stopPropagation()}/>
                </label>
                <input type="submit" value="Submit" />
                <p className='lyrics'>{this.state.lyrics}</p>
            </form>
                </div>
            </Rnd>
        );
    }
}

export default NameForm;
