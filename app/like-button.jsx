'use client';
import { useState } from 'react';

export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    function handleLike(e) {
        console.log('increment like count = ', e);
        setLikes(likes + 1);
    }
    return <button onClick={handleLike}>Like ({likes})</button>;
}