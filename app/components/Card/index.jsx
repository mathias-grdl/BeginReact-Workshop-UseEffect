import Image from "next/image";
import React from "react";
import red from "../../../public/assets/red.jpg";

export default function Card({ movie }) {
	return (
		<div className="card bg-base-100 w-full shadow-xl my-5">
			<figure>
				<Image
					src={movie.Poster !== "N/A" ? movie.Poster : red}
					alt={`${movie.Title}'s poster`}
					className="w-full h-full object-cover rounded-md shadow aspect-[2/3] lg:h-[500px]"
					width={100}
					height={100}
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
