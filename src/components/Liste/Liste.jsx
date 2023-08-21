import '../Liste/liste.scss';
function Liste({liste}){
    return(
            liste.map((e,index) => (
                <li key={`${e}-${index}`} className="liste">{e}</li>
        ))
    )
}
export default Liste