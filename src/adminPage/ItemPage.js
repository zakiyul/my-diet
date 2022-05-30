import Navbar from "../adminLteComponents/Navbar";
import MainSide from "../adminLteComponents/MainSide";
import ContentHeader from "../adminLteComponents/ContentHeader";
import TableComp from "../adminLteComponents/TableComp";

const DATA = [
    {id:1, title:'obat pelangsin otot'},
    {id:2, title:'obat pelangsing super'},
    {id:3, title:'obat pelangsing kw'},
    {id:4, title:'ms slim'}
]

const ItemPage = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <MainSide />
      <div className="content-wrapper">
        <ContentHeader />
        <div className="content">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-12">
                      <TableComp data={DATA}/>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
