import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

import qzoon1 from '../../../assets/qZone1.png'
import qzoon2 from '../../../assets/qZone2.png'
import qzoon3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 mb-5">
                <h2 className="text3xl">Login</h2>
                <button className="btn btn-outline w-full mb-4">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Github
                </button>
            </div>

            <div className="mb-5">
                <h1 className="text-3xl mb-4">FInd us on</h1>
               <div className="text-center ">
               <a className="flex gap-2 border-b w-full pl-4 items-center mb-4 "> <FaFacebook /> Facebook</a>
                <a className="flex gap-2 border-b w-full pl-4 items-center mb-4"><FaTwitter/> Twitter</a>
                <a className="flex gap-2 border-b w-full pl-4 items-center"><FaInstagram/> Instragram</a>
               </div>
            </div>

            {/* qZoon */}

            <div>
                <p className="text-3xl">qZoone </p>
                <img src={qzoon1} alt="" />
                <img src={qzoon2} alt="" />
                <img src={qzoon3} alt="" />
            </div>

        </div>
    );
};

export default RightSideNav;