import { useTranslation } from "react-i18next";

const HomePage = () => {
      const { t } = useTranslation();
    return(
        <div
      >
           {t("profile.name")}
        </div>
    )

}
export default HomePage;