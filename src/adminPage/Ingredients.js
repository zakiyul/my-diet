import { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from "../adminLteComponents/Navbar";
import MainSide from "../adminLteComponents/MainSide";
import ContentHeader from "../adminLteComponents/ContentHeader";
import TableComp from "../adminLteComponents/TableComp";

const ItemPage = () => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const res = await axios.get('http://localhost:8000/api/items/')
    console.log(res.data);
    setItems(res.data)
  }

  useEffect(() => {
    getItems()
  },[])

  return (
    <div className="wrapper">
      <Navbar />
      <MainSide />
      <div className="content-wrapper">
        <ContentHeader title="Ingredients" />
        <div className="content">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-12">
                      <TableComp data={items}/>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
