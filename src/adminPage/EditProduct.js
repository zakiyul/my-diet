import { useParams } from 'react-router-dom';

import Navbar from "../adminLteComponents/Navbar";
import MainSide from "../adminLteComponents/MainSide";
import ContentHeader from "../adminLteComponents/ContentHeader";
import FormEditProduct from '../adminLteComponents/FormEditProduct';

const EditProduct = () => {
    const { productId } = useParams();
    return ( 
        <div className="wrapper">
            <Navbar />
            <MainSide />
            <div className="content-wrapper">
                <ContentHeader title="Edit Product" />
                <div className="content">
                    <div className="container-fluid">
                        <div className='card p-5'>
                            <div className="row">
                                <div className="col-md-12">
                                    <FormEditProduct product_id={productId} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditProduct;