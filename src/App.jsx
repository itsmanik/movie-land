import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Movie from "./components/Movie";
import { v4 as uuidv4 } from "uuid";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState([]);

    const api_key = "7e0fca7f";
    const api_end_point = "http://www.omdbapi.com";
    const searchMovies = async (movieName) => {
        const response = await fetch(
            `${api_end_point}?apikey=${api_key}&s=${movieName}`
        );
        const data = await response.json();
        setMovies(data.Search);
    };

    return (
        <main className="min-h-screen pt-10 font-serif bg-slate-950 text-slate-50">
            <h1 className="text-4xl font-semibold text-center">Movie Land</h1>

            <div>
                <div>
                    <Input changeText={(text) => setSearchText(text)} search={() => searchMovies(searchText)} />
                    {movies?.length > 0 ? (
                        <div className="px-24 py-10 grid grid-cols-4 gap-9">
                            {movies.map((movie) => (
                                <Movie movie={movie} key={uuidv4()} />
                            ))}
                        </div>
                    ) : (
                        <h2 className="text-center w-full p-8">
                            Movies not found
                        </h2>
                    )}
                </div>
            </div>
        </main>
    );
};

export default App;
