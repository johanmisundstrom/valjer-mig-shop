import './OmOss.css'

function OmOss() {
  return (
    <div className="om-oss">
      <div className="om-oss-hero">
        <h1>Vi tror på dig</h1>
        <p>Väljer Mig är för dig som väljer sig själv, varje dag.</p>
      </div>

      <div className="om-oss-content">
        <div className="om-oss-block">
          <h2>Vår story</h2>
          <p>Vi startade Väljer Mig för att vi tröttnade på produkter som inte speglade hur vi faktiskt känner oss. Stark, rolig, självständig — och ibland lite trött. Våra produkter är för dig som känner igen dig i det.</p>
        </div>

        <div className="om-oss-block">
          <h2>Våra produkter</h2>
          <p>Allt vi säljer är print-on-demand — det betyder att inget tillverkas förrän du beställer. Bra för miljön, bra för dig. Leverans inom EU.</p>
        </div>

        <div className="om-oss-values">
          <div className="om-oss-value">
            <span>💛</span>
            <h3>Äkthet</h3>
            <p>Budskap som faktiskt betyder något</p>
          </div>
          <div className="om-oss-value">
            <span>🌱</span>
            <h3>Hållbarhet</h3>
            <p>Tillverkas när du beställer, inget svinn</p>
          </div>
          <div className="om-oss-value">
            <span>✊</span>
            <h3>Styrka</h3>
            <p>För dig som väljer dig själv</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OmOss