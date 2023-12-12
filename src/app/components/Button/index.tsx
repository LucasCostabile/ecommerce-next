import { on } from "events";

interface Props {
    title: string;
    onClick: () => void;
}


const Button = ({title, onClick }: Props) => {

    return(
        <button onClick={onClick} className=" flex justify-center items-center w-40 h-12 border border-gray-300 rounded-md font-semibold tracking-wide">
        {title}
        </button>
    )
};
 
export {Button}