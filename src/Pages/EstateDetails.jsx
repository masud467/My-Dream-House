import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {  useParams } from "react-router-dom";
import useEstateData from "../Components/Hooks/useEstateData";
import { FaLocationDot } from "react-icons/fa6";

const EstateDetails = () => {
    
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();
  const idInt = parseInt(id)
  // eslint-disable-next-line no-unused-vars
  const { data, loading } = useEstateData();
  // const idInt = parseInt(id)
  console.log(id, singleData);

  useEffect(() => {
    if (data) {
      const singleData = data.find((item) => item.id == idInt);
      console.log(singleData);
      setSingleData(singleData);
    }
  }, [data, idInt]);

  const {
    image_url,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
  } = singleData || {};
  return (
    <div className="mb-10">
      <Helmet>
        <title>My Dream House | details</title>
      </Helmet>

      <div className="card card-compact  bg-base-100 shadow-xl ">
        <figure>
          <img src={image_url}  />
        </figure>
        <div className="card-body">
          <p className="text-2xl font-bold">{price}</p>
          <p className="text-xl font-semibold">{status}</p>
          <h2 className="text-xl font-semibold">{segment_name}</h2>
          <h2 className="card-title text-2xl font-bold">{estate_title}</h2>

          <p className="text-xl font-semibold">{description}</p>
          <div className="flex items-center text-xl font-semibold gap-1">
            <span><FaLocationDot></FaLocationDot></span>
          <p className="">{location}</p>
          </div>
          <hr />
          <p className="text-xl font-semibold">{area}</p>
          <div>
          {/* <p>
            {
                facilities.map(facility => <li key={facility.id}>{facility}</li>)
            }
          </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
