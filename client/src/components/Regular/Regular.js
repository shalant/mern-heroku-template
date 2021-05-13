import React, { useState } from 'react';
import axios from 'axios';
import './Regular.scss';
import LoadingDots from 'imgs/loading-dots.gif';

const Regular = () => {
    const [file, setFile] = useState(null);
    const [inputContainsFile, setInputContainsFile] = useState(false);
    const [currentlyUploading, setCurrentlyUploading] = useState(false);
    const [imageId, setImageId] = useState(null);
    const [progress, setProgress] = useState(null);

    const handleFile = (event) => {
        setFile(event.target.files[0]);
        setInputContainsFile(true);
    }
    return (
        <div>
            <p>Regular</p>
        </div>
    )
}

export default Regular;