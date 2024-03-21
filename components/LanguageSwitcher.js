"use client";
import { useContext, useState } from "react";
import MyContextStore, { LanguageProvider } from "../contexts/LanguageContext";

const LanguageSwitcher = () => {
	const annoying = useContext(MyContextStore);
	const { val, updateVal } = annoying;
	return (
		<select value={val} onChange={(event) => updateVal(event.target.value)}>
			<option value="en">English</option>
			<option value="fr">French</option>
			<option value="es">Spanish</option>
			{/* Add more languages as needed */}
		</select>
	);
};

export default LanguageSwitcher;
