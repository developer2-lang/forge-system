import type { ForgeFaq } from '../types/forge';
import { DEFAULT_FORGE_FAQS } from '../data/forgeDefaults';

interface UseForgeFaqsReturn {
  data: ForgeFaq[];
  loading: boolean;
  error: Error | null;
}

export const useForgeFaqs = (): UseForgeFaqsReturn => {
  return {
    data: DEFAULT_FORGE_FAQS,
    loading: false,
    error: null,
  };
};

export default useForgeFaqs;
