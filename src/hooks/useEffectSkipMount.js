import React from "react";

function useEffectSkipMount(callback, dependencies) {
  const hasMounted = React.useRef(false);

  const callbackRef = React.useRef();
  callbackRef.current = callback;

  React.useEffect(() => {
    if (!hasMounted.current) {
      return;
    }

    callbackRef.current();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  React.useEffect(() => {
    hasMounted.current = true;

    return () => {
      hasMounted.current = false;
    };
  }, []);
}

export default useEffectSkipMount;
