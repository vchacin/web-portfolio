import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Well-versed in numerous programming languages including <br/> HTML5, CSS3, Less, JavaScript, ReactJs, Redux, NodeJs, Express, PostgreSQL and GraphQL.</p>
                        <iframe className="iframe" src="https://www.youtube.com/embed/FrRqouiu6jE?start=1413" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <h5>Frontend Developer</h5>
                            </div>
                            <div className="item">
                                <h5>Full Stack Developer</h5>
                            </div>
                            <div className="item">
                                <h5>Web Designer</h5>
                            </div>
                            <div className="item">
                                <h5>Solution Engineer</h5>
                            </div>
                            <div className="item">
                                <h5>Digital Commerce</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="bg-colors-left"/>
    </section>
  )
}
