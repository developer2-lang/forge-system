import type { ForgeCaseStudy } from '../types/forge';
import { DEFAULT_FORGE_CASE_STUDIES } from '../data/forgeDefaults';

interface UseForgeCaseStudiesReturn {
  data: ForgeCaseStudy[];
  loading: boolean;
  error: Error | null;
}

export const useForgeCaseStudies = (): UseForgeCaseStudiesReturn => {
  return {
    data: DEFAULT_FORGE_CASE_STUDIES,
    loading: false,
    error: null,
  };
};

export default useForgeCaseStudies;
