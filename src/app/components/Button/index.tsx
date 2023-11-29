
interface Props {
    title: string;
}


const Button = ({title}: Props) => {

    return(
        <button className="ml-6 bg-blue-700 px-4 py-2 text-white rounded-lg hover:opacity-90 ">{title}</button>
    )

}
 
export {Button}