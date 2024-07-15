import { useEffect } from "react";
// e56fd640

export const useApiKeyRequired = () => {
	useEffect(() => {
		let cleanup = false;
		const localStorageApiKey = localStorage.getItem("omdbApiKey");

		if (!localStorageApiKey) {
			while (!localStorage.getItem("omdbApiKey")) {
				const apiKey = prompt(
					"Quel est ton OMDB API KEY ? https://www.omdbapi.com/apikey.aspx | exemple : e56fd640"
				);

				if (apiKey) {
					localStorage.setItem("omdbApiKey", apiKey);
				}
				if (cleanup) break;
			}
		}

		return () => {
			cleanup = true;
		};
	}, []);
};
