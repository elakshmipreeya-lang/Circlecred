import { useState, useEffect } from 'react';
import { checkHealth } from '../services/api';

export const useHealth = () => {
  const [healthy, setHealthy] = useState<boolean | null>(null);

  useEffect(() => {
    checkHealth()
      .then((res) => setHealthy(res.status === 'ok'))
      .catch(() => setHealthy(false));
  }, []);

  return { healthy };
};
