import Image from "next/image";
import React from "react";
import imagenoavaible from "../../../public/assets/imagenoavaible.png";

export default function Card({ movie }) {
	console.log("movie", movie);
	return (
		<div className="card bg-base-100 w-full shadow-xl my-5">
			<figure>
				<Image
					src={movie.Poster !== "N/A" ? movie.Poster : imagenoavaible}
					alt={`${movie.Title}'s poster`}
					className="w-full h-full object-cover rounded-md shadow aspect-[2/3] "
					width={500}
					height={750}
					sizes="(max-width: 768px) 100vw, 
           (max-width: 1200px) 50vw"
				/>
			</figure>

			<div className="card-body h-[150px]">
				<h2 className="card-title line-clamp-2">{movie.Title}</h2>
				<p>
					{movie.Year} | {movie.Type}
				</p>
			</div>
		</div>
	);
}
