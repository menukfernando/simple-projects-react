import { useState } from "react"
import data from "./data";
import './Accordian.css'


export default function Accordian() {
  const [selected, setSelected] = useState(null);

  function handleClick(getId){
    setSelected(getId === selected ? null : getId)
  }

  return (
    <>
        <div className="wrapper">
            <div className="accordian">
               {data && data.length > 0 ?
               data.map(DataItem => (
                <div className="item" onClick={() => handleClick(DataItem.id)}>
                    <div className="title" >
                        <h3>{DataItem.title}</h3>
                        <span>+</span>
                    </div>
                    {selected === DataItem.id ?
                    <div className="description">
                        <p>{DataItem.description}</p>
                    </div>
                    : null}
                </div>
               ))
               : <div>there is no data</div>}
            </div>
        </div>
    </>
  )
}
