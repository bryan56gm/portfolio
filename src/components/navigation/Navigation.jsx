// Styled Components
import { Menu, MenuItem, MenuBack, MenuLink } from './Menu.styled'
import ToggleMenu from './ToogleMenu.styled'
// Icons
import { HomeIcon, AboutIcon, ProjectIcon, ContactIcon, BackIcon, MenuIcon } from '../icons/NavigationIcons'
// Hooks
import useNavigation from '../../hooks/useNavigation'

const Navigation = () => {
  const [isChecked, handlerMenu, navRef] = useNavigation()

  return (
    <nav ref={navRef}>
      <Menu $show={isChecked}>
        <MenuItem>
          <MenuLink to='/'>
            <HomeIcon />
          </MenuLink>
        </MenuItem>

        <MenuItem>
          <MenuLink to='/about'>
            <AboutIcon />
          </MenuLink>
        </MenuItem>

        <MenuItem className='projects'>
          <MenuLink to='/projects'>
            <ProjectIcon />
          </MenuLink>
        </MenuItem>

        <MenuItem className='contact'>
          <MenuLink to='/contact'>
            <ContactIcon />
          </MenuLink>
        </MenuItem>

        <MenuBack onClick={handlerMenu}>
          <BackIcon />
        </MenuBack>
      </Menu>

      <ToggleMenu onClick={handlerMenu} $show={isChecked}>
        <MenuIcon />
      </ToggleMenu>
    </nav>
  )
}

export default Navigation
