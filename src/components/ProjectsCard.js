import { Col,Container} from 'react-bootstrap';


export const ProjectsCard = ({ title, description, imgUrl, url }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt={title} />
                <div className="proj-txtx">
                    <h4>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            {title}
                        </a>
                    </h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    );
}