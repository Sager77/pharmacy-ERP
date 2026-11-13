import { useState, useEffect, useCallback } from 'react';

// Map URL paths to page keys
const PATH_TO_PAGE = {
  '/':         'home',
  '/about':    'about',
  '/products': 'products',
  '/services': 'services',
  '/contact':  'contact',
};

// Map page keys to URL paths
const PAGE_TO_PATH = {
  home:     '/',
  about:    '/about',
  products: '/products',
  services: '/services',
  contact:  '/contact',
};

function getPageFromPath(pathname) {
  return PATH_TO_PAGE[pathname] ?? 'home';
}

export function useRouter() {
  const [currentPage, setCurrentPage] = useState(() =>
    getPageFromPath(window.location.pathname)
  );

  // Listen to browser back/forward button
  useEffect(() => {
    const onPopState = () => {
      setCurrentPage(getPageFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = useCallback((page) => {
    const path = PAGE_TO_PATH[page] ?? '/';
    window.history.pushState({ page }, '', path);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { currentPage, navigate };
}
