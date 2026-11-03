import { useState } from 'react';
import Calculator from './components/Calculator';
import TextConverter from './components/TextConverter';

type Tab = 'calculator' | 'converter';

export default function App() {
  const [tab, setTab] = useState<Tab>('calculator');

  return (
    <div className="app">
      <header className="app-header">
        <h1>Productivity App</h1>
        <nav className="tabs">
          <button
            className={tab === 'calculator' ? 'tab active' : 'tab'}
            onClick={() => setTab('calculator')}
          >
            Calculator
          </button>
          <button
            className={tab === 'converter' ? 'tab active' : 'tab'}
            onClick={() => setTab('converter')}
          >
            Text Converter
          </button>
        </nav>
      </header>
      <main className="app-main">
        {tab === 'calculator' ? <Calculator /> : <TextConverter />}
      </main>
    </div>
  );
}
