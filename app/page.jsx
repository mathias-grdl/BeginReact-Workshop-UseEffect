"use client";

import Cards from "./components/Cards";
import SearchBar from "./components/SearchBar";
import { useQueryState } from "./hooks/useQueryState";

export default function Home() {
	const [query, setQuery] = useQueryState("s", "");
	return (
		<main>
			<SearchBar query={query} setQuery={setQuery} />
			<div className="my-5">
				<Cards query={query} />
			</div>
		</main>
	);
}
