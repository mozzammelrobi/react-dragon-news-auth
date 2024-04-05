import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import from '/categories.json'

const LeftSideNav = () => {

    const [categories,setCategory] = useState([])

    useEffect( () => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])


    return (
        <div className="space-y-6">
            <h4 className="text-4">All Categories{categories.length}</h4>

            {
                categories.map(category => <Link
                     key={category.id}
                     to={`/category/${category.id}`}
                     className="block ml-4 font-semibold"
                     >{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;