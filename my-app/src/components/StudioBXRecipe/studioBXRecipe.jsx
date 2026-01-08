import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./studioBXRecipe.module.scss";
import fullLogo from "../../images/bxflo_v2_logo_full.jpg";
import {Link } from "react-router-dom"

gsap.registerPlugin(ScrollTrigger);

export default function StudioBXRecipe() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      `.${styles.title}, .${styles.subtitle}, .${styles.tagline}`
    );

    gsap.fromTo(
      elements,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: `.${styles.hero}`,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        {/* <h1 className={styles.title}> bx/flo </h1> */}
        <div className={styles.heroLogo}>
          <img src={fullLogo} alt="bx/flo logo full" />
        </div>
        <p className={styles.subtitle}>a bexi joibel castillo experience</p>

        <h2 className={styles.tagline}>
          Rooted in product engineering, guided by design intuition, elevated
          through systems‑minded strategy.
        </h2>
      </div>
              <div
          style={{
            paddingTop: "1rem",
            display: "grid",
            gap: ".5rem",
          }}
        >
 <Link to ="about"> About →</Link>
           <Link to ="projects">Projects →</Link>
        </div>
    </section>
  );
}
