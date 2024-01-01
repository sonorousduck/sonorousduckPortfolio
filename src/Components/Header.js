import React, { useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar = () => {

  useEffect(() => {
    let theme = localStorage.getItem('theme')
    if (!theme) {
      localStorage.setItem('theme', 'dim')
      theme = 'dim'
    }
    const htmltag = document.querySelector('html')
    htmltag.setAttribute('data-theme', theme)
  }, [])

  const toggleTheme = (theme) => {
    let newTheme = theme
    localStorage.setItem('theme', newTheme)
    const htmltag = document.querySelector('html')
    htmltag.setAttribute('data-theme', newTheme)
  }


  return (
    <div className="drawer sticky top-0 z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar">
          <div className="flex-none">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2"></div>

          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal px-1">
              <li><a className="btn btn-ghost" href="mailto: sonorousduck@gmail.com"><EmailOutlinedIcon /></a></li>
              <li><a className="btn btn-ghost" href="https://github.com/sonorousduck"><GitHubIcon /></a></li>
              <li><a className="btn btn-ghost" href="https://www.linkedin.com/in/sonorousduck/"><LinkedInIcon /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side h-full">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 rounded-r-2xl h-full">
          <li><a href="/" className="btn btn-ghost justify-start w-full h-full"><p className="font-semibold text-3xl">Home</p></a></li>
          <div className="divider"></div>
          <li><a href="/projects" className="btn btn-ghost justify-start w-full h-full"><p className="font-semibold text-3xl">Projects</p></a></li>
          <div className="divider"></div>

          <li ><a href="/about" className="btn btn-ghost justify-start w-full h-full"><p className="font-semibold text-3xl align-middle">About</p></a></li>
          <div className="divider"></div>

          <li><a href="/blog" className="btn btn-ghost justify-start w-full h-full"><p className="font-semibold text-3xl">Blog</p></a></li>
          <div className="divider"></div>
          <li>
            <div className="dropdown dropdown-right dropdown-end font-semibold text-2xl btn btn-ghost justify-start h-full" tabIndex={0}> <p className="text-left  align-middle">Theme</p>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-40">
                <li><button className="w-full btn btn-ghost justify-start h-12" onClick={() => toggleTheme('night')}><p className="">Night</p></button></li>
                <li><button className="w-full btn btn-ghost justify-start h-12" onClick={() => toggleTheme('light')}><p className="">Light</p></button></li>
                <li><button className="w-full btn btn-ghost justify-start h-12" onClick={() => toggleTheme('dark')}><p className="">Dark</p></button></li>
                <li><button className="w-full btn btn-ghost justify-start h-12" onClick={() => toggleTheme('black')}><p className="">Black</p></button></li>
                <li><button className="w-full btn btn-ghost justify-start h-12" onClick={() => toggleTheme('sunset')}><p className="">Sunset</p></button></li>
                <li><button className="w-full btn btn-ghost justify-start h-12" onClick={() => toggleTheme('dim')}><p className="">Dim</p></button></li>
                <li><button className="w-full btn btn-ghost justify-start h-12" onClick={() => toggleTheme('winter')}><p className="">Winter</p></button></li>
                <li><button className="w-full btn btn-ghost justify-start h-12" onClick={() => toggleTheme('coffee')}><p className="">Coffee</p></button></li>

              </ul>
            </div>



          </li>

        </ul>

      </div>
    </div>
  )
}

export default Navbar;