import React from "react";
import { FaReact } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Project = () => {
  return (
    <div name="project">
      <h1 className="py-4 text-3xl font-bold text-center text-white">
        Experience
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid rgb(255, 255, 255)",
            color: "#fff",
          }}
          date="Feb 2023 - July 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaReact />}
        >
          <div className="text-black">
            <h3 className="text-xl font-bold">Magang</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Infinite Learning
            </h4>
            <p className="pb-3 ">
              Saya magang menjadi web developer selama 4 bulan di Infinite
              Learning, dan bersama team kami mengerjakan makro project dengan
              output frontend, dan massive project dengan output frontend dan
              backend.
            </p>
          </div>
          <img src="./inpinit.jpg" alt="sdf" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid rgb(255, 255, 255)",
            color: "#fff",
          }}
          date="Mei 2023 - Jun 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaReact />}
        >
          <div className="text-black">
            <h3 className="text-xl font-bold">Meddy</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Massive Project
            </h4>
            <p>On Going ...</p>
            <a
              href="https://redhelp.my.id"
              target={"_blank"}
              className="underline text-primary hover:text-violet-600"
            >
              Lihat
            </a>
          </div>
          <img src="./inpinit.jpg" alt="sdf" className="pt-3" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid rgb(255, 255, 255)",
            color: "#fff",
          }}
          date="Apr 2023 - Apr 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaReact />}
        >
          <div className="text-black">
            <h3 className="text-xl font-bold">RedHelp</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Makro Project
            </h4>
            <p>
              Ini adalah salah satu aplikasi hasil dari magang saya yaitu
              RedHelp, yang dimana dengan goals Front-end pada project kali ini
              role saya dalam team yaitu sebagai coder. Aplikasi ini menggunakan
              reactJS, tailwindcss,
            </p>
            <a
              href="https://redhelp.my.id"
              target={"_blank"}
              className="underline text-primary hover:text-violet-600"
            >
              Lihat
            </a>
          </div>
          <img src="./mobile.png" alt="sdf" className="pt-3" />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid rgb(255, 255, 255)",
            color: "#fff",
          }}
          date="Nov 2022 - Nov 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaReact />}
        >
          <div className="text-black">
            <h3 className="text-xl font-bold">Al-Quran Digital</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Personal Project
            </h4>
            <p>
              Al-Quran digital adalah aplikasi front-end yang dimana saya
              menggunakan public API untuk contentnya.
            </p>
            <a
              href="https://al-quran-84180.web.app/"
              target={"_blank"}
              className="underline text-primary hover:text-violet-600 "
            >
              Lihat
            </a>
          </div>
          <img src="./alquran.png" alt="sdf" className="pt-3" />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid rgb(255, 255, 255)",
            color: "#fff",
          }}
          date="Feb 2023 - July 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaReact />}
        >
          <div className="text-black">
            <h3 className="text-xl font-bold">ChatFlow</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Personal Project
            </h4>
            <p>
              Aplikasi ini saya buat dengan tujuan belajar slicing dari figma.
              Project kali ini saya menggunakan reactJS, tailwindcss, dan
              daisyUi.
            </p>
            <a
              href="https://slicing-chatflow.web.app/"
              target={"_blank"}
              className="underline text-primary hover:text-violet-600"
            >
              Lihat
            </a>
          </div>
          <img src="./chatflow.png" alt="sdf" className="pt-3 " />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid rgb(255, 255, 255)",
            color: "#fff",
          }}
          date="Oct 2022 - Oct 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaReact />}
        >
          <div className="text-black">
            <h3 className="text-xl font-bold">Undangan Online</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Personal Project
            </h4>
            <p>
              Project kali ini saya menggunakan reactJS, tailwindcss, dan
              daisyUi. Dengan tujuan belajar membuat website, ini merupakan
              project pertama saya.
            </p>
            <a
              href="https://undangan-74771.web.app/home"
              target={"_blank"}
              className="underline text-primary hover:text-violet-600"
            >
              Lihat
            </a>
          </div>
          <img src="./wedding.png" alt="sdf" className="w-40 mx-auto h-72" />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Project;
