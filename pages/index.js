"use client";
import { useContext } from "react";
import LanguageSwitcher from "../components/LanguageSwitcher";
import MyContextStore, { LanguageProvider } from "../contexts/LanguageContext";

const Home = () => {
	const langState = useContext(MyContextStore);
	const { val } = langState;
	const content = {
		en: {
			welcome: "Welcome to Next.js!",
		},
		fr: {
			welcome: "Bienvenue à Next.js!",
		},
		es: {
			welcome: "¡Bienvenido a Next.js!",
		},
		// ... add other languages and translations as needed
	};

	return (
		<div>
			<h1>{content[val].welcome}</h1>
			<LanguageSwitcher />
		</div>
	);
};

export default Home;
