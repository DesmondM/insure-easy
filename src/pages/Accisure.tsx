import React from "react";

const Accisure = () => {
  return (
    <>
      <div className="">
        <img
          className="preloader__image"
          src="assets/images/loader.png"
          alt=""
        />
      </div>
      <div className="page-wrapper">
        <header className="main-header">
          <div className="topbar">
            <div className="container">
              <div className="topbar__left">
                <div className="topbar__social">
                  <a href="#" className="fab fa-facebook-square"></a>
                  <a href="#" className="fab fa-linkedin"></a>
                  <a href="#" className="fab fa-instagram"></a>
                </div>
                <a href="#">Login</a>
                <a href="news.html">Company Profile</a>
              </div>
              <div className="topbar__right">
                <a href="#">
                  <i className="pylon-icon-email1"></i>info@insureeasy.co.za
                </a>
                <a href="#">
                  <i className="pylon-icon-clock2"></i>Mon - Sat 8:00 AM - 5:00
                  PM
                </a>
              </div>
            </div>
          </div>
          <nav className="main-menu">
            <div className="container">
              <div className="logo-box">
                <a href="index.html" aria-label="logo image">
                  <img src="assets/images/logo-dark.png" width="155" alt="" />
                </a>
                <span className="fa fa-bars mobile-nav__toggler"></span>
              </div>
              <ul className="main-menu__list">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li className="dropdown">
                  <a href="services.html">Service</a>
                  <ul>
                    <li>
                      <a href="healthcare.html">Health Care</a>
                    </li>
                    <li>
                      <a href="funeral insurance.html">Funeral Cover</a>
                    </li>
                    <li>
                      <a href="accisure.html">Accisure</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>

                <li>
                  <a href="#"></a>
                </li>
              </ul>

              <div className="main-header__info">
                <div className="main-header__info-phone">
                  <i className="pylon-icon-tech-support"></i>
                  <div className="main-header__info-phone-content">
                    <span>Call Anytime</span>
                    <h3>
                      <a href="tel:+19812310000">079 103 4638</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="stricky-header stricked-menu main-menu">
          <div className="sticky-header__content"></div>
        </div>
        <section className="page-header">
          <div
            className="page-header__bg"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/page-header-bg-1-1.jpg);",
            }}
          ></div>

          <div className="container">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>/</li>
              <li>
                <span>ACCISURE</span>
              </li>
            </ul>
            <h2>ACCISURE</h2>
          </div>
        </section>

        <section className="service-details">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="service-sidebar">
                  <div className="service-sidebar__category">
                    <ul className="list-unstyled serivces-widget-list">
                      <li className="pyloan-service-list-arrow">
                        <a href="#">
                          Health Insurance
                          <i className="fas fa-chevron-right"></i>
                        </a>
                      </li>

                      <li className="pyloan-service-list-arrow">
                        <a href="#">
                          Funeral Cover<i className="fas fa-chevron-right"></i>
                        </a>
                      </li>

                      <li className="pyloan-service-list-arrow">
                        <a href="#">
                          Accisure<i className="fas fa-chevron-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="document-widget-post">
                    <h3 className="blog-sidebar__box-title">Download</h3>
                    <div className="pylon-links">
                      <a href="#" target="_blank">
                        <i className="far fa-file-alt"></i>Product
                        Brochure.pdf&nbsp; (1.04 MB)
                      </a>
                    </div>
                  </div>

                  <div className="service-sidebar__call">
                    <div
                      className="service-sidebar__call-bg"
                      style={{
                        backgroundImage:
                          "url(assets/images/services/service-sidebar-1-1.jpg)",
                      }}
                    ></div>
                    <i className="pylon-icon-tech-support"></i>
                    <h3>
                      <a href="tel:079 103 4638<">079 103 4638</a>
                    </h3>
                    <div className="pylon-mail">
                      <a href="mailto:info@insureeasy">info@insureeasy.co.za</a>
                    </div>
                    <p>
                      We are here to help our customer any time. You can call on
                      24/7 To Answer Your Question.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="service-details__content">
                  <div className="service-details__image">
                    <img
                      src="assets/images/services/service-d-1-c.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <h3>ACCISURE FOR BUSINESS</h3>
                  <p>
                    As a membership programme for employers, Accisure enables
                    businesses to provide private medical care to their workers
                    should they get injured at work or while commuting. We give
                    you peace of mind that your workers, especially those
                    without medical aid, will get the assistance and medical
                    care that they deserve.
                  </p>
                  <p>
                    In addition, we assist you to ensure that your business is
                    legally compliant and that all administration, including
                    obtaining all necessary documents, is taken care of.
                  </p>

                  <div className="service-details__loan">
                    <div className="block-title">
                      <h4>The ACCISURE Benefits:</h4>
                    </div>
                    <p>
                      With Accisure Road you ensure that your workers are not
                      left to fend for themselves when injured in a road
                      accident. This includes incidents that occur during
                      working hours as a driver or passenger, or after working
                      hours while commuting.
                    </p>
                  </div>

                  <div className="faq-one faq-one__faq-page py-0 ">
                    <ul
                      id="accordion"
                      className="mb-0 wow fadeInUp list-unstyled"
                      data-wow-duration="1500ms"
                    >
                      <li className="active">
                        <h2 className="para-title active">
                          <span
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <i className="far fa-minus"></i>
                            ACCISURE ROAD
                          </span>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="collapse show"
                          role="button"
                          aria-labelledby="collapseTwo"
                          data-parent="#accordion"
                        >
                          <p>
                            Collect all required accident information needed to
                            be admitted to a private network hospital.
                          </p>
                        </div>
                      </li>
                      <li>
                        <h2 className="para-title">
                          <span
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <i className="far fa-plus"></i>
                            ACCISURE WORKPLACE
                          </span>
                        </h2>
                        <div
                          id="collapseOne"
                          className="collapse"
                          aria-labelledby="collapseOne"
                          data-parent="#accordion"
                        >
                          <p>
                            With Accisure Workplace we consult to your business,
                            ensuring that you are legally compliant with the
                            Compensation for Occupational Injuries and Diseases
                            (COID) Act and your workers are registered. Should
                            an accident occur, your workers get the best
                            possible private healthcare and business
                            interruption is minimised.
                          </p>
                        </div>
                      </li>
                      <li>
                        <h2 className="para-title">
                          <span
                            className="collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            role="button"
                            aria-controls="collapseThree"
                          >
                            <i className="far fa-plus"></i>
                            WORKPLACE INJURY MANAGEMENT
                          </span>
                        </h2>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="collapseThree"
                          data-parent="#accordion"
                        >
                          <p>
                            In the event of a workplace or vehicle accident, we
                            provide full support for your worker’s medical care,
                            where needed, and ensure that their individual case
                            is managed by a service provider, up to full
                            recovery.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <h3>ACCISURE FOR ME</h3>
                  <p>
                    With an Accisure membership, you get the private medical
                    care you deserve if you’re a passenger injured in a motor
                    vehicle accident. After an accident Accisure will manage the
                    administration to ensure you get admitted to a private
                    hospital, where healthcare providers will give you all the
                    treatment needed for your injuries. This includes all
                    hospitalisation, surgery and rehabilitation if needed.
                  </p>
                  <p>
                    All medical costs will be paid by the Road Accident Fund
                    (RAF) directly to the service providers. This means you can
                    focus on your recovery, without worrying about medical costs
                    or unnecessary time away from work or your family.
                  </p>

                  <div className="service-details__loan">
                    <div className="block-title">
                      <h4>Benefits:</h4>
                    </div>
                    <p>
                      There is no joining fee and access to private care is
                      immediate. This includes incidents that occur during
                      working hours as a driver or passenger, or after working
                      hours while commuting.
                    </p>
                  </div>

                  <div className="faq-one faq-one__faq-page py-0 ">
                    <ul
                      id="accordion"
                      className="mb-0 wow fadeInUp list-unstyled"
                      data-wow-duration="1500ms"
                    >
                      <li className="active">
                        <h2 className="para-title active">
                          <span
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <i className="far fa-minus"></i>
                            Access
                          </span>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="collapse show"
                          role="button"
                          aria-labelledby="collapseTwo"
                          data-parent="#accordion"
                        >
                          <p>Access to our 24/7 contact centre.</p>
                        </div>
                      </li>
                      <li>
                        <h2 className="para-title">
                          <span
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <i className="far fa-plus"></i>
                            Case Administrator
                          </span>
                        </h2>
                        <div
                          id="collapseOne"
                          className="collapse"
                          aria-labelledby="collapseOne"
                          data-parent="#accordion"
                        >
                          <p>
                            A trained case administrator will assess your
                            medical needs and put you in contact with a private
                            network hospital.
                          </p>
                        </div>
                      </li>
                      <li>
                        <h2 className="para-title">
                          <span
                            className="collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            role="button"
                            aria-controls="collapseThree"
                          >
                            <i className="far fa-plus"></i>
                            Quality Service
                          </span>
                        </h2>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="collapseThree"
                          data-parent="#accordion"
                        >
                          <p>
                            All required information will be collected on your
                            behalf and supplied to the hospital where you will
                            be admitted.
                          </p>
                        </div>
                      </li>
                      <li>
                        <h2 className="para-title">
                          <span
                            className="collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            role="button"
                            aria-controls="collapseThree"
                          >
                            <i className="far fa-plus"></i>
                            Private Treatment
                          </span>
                        </h2>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="collapseThree"
                          data-parent="#accordion"
                        >
                          <p>
                            You will receive all private treatment for the
                            injuries sustained, up to full recovery as allowed
                            by the RAF Act.
                          </p>
                        </div>
                      </li>
                      <li>
                        <h2 className="para-title">
                          <span
                            className="collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            role="button"
                            aria-controls="collapseThree"
                          >
                            <i className="far fa-plus"></i>
                            Medical Costs Recovered
                          </span>
                        </h2>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="collapseThree"
                          data-parent="#accordion"
                        >
                          <p>
                            All medical costs will be recovered from the RAF by
                            the service providers.
                          </p>
                        </div>
                      </li>
                      <li>
                        <h2 className="para-title">
                          <span
                            className="collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            role="button"
                            aria-controls="collapseThree"
                          >
                            <i className="far fa-plus"></i>
                            Peace of Mind
                          </span>
                        </h2>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="collapseThree"
                          data-parent="#accordion"
                        >
                          <p>
                            Peace of mind that you do not have to worry about
                            medical bills but can focus on your recovery and
                            getting back to work and your family.
                          </p>
                        </div>
                      </li>
                      <li>
                        <h2 className="para-title">
                          <span
                            className="collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            role="button"
                            aria-controls="collapseThree"
                          >
                            <i className="far fa-plus"></i>
                            No Joining Fees
                          </span>
                        </h2>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="collapseThree"
                          data-parent="#accordion"
                        >
                          <p>
                            Immediate access to private medical care and no
                            joining fees.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget footer-widget__about">
                  <a href="index.html">
                    <img
                      src="assets/images/logo-light.png"
                      width="155"
                      alt=""
                    />
                  </a>
                  <p>
                    Welcome to Insure Easy we are committed to excellence in
                    insurance products that are innovative with the best for you
                    as an individual or as a business.
                  </p>
                  <div className="footer-widget__about-phone">
                    <i className="pylon-icon-tech-support"></i>
                    <div className="footer-widget__about-phone-content">
                      <span>Call Anytime</span>
                      <h3>
                        <a href="tel:+27 79 103 4638">+27 79 103 4638</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="footer-widget footer-widget__link">
                  <h3 className="footer-widget__title">Explore</h3>
                  <ul className="list-unstyled footer-widget__link-list">
                    <li>
                      <a href="#">
                        <i className="fa fa-arrow-right"></i>Home
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-arrow-right"></i>About
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-arrow-right"></i>Our Services
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-arrow-right"></i>Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget footer-widget__link">
                  <h3 className="footer-widget__title">Downloads</h3>
                  <ul className="list-unstyled footer-widget__link-list">
                    <li>
                      <a href="#">
                        <i className="fa fa-arrow-right"></i>Value Plus Plan
                        Hospital
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-arrow-right"></i>Value Plus Plan
                        Senior
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-arrow-right"></i>Funeral Cover
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-arrow-right"></i>Accisure
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="footer-widget footer-widget__contact">
                  <h3>Contact</h3>
                  <ul className="list-unstyled footer-widget__contact-list">
                    <li>
                      <a href="mailto:info@insureeasy.co.za">
                        <i className="pylon-icon-email1"></i>
                        info@insureeasy.co.za
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="pylon-icon-clock2"></i>Mon - Sat 8:00 AM -
                        5:00 PM
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="pylon-icon-pin1"></i>138 Bellares Drive,
                        Northriding. 2152
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="bottom-footer">
          <div className="container">
            <p>© InsureEasy by 13arts</p>
            <div className="bottom-footer__social">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-linkedin"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>

        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler"></span>
          <div className="logo-box">
            <a href="index.html" aria-label="logo image">
              <img src="assets/images/logo-light.png" width="155" alt="" />
            </a>
          </div>

          <div className="mobile-nav__container"></div>

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="pylon-icon-email1"></i>
              <a href="mailto:info@insureeasy.co.za">info@insureeasy.co.za</a>
            </li>
            <li>
              <i className="pylon-icon-telephone"></i>
              <a href="tel:+27 79 103 4638">+27 79 103 4638</a>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-linkedin"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
          </div>
        </div>
      </div>

      <div className="search-popup">
        <div className="search-popup__overlay search-toggler"></div>

        <div className="search-popup__content">
          <form action="#">
            <label htmlFor="search" className="sr-only">
              search here
            </label>
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="thm-btn"
            >
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>

      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <i className="fa fa-angle-up"></i>
      </a>

      <script src="assets/js/jquery-3.5.1.min.js"></script>
      <script src="assets/js/bootstrap.bundle.min.js"></script>
      <script src="assets/js/swiper.min.js"></script>
      <script src="assets/js/jquery.ajaxchimp.min.js"></script>
      <script src="assets/js/jquery.magnific-popup.min.js"></script>
      <script src="assets/js/jquery.validate.min.js"></script>
      <script src="assets/js/bootstrap-select.min.js"></script>
      <script src="assets/js/wow.js"></script>
      <script src="assets/js/odometer.min.js"></script>
      <script src="assets/js/jquery.appear.min.js"></script>
      <script src="assets/js/wNumb.min.js"></script>
      <script src="assets/js/nouislider.min.js"></script>

      <script src="assets/js/theme.js"></script>
    </>
  );
};

export default Accisure;
