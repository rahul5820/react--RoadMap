// import Annupic from './src/assets/assets/peakpx.jpg'

function AnnuPic(){

let ImageHandler=(e)=>e.target.display="none"

    return(<>
            <img className="Annu-pic" src="./src/assets/peakpx.jpg"onClick={(e)=>ImageHandler(e)} ></img>
            <button >Click me to Change </button>
    </>)

}


export default AnnuPic;