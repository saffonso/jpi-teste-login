import Sidebar, { SidebarItem } from '../SideBar'
import {
  LayoutDashboard,
  BarChart3,
  UserCircle,
  Boxes,
  Package,
  Receipt,
  Settings,
  LifeBuoy,
  LogOut,
  HomeIcon,
  PiggyBank,
  Search
} from "lucide-react";
import './defaultSideBar.css';
import { Form } from 'react-router';
import Login from '../../pages/login';
const DefaultSideBar = () => {
  return (
    <div className='container'>
      <Sidebar>
        <SidebarItem icon={<LayoutDashboard size={30} />} text="Administração" subItems={["Cadastro", "Usuários", "Permissões"]} />
        <SidebarItem icon={<HomeIcon size={30} />} text="Home" />
        <SidebarItem icon={<PiggyBank size={30} />} text="Financeiro" />
        <SidebarItem icon={<Search size={30} />} text="Análise" />

        <hr />
        <SidebarItem icon={<Settings size={25} />} text="Settings" />
        <SidebarItem icon={<LifeBuoy size={25} />} text="Help" />
      </Sidebar>
    </div>
  );
}

export default DefaultSideBar;