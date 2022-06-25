import { Link } from 'react-router-dom'

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

const CardComp = () => {
    return ( 
        <div className="zk-card">
            <img src="https://i.ibb.co/K6FFt7s/obat-1.png" alt="obat kurus" />
            <div className="zk-card-body">
                <h3><Link to="/">Obat diet paling keren</Link></h3>
                <strong>Rp. 234.000</strong> <br />
                <Star banyak={4} color={warnaBintang} />
            </div>
        </div>
     );
}
 
export default CardComp;