import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Home from './pages/Home';
import Blog from './pages/Blog';
import { CalendarModalProvider } from '@/context/CalendarModalContext';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      if (typeof window !== 'undefined') {
        navigateToLogin();
      }
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<Blog />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default function App({ location }) {
  const isServer = typeof window === 'undefined';

  if (isServer || location) {
    return (
      <AuthProvider>
        <QueryClientProvider client={queryClientInstance}>
          <StaticRouter location={location || '/'}>
            <CalendarModalProvider>
              <AuthenticatedApp />
            </CalendarModalProvider>
          </StaticRouter>
          <Toaster />
        </QueryClientProvider>
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <BrowserRouter>
          <CalendarModalProvider>
            <AuthenticatedApp />
          </CalendarModalProvider>
        </BrowserRouter>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}