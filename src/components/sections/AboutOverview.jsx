import Link from 'next/link.js'

export const AboutOverview = () => (
  <section className="mil-deep-bg mil-p-120-60">
    {/*<div className="mil-deco" style={{ top: 0, left: "35%" }} />*/}
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-5 mil-mb-60">
          <div className="mil-circle-illustration">
            <div className="mil-circle-bg" />
            <div className="mil-image-frame">
              <img src="img/faces/t3.png" alt="img" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">Firm Overview</span>
          <h2 className="mil-mb-50">
            We Specialize in <br />
            <span className="mil-accent">Transforming Your Idea</span> or Business in The Current
            <br /> Digital Era.
          </h2>
          <p className="mil-mb-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            Risus commodo viverra maecenas accumsan lacus vel facilisis.{' '}
          </p>
          <div className="row align-items-end">
            <div className="col-xl-7">
              <ul className="mil-check-icon-list mil-mb-60">
                <li>
                  <img src="img/icons/sm/12.svg" alt="icon" />
                  <span className="mil-dark">Quis suspendisse ultrices gravida.</span>
                </li>
                <li>
                  <img src="img/icons/sm/12.svg" alt="icon" />
                  <span className="mil-dark">Consectetur adipiscing elit.</span>
                </li>
                <li>
                  <img src="img/icons/sm/12.svg" alt="icon" />
                  <span className="mil-dark">Quis suspendisse ultrices gravida.</span>
                </li>
                <li>
                  <img src="img/icons/sm/12.svg" alt="icon" />
                  <span className="mil-dark">Consectetur adipiscing elit.</span>
                </li>
              </ul>
            </div>
            <div className="col-xl-5">
              <Link href="team-single" className="mil-post-sm mil-mb-60">
                <div className="mil-cover-frame">
                  <img src="img/faces/1.jpg" alt="cover" />
                </div>
                <div className="mil-description">
                  <h4 className="mil-font-3 mil-accent">Jane Meldrum</h4>
                  <p className="mil-text-sm">CEO &amp; Co-Founder</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
