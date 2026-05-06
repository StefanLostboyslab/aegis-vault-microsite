import { useState, useEffect, useRef } from 'react'
import './index.css'

function App() {
  const [activeHardware, setActiveHardware] = useState('UNO_Q');
  const [dppCount, setDppCount] = useState(0);
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [esprIndex, setEsprIndex] = useState(0);
  const [archIndex, setArchIndex] = useState(0);
  const [hardwareIndex, setHardwareIndex] = useState(0);
  const [scaleIndex, setScaleIndex] = useState(0);
  const [starlinkIndex, setStarlinkIndex] = useState(0);
  const [uiIndex, setUiIndex] = useState(0);
  const [activeModal, setActiveModal] = useState(null);
  const [activeScreenshot, setActiveScreenshot] = useState(null);
  const counterRef = useRef(null);

  const keywords = [
    "Physical Sovereignty",
    "Hardened Edge",
    "Tangible Immutability",
    "Debian Core",
    "Air-Gapped Resilience",
    "Secure Subterranean Facility"
  ];

  const esprKeywords = [
    "Decade-Long Assurance",
    "Perpetual Storage",
    "Cryptographic Durability",
    "Future-Proofed",
    "ESPR Compliant",
    "Redundant Lifecycle"
  ];

  const starlinkKeywords = [
    "Orbital Redundancy",
    "Starlink Failover",
    "Stellar Uplink",
    "Always-On Connectivity",
    "Global Framework",
    "Decentralized Telemetry"
  ];

  const archKeywords = [
    "JSON & Human-Readable DPPs",
    "Machine-Readable Data",
    "Offline Verification",
    "Zero Trust Architecture",
    "Cryptographic Hashes"
  ];

  const hardwareKeywords = [
    "Headless Debian Linux",
    "Qualcomm Processing Power",
    "Solid-State Durability",
    "Zero Moving Parts",
    "Physical Digital Sovereignty"
  ];

  const scaleKeywords = [
    "Massive Data Throughput",
    "24,000 Model Passports",
    "Edge Storage Capacity",
    "Instant Payload Retrieval"
  ];

  const uiKeywords = [
    "Local Surveillance Dashboard",
    "Instant Visual Audit",
    "No Internet Required",
    "Encrypted UI Backups"
  ];

  // Keyword animation cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % keywords.length);
      setEsprIndex((prev) => (prev + 1) % esprKeywords.length);
      setArchIndex((prev) => (prev + 1) % archKeywords.length);
      setHardwareIndex((prev) => (prev + 1) % hardwareKeywords.length);
      setScaleIndex((prev) => (prev + 1) % scaleKeywords.length);
      setStarlinkIndex((prev) => (prev + 1) % starlinkKeywords.length);
      setUiIndex((prev) => (prev + 1) % uiKeywords.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  // Scroll observer for the counter
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate counter when visible
          let start = 0;
          const end = activeHardware === 'UNO_Q' ? 1860000 : 4000000;
          const duration = 2000;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setDppCount(end);
              clearInterval(timer);
            } else {
              setDppCount(Math.floor(start));
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => observer.disconnect();
  }, [activeHardware]);

  return (
    <>
      <nav className="navbar">
        <div style={{ height: '30px' }}>
          <a href="#hero" style={{ display: 'block', height: '100%' }}>
            <img 
              src="/assets/whatt_io color logo (2).svg" 
              alt="whatt.io" 
              style={{ height: '100%', filter: 'drop-shadow(0 0 8px rgba(0,255,255,0.8))' }} 
            />
          </a>
        </div>
        <div className="nav-links">
          <a href="#hero">The Edge</a>
          <a href="#regulatory">ESPR</a>
          <a href="#architecture">Architecture</a>
          <a href="#hardware">Hardware</a>
          <a href="#scale">Scale</a>
          <a href="#demo">Backup DPP</a>
          <a href="#ecosystem">Apps</a>
        </div>
      </nav>

      {/* Permanent Bottom Left Aegis Vault Logo */}
      <div style={{ position: 'fixed', bottom: '30px', left: '30px', zIndex: 1000, pointerEvents: 'none' }}>
        <img 
          src="/assets/aegis_vault_logo.png" 
          alt="Aegis Vault" 
          style={{ height: '50px', filter: 'drop-shadow(0 0 10px rgba(0,255,255,0.6))', opacity: 0.9 }} 
        />
      </div>

      <main className="snap-container">
        
        {/* Section 1: Hero */}
        <section 
          id="hero" 
          className="hero-section hero-true-color" 
          style={{ backgroundImage: `url('/assets/aegis_vault_2.png')` }}
        >
          <div className="content-wrapper">
            <h1 className="title" style={{ marginBottom: '8px', color: 'white', textShadow: '0 0 20px rgba(255,255,255,0.3)', letterSpacing: '2px' }}>THE AEGIS VAULT</h1>
            <div style={{ height: '40px', marginBottom: '24px' }}>
              <span key={keywordIndex} className="keyword-animate-white keyword-text">
                {keywords[keywordIndex]}
              </span>
            </div>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-tron-cyan)', marginBottom: '16px', fontWeight: 500 }}>
              The Ultimate Physical Backup for Digital Product Passports.
            </h2>
            <p className="subtitle" style={{ fontSize: '1.2rem', fontWeight: 400, color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
              Guaranteed data sovereignty. Fully functional offline via local edge networks, or instantly reconnected to the global grid via Starlink uplinks in deep space. No cloud dependency. No fail points.
            </p>
            <a href="#architecture" className="btn-tron">Explore Architecture</a>
          </div>
        </section>

        {/* Section 2: The Regulatory Imperative */}
        <section 
          id="regulatory" 
          className="hero-section" 
          style={{ backgroundImage: `url('/assets/10_year_guarantee.png')` }}
        >
          <div className="content-wrapper">
            <h2 className="title" style={{ marginBottom: '8px' }}>The Regulatory Imperative</h2>
            <div style={{ height: '40px', marginBottom: '40px' }}>
              <span key={esprIndex} className="keyword-animate-white keyword-text">
                {esprKeywords[esprIndex]}
              </span>
            </div>
            
            <div className="glass-panel" style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center', background: 'rgba(5,5,10,0.85)', backdropFilter: 'blur(10px)' }}>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'white', marginBottom: '20px' }}>
                Under the <strong>EU Ecodesign for Sustainable Products Regulation (ESPR)</strong>, economic operators are legally mandated to guarantee Digital Product Passport (DPP) availability for a minimum of 10 years after a product enters the market. The regulation requires extreme data resilience—ensuring continuous access even in the event of primary domain failure, corporate insolvency, or loss of global internet connectivity.
              </p>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-tron-cyan)', margin: 0 }}>
                <strong>The Aegis Vault explicitly solves this.</strong> Built to outlast the products they protect via 10-year minimum backup contracts, authorities and manufacturers retain full physical access to the hardware. If a brand or importer disappears, the physical Debian edge server can simply be relocated and restarted in any new facility with an Ethernet connection—or via Starlink failover.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Our Architecture & Flowchart */}
        <section 
          id="architecture" 
          className="hero-section" 
          style={{ backgroundImage: `url('/assets/regulatory_space_bg.jpg')` }}
        >
          <div className="content-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 className="title" style={{ marginBottom: '8px' }}>Our Architecture</h2>
            <div style={{ height: '40px', marginBottom: '40px' }}>
              <span key={archIndex} className="keyword-animate-white keyword-text">
                {archKeywords[archIndex]}
              </span>
            </div>
            <div className="glass-panel" style={{ padding: '30px 40px', maxWidth: '900px', margin: '0 auto 40px auto', textAlign: 'center', background: 'rgba(5,5,10,0.7)', backdropFilter: 'blur(10px)' }}>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'white', margin: 0 }}>
                The Aegis Vault guarantees immutable storage via a multi-tiered architecture: <strong>whatt.io</strong> core runs securely in Digital Ocean, the <strong>whatt.io Apps</strong> run on Google Cloud, and critically, <strong style={{ color: 'var(--color-tron-cyan)' }}>every brand on the whatt.io main cloud receives their own dedicated physical hardware</strong>. All Aegis database, synchronization, and edge explorer logic runs natively on these local, headless Linux Debian devices equipped with fallback mechanisms.
              </p>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'white', marginTop: '20px', marginBottom: 0, paddingTop: '20px', borderTop: '1px solid rgba(0,255,255,0.2)' }}>
                The physical hardware arrays are geographically isolated in a high-security fortress in the <strong>South of Sweden</strong>. The facility is equipped with massive <strong>UPS (Uninterruptible Power Supply)</strong> battery banks and connected to the global grid via primary <strong>1000MBit Fiber</strong>. In the event of catastrophic terrestrial failure, the entire edge node array seamlessly fails over to low-earth orbit <strong>Starlink</strong> satellites.
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <button className="btn-tron" onClick={() => setActiveModal('failover')}>
                View Architecture Schematic
              </button>
              <button className="btn-tron" onClick={() => setActiveModal('zerotrust')}>
                View Zero Trust Architecture
              </button>
            </div>
          </div>
        </section>

        {/* Schematic Modal */}
        {activeModal && (
          <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(5, 5, 10, 0.9)', backdropFilter: 'blur(10px)',
            zIndex: 1000, display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center', padding: '40px'
          }}>
            <button 
              className="btn-tron" 
              onClick={() => setActiveModal(null)}
              style={{ position: 'absolute', top: '40px', right: '40px' }}
            >
              CLOSE [X]
            </button>
            <div style={{ position: 'relative', display: 'inline-block', maxWidth: '100%', maxHeight: '80vh' }}>
              <img 
                src={activeModal === 'failover' ? "/assets/Aegis%20Core%20Vault%20DPP%20failover%20schematic.jpg" : "/assets/zero_trust_schematic.jpg"} 
                alt="Schematic"
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '100%', 
                  borderRadius: '12px', 
                  border: '1px solid var(--color-electric-purple)', 
                  boxShadow: '0 0 40px rgba(138,43,226,0.3)',
                  filter: 'invert(1) hue-rotate(180deg)',
                  display: 'block'
                }}
              />
              {/* Starlink Overlay */}
              <div style={{
                position: 'absolute',
                bottom: activeModal === 'failover' ? '28%' : '5%',
                right: activeModal === 'failover' ? '4%' : '5%',
                background: 'rgba(5, 5, 10, 0.9)',
                border: '1px solid var(--color-tron-cyan)',
                padding: '6px 12px',
                borderRadius: '6px',
                color: 'var(--color-tron-cyan)',
                fontWeight: 'bold',
                fontSize: '1vw',
                boxShadow: '0 0 15px rgba(0,255,255,0.6)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <span style={{ fontSize: '1.2vw' }}>🛰️</span> Starlink Failover
              </div>
            </div>
          </div>
        )}

        {/* Section 3: Digital Sovereignty (Hardware Toggle) */}
        <section 
          id="hardware" 
          className="hero-section" 
          style={{ 
            backgroundImage: `url('/assets/qualcomm_arduino_q.png')`,
            transition: 'background-image 0.5s ease-in-out'
          }}
        >
          <div className="content-wrapper">
            <h2 className="title" style={{ marginBottom: '8px' }}>Physical Hardware Meets Digital Sovereignty</h2>
            <div style={{ height: '40px', marginBottom: '40px' }}>
              <span key={hardwareIndex} className="keyword-animate-white keyword-text">
                {hardwareKeywords[hardwareIndex]}
              </span>
            </div>
            
            <div className="hardware-toggle-container">
              <button 
                className={`hardware-toggle-btn ${activeHardware === 'UNO_Q' ? 'active' : ''}`}
                onClick={() => setActiveHardware('UNO_Q')}
              >
                Arduino UNO Q
              </button>
              <button 
                className={`hardware-toggle-btn ${activeHardware === 'VENTUNO_Q' ? 'active' : ''}`}
                onClick={() => setActiveHardware('VENTUNO_Q')}
              >
                Arduino Ventuno Q
              </button>
            </div>

            <div className="glass-panel glitch-transition" key={activeHardware} style={{ maxWidth: '600px', margin: '0 auto' }}>
              {activeHardware === 'UNO_Q' ? (
                <>
                  <h3 style={{ fontSize: '2rem', color: 'var(--color-tron-cyan)', marginBottom: '24px' }}>UNO Q SPECS</h3>
                  <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', lineHeight: '2' }}>
                    <li>⚡ <strong>Processor:</strong> Qualcomm Quad-core ARM</li>
                    <li>🖧 <strong>Architecture:</strong> Headless Debian Linux Server</li>
                    <li>⚙️ <strong>Durability:</strong> Zero Moving Parts (Solid-State)</li>
                    <li>💾 <strong>Storage:</strong> 32GB eMMC (Immutable OS Overhead: ~4GB)</li>
                  </ul>
                </>
              ) : (
                <>
                  <h3 style={{ fontSize: '2rem', color: 'var(--color-tron-cyan)', marginBottom: '24px' }}>VENTUNO Q SPECS</h3>
                  <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', lineHeight: '2' }}>
                    <li>⚡ <strong>Processor:</strong> Qualcomm Octa-core ARM</li>
                    <li>🖧 <strong>Architecture:</strong> Headless Debian Linux Server</li>
                    <li>⚙️ <strong>Durability:</strong> Zero Moving Parts (Solid-State)</li>
                    <li>💾 <strong>Storage:</strong> 64GB NVMe (Immutable OS Overhead: ~4GB)</li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Section 4: Staggering Scale Calculations */}
        <section 
          id="scale" 
          className="hero-section" 
          style={{ backgroundImage: `url('/assets/Aegis%20DPP%20edge%20explore.jpg')` }}
          ref={counterRef}
        >
          <div className="content-wrapper">
            <h2 className="title" style={{ marginBottom: '8px' }}>Staggering Scale</h2>
            <div style={{ height: '40px', marginBottom: '40px' }}>
              <span key={scaleIndex} className="keyword-animate-white keyword-text">
                {scaleKeywords[scaleIndex]}
              </span>
            </div>
            <p className="subtitle" style={{ maxWidth: '800px', margin: '0 auto 40px auto' }}>
              Average payloads: Model DPP (2.5 MB) | Unit DPP (15 KB)
            </p>
            
            <div className="glass-panel" style={{ textAlign: 'center', padding: '60px 40px' }}>
              <div className="counter-label" style={{ color: 'var(--color-text-muted)', marginBottom: '16px' }}>
                {activeHardware === 'UNO_Q' ? 'UNO Q' : 'Ventuno Q'} Maximum Capacity
              </div>
              <div className="counter-value">
                {dppCount.toLocaleString()}
              </div>
              <div className="counter-label">
                Unit DPPs
              </div>
              <div style={{ marginTop: '24px', fontSize: '1.2rem', color: 'var(--color-electric-purple)' }}>
                OR {activeHardware === 'UNO_Q' ? '11,200' : '24,000'} Model DPPs
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Linked with the Stars */}
        <section 
          id="starlink" 
          className="hero-section" 
          style={{ backgroundImage: `url('/assets/aegis_vault_to_stars.png')` }}
        >
          <div className="content-wrapper">
            <h2 className="title" style={{ marginBottom: '8px' }}>Linked with the Stars</h2>
            <div style={{ height: '40px', marginBottom: '40px' }}>
              <span key={starlinkIndex} className="keyword-animate-white keyword-text">
                {starlinkKeywords[starlinkIndex]}
              </span>
            </div>
            
            <div className="glass-panel" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                When terrestrial networks fail, the Aegis Vault maintains a direct, orbital uplink via Starlink. Beaming your Digital Product Passports across the planet with unbreakable, always-on connectivity.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Live Edge Explorer Demo */}
        <section 
          id="demo" 
          className="hero-section" 
          style={{ background: 'var(--color-bg-dark)' }}
        >
          <div className="content-wrapper">
            <h2 className="title" style={{ marginBottom: '8px' }}>Backup DPP Explorer</h2>
            <div style={{ height: '40px', marginBottom: '40px' }}>
              <span key={uiIndex} className="keyword-animate-white keyword-text">
                {uiKeywords[uiIndex]}
              </span>
            </div>
            
            <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
              
              <div className="glass-panel screenshot-btn" onClick={() => setActiveScreenshot('/assets/dpp_backup.jpg')} style={{ cursor: 'pointer', padding: '10px', border: '1px solid var(--color-electric-purple)', transition: 'transform 0.3s' }}>
                <img src="/assets/dpp_backup.jpg" alt="DPP Backup View" style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
                <h4 style={{ color: 'var(--color-tron-cyan)' }}>DPP Backup View</h4>
              </div>

              <div className="glass-panel screenshot-btn" onClick={() => setActiveScreenshot('/assets/addnite_backup.jpg')} style={{ cursor: 'pointer', padding: '10px', border: '1px solid var(--color-electric-purple)', transition: 'transform 0.3s' }}>
                <img src="/assets/addnite_backup.jpg" alt="Addnite Backup" style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
                <h4 style={{ color: 'var(--color-tron-cyan)' }}>Addnite Backup</h4>
              </div>

              <div className="glass-panel screenshot-btn" onClick={() => setActiveScreenshot('/assets/crossover_backup.jpg')} style={{ cursor: 'pointer', padding: '10px', border: '1px solid var(--color-electric-purple)', transition: 'transform 0.3s' }}>
                <img src="/assets/crossover_backup.jpg" alt="Crossover Backup" style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
                <h4 style={{ color: 'var(--color-tron-cyan)' }}>Crossover Backup</h4>
              </div>

              <div className="glass-panel screenshot-btn" onClick={() => setActiveScreenshot('/assets/ecophone_backup.jpg')} style={{ cursor: 'pointer', padding: '10px', border: '1px solid var(--color-electric-purple)', transition: 'transform 0.3s' }}>
                <img src="/assets/ecophone_backup.jpg" alt="Ecophone Backup" style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
                <h4 style={{ color: 'var(--color-tron-cyan)' }}>Ecophone Backup</h4>
              </div>

              <div className="glass-panel screenshot-btn" onClick={() => setActiveScreenshot('/assets/led_display_backup.jpg')} style={{ cursor: 'pointer', padding: '10px', border: '1px solid var(--color-electric-purple)', transition: 'transform 0.3s' }}>
                <img src="/assets/led_display_backup.jpg" alt="LED Display Backup" style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
                <h4 style={{ color: 'var(--color-tron-cyan)' }}>LED Display Backup</h4>
              </div>

              <div className="glass-panel screenshot-btn" onClick={() => setActiveScreenshot('/assets/lithium_backup.jpg')} style={{ cursor: 'pointer', padding: '10px', border: '1px solid var(--color-electric-purple)', transition: 'transform 0.3s' }}>
                <img src="/assets/lithium_backup.jpg" alt="Lithium Backup" style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
                <h4 style={{ color: 'var(--color-tron-cyan)' }}>Lithium Backup</h4>
              </div>

              <div className="glass-panel screenshot-btn" onClick={() => setActiveScreenshot('/assets/tweeter_backup.jpg')} style={{ cursor: 'pointer', padding: '10px', border: '1px solid var(--color-electric-purple)', transition: 'transform 0.3s' }}>
                <img src="/assets/tweeter_backup.jpg" alt="Tweeter Backup" style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
                <h4 style={{ color: 'var(--color-tron-cyan)' }}>Tweeter Backup</h4>
              </div>

              <div className="glass-panel screenshot-btn" onClick={() => setActiveScreenshot('/assets/whisky_backup.jpg')} style={{ cursor: 'pointer', padding: '10px', border: '1px solid var(--color-electric-purple)', transition: 'transform 0.3s' }}>
                <img src="/assets/whisky_backup.jpg" alt="Whisky Macmyra Backup" style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
                <h4 style={{ color: 'var(--color-tron-cyan)' }}>Whisky Macmyra Backup</h4>
              </div>

            </div>
          </div>
        </section>
        {/* Section 7: The whatt.io Ecosystem */}
        <section 
          id="ecosystem" 
          className="hero-section" 
          style={{ background: 'linear-gradient(to bottom, var(--color-bg-dark), rgba(5,5,10,1))', borderTop: '1px solid rgba(0,255,255,0.1)' }}
        >
          <div className="content-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 className="title" style={{ marginBottom: '16px' }}>The whatt.io Ecosystem</h2>
            <p className="subtitle" style={{ maxWidth: '800px', margin: '0 auto 60px auto', fontSize: '1.2rem' }}>
              Connect the dots. The Aegis Vault operates in perfect synchronization with our live suite of applications. Mint, capture, and explore your Digital Product Passports seamlessly.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', width: '100%' }}>
              
              {/* The Playground */}
              <a href="https://whattio.app/app/5415551c-ec86-4b48-859d-16c0bdb7a469" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <div className="glass-panel" style={{ height: '100%', padding: '40px 30px', textAlign: 'center', transition: 'all 0.3s ease', cursor: 'pointer', border: '1px solid var(--color-tron-cyan)' }}>
                  <img src="/assets/playground_logo.jpg" alt="Playground Logo" style={{ height: '60px', marginBottom: '20px', borderRadius: '12px' }} />
                  <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '16px' }}>The Playground</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>Design, test, and instantly simulate your ESPR-compliant data payloads using our <strong style={{ color: 'var(--color-tron-cyan)' }}>AI Payload Generator</strong> before physical deployment.</p>

                  <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '24px' }}>
                    <img src="/assets/playground_cards.png" alt="Playground Cards" style={{ width: '45%', borderRadius: '8px', border: '1px solid var(--color-tron-cyan)', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }} />
                    <img src="/assets/playground_logo.jpg" alt="Playground Logo" style={{ width: '45%', borderRadius: '8px', border: '1px solid var(--color-tron-cyan)', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }} />
                  </div>
                </div>
              </a>

              {/* DPP Activator */}
              <a href="https://whattio.app/app/137fd6bf-3426-40e8-8489-a7e88a0eb6a2" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <div className="glass-panel" style={{ height: '100%', padding: '40px 30px', textAlign: 'center', transition: 'all 0.3s ease', cursor: 'pointer', border: '1px solid var(--color-electric-purple)' }}>
                  <img src="/assets/activator_logo.jpeg" alt="Activator Logo" style={{ height: '60px', marginBottom: '20px', borderRadius: '12px' }} />
                  <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '16px' }}>DPP Activator</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>Write and anchor immutable data directly to the physical NFC hardware tags on the production floor.</p>

                  <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '24px' }}>
                    <img src="/assets/activator_nfc.png" alt="Activator NFC" style={{ width: '45%', borderRadius: '8px', border: '1px solid var(--color-electric-purple)', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }} />
                    <img src="/assets/activator_logo.jpeg" alt="Activator Logo" style={{ width: '45%', borderRadius: '8px', border: '1px solid var(--color-electric-purple)', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }} />
                  </div>
                </div>
              </a>

              {/* DPP Capture */}
              <a href="https://whattio.app/app/59b7b993-734e-4eda-9eb0-f21a48822acb" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <div className="glass-panel" style={{ height: '100%', padding: '40px 30px', textAlign: 'center', transition: 'all 0.3s ease', cursor: 'pointer', border: '1px solid var(--color-tron-cyan)' }}>
                  <img src="/assets/capture_logo_top.jpg" alt="Capture Logo" style={{ height: '60px', marginBottom: '20px', borderRadius: '12px' }} />
                  <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '16px' }}>DPP Capture</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>Verify product authenticity, fetch repair history, and run <strong style={{ color: 'var(--color-tron-cyan)' }}>AI-driven anomaly detection</strong> on the blockchain ledger with a single tap.</p>
                  
                  <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '24px' }}>
                    <img src="/assets/capture_start.jpg" alt="Capture Start" style={{ width: '45%', borderRadius: '8px', border: '1px solid var(--color-electric-purple)', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }} />
                    <img src="/assets/capture_webhook.png" alt="Capture Webhook" style={{ width: '45%', borderRadius: '8px', border: '1px solid var(--color-electric-purple)', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }} />
                  </div>
                </div>
              </a>

            </div>
          </div>
        </section>


        {/* Screenshot Modal */}
        {activeScreenshot && (
          <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(5, 5, 10, 0.95)', backdropFilter: 'blur(10px)',
            zIndex: 1000, display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center', padding: '20px'
          }}>
            <button 
              className="btn-tron" 
              onClick={() => setActiveScreenshot(null)}
              style={{ position: 'absolute', top: '20px', right: '40px' }}
            >
              CLOSE [X]
            </button>
            <img 
              src={activeScreenshot} 
              alt="UI Screenshot"
              style={{ maxWidth: '100%', maxHeight: '90vh', borderRadius: '12px', border: '2px solid var(--color-tron-cyan)', boxShadow: '0 0 40px rgba(0,255,255,0.4)' }}
            />
          </div>
        )}

      </main>
    </>
  )
}

export default App
