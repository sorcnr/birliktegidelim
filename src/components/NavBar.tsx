import React from 'react'

const NavBar: React.FC = () => {

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">KeepKing Kasa</a>
      </div>
      <div className="flex-none gap-2">
        <div className="flex flex-row gap-2">

        </div>
        <div className="dropdown dropdown-end btn-circle">
          <label tabIndex={0} className="btn btn-ghost btn-circle ">
            <div className="w-10 flex">
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 107.7"><path d="M21.08,83.82h24a15.89,15.89,0,0,1,4.79-11.49A16.33,16.33,0,0,1,77.72,83.82H101.4l12.49-34.67a6.65,6.65,0,0,0,2.1.3,6.9,6.9,0,1,0-6.9-6.89,6.78,6.78,0,0,0,1.3,4l-7.09,5.9c-10,8.19-16.19,4.39-14.29-8.29l1.1-7.2a4.87,4.87,0,0,0,1.2.1,6.88,6.88,0,1,0-4.3-1.5l-1.69,2.7c-8.4,12.59-14.59,7.79-17-4.69L63.94,13.29A6.79,6.79,0,0,0,68.13,7,7.16,7.16,0,0,0,61,0a6.9,6.9,0,0,0-6.89,6.89,6.75,6.75,0,0,0,5.09,6.6l-2.9,11.59C54,35.67,51,56.84,37.56,38.76l-2.19-3a7,7,0,0,0,2.89-5.6,6.89,6.89,0,1,0-6.89,6.89,7.72,7.72,0,0,0,1.5-.2l.5,4.7c.9,6.39,2,15-5.3,14.59-3.59-.2-5-1.4-7.79-3.4l-7.89-5.6A6.8,6.8,0,0,0,13.79,43a6.9,6.9,0,1,0-6.9,6.89,7,7,0,0,0,2.5-.5L21.08,83.82ZM61,3.1a3.8,3.8,0,1,1-3.8,3.79A3.8,3.8,0,0,1,61,3.1Zm54.75,35.46a4.15,4.15,0,1,1-4.2,4.1,4.14,4.14,0,0,1,4.2-4.1Zm-109,0a4.15,4.15,0,1,1,0,8.29A4.13,4.13,0,0,1,2.7,42.66a4.05,4.05,0,0,1,4.09-4.1ZM31.27,26a4.12,4.12,0,0,1,4.1,4.1,4.15,4.15,0,1,1-8.3,0,4.27,4.27,0,0,1,4.2-4.1Zm59.84,0a4.15,4.15,0,1,1,0,8.3,4.15,4.15,0,0,1,0-8.3Zm-70,67.44H48.25a14.62,14.62,0,0,0,1.6,1.9,16.34,16.34,0,0,0,11.49,4.79,16.77,16.77,0,0,0,11.59-4.79,14.62,14.62,0,0,0,1.6-1.9h27V107.7H21.08V93.41Z" /><path className="" d="M61.34,72.53A11.29,11.29,0,1,1,50.05,83.82,11.28,11.28,0,0,1,61.34,72.53Z" /></svg>

            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default NavBar;