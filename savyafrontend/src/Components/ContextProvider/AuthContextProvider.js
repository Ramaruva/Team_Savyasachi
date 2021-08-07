import React, { createContext, useState } from "react";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {

    const [score,setScore] = useState(0)
    const [name,setName] = useState("")

	const value = {
		score,
        setScore,
        name,
        setName
	};

	return (
		<div>
			<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
		</div>
	);
};