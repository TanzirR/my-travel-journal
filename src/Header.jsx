import globe from './assets/globe.png';
export default function Header(){
    return(
        <header className = "header-sec">
            <img src = {globe} alt = "image icon"/>
            <h1>my travel journal.</h1>
        </header>
        
    )
}