'use client'

import { useRouter } from 'next/navigation'

const services = [
  {
    title: "Construction d'immeubles",
    href: '/services#service-1',
    desc: "Conception et réalisation de bâtiments résidentiels et commerciaux aux standards internationaux.",
    icon: "🏢",
  },
  {
    title: "Vente d'appartements",
    href: '/services#service-2',
    desc: "Des appartements modernes et fonctionnels adaptés à tous les profils et budgets.",
    icon: "🏠",
  },
  {
    title: "Terrains & Lotissement",
    href: '/services#service-3',
    desc: "Vente de terrains viabilisés, aménagement foncier et lotissement en lots constructibles selon les normes urbanistiques.",
    icon: "🗺️",
  },
  {
    title: "Recherche de financement",
    href: '/services#service-4',
    desc: "Montage de dossiers et mise en relation avec les partenaires bancaires les mieux adaptés.",
    icon: "💰",
  },
  {
    title: "Encadrement fiscal",
    href: '/services#service-5',
    desc: "Accompagnement fiscal pour sécuriser et optimiser vos investissements immobiliers.",
    icon: "📄",
  },
  {
    title: "Conseil et veille juridique",
    href: '/services#service-6',
    desc: "Conseil, suivi réglementaire et veille juridique pour anticiper les risques et sécuriser vos opérations immobilières.",
    icon: "⚖️",
  },
]

export default function Services() {
  const router = useRouter()

  return (
    <section className="services-section">
      <div className="bg-shape shape-one" />
      <div className="bg-shape shape-two" />
      <div className="bg-shape shape-three" />

      <div className="glass-panel">
        <div className="services-header">
          <span>Ce que nous faisons</span>

          <h2>Nos Services</h2>

          <p>
            Des solutions immobilières complètes pour construire,
            investir et sécuriser vos projets.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <button
              key={index}
              className="service-card"
              onClick={() => router.push(service.href)}
            >
              <div className="icon-wrapper">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

              <span>Découvrir</span>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-section {
          position: relative;
          overflow: hidden;
          padding: 6rem 2rem;
          background:
            radial-gradient(circle at top left, rgba(192, 57, 43, 0.22), transparent 35%),
            radial-gradient(circle at bottom right, rgba(142, 36, 26, 0.16), transparent 35%),
            linear-gradient(135deg, #fff8f7 0%, #f9d9d5 100%);
        }

        .bg-shape {
          position: absolute;
          opacity: 0.25;
          filter: blur(12px);
          pointer-events: none;
          transform: rotate(35deg);
        }

        .shape-one {
          width: 260px;
          height: 260px;
          top: 60px;
          left: 8%;
          background: rgba(192, 57, 43, 0.20);
        }

        .shape-two {
          width: 340px;
          height: 340px;
          right: 5%;
          bottom: -80px;
          background: rgba(245, 187, 181, 0.45);
        }

        .shape-three {
          width: 180px;
          height: 180px;
          right: 28%;
          top: 90px;
          background: rgba(255, 255, 255, 0.40);
        }

        .glass-panel {
          position: relative;
          z-index: 2;
          max-width: 1120px;
          margin: 0 auto;
          padding: 4rem 2rem;

          border-radius: 12px;

          background: rgba(255, 255, 255, 0.42);

          border: 1px solid rgba(255, 255, 255, 0.55);

          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);

          box-shadow:
            0 30px 90px rgba(192, 57, 43, 0.16),
            inset 0 1px 0 rgba(255,255,255,0.5);
        }

        .services-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .services-header span {
          display: block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #c0392b;
          margin-bottom: 0.8rem;
        }

        .services-header h2 {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3.2rem);
          color: #171717;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .services-header p {
          max-width: 620px;
          margin: 1rem auto 0;
          color: #6f3b35;
          font-size: 15px;
          line-height: 1.8;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.4rem;
        }

        .service-card {
          position: relative;
          overflow: hidden;

          min-height: 260px;
          padding: 2.2rem 1.8rem;

          border-radius: 10px;

          border: 1px solid rgba(255, 255, 255, 0.6);

          background: rgba(255, 255, 255, 0.38);

          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);

          box-shadow: 0 16px 45px rgba(142, 36, 26, 0.1);

          text-align: left;
          cursor: pointer;
          transition: all 0.35s ease;
        }

        .service-card::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 5px;
          height: 100%;
          background: #c0392b;
          z-index: 1;
        }

        .service-card::after {
          content: "";
          position: absolute;

          width: 140px;
          height: 140px;

          right: -70px;
          top: -70px;

          background: rgba(192, 57, 43, 0.18);

          transform: rotate(45deg);

          transition: all 0.35s ease;
        }

        .service-card:hover {
          transform: translateY(-10px);
          background: rgba(192, 57, 43, 0.82);
          border-color: rgba(255, 255, 255, 0.45);
          box-shadow: 0 26px 80px rgba(192, 57, 43, 0.28);
        }

        .service-card:hover::after {
          transform: rotate(45deg) scale(1.45);
          background: rgba(255, 255, 255, 0.14);
        }

        .service-card > * {
          position: relative;
          z-index: 2;
        }

        .icon-wrapper {
          width: 64px;
          height: 64px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 8px;

          background: rgba(255, 255, 255, 0.7);

          border: 1px solid rgba(255, 255, 255, 0.75);

          color: #c0392b;
          font-size: 28px;

          margin-bottom: 1.6rem;

          transition: all 0.35s ease;
        }

        .service-card:hover .icon-wrapper {
          background: rgba(255, 255, 255, 0.18);
          color: #fff;
          transform: scale(1.06);
        }

        .service-card h3 {
          margin: 0 0 0.9rem;
          color: #221211;
          font-size: 16px;
          font-weight: 900;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          transition: color 0.35s ease;
        }

        .service-card p {
          margin: 0;
          color: #76524e;
          font-size: 13.5px;
          line-height: 1.75;
          transition: color 0.35s ease;
        }

        .service-card span {
          display: inline-flex;

          margin-top: 1.6rem;
          padding: 9px 18px;

          border-radius: 6px;

          border: 1px solid rgba(192, 57, 43, 0.25);

          color: #c0392b;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 2px;
          text-transform: uppercase;

          transition: all 0.35s ease;
        }

        .service-card:hover h3,
        .service-card:hover span {
          color: #fff;
        }

        .service-card:hover p {
          color: rgba(255, 255, 255, 0.82);
        }

        .service-card:hover span {
          border-color: rgba(255,255,255,0.45);
          background: rgba(255,255,255,0.12);
        }

        @media (max-width: 950px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .glass-panel {
            padding: 3.5rem 1.5rem;
          }
        }

        @media (max-width: 620px) {
          .services-section {
            padding: 4rem 1rem;
          }

          .glass-panel {
            border-radius: 10px;
            padding: 3rem 1rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .service-card {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  )
}