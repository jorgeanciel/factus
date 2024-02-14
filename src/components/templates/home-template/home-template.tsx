import { myColors } from "../../../constants/colors";
import Card from "../../organisms/card/card";
import HeaderHome from "../../organisms/header-home/header-home";
import Menu from "../../organisms/menu/menu";
import ProfileCard from "../../organisms/profile-card/profile-card";

type HomeTemplateProps = {
  children: React.ReactNode;
};
const HomeTemplate: React.FC<HomeTemplateProps> = ({ children }) => {
  const menuList: any = [
    {
      icon: "menu",
      label: "Menu",
      color: myColors["danger-light"],
      showBorder: true,
    },
    {
      icon: "car",
      label: "Delivery",
      color: myColors.primary,
      showBorder: false,
    },
    {
      icon: "payment",
      label: "Payment",
      color: myColors.secondary,
      showBorder: false,
    },
    {
      icon: "about",
      label: "About",
      color: myColors["gray-2"],
      showBorder: false,
    },
  ];
  return (
    <div className="flex gap-3 w-full bg-white-light">
      <Menu menuList={menuList} />
      <section className="w-full px-6 pt-3">
        <header className="md:pl-48">
          <HeaderHome />
        </header>
        <main className="h-full mt-5 md:pl-48">{children}</main>
      </section>
    </div>
  );
};

export default HomeTemplate;
