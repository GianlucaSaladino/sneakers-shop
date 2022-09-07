import { useEffect, useState } from "react";
import getFetch from "../../helper/helper";
import Item from "../Item/Item";
import "./ItemList.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ItemList = () => {
  const { productBrand } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getFetch.then((data) => {
      if (!productBrand) {
        setData(data);
      } else {
        const filteredData = data.filter((item) => item.type === productBrand);
        setData(filteredData);
      }
    });
  }, [productBrand]);

  return (
    <div className="grid-product">
      {data.map((data) => (
        <Link
          style={{ textDecoration: "none" }}
          key={data.id}
          to={`/item/${data.id}`}
        >
          <Item data={data} />
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
