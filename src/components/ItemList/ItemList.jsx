import { useEffect, useState } from "react";
import getFetch from "../../helper/helper";
import Item from "../Item/Item";
import "./ItemList.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ItemList = () => {
  const { productType } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getFetch.then((data) => {
      if (!productType) {
        setData(data);
      } else {
        const filteredData = data.filter((item) => item.type === productType);
        setData(filteredData);
      }
    });
  }, [productType]);

  return (
    <>
      <h1>Productos:</h1>

      <div className="grid-product">
        {data.map((data) => (
          <Link key={data.id} to={`/item/${data.id}`}>
            <Item data={data} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ItemList;
