import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Estates = ({ data }) => {
  const {id,
    image_url,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = data;
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p>{price}</p>
          <p>{status}</p>
          <h2>{segment_name}</h2>
          <h2 className="card-title">{estate_title}</h2>
          
          <p>{description}</p>
          <p>{location}</p>
          <hr />
          <p>{area}</p>
          <p>
            {
                facilities.map(facility => <li key={facility.id}>{facility}</li>)
            }
          </p>


          <div className="card-actions justify-center">
            <Link to={`/estates/${id}`}><button className="btn btn-primary">View Property</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estates;

Estates.propTypes = {
  data: PropTypes.object,
};
