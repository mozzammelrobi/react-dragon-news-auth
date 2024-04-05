import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const NewsCard = ({ news }) => {

    // eslint-disable-next-line react/prop-types
    const { title, details, author,  image_url, _id } = news;
    return (
        <div className="max-w-md p-6 overflow-hidden rounded-lg shadow mb-5 border-b border-b-blue-700">
            <article>
                <div className="flex items-center mt-8 space-x-4">
                    <img src={author.img} alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
                    <div>
                        <h3 className="text-sm font-medium">{author.name}</h3>
                        <time className="text-sm dark:text-gray-600">Feb 18th 2021</time>
                    </div>
                </div>
                <h2 className="text-xl font-bold mt-4 mb-5">{title}</h2>
                <img className="w-full" src={image_url} alt="" />
               
                {
                    details.length > 200
                    ? <div>
                        <p className="mt-4">{details.slice(0,200)}</p>
                        <Link className="font-bold" to={`/news/${_id}`}>read more</Link>
                    </div>
                    :<p>{details}</p>
                }

            </article>
        </div>
    );
};

export default NewsCard;