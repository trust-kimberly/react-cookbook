import React, { useState } from "react"
// import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import youtubeArr from "../data/youtubeArr"

const RecipesCarousel = () => {

    const [highlightedFrame, setHighlightedFrame] = useState(youtubeArr[0].src);
    const handleClick = (frameSrc) => {
        console.log("clicked");
        setHighlightedFrame(frameSrc);
    };

    const videos = youtubeArr.map((video, index) => {
        console.log();
        return (
            <img 
                src={video.img}
                key={index}
                alt="video thumbnail"
                onClick={() => handleClick(video.src)}
                style={{border: "2px solid pink"}}
            />
        )
    });

    return (
        <>
            <h1>Home Page Recipes Carousel</h1>
            <div id="wrapper">
                <div id="thumbnails">{videos}</div>
                <iframe width="560" height="315" src={highlightedFrame} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </>
    )
}

export default RecipesCarousel