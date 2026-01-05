import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useReduceMotion } from 'context/SmoothScrollContext';

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const { reduceMotionEnabled } = useReduceMotion();

    useEffect(() => {
        // Use setTimeout to ensure scroll happens after DOM renders
        setTimeout(() => {
            const prefersReducedMotion = window.matchMedia(
                '(prefers-reduced-motion: reduce)',
            ).matches;
            const shouldAnimate = !reduceMotionEnabled && !prefersReducedMotion;

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: shouldAnimate ? 'smooth' : ('instant' as ScrollBehavior),
            });
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 0);
    }, [pathname, reduceMotionEnabled]);

    return null;
}
