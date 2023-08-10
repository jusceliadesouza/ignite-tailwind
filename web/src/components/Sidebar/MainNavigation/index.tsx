import { LuBarChart, LuCheckSquare, LuFlag, LuFolders, LuHome, LuUsers } from 'react-icons/lu'

import { NavItem } from './NavItem'

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem title='Home' icon={LuHome} />
      <NavItem title='Dashboard' icon={LuBarChart} />
      <NavItem title='Projects' icon={LuFolders} />
      <NavItem title='Tasks' icon={LuCheckSquare} />
      <NavItem title='Reporting' icon={LuFlag} />
      <NavItem title='Users' icon={LuUsers} />
    </nav>
  )
}