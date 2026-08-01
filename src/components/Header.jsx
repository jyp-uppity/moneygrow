import React from 'react';
import { Compass, CalendarCheck, CheckSquare, Sparkles, FileText } from 'lucide-react';

export default function Header({ currentTab, setTab, hasReport, hasBooking }) {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(242, 244, 236, 0.94)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--line)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '68px'
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => setTab('home')} 
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'var(--bottle)',
            color: 'var(--gold-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '18px'
          }}>
            M
          </div>
          <div>
            <span className="font-serif" style={{ fontSize: '20px', fontWeight: '700', color: 'var(--ink)' }}>
              머니그로우
            </span>
            <span style={{ fontSize: '11px', color: 'var(--muted)', display: 'block', marginTop: '-4px', letterSpacing: '0.05em' }}>
              MoneyGrow · 어피티
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', gap: '6px' }}>
          <button 
            onClick={() => setTab('home')}
            className={`nav-btn ${currentTab === 'home' ? 'active' : ''}`}
            style={{
              padding: '8px 14px',
              borderRadius: '20px',
              border: 'none',
              background: currentTab === 'home' ? 'var(--paper-deep)' : 'transparent',
              color: currentTab === 'home' ? 'var(--ink)' : 'var(--muted)',
              fontSize: '14px',
              fontWeight: currentTab === 'home' ? '600' : '500',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            소개
          </button>

          <button 
            onClick={() => setTab(hasReport ? 'report' : 'assessment')}
            style={{
              padding: '8px 14px',
              borderRadius: '20px',
              border: 'none',
              background: (currentTab === 'assessment' || currentTab === 'report') ? 'var(--bottle)' : 'transparent',
              color: (currentTab === 'assessment' || currentTab === 'report') ? '#F2F4EC' : 'var(--muted)',
              fontSize: '14px',
              fontWeight: (currentTab === 'assessment' || currentTab === 'report') ? '600' : '500',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Compass size={16} />
            1단계: 재무진단
            {hasReport && <span className="badge badge-gold" style={{ padding: '1px 6px', fontSize: '10px' }}>완료</span>}
          </button>

          <button 
            onClick={() => setTab('booking')}
            style={{
              padding: '8px 14px',
              borderRadius: '20px',
              border: 'none',
              background: currentTab === 'booking' ? 'var(--bottle)' : 'transparent',
              color: currentTab === 'booking' ? '#F2F4EC' : 'var(--muted)',
              fontSize: '14px',
              fontWeight: currentTab === 'booking' ? '600' : '500',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <CalendarCheck size={16} />
            2단계: 재무상담
            {hasBooking && <span className="badge badge-gold" style={{ padding: '1px 6px', fontSize: '10px' }}>예약됨</span>}
          </button>

          <button 
            onClick={() => setTab('routine')}
            style={{
              padding: '8px 14px',
              borderRadius: '20px',
              border: 'none',
              background: currentTab === 'routine' ? 'var(--bottle)' : 'transparent',
              color: currentTab === 'routine' ? '#F2F4EC' : 'var(--muted)',
              fontSize: '14px',
              fontWeight: currentTab === 'routine' ? '600' : '500',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <CheckSquare size={16} />
            3단계: 루틴관리
          </button>
        </nav>

        {/* Action Button */}
        <div>
          <button 
            onClick={() => setTab(hasReport ? 'report' : 'assessment')}
            className="btn-primary"
            style={{ padding: '8px 18px', fontSize: '13px' }}
          >
            <Sparkles size={14} />
            {hasReport ? '내 리포트 보기' : '무료 자가진단 39,000원'}
          </button>
        </div>
      </div>
    </header>
  );
}
