import styles from "./HomePage.module.css";

function Home({ setPages }) {
  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <div className={styles.container2}>

        <h1 id={styles.text1}>Excellent IT Solution 
          <br></br>for your Success</h1>
      </div>

      {/* Services */}
      <div className={styles.part2}>
        <h1>Excellent IT Services</h1>

        <div className={styles.second}>
          <div className={styles.card}>
            <img
              src="https://gratech.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice-icon1.e001350e.png&w=96&q=75"
              alt="logo"
            />
            <h2>IT Management</h2>
            <p>
              Pellentesque nec the condimentum nec lorem nulla augue est
              ultricies.
            </p>
          </div>

          <div className={styles.card}>
            <img
              src="https://gratech.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice-icon2.8b1f51c4.png&w=96&q=75"
              alt="logo"
            />
            <h2>Cyber Security</h2>
            <p>
              Pellentesque nec the condimentum nec lorem nulla augue est
              ultricies.
            </p>
          </div>

          <div className={styles.card}>
            <img
              src="https://gratech.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice-icon3.c6fa3ffc.png&w=96&q=75"
              alt="logo"
            />
            <h2>Web Development</h2>
            <p>
              Pellentesque nec the condimentum nec lorem nulla augue est
              ultricies.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className={styles.section3}>
        <div>
          <img
            src="https://gratech.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-image1.e4f3003e.jpg&w=828&q=75"
            alt="about"
            className={styles.photo}
          />
        </div>

        <div className={styles.text}>
          <h4>ABOUT GRATECH</h4>
          <h1>We Strive to Offer Intelligent Business Solutions</h1>

          <p>
            Aonsectetur adipiscing elit aenean scelerisque augue vitae
            consequat aisque eget congue velit.
          </p>

          <div className={styles.small}>
            <div className={styles.rr}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOAj-FDEMNYcxoPy61J9FPHrgQVEuAzWwsVdUGyGQOC9um0X5nuZ6c7lY&s"
                alt="service"
                className={styles.photo3}
              />

              <div>
                <h2>Best Services</h2>
                <p>Scelerisque augue consequat sodales</p>
              </div>
            </div>

            <div className={styles.rr}>
              <img
                src="https://t4.ftcdn.net/jpg/13/51/78/01/240_F_1351780192_PPXQXrLeWNXQIHEgIJpglFUKRY9mk1Bc.jpg"
                alt="support"
                className={styles.photo3}
              />

              <div>
                <h2>24/7 Call Support</h2>
                <p>Scelerisque augue consequat sodales</p>
              </div>
            </div>
          </div>

          <button onClick={() => setPages("about")}>
            Explore More →
          </button>
        </div>
      </div>

      {/* Counter */}
      <div className={styles.count}>
        <div className={styles.count1}>
          <div className={styles.vv}>
            <h1>6561+</h1>
            <p>Satisfied Clients</p>
          </div>

          <div className={styles.vv}>
            <h1>600+</h1>
            <p>Finished Projects</p>
          </div>

          <div className={styles.vv}>
            <h1>250+</h1>
            <p>Skilled Experts</p>
          </div>

          <div className={styles.vv}>
            <h1>590+</h1>
            <p>Media Posts</p>
          </div>
        </div>
      </div>

      {/* Work Process */}
      <div className={styles.f1}>
        <div className={styles.f2}>
          <h5>WORK PROCESS</h5>
          <h1>Our Development Process</h1>
        </div>

        <div className={styles.ff}>
          <div className={styles.fff}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaYZ-6E83LtNCSkUFiixcvLjXJoqnbftcDg&s"
              alt=""
              className={styles.image}
            />

            <div>
              <h2>Define Requirements</h2>
              <p>
                In a free hour, when our power of choice is untrammelled.
              </p>
            </div>
          </div>

          <div className={styles.fff}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLwJyMZEiY5MKXuyBYZgW90YSYra-54IVScQ&s"
              alt=""
              className={styles.image}
            />

            <div>
              <h2>Design & Prototyping</h2>
              <p>
                In a free hour, when our power of choice is untrammelled.
              </p>
            </div>
          </div>

          <div className={styles.fff}>
            <img
              src="https://thumbs.dreamstime.com/b/creative-business-concept-light-bulb-idea-glowing-above-laptop-showing-financial-graphs-data-analytics-modern-office-432112544.jpg"
              alt=""
              className={styles.image}
            />

            <div>
              <h2>Final Solution</h2>
              <p>
                In a free hour, when our power of choice is untrammelled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;