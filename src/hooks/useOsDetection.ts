import { useEffect, useState } from 'react';

export function useOsDetection(userAgent: string) {
  const [os, setOs] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (userAgent.includes('win')) setOs('Windows');
    else if (userAgent.includes('mac')) setOs('MacOS');
    else if (userAgent.includes('linux')) setOs('Linux');
    else if (/android/.test(userAgent)) setOs('Android');
    else if (/iphone|ipad|ipod/.test(userAgent)) setOs('iOS');
  }, []);

  return os;
}
