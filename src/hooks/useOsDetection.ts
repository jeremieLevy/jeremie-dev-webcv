import { useEffect, useState } from 'react';

export function useOsDetection(userAgent: string) {
  const [os, setOs] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (/android/.test(userAgent)) setOs('Android');
    else if (/iphone|ipad|ipod/.test(userAgent)) setOs('iOS');
    else if (userAgent.includes('win')) setOs('Windows');
    else if (userAgent.includes('mac')) setOs('MacOS');
    else if (userAgent.includes('linux')) setOs('Linux');
  }, []);

  return os;
}
