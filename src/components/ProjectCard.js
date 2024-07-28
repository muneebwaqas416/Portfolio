import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl , link }) => (
  link ? (
    <Col size={12} sm={6} md={4}>
    <a href={link} className="cursor-pointer" target="_blank" rel="noopener noreferrer">
      <div className="proj-imgbx cursor-pointer">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </a>
    </Col>
  ) : (
    <Col size={12} sm={6} md={4}>
    <div className="proj-imgbx cursor-pointer">
      <img src={imgUrl} alt={title} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
    </Col>
  )
);