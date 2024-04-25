import {PartsType} from "./types";
import { Link } from "react-router-dom";
import Badge from "./Badge";

function PartsCard({part}: {part:PartsType}) {
    const { available, city, title, image, state, url, site, color, section, space, row, vin } = part;
    let jpg:boolean = true

    if (image.includes(".mp4")){
        jpg = false
    }
    const availableDate = available.toString().split(' 00:00')[0]
    return (
      <div className="max-w-full md:max-w-sm rounded overflow-hidden shadow-lg bg-white md:hover:scale-105 transition-all duration-500 cursor-pointer ">
        <Link to={`${url}`} target="blank" rel="noopener noreferrer">
          {jpg &&
            <span className='bg-white w-full h-80 flex flex-row border-b-2 border-zinc-300'>
                <img className="self-center w-full" src={image} alt={title}></img>
            </span>
          }
          {!jpg && <video src={image} className="w-full h-80" controls>
                </video>}
          <div className="px-6 py-4 flex flex-col">
            <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-gray-700 text-base">
                <span className="">{vin}</span><br /><br />
                <span className="flex flex-row">
                <svg className="h-8 w-8 text-gray-700 display: inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 0 0-3.471 2.987 10.04 10.04 0 0 1 4.815 4.815 18.748 18.748 0 0 0 2.987-3.472l3.386-5.079A1.902 1.902 0 0 0 20.599 1.5Zm-8.3 14.025a18.76 18.76 0 0 0 1.896-1.207 8.026 8.026 0 0 0-4.513-4.513A18.75 18.75 0 0 0 8.475 11.7l-.278.5a5.26 5.26 0 0 1 3.601 3.602l.502-.278ZM6.75 13.5A3.75 3.75 0 0 0 3 17.25a1.5 1.5 0 0 1-1.601 1.497.75.75 0 0 0-.7 1.123 5.25 5.25 0 0 0 9.8-2.62 3.75 3.75 0 0 0-3.75-3.75Z" clipRule="evenodd" />
                    </svg>
                  <span className="ml-2 mt-1">
                    <b>Color:</b> {color}</span><br />
                  </span>
                <span className="flex flex-row">
                  <svg className="h-8 w-8 text-gray-700 display: inline"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="18" y2="6.01" />  <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />  <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />  <line x1="9" y1="4" x2="9" y2="17" />  <line x1="15" y1="15" x2="15" y2="20" />
                    </svg>
                  <span className="ml-2 mt-1">
                      {city}, {state}
                    </span>
                </span>
                <span className="flex flex-row">
                  <span className="ml-2 mt-1">
                      <b>Section: </b>{section}, <b>Row: </b> {row}, <b>Space:</b> {space}
                    </span>
                </span>
                <span className="flex flex-row">
                  <span className="ml-2 mt-1">
                      <b>Date Available:</b> {availableDate}
                    </span>
                </span>
                <span className="flex flex-col">
                    <span className="mt-4 self-end">
                        <Badge site={site}/>
                    </span>
                </span>

              </p>
          </div>
        </Link>
      </div>
    );
  }

  export default PartsCard;