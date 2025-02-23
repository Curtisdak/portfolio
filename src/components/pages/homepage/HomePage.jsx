import { useState } from "react";
import picture01 from "../../../assets/photo01.png";
import ProjectsPage from "../ProjectsPage/Projects";
import Contact from "../ContactPage/Contact";
import { toast } from "react-toastify";
import { ImSpinner3 } from "react-icons/im";
import cv from "../../../assets/portfolio-with-my-picture.pdf";
import lettreMotivation from "../../../assets/Lettre-de-motivation-dev-alternance.pdf";
import "./HomePage.css";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const donwloadFunc = () => {
    setIsLoading(true);

    setTimeout(() => {
      const files = [
        { url: cv, name: "Curtis_CV(portfolio).pdf" },
        {
          url: lettreMotivation,
          name: "lettre-de-motivation",
        },
      ];

      const downloadPromise = files.forEach((file) => {
        return new Promise((resolve) => {
          const link = document.createElement("a");
          link.href = file.url;
          link.target = "_blank";
          link.download = file.name;

          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          resolve();
        });
      });

      Promise.all(downloadPromise).then(() => {
        const audio = new Audio("src/assets/audioNotif.mp3");
        audio.play();

        toast.success(
          "Merci d'avoir téléchargé mon CV et ma lettre de motivation !"
        );
        setIsLoading(false);
      });
    }, 2000);
  };

  return (
    <section id="homepage">
      <div className="main-info">
        <article className="little-pres">
          <p>
            Hello, I am Curtis, a passionate{" "}
            <span className="full">full stack web developer</span>. Coding makes
            me feel better!{" "}
          </p>
          <button
            className="download-btn"
            onClick={donwloadFunc}
            disabled={isLoading}
          >
            {" "}
            {isLoading ? (
              <span className="downlaoding">
                <ImSpinner3 className="spinner" /> Downloading
              </span>
            ) : (
              "Download my CV"
            )}{" "}
          </button>
        </article>

        <div className="image-container">
          <img
            src={picture01}
            alt=""
            onClick={() => {
              toast.success(
                "Feel free to contact me, I'm currently looking for apprenticeship"
              );
            }}
          />
          <div className="lil-info">discover me</div>
        </div>
      </div>

      <ProjectsPage />
      <Contact />
    </section>
  );
};

export default HomePage;
