import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";

const Home = () => {
    return (
        <div className="font-poppins">
            <Header></Header>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border-2 border-red-500 ">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="border-2 border-r-blue-700 md:col-span-2">
                    <h1 className="text-2xl"> News commint soon</h1>
                </div>
                <div className="border-2 border-purple-700">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;