import type { ForgeStage } from '../types/forge';
import { DEFAULT_FORGE_STAGES } from '../data/forgeDefaults';

interface UseForgeStagesReturn {
  data: ForgeStage[];
  loading: boolean;
  error: Error | null;
}

export const useForgeStages = (): UseForgeStagesReturn => {
  return {
    data: DEFAULT_FORGE_STAGES,
    loading: false,
    error: null,
  };
};

export default useForgeStages;
