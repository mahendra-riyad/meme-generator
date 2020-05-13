import React from "react"
let saveMemes = JSON.parse(localStorage.getItem('memesData')) === null ? [] : JSON.parse(localStorage.getItem('memesData'))

function MemeCollection() {
    return ( 
        <div>
            <h1 className="allMemes"> {
                saveMemes.length > 0 ? "All Meme Collection": ""
            } </h1>
           {
               saveMemes.map((value, index) => {
                   return <div className="meme">  
                                <img key = {
                                    index
                                    } src= {
                                    value.randomImg
                                } />
                                <h2 className = "top" >{value.topText}</ h2>
                                <h2 className = "bottom" >{value.bottomText}</h2>
                        </div>
                   
               })
           }
        </div>
    )
}

export default MemeCollection