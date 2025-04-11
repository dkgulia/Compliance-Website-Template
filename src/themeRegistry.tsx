'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import theme from './theme';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [cache] = useState(() => createCache({ key: 'mui', prepend: true }));

  useServerInsertedHTML(() => {
    const names = Object.keys(cache.inserted);
    if (names.length === 0) return null;

    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }

    cache.sheet.flush();
    cache.inserted = {};

    return <style data-emotion={`${cache.key} ${names.join(' ')}`} dangerouslySetInnerHTML={{ __html: styles }} />;
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
    
  );
}