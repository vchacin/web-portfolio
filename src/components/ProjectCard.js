import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, url, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt='project-img'/>
        <a className="proj-txtx" href={url} target="_blank" rel="noreferrer">
          <h4>{title}</h4>
          <span>{description}</span>
        </a>
      </div>
    </Col>
  )
}
