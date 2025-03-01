import marker from "./assets/marker.png"

export default function Entry(props){
    return (<article className = "journal-entry">
        <img className = "main-img" src = {props.img.src} alt = {props.img.alt}/>
        <div className="content">
            <div className="first-header">
                <img src = {marker} alt = "marker"/>
                <h1 className="country-name">{props.country}</h1>
                
                <a className = "country-link" href={props.googleMapsLink} target="_blank">
                    View on Google Maps
                </a>
            </div>
            
            <h2 className = "location-name">{props.title}</h2>
            <h3 className = "date">{props.dates}</h3>
            <p>{props.text}</p>   
        </div>
        
    </article>)
}