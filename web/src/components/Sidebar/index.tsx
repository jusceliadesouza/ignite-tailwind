import { LuBarChart, LuCheckSquare, LuCog, LuFlag, LuFolders, LuHome, LuLifeBuoy, LuSearch, LuUsers } from 'react-icons/lu'

import { Logo } from './Logo'

import * as Input from '../Form/Input'
import { NavItem } from './NavItem'
import { Profile } from './Profile'
import { UsedSpaceWidget } from './UsedSpaceWidget'

export function Sidebar() {
  return (
    <aside className='flex flex-col gap-6 border-r border-zinc-200 px-5 py-8'>
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <LuSearch className='h-5 w-5 text-zinc-500' />
        </Input.Prefix>

        <Input.Control placeholder='Search' />
      </Input.Root>

      <nav className="space-y-0.5">
        <NavItem title='Home' icon={LuHome} />
        <NavItem title='Dashboard' icon={LuBarChart} />
        <NavItem title='Projects' icon={LuFolders} />
        <NavItem title='Tasks' icon={LuCheckSquare} />
        <NavItem title='Reporting' icon={LuFlag} />
        <NavItem title='Users' icon={LuUsers} />
      </nav>

      <div className='mt-auto flex flex-col gap-6'>
        <nav className='space-y-0.5'>
          <NavItem title='Support' icon={LuLifeBuoy} />
          <NavItem title='Settings' icon={LuCog} />
        </nav>

        <UsedSpaceWidget />

        <div className='h-px bg-zinc-200 ' />
        <Profile />
      </div>
    </aside>
  )
}