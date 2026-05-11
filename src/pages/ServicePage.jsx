import styles from "./ServicePage.module.css";

function Services() {
  return (
    <div className={styles.servicePage}>

      {/* Heading Section */}
      <div className={styles.container5}>
        <h1 className={styles.text}>IT Services</h1>
      </div>

      {/* Services Cards */}
      <div className={styles.imgs}>

        <div className={styles.slides}>
          <img
            src="https://gratech.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-image1.f023a761.jpg&w=750&q=75"
            alt="Database Security"
            className={styles.img}
          />

          <div className={styles.text5}>
            <h1>Database Security</h1>

            <p>
              Pellentesque nec the condimentum nec lorem nulla augue est
              ultricies ac iaculis.
            </p>
          </div>
        </div>

        <div className={styles.slides}>
          <img
            src="https://gratech.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice-image2.07756d6b.jpg&w=750&q=75"
            alt="IT Consultancy"
            className={styles.img}
          />

          <div className={styles.text5}>
            <h1>IT Consultancy</h1>

            <p>
              Pellentesque nec the condimentum nec lorem nulla augue est
              ultricies ac iaculis.
            </p>
          </div>
        </div>

        <div className={styles.slides}>
          <img
            src="https://gratech.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice-image3.5ccfa425.jpg&w=750&q=75"
            alt="App Development"
            className={styles.img}
          />

          <div className={styles.text5}>
            <h1>APP Development</h1>

            <p>
              Pellentesque nec the condimentum nec lorem nulla augue est
              ultricies ac iaculis.
            </p>
          </div>
        </div>

        <div className={styles.slides}>
          <img
            src="https://gratech.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice-image4.8b3e022f.jpg&w=750&q=75"
            alt="Cyber Security"
            className={styles.img}
          />

          <div className={styles.text5}>
            <h1>Cyber Security</h1>

            <p>
              Pellentesque nec the condimentum nec lorem nulla augue est
              ultricies ac iaculis.
            </p>
          </div>
        </div>

        <div className={styles.slides}>
          <img
            src="https://gratech.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice-image5.a64ef26b.jpg&w=750&q=75"
            alt="UI UX"
            className={styles.img}
          />

          <div className={styles.text5}>
            <h1>UI/UX Design</h1>

            <p>
              Pellentesque nec the condimentum nec lorem nulla augue est
              ultricies ac iaculis.
            </p>
          </div>
        </div>

        <div className={styles.slides}>
          <img
            src="https://gratech.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice-image6.62cd89ef.jpg&w=750&q=75"
            alt="IT Management"
            className={styles.img}
          />

          <div className={styles.text5}>
            <h1>IT Management</h1>

            <p>
              Pellentesque nec the condimentum nec lorem nulla augue est
              ultricies ac iaculis.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Services;