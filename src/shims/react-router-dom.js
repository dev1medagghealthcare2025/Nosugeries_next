export function Link({ href, to, children, ...props }) {
  const finalHref = href ?? to ?? '#';
  return (
    <a href={finalHref} {...props}>
      {children}
    </a>
  );
}

export function useNavigate() {
  return (to) => {
    if (typeof window !== 'undefined') {
      window.location.href = typeof to === 'string' ? to : '#';
    }
  };
}

export function useLocation() {
  if (typeof window === 'undefined') return { pathname: '' };
  return { pathname: window.location.pathname };
}

export function useParams() {
  return {};
}

export function useSearchParams() {
  return new URLSearchParams();
}

export function Navigate() {
  return null;
}
