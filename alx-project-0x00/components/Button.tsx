import { BtnProps } from "@/alx-project-0x00/interfaces";
const Button: React.FC<BtnProps> = ({ title, styles, onClick }) => {    
    return(
        <button className={`px-4 py-2 text-white bg-red-400 hover:bg-red-600  ${styles}`}
        onClick={onClick}
        >
            {title}
        </button>
    )
}

export default Button;