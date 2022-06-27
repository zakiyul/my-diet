import { Link } from 'react-router-dom'
import numeral from 'numeral';

const warnaBintang = '#FFB715';

const Star = ({color, banyak}) => {
    const arrBanyak = [];
    for (let index = 0; index < banyak; index++) {
        arrBanyak.push(index)
    }
    return (
        <div>
            {arrBanyak.map(() => <i class="bi bi-star-fill" style={{color: color}}></i>)}
        </div>
    )
};

const CardComp = ({ data }) => {
    return ( 
        <div className="zk-card">
            <img src={`http://localhost:8000${data.image}`} alt={data.nam} />
            <div className="zk-card-body">
                <h3><Link to="/">{data.nama}</Link></h3>
                <strong>Rp. {numeral(data.harga).format('0,0')}</strong> <br />
                <Star banyak={data.rating} color={warnaBintang} />
            </div>
        </div>
     );
}
 
export default CardComp;