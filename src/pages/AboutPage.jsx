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

          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNIS-LuKkXfdvq3QCeI1jHkPQorU9-vBKppA&s" alt="img1"/>
           <div className={styles.texts}>
           <h5>solution</h5>
            <h2>IT Management</h2>
            </div>
          </div>

          <div>
          <img src="https://media.istockphoto.com/id/2210688897/photo/ux-ui-design-web-and-application-user-design-concepts-web-design-application-design-user.webp?a=1&b=1&s=612x612&w=0&k=20&c=3vTDBUL24n5mH1Hpu3kf9uVqjItR6a2lboOWV_VFQlE="alt="img2"/>
          <div className={styles.texts}>
           <h5>solution</h5>
            <h2>Web development</h2>
            </div>
          </div>

          <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4yqz0d-49ue2-a7unzKWQbcKtO0va8KWlU4jZPETYcuGcTJ_TMwg-3t4&s" alt="img3" />
           <div className={styles.texts}>
           <h5>Technology</h5>
            <h2>Platform Integration</h2>
            </div>
          </div>

          <div>
          <img src="data:image/jpeg;base64,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" alt="img4" />
           <div className={styles.texts}>
           <h5>solution</h5>
            <h2>IT Management</h2>
            </div>
        
          </div>

          <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSUktuE8vPPd2FVSaLcGZEfgYgbwJ1I6r0KA&s" alt="img4" />
          <div className={styles.texts}>
             <h5>Security </h5>
            <h2>Network Security</h2>
        
          </div>
          
          </div>

         </div>
        </div>
        

    </div>
  );
}

export default AboutPage;