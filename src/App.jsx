import Header from "./Header.jsx"
import Entry from "./Entry.jsx"
import data from "./data.js"
import './App.css'
export default function App(){
  const entryElements = data.map(function(entry){
    return (
      <Entry 
        key = {entry.id}
        // img = {entry.img} 
        // title = {entry.title} 
        // country = {entry.title} 
        // googleMapsLink = {entry.googleMapsLink} 
        // dates = {entry.dates} 
        // text = {entry.text}
        {...entry}
        />
    )
    
  }) 
  return (
    <>
      <Header/>
      {entryElements}
  
    </>
  )
}