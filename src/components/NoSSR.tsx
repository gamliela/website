import React, { ReactNode, useEffect, useState } from "react";

function NoSSR({ children }: { children: ReactNode }): JSX.Element | null {
  const [wasMounted, setWasMounted] = useState(false);

  useEffect(() => {
    setWasMounted(true);
  }, []);

  if (wasMounted) {
    return <>{children}</>;
  } else {
    return null;
  }
}

export default NoSSR;
