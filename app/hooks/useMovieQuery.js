import useSWR from "swr";

export const useMovieQuery = (search, type) => {
	return useSWR(`movie-finder-${search}-${type}`, async () => {
		if (search.length >= 1 && search.length < 3) {
			throw new Error("Please enter at least 3 characters");
		}

		const apiKey = localStorage.getItem("omdbApiKey");

		if (!apiKey) {
			throw new Error("Invalid API KEY");
		}

		const url = new URL("https://www.omdbapi.com");
		url.searchParams.set("s", search);
		url.searchParams.set("type", type);
		url.searchParams.set("apiKey", apiKey);

		const json = await fetch(url.toString()).then((res) => res.json());
		return json;
	});
};
