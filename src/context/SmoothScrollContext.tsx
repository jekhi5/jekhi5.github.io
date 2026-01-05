import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from 'react';

interface ReduceMotionContextType {
    reduceMotionEnabled: boolean;
    toggleReduceMotion: () => void;
}

const ReduceMotionContext = createContext<ReduceMotionContextType | undefined>(
    undefined,
);

export function ReduceMotionProvider({ children }: { children: ReactNode }) {
    const [reduceMotionEnabled, setReduceMotionEnabled] = useState(() => {
        const saved = localStorage.getItem('reduceMotionEnabled');
        return saved !== null ? JSON.parse(saved) : false;
    });

    const toggleReduceMotion = () => {
        setReduceMotionEnabled((prev: boolean) => {
            const newValue = !prev;
            localStorage.setItem(
                'reduceMotionEnabled',
                JSON.stringify(newValue),
            );
            return newValue;
        });
    };

    // Apply reduce-motion class to body when enabled
    useEffect(() => {
        if (reduceMotionEnabled) {
            document.body.classList.add('reduce-motion');
        } else {
            document.body.classList.remove('reduce-motion');
        }
    }, [reduceMotionEnabled]);

    return (
        <ReduceMotionContext.Provider
            value={{ reduceMotionEnabled, toggleReduceMotion }}
        >
            {children}
        </ReduceMotionContext.Provider>
    );
}

export function useReduceMotion() {
    const context = useContext(ReduceMotionContext);
    if (context === undefined) {
        throw new Error(
            'useReduceMotion must be used within a ReduceMotionProvider',
        );
    }
    return context;
}
