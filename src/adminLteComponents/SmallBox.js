const SmallBox = ({number, title, icon, color}) => {
    return ( 
        <div className={`small-box bg-${color}`}>
            <div className="inner">
                <h3>{number}</h3>

                <p>{title}</p>
                </div>
                <div className="icon">
                <i className={`ion ion-${icon}`}></i>
            </div>
        </div>
     );
}
 
export default SmallBox;