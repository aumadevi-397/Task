import styles from "./AboutPage.module.css";

function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.overlay}>
          <h1>About Us</h1>
          <p>We Provide Best IT Solutions For Your Business</p>
        </div>
      </div>

      {/* Second Section */}
      <div className={styles.ss}>
        
        <div>
          <img
            src="https://gratech.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-two-image1.d7b88924.jpg&w=828&q=75"
            alt="about"
            id={styles.photo2}
          />
        </div>

        <div id={styles.s}>
          <h5>WHO WE ARE</h5>

          <h1>
            Ensuring Your Success Through Reliable IT Solutions
          </h1>

          <p>
            Aonsectetur adipiscing elit aenean scelerisque augue vitae
            consequat aisque eget congue velit in cursus sodales the turpis
            euismod quis sapien euismod quis sapien the condimentum nec lorem
            nulla augue.
          </p>

          {/* Field Sets */}
          <div className={styles.fieldContainer}>

            <fieldset className={styles.fieldBox}>
              <legend>Our Mission</legend>
              <p>
                Deliver high-quality IT services and innovative digital
                solutions for businesses worldwide.
              </p>
            </fieldset>

            <fieldset className={styles.fieldBox}>
              <legend>Our Vision</legend>
              <p>
                Building smart technology solutions that help companies grow
                faster and smarter.
              </p>
            </fieldset>

          </div>

          <button className={styles.btn}>
            Explore More →
          </button>

        </div>

      </div>

      {/* Technology Section */}
      <div className={styles.hh}>

        <h1 id={styles.heading}>
          Enhance and Pioneer Using Technology Trends
        </h1>

        <div className={styles.yy}>

          <div>
            <fieldset className={styles.box1}>
              <legend>
                <img
                  src="https://img.icons8.com/?size=80&id=50085&format=png"
                  alt="logo"
                  id={styles.icon}
                />
                <p id={styles.t1}>Website</p>
              </legend>
            </fieldset>
          </div>

          <div>
            <fieldset className={styles.box1}>
              <legend>
                <img
                  src="https://img.icons8.com/?size=96&id=eRCmkbZpnSxP&format=png"
                  alt="logo"
                  id={styles.icon}
                />
                <p id={styles.t1}>Android</p>
              </legend>
            </fieldset>
          </div>

          <div>
            <fieldset className={styles.box1}>
              <legend>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/14775/14775846.png"
                  alt="logo"
                  id={styles.icon}
                />
                <p id={styles.t1}>IOS</p>
              </legend>
            </fieldset>
          </div>

          <div>
            <fieldset className={styles.box1}>
              <legend>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/18329/18329531.png"
                  alt="logo"
                  id={styles.icon}
                />
                <p id={styles.t1}>Watch</p>
              </legend>
            </fieldset>
          </div>

          <div>
            <fieldset className={styles.box1}>
              <legend>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3357/3357597.png"
                  alt="logo"
                  id={styles.icon}
                />
                <p id={styles.t1}>TV</p>
              </legend>
            </fieldset>
          </div>

        </div>

      </div>

      {/* Third Section */}
      <div className={styles.third}>

        <div>
          <h5>FROM OUR CASE STUDIES</h5>
          <h1>We Delivered Best Solution</h1>
        </div>

        <div>
          <button type="button" className={styles.caseBtn}>
            View All Cases ---&gt;
          </button>
        </div>

      </div>

      {/* Slider */}
      <div className={styles.slide}>
        <div className={styles.slideTrack}>

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSUktuE8vPPd2FVSaLcGZEfgYgbwJ1I6r0KA&s" alt="img1"/>
             <div>
            <h5>Technology</h5>
            <h1>Platform Integration</h1>
          </div>

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj6AxCV_zVjZ_hYr2M8K-D4D69DusdtSiP_A&s"alt="img2"/>
         <div>
            <h5>Solution</h5>
            <h1>web Development</h1>
          </div>

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzKDfknUUtcZVTMEAIGRJQxdokrAMwLnniQ&s" alt="img3" />
         
          <div>
            <h5>Security</h5>
            <h1>Network Security</h1>
          </div>

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSUktuE8vPPd2FVSaLcGZEfgYgbwJ1I6r0KA&s" alt="img4" />
            <div>
            <h5>Solution</h5>
            <h1>IT management</h1>
          </div>

        </div>
      </div>

    </div>
  );
}

export default AboutPage;