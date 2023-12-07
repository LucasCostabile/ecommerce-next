
interface Props {
    title: string;
}


const Button = ({title}: Props) => {

    return(
        <button className=" flex justify-center items-center  w-96 h-12 border border-gray-300 rounded-md font-semibold tracking-wide">
        {title}
        </button>
    )
};
 
export {Button}