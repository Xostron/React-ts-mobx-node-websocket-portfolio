import React, { useState, FC } from "react";
import { ILink, LinkIcon } from "../../UI/link/link-icon/LinkIcon";
import style from './Navbar.module.scss'
import { v4 as uuidv4 } from 'uuid'
import { FiX, FiMenu } from 'react-icons/fi'



export const Navbar: FC = () => {

    const [visibleMenu, setVisibleMenu] = useState<boolean>(false)
    const styleMenu = [style.links]
    if (visibleMenu) styleMenu.push(style.visible)

    const handlerVisibleMenu = (e: React.MouseEvent<SVGAElement>) => {
        setVisibleMenu(!visibleMenu)
    }

    const links: ILink[] = [
        { name: 'Main', to: '/', disabled: false },
        { name: 'Paint prj', to: `/paint/${uuidv4()}`, disabled: false },
        { name: 'Library', to: '/about', disabled: false }
    ]

    return (
        <div className={style.container}>

            <h2>Xostron's_ Portfolio</h2>

            <div className={styleMenu.join(' ')}>
                {links.map((link, idx) => <LinkIcon
                    key={idx}
                    item={link}
                />
                )}
            </div>

            {visibleMenu ?
                <FiX size={25} onClick={handlerVisibleMenu} className={style.iconMenu} />
                :
                <FiMenu size={25} onClick={handlerVisibleMenu} className={style.iconMenu} />
            }

        </div>
    )
}