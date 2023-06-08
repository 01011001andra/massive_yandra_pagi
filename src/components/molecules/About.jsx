import React from "react";
import { styles } from "../../styles";
import { SkillCard } from "../atoms";

const About = () => {
  const contentCard = [
    {
      title: "HTML",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
    },
    {
      title: "CSS",
      image:
        "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-opencode-css-8.png",
    },
    {
      title: "JAVASCRIPT",
      image:
        "https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png",
    },
    {
      title: "TAILWINDCSS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    },
    {
      title: "REACTJS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
      title: "Redux Toolkit",
      image:
        "https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/redux-icon.png",
    },
  ];

  return (
    <div name="about" className="w-full min-h-screen px-4">
      <div className="w-full max-w-6xl mx-auto 2xl:max-w-7xl">
        <h1 className={`${styles.sectionHeadText}`}>ABOUT ME</h1>
        <p className={`${styles.sectionSubText}`}>
          Halo! Saya Yandra Muslim, seorang mahasiswa berusia 20 tahun yang
          tengah menempuh studi dalam bidang Teknik Informatika di Politeknik
          Negeri Batam. Untuk saat ini saya memfokuskan diri saya untuk belajar
          web developer tepatnya frontend developer, yang dimana skill yang
          telah saya kuasai yaitu:
        </p>
        <div className="flex flex-wrap justify-center gap-5 py-5">
          {contentCard.map((item, index) => {
            return (
              <SkillCard title={item.title} index={index} image={item.image} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
