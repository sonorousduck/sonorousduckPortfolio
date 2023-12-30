import React, { useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar = () => {

  useEffect(() => {
    let theme = localStorage.getItem('theme')
    if (!theme) {
      localStorage.setItem('theme', 'garden')
      theme = 'garden'
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
              <li><a href="mailto: sonorousduck@gmail.com"><EmailOutlinedIcon /></a></li>
              <li><a href="https://github.com/sonorousduck"><GitHubIcon /></a></li>
              <li><a href="https://www.linkedin.com/in/sonorousduck/"><LinkedInIcon /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 rounded-r-2xl">
          <li><a href="/"><p className="font-semibold text-3xl">Home</p></a></li>
          <div className="divider"></div>
          <li><a href="/projects"><p className="font-semibold text-3xl">Projects</p></a></li>
          <div className="divider"></div>

          <li><a href="/about"><p className="font-semibold text-3xl">About</p></a></li>
          <div className="divider"></div>

          <li><a href="/blog"><p className="font-semibold text-3xl">Blog</p></a></li>
          <div className="divider"></div>
          <li>
            <div className="dropdown dropdown-bottom dropdown-right font-semibold text-2xl cursor-pointer" tabIndex={0}> Theme
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 cursor-pointer">
                <li><a className="w-full cursor-pointer" onClick={() => toggleTheme('garden')}><p className="">Garden</p></a></li>
                <li><a className="w-full cursor-pointer" onClick={() => toggleTheme('forest')}><p className="">Forest</p></a></li>
                <li><a className="w-full cursor-pointer" onClick={() => toggleTheme('business')}><p className="">Business</p></a></li>
                <li><a className="w-full cursor-pointer" onClick={() => toggleTheme('night')}><p className="">Night</p></a></li>
                <li><a className="w-full cursor-pointer" onClick={() => toggleTheme('light')}><p className="">Light</p></a></li>
                <li><a className="w-full cursor-pointer" onClick={() => toggleTheme('dark')}><p className="">Dark</p></a></li>
                <li><a className="w-full cursor-pointer" onClick={() => toggleTheme('cupcake')}><p className="">Cupcake</p></a></li>
                <li><a className="w-full cursor-pointer" onClick={() => toggleTheme('black')}><p className="">Black</p></a></li>
                <li><a className="w-full cursor-pointer" onClick={() => toggleTheme('nord')}><p className="">Nord</p></a></li>
                <li><a className="w-full cursor-pointer" onClick={() => toggleTheme('corporate')}><p className="">Corporate</p></a></li>
                <li><a className="w-full cursor-pointer" onClick={() => toggleTheme('synthwave>')}><p className="">Synthwave</p></a></li>
                <li><a className="w-full cursor-pointer" onClick={() => toggleTheme('retro')}><p className="">Retro</p></a></li>
                <li><a className="w-full cursor-pointer" onClick={() => toggleTheme('sunset')}><p className="">Sunset</p></a></li>
                <li><a className="w-full cursor-pointer" onClick={() => toggleTheme('dim')}><p className="">Dim</p></a></li>
                <li><a className="w-full cursor-pointer" onClick={() => toggleTheme('winter')}><p className="">Winter</p></a></li>
                <li><a className="w-full cursor-pointer" onClick={() => toggleTheme('coffee')}><p className="">Coffee</p></a></li>

              </ul>
            </div>



          </li>

        </ul>

      </div>
    </div>
    // <AppBar position="static">
    //   <CssBaseline />
    //   <Toolbar style={{backgroundColor: "#212121"}}> 
    //     <div className="logo" style={{cursor: "default"}}>
    //         <Typography variant="h5" className='logo' style={{cursor: "default"}}>
    //         Ryan Anderson
    //         </Typography>
    //         <Typography className="email" sx={{fontSize: 12}} style={{cursor: "default"}}><a className="mailTo" href="mailto: sonorousduck@gmail.com">sonorousduck@gmail.com</a></Typography>
    //     </div>
    //     <div className="navlinks">
    //       <Link to="/" className="link">
    //         <HomeIcon style={{marginRight: 4}}/> <Typography className="linkText">Home</Typography> 
    //       </Link>
    //       <Link to="/projects" className="link">
    //         <CollectionsBookmarkIcon style={{marginRight: 4}}/> <Typography className="linkText">Projects</Typography> 
    //       </Link>
    //       <Link to="/about" className="link">
    //         <HelpOutlineIcon style={{marginRight: 4}}/> <Typography className="linkText">About Me</Typography>
    //       </Link>
    //       <a href="https://github.com/sonorousduck" className="link"><GitHubIcon style={{marginRight: 4}}/> <Typography className="linkText"> My Github</Typography></a>
    //     </div>
    //   </Toolbar>
    // </AppBar>
  )
}

export default Navbar;