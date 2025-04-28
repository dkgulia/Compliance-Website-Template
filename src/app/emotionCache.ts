import createCache from '@emotion/cache';

export default function createEmotionCache() {
  if (typeof document !== 'undefined') {
    const insertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    );
    return createCache({ key: 'mui', prepend: true, insertionPoint: insertionPoint ?? undefined });
  }

  return createCache({ key: 'mui', prepend: true });
}
