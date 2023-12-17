import CardTricks from './CardTricks';
import './footer.css';


export default function CardHolder(){
    return(
        <div className='footer-container'>
            <div className="text-container">
                <h1>Popular <br/>this <br/>month</h1>
                <p>Powered by</p>
                <a className='digital-oceans'>Digital Ocean</a>
            </div>  

            <div className='card-component'>
                <CardTricks/>
            </div>

            <div className="line">
                
            </div>
        </div>
    )
}