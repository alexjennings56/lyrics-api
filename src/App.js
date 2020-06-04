import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';
import './App.css';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {artist: '', song: '', lyrics: ''};


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
            <Draggable
                axis="both"
                handle=".handle"
                defaultPosition={{x: 0, y: 0}}
                position={null}
                grid={[1, 1]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <div className='handle'>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Artist Name:
                    <input type="text" value={this.state.artist} onChange={this.handleArtistChange} />
                    Song Name:
                    <input type="text" value={this.state.song} onChange={this.handleSongChange} />
                </label>
                <input type="submit" value="Submit" />
                <p className='lyrics'>{this.state.lyrics}</p>
            </form>
                </div>
            </Draggable>
        );
    }
}

export default NameForm;
