// ** React Imports
import React from "react";

// ** Next Imports
import Image from "next/image";

// ** Icon Imports
import { Icon, IconProps } from "@iconify/react";

// ** Third Party Import
import { useTranslation } from "react-i18next";

// ** Image Imports
import IndianFlag from "../../../../public/images/header/India@3x.png";

// const IconifyIcon = ({ icon, ...rest }: IconProps) => {
//   return <Icon icon={icon} fontSize="1.5rem" {...rest} />;
// };

interface FlagIcons {
  en: JSX.Element;
  fr: JSX.Element;
  ar: JSX.Element;
  zh_CN: JSX.Element;
  [key: string]: JSX.Element;
}

const IconifyIcon: React.FC = () => {
  const { i18n } = useTranslation();
  const [currentIcon, setCurrentIcon] = React.useState<JSX.Element | null>(
    null
  );

  React.useEffect(() => {
    const flagIcons: FlagIcons = {
      en: <Image src={IndianFlag} alt="Indian Flag" width={20} height={20} />,
      fr: <Image src={IndianFlag} alt="Indian Flag" width={20} height={20} />,
      ar: <Image src={IndianFlag} alt="Indian Flag" width={20} height={20} />,
      zh_CN: (
        <Image src={IndianFlag} alt="Indian Flag" width={20} height={20} />
      ),
    };

    if (i18n.language in flagIcons) {
      setCurrentIcon(flagIcons[i18n.language]);
    } else {
      console.warn(`Unexpected language: ${i18n.language}`);
    }
  }, [i18n.language]);

  return <>{currentIcon}</>;
};

export default IconifyIcon;
