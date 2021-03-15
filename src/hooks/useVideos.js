import React, { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = () => {
    // Used to manage a list of videos
    const [videos, setVideos] = useState([]);

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
    };
};

export default useVideos;