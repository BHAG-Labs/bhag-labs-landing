import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import en from './strings/en';

export const LANGUAGES = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी' },
  { code: 'mr', label: 'Marathi', nativeLabel: 'मराठी' },
  { code: 'bn', label: 'Bengali', nativeLabel: 'বাংলা' },
  { code: 'ta', label: 'Tamil', nativeLabel: 'தமிழ்' },
  { code: 'te', label: 'Telugu', nativeLabel: 'తెలుగు' },
  { code: 'kn', label: 'Kannada', nativeLabel: 'ಕನ್ನಡ' },
  { code: 'ml', label: 'Malayalam', nativeLabel: 'മലയാളം' },
  { code: 'gu', label: 'Gujarati', nativeLabel: 'ગુજરાતી' },
  { code: 'pa', label: 'Punjabi', nativeLabel: 'ਪੰਜਾਬੀ' },
];

const STORAGE_KEY = 'bhag_lang_v1';

const loaders: Record<string, () => Promise<{ default: Record<string, string> }>> = {
  hi: () => import('./strings/hi'),
  mr: () => import('./strings/mr'),
  bn: () => import('./strings/bn'),
  ta: () => import('./strings/ta'),
  te: () => import('./strings/te'),
  kn: () => import('./strings/kn'),
  ml: () => import('./strings/ml'),
  gu: () => import('./strings/gu'),
  pa: () => import('./strings/pa'),
};

const cache: Record<string, Record<string, string>> = { en };

interface I18nCtx {
  lang: string;
  setLang: (code: string) => void;
  t: (key: string, vars?: Record<string, string>) => string;
}

const Ctx = createContext<I18nCtx>({
  lang: 'en',
  setLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && LANGUAGES.some((l) => l.code === saved)) return saved;
    } catch {}
    return 'en';
  });

  const [strings, setStrings] = useState<Record<string, string>>(cache[lang] || en);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch {}
    document.documentElement.setAttribute('lang', lang);

    if (cache[lang]) {
      setStrings(cache[lang]);
    } else if (loaders[lang]) {
      loaders[lang]().then((mod) => {
        cache[lang] = mod.default;
        setStrings(mod.default);
      });
    }
  }, [lang]);

  const setLang = useCallback((next: string) => {
    if (LANGUAGES.some((l) => l.code === next)) setLangState(next);
  }, []);

  const t = useCallback(
    (key: string, vars?: Record<string, string>) => {
      const raw = strings[key] ?? en[key] ?? key;
      if (!vars) return raw;
      return String(raw).replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
    },
    [strings]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useT() { return useContext(Ctx).t; }
export function useLang() {
  const ctx = useContext(Ctx);
  return [ctx.lang, ctx.setLang] as const;
}
