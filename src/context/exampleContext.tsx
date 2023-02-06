import React, { createContext, ReactNode, useState, useMemo, useContext } from 'react';

// Define any properties and methods that are available from the context obj
interface ExampleContextType {
    exampleContext: string;
    setExampleContext: (msg: string) => void;
}

const ExampleContext = createContext<ExampleContextType>({} as ExampleContextType);

export function ExampleProvider({children}: {children: ReactNode}) {
    const [exampleContext, setExampleContext] = useState('sample example context');
    const memoedValue = useMemo(() => ({
        exampleContext,
        setExampleContext,
    }), [exampleContext, setExampleContext]);
    return (
        <ExampleContext.Provider value={memoedValue}>
            {children}
        </ExampleContext.Provider>
    )
}

export default function useExample() {
    return useContext(ExampleContext)
}