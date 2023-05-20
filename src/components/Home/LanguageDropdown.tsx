// ** Icon Imports
import Icon from "../../@core/components/icon";

// ** Third Party Import
import { useTranslation } from "react-i18next";

// ** Custom Components Imports
import OptionsMenu from "../../@core/components/option-menu";

// ** Type Import
import { Settings } from "../../@core/context/settingsContext";

interface Props {
  settings: Settings;
  saveSettings: (values: Settings) => void;
}

import { initReactI18next } from "react-i18next";

const LanguageDropdown = ({ settings, saveSettings }: Props) => {
  // ** Hook
  const { i18n } = useTranslation();

  // ** Vars
  const { layout } = settings;

  const handleLangItemClick = (lang: "en" | "fr" | "ar" | "zh_CN") => {
    i18n.changeLanguage(lang);
  };

  return (
    <OptionsMenu
      icon={<Icon icon="mdi:web" />}
      menuProps={{ sx: { "& .MuiMenu-paper": { mt: 4, minWidth: 130 } } }}
      iconButtonProps={{
        color: "inherit",
        sx: { ...(layout === "vertical" ? { mr: 0.75 } : { mx: 0.75 }) },
      }}
      options={[
        {
          text: "Hindi",
          menuItemProps: {
            sx: { py: 2 },
            selected: i18n.language === "zh_CN",
            onClick: () => {
              handleLangItemClick("zh_CN");
              saveSettings({ ...settings, direction: "ltr" });
            },
          },
        },
        {
          text: "English",
          menuItemProps: {
            sx: { py: 2 },
            selected: i18n.language === "en",
            onClick: () => {
              handleLangItemClick("en");
              saveSettings({ ...settings, direction: "ltr" });
            },
          },
        },
        {
          text: "Chinese",
          menuItemProps: {
            sx: { py: 2 },
            selected: i18n.language === "zh_CN",
            onClick: () => {
              handleLangItemClick("zh_CN");
              saveSettings({ ...settings, direction: "ltr" });
            },
          },
        },
        {
          text: "French",
          menuItemProps: {
            sx: { py: 2 },
            selected: i18n.language === "fr",
            onClick: () => {
              handleLangItemClick("fr");
              saveSettings({ ...settings, direction: "ltr" });
            },
          },
        },
        {
          text: "Arabic",
          menuItemProps: {
            sx: { py: 2 },
            selected: i18n.language === "ar",
            onClick: () => {
              handleLangItemClick("ar");
              saveSettings({ ...settings, direction: "rtl" });
            },
          },
        },
      ]}
    />
  );
};

export default LanguageDropdown;
