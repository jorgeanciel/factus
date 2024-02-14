import { myColors } from "../../../constants/colors";
import Icon from "../../atoms/icon/icon";
import InputSearch from "../../atoms/input-search/input-search";
import TextIcon from "../../molecules/text-icon";

const HeaderHome = () => {
  return (
    <div className="flex flex-wrap justify-between w-full">
      <div className="md:hidden">
        <Icon name="menu" size="25" color={myColors.dark} />
      </div>
      <TextIcon
        label="Lima - Peru"
        iconSize="17"
        icon="ubication"
        variant="small"
        family="bold"
        iconColor={myColors.dark}
        styles="gap-2"
      />
      <div className="hidden md:flex">
        <InputSearch />
      </div>

      <section className="flex items-center justify-center gap-5">
        <TextIcon
          label="Kevin Salazar"
          icon="user"
          iconSize="19"
          family="bold"
          styles="gap-2"
          iconColor={myColors.dark}
        />
        <Icon name="car-bg" color={myColors.dark} size="17" />
      </section>
    </div>
  );
};

export default HeaderHome;
