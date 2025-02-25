import marker from "./assets/marker.png"

export default function Entry(){
    return (<article className = "journal-entry">
        <img className = "main-img" src = "https://scrimba.com/links/travel-journal-japan-image-url" alt = "A scenic view of Japan"/>
        <div className="content">
            <div className="first-header">
                <img src = {marker} alt = "marker"/>
                <h1 className="country-name">JAPAN</h1>
                
                <a className = "country-link" href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" target="_blank">
                    View on Google Maps
                </a>
            </div>
            
            <h2 className = "location-name">Mount Fuji</h2>
            <h3 className = "date">12 Jan, 2021 - 24 Jan, 2021</h3>
            <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>   
        </div>
        
    </article>)
}