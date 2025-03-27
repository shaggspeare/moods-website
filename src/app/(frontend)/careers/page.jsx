import { getSortedPostsData } from "../../../lib/posts.js";
import Layouts from '../../../layouts/Layouts.js'
import PageBanner from '../../../components/PageBanner.js'
import CareersBannerSlider from '../../../components/sliders/CareersBannerSlider.js'
import LatestPostsSlider from '../../../components/sliders/LatestPosts.jsx'
import { WorkWithUsSection } from '../../../components/sections/WorkWithUs.jsx'

const Page = (posts) => {
  return (
    <Layouts>
      <PageBanner pageName={"Page"} pageTitle={"Page"} />
      {/* careers */}
      <section className="mil-careers mil-p-120-90">
        <div className="container">
          <div className="row justify-content-between mil-mb-90">
            <div className="col-xl-6">
              <h3 className="mil-mb-30">
                Inspire and Get Inspired by <br />
                <span className="mil-accent">Professional</span> Experts
              </h3>
            </div>
            <div className="col-xl-4">
              <p>
                It uses a dictionary of over{" "}
                <span className="mil-accent">200 Latin words</span>, combined
                with a handful of model sentence structures, to generate Lorem
                Ipsum which looks reasonable.
              </p>
            </div>
          </div>
          <ul className="mil-vacancies-frame">
            <li className="mil-vacancy">
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-vacancy-head mil-mb-15">
                    <span className="mil-badge">Full Time</span>
                    <span className="mil-text-sm mil-dark">New York</span>
                  </div>
                  <h4>UI and Web Developer</h4>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-adaptive-right">
                    <a href="#." className="mil-button mil-border">
                      <span>Apply Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="mil-vacancy">
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-vacancy-head mil-mb-15">
                    <span className="mil-badge">Full Time</span>
                    <span className="mil-text-sm mil-dark">Miami</span>
                  </div>
                  <h4>App Developer</h4>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-adaptive-right">
                    <a href="#." className="mil-button mil-border">
                      <span>Apply Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="mil-vacancy">
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-vacancy-head mil-mb-15">
                    <span className="mil-badge mil-badge-dark">Remote</span>
                    <span className="mil-text-sm mil-dark">Whole world</span>
                  </div>
                  <h4>Sell Agent</h4>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-adaptive-right">
                    <a href="#." className="mil-button mil-border">
                      <span>Apply Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="mil-vacancy">
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-vacancy-head mil-mb-15">
                    <span className="mil-badge">Full Time</span>
                    <span className="mil-text-sm mil-dark">Toronto</span>
                  </div>
                  <h4>UI/UX Designer</h4>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-adaptive-right">
                    <a href="#." className="mil-button mil-border">
                      <span>Apply Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* careers end */}
      <WorkWithUsSection />
      {/* counters */}
      <section className="mil-counters mil-deep-bg mil-p-120-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <h2 className="mil-mb-20">20</h2>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p>Years of Experience In The IT Industry</p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <h2 className="mil-mb-20">705</h2>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p>Satisfied Clients We Have Served Globally</p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <h2 className="mil-mb-20">280</h2>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p>Recognitions Over Two Decades</p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <h2 className="mil-mb-20">72</h2>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p>Awards &amp; Certifications Of Our Work</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* counters end */}
      {/* banners slider */}
      <CareersBannerSlider />
      {/* banners slider end */}
      {/* partners */}
      <div className="mil-partners mil-p-90-60">
        <div className="container">
          <div className="mil-partners-frame">
            <a href="#.">
              <img src="img/partners/1.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/2.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/3.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/4.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/5.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/6.png" alt="partner" />
            </a>
          </div>
        </div>
      </div>
      {/* partners end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* blog */}
      <LatestPostsSlider posts={posts} />
    </Layouts>
  );
};
export default Page;

async function getData() {
  // Make sure these functions are either async or wrapped with Promise.resolve if they're synchronous
  const posts = await getSortedPostsData();

  return {
    posts,
  };
}