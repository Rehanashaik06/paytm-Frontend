import React from "react";
import "./PromoSection.css";

const slimOffers = [
  {
    id: 1,
    title: "Do Mobile Recharge and Win ₹100",
    subtitle: "cashback. Promo: TAKEITALL",
    cta: "Recharge Now →",
    logo: "https://assetscdn1.paytm.com/images/catalog/view_item/3164447/36506041816304405.png",
  },
  {
    id: 2,
    title: "Broadband Recharge",
    subtitle: "Bill due? Pay now & get rewarded",
    cta: "Pay Now →",
    logo: "https://assetscdn1.paytm.com/images/catalog/view_item/3164448/36506041816304406.png",
  },
];

const features = [
  {
    id: 1,
    title: "Swipe left to keep it hush",
    desc: "Hide your past payments with a left swipe",
    img: "https://assetscdn1.paytm.com/images/catalog/view_item/3152572/36557909703275529.png",
    icon: "https://assetscdn1.paytm.com/images/catalog/view_item/3152572/36557909703275529.png",
    bg: "#fff4de",
  },
  {
    id: 2,
    title: "Expense tracking made smarter!",
    desc: "Now, download your statement in Excel/PDF format",
    img: "https://assetscdn1.paytm.com/images/catalog/view_item/3149453/36545083091598667.png",
    icon: "https://assetscdn1.paytm.com/images/catalog/view_item/3149453/36545083091598667.png",
    bg: "#eaf4ff",
  },
  {
    id: 3,
    title: "We do the math, you do the spending.",
    desc: "Check total balance of all your linked bank accounts",
    img: "https://assetscdn1.paytm.com/images/catalog/view_item/3152576/36557912676437583.png",
    icon: "https://assetscdn1.paytm.com/images/catalog/view_item/3152576/36557912676437583.png",
    bg: "#e9f5ff",
  },
];

export default function PromoSection() {
  return (
    <section className="promo-section">

      <div className="promo-container">

        {/* SLIM OFFER ROW */}

        <div className="slim-row">

          {slimOffers.map((o) => (

            <div className="slim-card" key={o.id} role="article">

              <div className="slim-left">

                <div className="slim-icon" aria-hidden>

                  <img src={o.logo} alt="" />

                </div>

                <div className="slim-text">

                  <div className="slim-title">
                    {o.title}
                  </div>

                  <div className="slim-sub">
                    {o.subtitle}
                  </div>

                </div>

              </div>

              <div className="slim-cta">

                <button className="btn-outline">
                  {o.cta}
                </button>

              </div>

            </div>

          ))}

        </div>

        {/* FEATURE CARDS */}

        <div className="feature-row">

          {features.map((f) => (

            <article
              className="feature-card"
              key={f.id}
              style={{ background: f.bg }}
            >

              <div className="feature-body">

                <div className="feature-text">

                  <h3>{f.title}</h3>

                  <p>{f.desc}</p>

                  <div style={{ marginTop: 12 }}>

                    <button className="btn-primary">
                      Download App Now →
                    </button>

                  </div>

                </div>

                <div className="feature-icon" aria-hidden>

                  <img src={f.icon} alt="" />

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* OFFERS SECTION */}

        <div className="offers-section">

          <h2 className="offers-heading">
            Check it out!!!
          </h2>

          <div className="offers-grid">

            {/* CARD 1 */}

            <div className="offer-card">

              <h3>Get Cashback on UPI</h3>

              <p>
                Earn cashback rewards on every UPI payment.
              </p>

              <button
                className="offer-btn"
                onClick={() => alert("Explore Offers")}
              >
                Explore Offers
              </button>

            </div>

            {/* CARD 2 */}

            <div className="offer-card">

              <h3>Flat 50% OFF on Flights</h3>

              <p>
                Book flights now and save more on travel.
              </p>

              <button
                className="offer-btn"
                onClick={() => alert("Book Flights")}
              >
                Book Flights
              </button>

            </div>

            {/* CARD 3 */}

            <div className="offer-card">

              <h3>Movie Tickets Available</h3>

              <p>
                Book movie tickets instantly with special discounts.
              </p>

              <button
                className="offer-btn"
                onClick={() => alert("Movie Ticket Booking Started")}
              >
                Book Now
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
