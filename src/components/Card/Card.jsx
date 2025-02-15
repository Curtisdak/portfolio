import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "./Card.css";

const Card = ({ project }) => {
  const [isClose, setIsClose] = useState(false);
  const[count,setCount]= useState(0)

  return (
    <div id="card">
      <div className="m-container">
      <div className="image-container">
        {project.pictures[count] ? (
          <img
            src={project.pictures[count]}
            alt=""
            onMouseOver={()=> { count < 1 ? setCount(count+1) : setCount(count-1)} }

            onClick={() => {
              toast.info("Click on Discover to see the Project"),
                {
                  position: "top-center",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                
                  theme:"dark",
                };
            }}
          />
        ) : (
          <h1>Soon</h1>
        )}
      </div>
      <div className="info">
        <h3 className="title">{project.name}</h3>

        <p className="detail">{project.detail}</p>
        <div className="techno">
          {project.techno.map((tech, index) => (
            <span key={index} className="tech">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* <p className="status">{project.done ? "Completed" : "In Progress"}</p> */}
      {/* <p className="responsive"> */}
      {/* {project.responsive ? "Responsive" : "Not Responsive"} */}
      {/* </p> */}

      <a href={project.discover} target="_blank" rel="noopener noreferrer">
        Discover
      </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    techno: PropTypes.arrayOf(PropTypes.string).isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    discover: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    responsive: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Card;
