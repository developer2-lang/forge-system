import type { ForgeStat } from '../types/forge';
import { DEFAULT_FORGE_STATS } from '../data/forgeDefaults';

interface UseForgeStatsReturn {
  data: ForgeStat[];
  loading: boolean;
  error: Error | null;
}

export const useForgeStats = (): UseForgeStatsReturn => {
  return {
    data: DEFAULT_FORGE_STATS,
    loading: false,
    error: null,
  };
};

export default useForgeStats;
