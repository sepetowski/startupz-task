'use client';
import React, { createContext, useCallback, useContext } from 'react';
import { useState } from 'react';

interface Props {
	children: React.ReactNode;
}

interface NavShadowContext {
	hasShadow: boolean;
	toggleShadow: (isVisable: boolean) => void;
}

export const NavShadowContext = createContext<NavShadowContext | null>(null);

export const NavShadowProvider = (props: Props) => {
	const [hasShadow, setHasShadow] = useState(false);

	const toggleShadowHnalder = useCallback((isVisable: boolean) => {
		setHasShadow(isVisable);
	}, []);

	const navShadowContext = {
		hasShadow,
		toggleShadow: toggleShadowHnalder,
	};
	return (
		<NavShadowContext.Provider value={navShadowContext}>{props.children}</NavShadowContext.Provider>
	);
};

export const useNavShadowContext = () => {
	const ctx = useContext(NavShadowContext);
	if (!ctx) throw new Error('invalid use');

	return ctx;
};
