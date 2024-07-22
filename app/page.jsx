"use client";

import Cards from "./components/Cards";
import SearchBar from "./components/SearchBar";
import { useQueryState } from "./hooks/useQueryState";

export default function Home() {
	const [query, setQuery] = useQueryState("s", "Jumanji");
	const [queryType, setQueryType] = useQueryState("type", "");

	return (
		<main>
			<SearchBar
				query={query}
				setQuery={setQuery}
				queryType={queryType}
				setQueryType={setQueryType}
			/>
			<div className="my-5">
				<Cards query={query} queryType={queryType} />
			</div>
		</main>
	);
}
