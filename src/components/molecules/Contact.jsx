import React from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../../styles";

const Contact = () => {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dv1xmev",
        "template_rqqdj0h",
        form.current,
        "UH7kQ9tv5_PF3RpL6"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Pesan Berhasil Terkirim");
          e.target.nama_lengkap.value = "";
          e.target.email.value = "";
          e.target.subject.value = "";
          e.target.message.value = "";
        },
        (error) => {
          console.log(error.text);
          alert("Pesan Gagal Dikirim");
          e.target.nama_lengkap.value = "";
          e.target.email.value = "";
          e.target.subject.value = "";
          e.target.message.value = "";
        }
      );
  };

  return (
    <div
      name="contact"
      className="flex items-center justify-center min-h-screen text-white"
    >
      <div className="flex flex-col w-full h-full max-w-6xl gap-10 px-4 py-8 xl:px-0">
        <h1 className={`${styles.sectionHeadText} text-center`}>
          Hubungi Saya
        </h1>
        <div className="flex flex-col items-center w-full md:flex-row gap-14">
          <div className="w-full h-full md:w-1/2 max-w-[700px] bg-primary p-8 lg:p-8 shadow-2xl border">
            <h1 className="mb-8 text-3xl font-bold text-center text-white">
              Berikan Pesan
            </h1>
            <form
              ref={form}
              onSubmit={sendEmail}
              autoComplete="off"
              className="flex flex-col gap-3"
            >
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="nama_lengkap"
                  className="block text-base font-medium text-white "
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama_lengkap"
                  id="nama_lengkap"
                  placeholder="Masukkan Nama Lengkap"
                  className="w-full border border-[#e0e0e0] bg-white py-2 px-3 text-xs md:text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md invalid:text-red-500 dark:text-black"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-white "
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="contoh@domain.com"
                  className="w-full border border-[#e0e0e0] bg-white py-2 px-3 text-xs md:text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md invalid:text-red-500 dark:text-black"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="subject"
                  className="block text-base font-medium text-white "
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Masukkan subject"
                  className="w-full border border-[#e0e0e0] bg-white py-2 px-3 text-xs md:text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md dark:text-black"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="message"
                  className="block text-base font-medium text-white "
                >
                  Pesan
                </label>
                <textarea
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Masukkan Pesan"
                  className="w-full resize-none border border-[#e0e0e0] bg-white py-2 px-3 text-xs md:text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md dark:text-black"
                  required
                ></textarea>
              </div>
              <div className="w-full">
                <button className="w-full mt-2 btn btn--light">
                  <span className="btn__inner">
                    <span className="btn__slide"></span>
                    <span className="text-base btn__content">Submit</span>
                  </span>
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col items-center justify-center w-full h-full gap-5 md:w-1/2">
            <h1 className="mb-10 text-xl font-bold text-center md:text-3xl">
              My Social Media
            </h1>
            <div className="flex flex-row gap-10 mb-36 ">
              <div className="flex items-center justify-center">
                <a
                  href="https://www.linkedin.com/in/yandra-muslim-496822244/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
                    className="w-12 h-12 transition-all duration-300 hover:scale-125"
                  />
                </a>
              </div>
              <div className="flex items-center justify-center">
                <a
                  href="https://mail.google.com/mail/?view=cm&to=yandrayt1@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                    className="w-12 h-12 transition-all duration-300 hover:scale-125"
                  />
                </a>
              </div>

              <div className="flex items-center justify-center">
                <a
                  href="https://wa.me/0895611861777"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174879.png"
                    className="w-12 h-12 transition-all duration-300 hover:scale-125"
                  />
                </a>
              </div>
              <div className="flex items-center justify-center">
                <a
                  href="https://github.com/01011001andra?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    className="w-12 h-12 transition-all duration-300 rounded-full hover:scale-125"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/yandramuslim/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://parspng.com/wp-content/uploads/2021/09/instagram-6-600x600.png"
                    className="transition-all duration-300 w-14 h-14 hover:scale-125"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
