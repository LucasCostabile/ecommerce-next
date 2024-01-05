import Image from "next/image";
import pcgamer from '@/app/assets/pc--gamer.png';
import homeoffice from '@/app/assets/home--office.png'

const Banner = () => {
    return(
        <section>
            <div className="flex justify-around my-7">
                <div>
                    <Image src={pcgamer} alt="Pc Gamer" height={580} width={580}/>
                    <p className="font-bold">Pc Gamer</p>
                </div>
                <div>
                    <Image src={homeoffice} alt="Home Office" height={580} width={580}/>
                    <p className="font-bold">Home Office</p>
                </div>
            </div>

        </section>
    )
}

export default Banner;