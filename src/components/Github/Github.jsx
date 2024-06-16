import './Github.css'
import { useLoaderData } from "react-router-dom";
function Github() {

    const data = useLoaderData();

  return (
    <div className='text-center text-3xl m-4 bg-gray-600 text-white p-4'>
        Github Followers : {data.followers}
        <img className="git-img w-52" src={data.avatar_url} alt="Git picture" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/RaeezAli')
    return response.json();
}