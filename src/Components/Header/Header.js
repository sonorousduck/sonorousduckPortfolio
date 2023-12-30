import React, { useEffect } from "react";
import './Header.css';
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
            <ul className="menu menu-horizontal">
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
            <div className="dropdown dropdown-bottom dropdown-right font-semibold text-2xl" tabIndex={0}> Theme
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a className="w-full" onClick={() => toggleTheme('garden')}>Garden</a></li>
                <li><a className="w-full" onClick={() => toggleTheme('forest')}>Forest</a></li>
                <li><a className="w-full" onClick={() => toggleTheme('business')}>Business</a></li>
                <li><a className="w-full" onClick={() => toggleTheme('night')}>Night</a></li>
                <li><a className="w-full" onClick={() => toggleTheme('light')}>Light</a></li>
                <li><a className="w-full" onClick={() => toggleTheme('dark')}>Dark</a></li>
                <li><a className="w-full" onClick={() => toggleTheme('cupcake')}>Cupcake</a></li>
                <li><a className="w-full" onClick={() => toggleTheme('black')}>Black</a></li>
                <li><a className="w-full" onClick={() => toggleTheme('nord')}>Nord</a></li>
                <li><a className="w-full" onClick={() => toggleTheme('corporate')}>Corporate</a></li>
                <li><a className="w-full" onClick={() => toggleTheme('synthwave')}>Synthwave</a></li>
                <li><a className="w-full" onClick={() => toggleTheme('retro')}>Retro</a></li>
                <li><a className="w-full" onClick={() => toggleTheme('sunset')}>Sunset</a></li>
                <li><a className="w-full" onClick={() => toggleTheme('dim')}>Dim</a></li>
                <li><a className="w-full" onClick={() => toggleTheme('winter')}>Winter</a></li>
                <li><a className="w-full" onClick={() => toggleTheme('coffee')}>Coffee</a></li>

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