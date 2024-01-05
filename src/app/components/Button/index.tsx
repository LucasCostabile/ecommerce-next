
interface Props {
    title: string;
    
}


const Button = ({title}: Props) => {

    return(
        <>
        <button  className=" flex justify-center items-center w-40 h-12 border border-gray-300 rounded-md font-semibold tracking-wide bg-orange-600 text-white ">
        {title}
        </button>
        </>
    )
};
 
export default Button;