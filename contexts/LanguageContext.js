import React, { useState } from "react";
const MyContextStore = React.createContext();

export default MyContextStore;

export const LanguageProvider = ({ children }) => {
	const [val, setVal] = useState("en");

	function updateVal(newVal) {
		setVal(newVal);
	}

	return (
		<MyContextStore.Provider value={{ val, updateVal }}>
			{children}
		</MyContextStore.Provider>
	);
};
