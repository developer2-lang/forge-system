import type { ForgeClient } from '../types/forge';
import { DEFAULT_FORGE_CLIENTS } from '../data/forgeDefaults';

interface UseForgeClientsReturn {
  data: ForgeClient[];
  loading: boolean;
  error: Error | null;
}

export const useForgeClients = (): UseForgeClientsReturn => {
  return {
    data: DEFAULT_FORGE_CLIENTS,
    loading: false,
    error: null,
  };
};

export default useForgeClients;
