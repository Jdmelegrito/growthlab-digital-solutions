import { createContext, useContext, useState, useCallback } from 'react';
import CalendlyModal from '@/components/CalendlyModal';

const CalendarModalContext = createContext({
  openCalendar: () => {},
  closeCalendar: () => {},
  isOpen: false,
});

export function CalendarModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCalendar = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeCalendar = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <CalendarModalContext.Provider value={{ openCalendar, closeCalendar, isOpen }}>
      {children}
      <CalendlyModal open={isOpen} onClose={closeCalendar} />
    </CalendarModalContext.Provider>
  );
}

export function useCalendarModal() {
  const context = useContext(CalendarModalContext);
  if (!context) {
    throw new Error('useCalendarModal must be used within a CalendarModalProvider');
  }
  return context;
}
