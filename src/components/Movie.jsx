import React from "react";

const Movies = (props) => {
    return (
        <div className="bg-gray-900 w-fit rounded-md overflow-hidden hover:cursor-pointer hover:bg-gray-800 transition-all hover:scale-105">
            <div className="h-80 w-60">
                <img src={props.movie.Poster !== "N/A" ? props.movie.Poster : "https://via.placeholder.com/400"} className="h-full w-full" alt="image to show poster of the movie"/>
            </div>
            <div className="py-3 px-5">
                <div className="text-sm text-gray-500">{props.movie.Type}</div>
                <div className="text-lg">{props.movie.Title}</div>
                <div className="text-sm text-gray-500">{props.movie.Year}</div>
            </div>
        </div>
    );
};

export default Movies;
