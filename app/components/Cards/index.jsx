import { useDebounceValue } from "@/app/hooks/useDebounceValue";
import { useMovieQuery } from "@/app/hooks/useMovieQuery";
import React from "react";
import Card from "../Card";

export default function Cards({ query, queryType }) {
	const debounceValue = useDebounceValue(query, 500);
	const { data, error, isLoading } = useMovieQuery(debounceValue, queryType);
	return (
		<>
			{error ? <p>Error : {error.message} </p> : null}
			<div className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
				{isLoading ? (
					<span className="loading loading-spinner loading-md"></span>
				) : null}
				{data?.Search?.length > 0 ? (
					data.Search.map((movie) => (
						<div key={movie.imdbID}>
							<Card movie={movie} />
						</div>
					))
				) : (
					<span>No {queryType} match your search</span>
				)}
			</div>
		</>
	);
}
