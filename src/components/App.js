import React,  { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'

const App = () => {
    // Used to manage a list of videos
    const [videos, setVideos] = useState([]);
    // Used to manage the selected video
    const [selectedVideo, setSelectedVideo] = useState(null);
 
    // Included empty array because we want this to run only one time
    // This is roughly equivalent to componentDidMount
    useEffect(() => {
        onTermSubmit('buildings');
    }, [])

    const onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);

    };

    return (
            <div className="ui container">
                <SearchBar onFormSubmit={onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList 
                            onVideoSelect={setSelectedVideo} 
                            videos={videos} 
                        />
                    </div>
                </div>
                </div>
            </div>
        );
};

export default App;