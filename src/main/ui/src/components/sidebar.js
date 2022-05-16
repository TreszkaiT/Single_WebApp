import Logo from '../assets/images/logo/react-logo.png'

import { IsHamburgerContext} from "../components/context/hamburgerContext"
import { useContext } from 'react'
import { MdAlarmAdd } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";

import { HashLink as Link } from 'react-router-hash-link';

export default ({ currentUser }) => {

    const { isHamburgerIcon } = useContext(IsHamburgerContext)

    const links = [
       
        {label: 'Beosztás készítő', href: '/time/create',icon:<MdAlarmAdd  />},
        { label: 'Beosztás', href: '/time/timetable',icon:<IoCalendarOutline  /> },
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
                    <Link to={'/'}>
                        <a className='simple-text logo-mini'>
                            <div className='logo-img'>
                                <img
                                    src={Logo}
                                    alt="logo-img"
                                    className='logo-img-class'
                                />
                            </div>
                        </a>
                    </Link>
                    <Link to={"/"}>
                        <a className='simple-text logo-normal'>TIMEMANAGER</a>
                    </Link>

                </div>
                <ul className="nav">{links}</ul>
            </div>
        </div>
    );
};