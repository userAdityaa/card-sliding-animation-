import './hero.css';

export default function Hero(){
    return(
        <>
            <div className='topContainer'>
                <img src={'src/assets/Horizontal-UGURUSDO-1.png'} height='50'/>
                <p>UGURUS, powered by DigitalOcean, offers elite training and mentorship for Agency Owners. Join the Agency Accelerator for free to get more leads, land high-value deals, and build recurring revenue!</p>
            </div>

            <div className='middleContainer'>
                <div className="img-section">
                    <img src={'src/assets/assertion.png'} width='650'/>
                </div>
                <div className="insideMiddle">
                    <div className="list-container">
                        <ul>
                            <li>
                                PASSKEYS
                            </li>
                            <li>
                                SECURITY
                            </li>
                            <li>
                                WEBAUTHN
                            </li>
                        </ul>
                    </div>

                    <div className="question-container">
                        <h2>Passkeys: What the Heck and Why?</h2>

                        <p>These things called passkeys sure are making the rounds these days. They were a main attraction at W3C TPAC 2022, gained support in Safari 16, are finding their way into macOS and iOS, and are slated to be the future for password managers like 1Password. They are already supported in Android, and will soon find their way into Chrome OS and Windows in […]</p>
                    </div>
                    

                    <div className="commentBox">
                        <img src={'src/assets/fc8aa639f5c8b5362773475c3734a4db.jpg'} className='profileID'/>
                        <p><b>Neal Fennimore </b><span>on Apr 12, 2023</span></p>
                    </div>
                   
                </div>
            </div>
        </>
    );
}