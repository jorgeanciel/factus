import React from "react";
import AvatarProfile from "../../atoms/avatar-profile/avatar-profile";
import Typography from "../../atoms/typography/typography";
import TextIcon from "../../molecules/text-icon";
import { myColors } from "../../../constants/colors";
import Button from "../../atoms/button/button";

type ProfileCardProps = {
  title: string;
  subTitle: string;
  description: string;
  image: string;
  visits: number;
  typeProfile: string;
};

const ProfileCard: React.FC = () => {
  return (
    <div className="py-5 px-5 rounded-lg shadow-md relative pb-12 md:pb-5 bg-white">
      <section className="absolute right-0 bottom-0 md:bottom-auto md:top-0 px-4 py-2 bg-amber-400 rounded-tr-md">
        <Typography
          label="Premium"
          variant="small"
          family="bold"
          color="text-white"
        />
      </section>
      <header className="flex flex-col items-center md:flex-row gap-0 md:gap-4 h-auto md:h-36">
        <section className="relative -top-16">
          <AvatarProfile size="large" />
        </section>
        <section className="flex flex-col items-center md:items-start gap-4 relative -top-8">
          <Typography
            label="Pedrito Davila"
            variant="subtitle"
            family="bold"
            spacing="wider"
          />
          <Typography
            label="DEVELOPER SENIOR"
            variant="small"
            spacing="wider"
            color="text-gray-300"
            family="bold"
          />
          <TextIcon
            label="Lima - peru"
            variant="small"
            icon="fire"
            iconSize="15"
            labelColor="text-gray-300"
            iconColor={myColors["gray-3"]}
          />
        </section>
        <section className="flex flex-col justify-start">
          <Button label="My profile" outlined />
        </section>
      </header>
      <main className="flex flex-wrap mt-7 md:mt-0 gap-2 md:gap-0 justify-between">
        <section className="flex items-center gap-2">
          <Typography label="500" variant="title" family="bold" />
          <Typography
            label="Visitas"
            variant="small"
            color="text-gray-300"
            spacing="wider"
          />
        </section>
        <section className="flex items-center gap-2">
          <Typography label="80%" variant="title" family="bold" />
          <Typography
            label="Rating"
            variant="small"
            color="text-gray-300"
            spacing="wider"
          />
        </section>
        <section className="flex flex-wrap items-center gap-2">
          <Typography label="1.1k" variant="title" family="bold" />
          <Typography
            label="Followers"
            variant="small"
            color="text-gray-300"
            spacing="wider"
          />
        </section>
      </main>
    </div>
  );
};

export default ProfileCard;
