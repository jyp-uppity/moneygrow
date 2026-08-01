import React, { useState } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Assessment from './components/Assessment';
import ReportView from './components/ReportView';
import ConsultationBooking from './components/ConsultationBooking';
import RoutineDashboard from './components/RoutineDashboard';
import { calculateResult } from './utils/calculator';
import { COACHES } from './data/assessmentData';

export default function App() {
  const [currentTab, setTab] = useState('home'); // 'home' | 'assessment' | 'report' | 'booking' | 'routine'
  const [result, setResult] = useState(null);
  const [bookingState, setBookingState] = useState(null);

  const handleAssessmentComplete = (calcResult) => {
    setResult(calcResult);
    setTab('report');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookingComplete = (bookingInfo) => {
    setBookingState(bookingInfo);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Demo shortcut for Persona Kim Na-young (PRD 2-2 & 6-1 sample)
  const startDemoWithPersona = () => {
    // Kim Na-young's answers matching PRD 6-1 score sample
    const sampleAnswers = {
      1: 5, 2: 5, 3: 1, 4: 5, // Planning Trait (Raw 20 -> normalized high)
      5: 3, 6: 2, 7: 2,       // Planning Action (Raw low -> Gap)
      8: 4, 9: 2, 10: 4, 11: 3, // Risk Trait (Growth G)
      12: 2, 13: 2, 14: 2,      // Risk Action
      15: 4, 16: 4, 17: 3,      // Impulsivity (High)
      18: 4, 19: 4, 20: 4       // Avoidance (High)
    };
    const demoResult = calculateResult(sampleAnswers);
    setResult(demoResult);
    setTab('report');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header 
        currentTab={currentTab} 
        setTab={setTab} 
        hasReport={!!result}
        hasBooking={!!bookingState}
      />

      <main style={{ flex: 1 }}>
        {currentTab === 'home' && (
          <LandingPage setTab={setTab} startDemoWithPersona={startDemoWithPersona} />
        )}

        {currentTab === 'assessment' && (
          <Assessment onComplete={handleAssessmentComplete} setTab={setTab} />
        )}

        {currentTab === 'report' && (
          <ReportView result={result} setTab={setTab} />
        )}

        {currentTab === 'booking' && (
          <ConsultationBooking 
            result={result} 
            onBookingComplete={handleBookingComplete}
            bookingState={bookingState}
          />
        )}

        {currentTab === 'routine' && (
          <RoutineDashboard />
        )}
      </main>
    </div>
  );
}
