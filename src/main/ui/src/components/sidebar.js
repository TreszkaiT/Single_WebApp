import Logo from '../assets/images/logo/react-logo.png'

import { IsHamburgerContext} from "../components/context/hamburgerContext"
import { useContext } from 'react'
import { MdAlarmAdd } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";

import { HashLink as Link } from 'react-router-hash-link';

export default ({ currentUser }) => {

    const { isHamburgerIcon } = useContext(IsHamburgerContext)

    const links = [
       
        { label: 'Új vizsgázó', href: '/new-user',icon:<IoCalendarOutline  /> },
        { label: 'Vizsgázók', href: '/',icon:<IoCalendarOutline  /> },
        {label: 'Vizsgázók módosítása', href: '/modify-user',icon:<MdAlarmAdd  />},
    ]
        .filter(linkConfig => linkConfig)
        .map(({ label, href, icon}) => {
            return (
                <li key={href} className="nav-item">               
                        <a className="nav-link" href={href}>
                        {icon}
                        <p>{label}</p>
                        </a>
                    
                </li>
            );
        });

    return (

        <div className={`sidebar ${isHamburgerIcon ? isHamburgerIcon["actual"] ? isHamburgerIcon["actual"] : isHamburgerIcon : "closed"}`}>
            <div className='sidebar-wrapper'>
                <div className='logo'>           
                        <Link to={'/'} className='simple-text logo-mini'>
                            <div className='logo-img'>
                                <img
                                    src={Logo}
                                    alt="logo-img"
                                    className='logo-img-class'
                                />
                            </div>
                    </Link>             
                        <Link to={"/"} className='simple-text logo-normal'>NYILVÁNTARTÓ APP</Link>
                </div>
                <ul className="nav">{links}</ul>
            </div>
        </div>
    );
};
