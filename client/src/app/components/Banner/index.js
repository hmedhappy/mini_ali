import React from 'react' ;
import Carousel from "react-elastic-carousel";
import '../../../style/HomeCss/Home.css'



export default function Index({className,Banniere,style,breakPointsB}) {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
  { width: 550, itemsToShow: 4 },
      ];
    return (
        <>
           <Carousel enableAutoPlay={true} autoPlaySpeed={2000}  className={className} breakPoints={breakPointsB? breakPoints :null}  >
               {Banniere.map((element,index)=>
               <div>
                        <img className="imgg" style={style} src={element.image} />
               </div>
               )}
                    
                   
                </Carousel>   
        </>
    )
}
