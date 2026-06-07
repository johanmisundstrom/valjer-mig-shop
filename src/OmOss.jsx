import './OmOss.css'

// om oss-sida med info om butiken
function OmOss() {
  return (
    <div className="om-oss">
      <div className="om-oss-hero">
        <h1>Väljer Mig är enkelt.</h1>
        <p>Produkter för dig som redan vet vem du är och inte är rädd för att visa det.</p>
      </div>

      <div className="om-oss-content">
        <div className="om-oss-block">
          <p>Ingen stor story. Inga kompromisser.</p><p>Bara saker vi faktiskt velat ha själva.</p>
        </div>

        <div className="om-oss-block">
          <h2>Hur det fungerar</h2>
          <p>Allt tillverkas när du beställer och inget ligger på lager, inget slösas. Print-on-demand betyder att din t-shirt trycks just för dig, och skickas direkt. Leverans inom EU.</p>
        </div>
      </div>
    </div>
  )
}

export default OmOss
