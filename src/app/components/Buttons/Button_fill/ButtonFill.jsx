import './buttonFill.css'
export default function ButtonFill({children}){
    return(
        <>
        <div className="button_container">
        {children}
        </div>
        </>
    );
}