import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import Faq from "@/components/Faq";
import Counter from "@/components/Counter";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";

const ADDRESS = "Plot No- 154/184, Balmiki Chaupal, Near Chota MCD School, Pooth Khurd, New Delhi 110039";
const MAP_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&t=m&z=10&output=embed&iwloc=near`;

const whyUsFeatures = [
  {
    title: "Advanced Technology & Automation",
    desc: "Experience high-speed production with minimal wastage",
    variant: "yellow",
  },
  { title: "Customized Solutions", desc: "Machines tailored to your specific business needs", variant: "dark" },
  { title: "Reliable & Durable", desc: "Designed for long-term performance and low maintenance", variant: "dark" },
];

const categoriesRow1 = [
  { img: "/mineralWater.jpg", w: 1024, h: 683, title: "Mineral Water Plant", cover: true },
  { img: "/soft-drink.jpg", w: 1000, h: 563, title: "Soft Drink Plant", cover: true, tall: true },
  { img: "/fruit-juice-plant.webp", w: 500, h: 281, title: "Fruit Juice Plant", tall: true },
];

const categoriesRow2 = [
  { img: "/juice.jpg", w: 1024, h: 683, title: "Juice Processing Plant" },
  { img: "/Vpack-Machines-5-removebg-preview.png", w: 500, h: 500, title: "PET Blow Moulding Machine" },
];

const steps = ["Requirement Analysis", "Solution Design", "Manufacturing & Testing", "Installation & Support"];

const offers = [
  {
    icon: "machine",
    iconClass: "pad-10 raw",
    title: "Advanced Machinery",
    desc: "High-speed, precision-engineered equipment",
  },
  { icon: "gear", iconClass: "raw", title: "Customized Solutions", desc: "Tailored setups based on your business needs" },
  {
    icon: "arrowAltCircleRight",
    iconClass: "orange",
    title: "Turnkey Projects",
    desc: "End-to-end solutions from planning to execution",
  },
  { icon: "gears", iconClass: "raw", title: "Installation & Support", desc: "Installation, training, and after-sales service" },
];

const contactCards = [
  { icon: "phoneAlt", title: "Call Now", desc: "+91-9135636541" },
  { icon: "envelope", title: "Email", desc: "suman@vermaprocesspack.com" },
  { icon: "phoneAlt", title: "Location", desc: ADDRESS },
];

const quickLinks = [
  { label: "Home" },
  { label: "About Us", href: "#about" },
  { label: "Why Us", href: "#whyus" },
  { label: "Our Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
];

function IconBox({ icon, title, desc, className = "", iconClass = "" }) {
  return (
    <div className={`ibox ${className}`}>
      <div className="ibox-icon">
        <Icon name={icon} className={`ico ${iconClass}`} />
      </div>
      <div className="ibox-content">
        <h3 className="ibox-title">
          <span>{title}</span>
        </h3>
        {desc && <p className="ibox-desc">{desc}</p>}
      </div>
    </div>
  );
}

function WhyUs({ id, image, imageWidth, imageHeight, className, imgClass }) {
  return (
    <section className={`sec whyus ${className}`} id={id}>
      <div className="sec-inner row">
        <Reveal className="col-box w-50" animation="fadeInUp">
          <img
            src={image}
            width={imageWidth}
            height={imageHeight}
            alt=""
            className={`whyus-img ${imgClass}`}
          />
        </Reveal>
        <Reveal className="col-box w-50 whyus-content" animation="fadeInUp">
          <h2 className="sub-title">WHY CHOOSE US</h2>
          <h2 className="sec-title">
            Built for Performance.<span className="hl">Trusted </span> for Results.
          </h2>
          <div className="whyus-text">
            <p>
              We deliver high-performance machinery designed for efficiency, reliability, and long-term value. With
              advanced technology, customized solutions, and a strong focus on quality, we help businesses streamline
              production and reduce operational costs.
            </p>
          </div>
          {whyUsFeatures.map((f) => (
            <IconBox
              key={f.title}
              icon="checkCircle"
              title={f.title}
              desc={f.desc}
              className={`feature-box ${f.variant}`}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function CategoryCard({ img, w, h, title, cover, tall }) {
  return (
    <Reveal className="cat-card" animation="fadeInUp">
      <div className={`cat-img${cover ? " cover" : ""}`}>
        <img src={img} width={w} height={h} alt="" />
      </div>
      <div className="cat-title">
        <h2 className={tall ? "tall" : undefined}>{title}</h2>
      </div>
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
    
      <Header />

      <main id="main">
        {/* Hero banner */}
        <div className="hero hide-mobile">
          <img src="/banner.jpeg" width={2560} height={1299} alt="" />
        </div>
        <div className="hero show-mobile">
          <img src="/MobileBanner.jpg-scaled.jpeg" width={1440} height={3000} alt="" />
        </div>

        {/* About */}
        <section className="sec about bg-grey" id="about">
          <div className="sec-inner row">
            <Reveal className="col-box w-50" animation="fadeInLeft">
              <h2 className="sub-title">ABOUT US</h2>
              <h2 className="sec-title">
                Engineering <span className="hl">Excellence. </span> <span className="hl">Delivering </span>
                Performance.
              </h2>
              <div>
                <p>
                  At <strong>Vpack Machine Pvt. Ltd.</strong>, we don’t just manufacture machines—we{" "}
                  <strong>revolutionize industries</strong>. From{" "}
                  <strong>
                    mineral water plants to CSD plants, beer plants, and pharmaceutical &amp; cosmetics machinery
                  </strong>
                  , our cutting-edge solutions power businesses worldwide.
                </p>
                <p>
                  Headquartered in <strong>Bawana, Delhi</strong>, we have built a reputation for{" "}
                  <strong>precision engineering, innovation, and quality</strong>. Every machine we craft is a{" "}
                  <strong>fusion of technology, efficiency, and durability</strong>, backed by{" "}
                  <strong>ISO certification</strong>.
                </p>
              </div>
            </Reveal>
            <Reveal className="col-box w-50" animation="fadeInRight">
              <img src="/iamge1.png" width={1024} height={683} alt="" className="about-img" />
            </Reveal>
          </div>
        </section>

        {/* Why choose us */}
        <WhyUs
          id="whyus"
          className="hide-mobile"
          image="/Vpack.png"
          imageWidth={1024}
          imageHeight={1024}
          imgClass="desktop-img"
        />
        <WhyUs className="show-mobile" image="/mobileVeiw.png" imageWidth={768} imageHeight={1376} />

        {/* Categories */}
        <section className="sec services-head bg-grey" id="services">
          <div className="sec-inner col">
            <Reveal as="h2" className="sub-title center" animation="fadeInUp">
              LET&apos;S CHOOSE
            </Reveal>
            <Reveal as="h2" className="sec-title center" animation="fadeInUp">
              Choose your <span className="hl">Preferred </span> Category
            </Reveal>
          </div>
        </section>

        <section className="sec cat-row bg-grey">
          <div className="sec-inner row">
            {categoriesRow1.map((c) => (
              <CategoryCard key={c.title} {...c} />
            ))}
          </div>
        </section>

        <section className="sec cat-row second bg-grey">
          <div className="sec-inner row">
            {categoriesRow2.map((c) => (
              <CategoryCard key={c.title} {...c} />
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="sec how">
          <div className="sec-inner row">
            <Reveal className="col-box w-50" animation="fadeInLeft">
              <h2 className="sub-title">HOW IT WORKS</h2>
              <h2 className="sec-title">
                Delivering <span className="hl">Excellence</span> in Every Step
              </h2>
              <div>
                <p>
                  We follow a structured and efficient process to deliver the right machinery solutions for your
                  business, ensuring quality, performance, and long-term reliability at every step.
                </p>
              </div>
              <div className="grid-2">
                {steps.map((s) => (
                  <IconBox key={s} icon="arrowAltCircleRight" title={s} className="step-box" />
                ))}
              </div>
            </Reveal>
            <Reveal className="col-box w-50" animation="fadeInRight">
              <div className="how-img-wrap">
                <img src="/1.jpg" width={500} height={500} alt="" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* What we offer */}
        <section className="sec offer bg-grey">
          <div className="sec-inner col">
            <Reveal as="h2" className="sub-title center" animation="fadeInUp">
              WHAT WE OFFER
            </Reveal>
            <Reveal className="center" animation="fadeInUp">
              <p>
                We provide complete, high-performance machinery solutions designed to streamline your production,
                enhance efficiency, and ensure consistent output. Our solutions are built with advanced technology to
                support long-term growth and reliability.
              </p>
            </Reveal>
            <Reveal className="grid-2" animation="fadeInUp">
              {offers.map((o) => (
                <IconBox
                  key={o.title}
                  icon={o.icon}
                  iconClass={o.iconClass}
                  title={o.title}
                  desc={o.desc}
                  className="offer-box"
                />
              ))}
            </Reveal>
          </div>
        </section>

        {/* Counters */}
        <Reveal as="section" className="sec counters bg-grey" animation="fadeIn">
          <div className="sec-inner row">
            <div className="counter-box">
              <Counter title="Machines Installed" end={1000} />
            </div>
            <div className="counter-box">
              <Counter title="Happy Clients" end={250} />
            </div>
            <div className="counter-box">
              <Counter title="Years of Industry Experience" end={10} small />
            </div>
          </div>
        </Reveal>

        {/* FAQ */}
        <section className="sec faq bg-grey">
          <div className="sec-inner row">
            <div className="col-box faq-left">
              <div className="faq-wrap">
                <div className="faq-inner">
                  <Faq />
                </div>
              </div>
            </div>
            <div className="col-box faq-right">
              <h2 className="sub-title"> Frequently Asked Questions❓</h2>
              <div>
                <p>
                  Find quick answers about our machinery, services, and support. We cover everything from industries
                  we serve to customization, installation, and reliability—helping you make informed decisions with
                  confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact cards */}
        <section className="sec contact-cards" id="contact">
          <div className="sec-inner row">
            {contactCards.map((c) => (
              <div className="contact-card" key={c.title}>
                <IconBox icon={c.icon} title={c.title} desc={c.desc} className="contact-box" />
              </div>
            ))}
          </div>
        </section>

        {/* Form + map */}
        <section className="sec form-map bg-grey">
          <div className="sec-inner row">
            <div className="col-box w-50 form-col">
              <ContactForm />
            </div>
            <div className="col-box w-50 map-col">
              <iframe src={MAP_SRC} title={ADDRESS} aria-label={ADDRESS} loading="lazy" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer">
        <div className="sec footer-main">
          <div className="sec-inner row">
            <div className="col-box footer-col">
              <div className="footer-logo">
                <img src="/logo.png" width={363} height={153} alt="" />
              </div>
              <div>
                <p>Revolutionizing Industries with Innovative Machinery and Unmatched Engineering Excellence.</p>
              </div>
            </div>

            <div className="col-box footer-col pad">
              <h2 className="footer-heading">Quick Links</h2>
              <ul className="footer-list links">
                {quickLinks.map((l) => {
                  const inner = (
                    <>
                      <Icon name="arrowRight" className="list-icon" />
                      <span className="list-text">{l.label}</span>
                    </>
                  );
                  return <li key={l.label}>{l.href ? <a href={l.href}>{inner}</a> : inner}</li>;
                })}
              </ul>
            </div>

            <div className="col-box footer-col pad">
              <h2 className="footer-heading">Contact</h2>
              <ul className="footer-list contact">
                <li>
                  <a href="mailto:suman@vermaprocesspack.com">
                    <Icon name="envelope" className="list-icon" />
                    <span className="list-text">suman@vermaprocesspack.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+919135636541">
                    <Icon name="phoneSquareAlt" className="list-icon" />
                    <span className="list-text">+91 9135636541</span>
                  </a>
                </li>
                <li>
                  <Icon name="mapMarkerAlt" className="list-icon" />
                  <span className="list-text">{ADDRESS}</span>
                </li>
              </ul>
            </div>

            <div className="col-box footer-col pad last footer-map">
              <iframe src={MAP_SRC} title={ADDRESS} aria-label={ADDRESS} loading="lazy" />
            </div>
          </div>
        </div>

        <div className="sec copyright">
          <div className="sec-inner col">
            <div className="copyright-text">
              Copyright ©2026 – Mineral Water Filling Machines | Powered by{" "}
              <a href="https://www.cybertricksmedia.com/" target="_blank" rel="noopener noreferrer" className="footer-link">
                Cybertricksmedia Pvt Ltd
              </a>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </>
  );
}
