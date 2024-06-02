import {Link} from 'react-router-dom'
import ChangeLogo from '../components/Common/ChangeLogo';
import { useState } from 'react';
import ThemeChanger from '../components/Common/ThemeChanger';
import Search from '../components/Search/Search';
import {useQuery} from '@tanstack/react-query'
import {SearchManga} from '../services/mangaApi'
import useDebounce from '../hooks/useDebounce';

const NavLinks = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/",
    title: "mobile App",
  },
  {
    link: "/",
    title: "Join Discord",
  },
  {
    link: "/",
    title: "Request A Scan",
  },
];


export default function Header() {
  const [openn, setOpenn] = useState(false);
  const [query, setQuery] = useState("");
  const debounceValue = useDebounce(query, 500)

  const {data:searchData} = useQuery({
    queryKey: ["search", debounceValue],
    queryFn: () => SearchManga(debounceValue),
    enabled: query.trim() !== "" && !!debounceValue,
  });


  return (
    <nav className="font-bold h-[4.5rem] font-fred py-6 bg-manga-white drop-shadow-2xl  text-black dark:bg-manga-black dark:text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex">
          <Link to="/">
            <ChangeLogo />
          </Link>
          <div className="hidden lg:flex lg:ml-12 lg:space-x-4 text-base">
            {openn &&
              NavLinks.map((links, i) => (
                <Link to={`${links.link}`} className="hover:text-manga-yellow" key={i}>
                  {links.title}
                </Link>
              ))}
          </div>
        </div>


        <div className="lg:flex xl:ml-16">
          <button className="mr-6 mt-1">
            <ThemeChanger />
          </button>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search"
            className="border-2 hidden lg:flex lg:rounded-full lg:h-8 lg:w-32 placeholder lg:pl-4 lg:text-sm lg:focus:w-44 focus:ring focus:ring-[#EFC416] focus:outline-none text-black"
          />
          {searchData ? <Search data={searchData} /> : ""}
          <i
            className="fa-solid fa-bars mt-1 fa-xl mx-2 lg:hidden cursor-pointer hover:text-manga-yellow"
            onClick={() => setOpenn(!openn)}
          ></i>
          {openn && (
            <div className="bg-manga-white dark:bg-manga-black absolute left-0 h-fit w-full mt-3 border-t-[1px] lg:hidden">
              <input
                type="text"
                placeholder="Search"
                className="rounded-full h-8 w-[300px] mx-8 my-6 md:w-[500px] border-2 placeholder pl-2 text-black"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="flex flex-col space-y-3 align-middle text-left ml-8 mb-8">
                {NavLinks.map((links, i) => (
                  <Link to={`${links.link}`} className="hover:text-manga-yellow" key={i}>
                    {links.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
