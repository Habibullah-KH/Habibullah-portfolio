import './buttonBorder.css'
export default function ButtonBorder({ children }) {
    return (
        <button className="btn-border ">
            {children}
        </button>
    );
}