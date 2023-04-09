import { useEffect, useState } from 'react';

function useDelayUnmount(isMounted, deylayTime) {
    const [shouldRender, setShouldRender] = useState(false);
    useEffect(() => {
        let timeoutId;
        if (isMounted && !shouldRender) {
            setShouldRender(true);
        } else if (!isMounted && shouldRender) {
            timeoutId = setTimeout(() => setShouldRender(false), deylayTime);
        }

        return () => clearTimeout(timeoutId);
    }, [isMounted, deylayTime, shouldRender]);
    return shouldRender;
}

export default useDelayUnmount;
