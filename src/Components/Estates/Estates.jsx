import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const Estates = ({ data }) => {
  const {id,
    image_url,
    estate_title,
    segment_name,
    
    price,
    status,
    
    
    facilities,
  } = data;
  return (
    <div className="mb-10">
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p className="text-2xl font-bold">{price}</p>
         <div className="text-xl font-semibold flex">
         <p className="text-xl font-semibold">{status}</p>
          <h2 className="text-xl font-semibold">{segment_name}</h2>
         </div>
          <h2 className="card-title text-2xl font-bold">{estate_title}</h2>
          
          
          
          <hr />
         
          <p className="text-xl font-semibold">
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
