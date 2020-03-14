import * as React from "react";
import { observer } from "mobx-react";
import { WebsiteModel } from "../../WebsiteModel";
import style from "./style.scss";

interface MainPageProps {
  websiteModel: WebsiteModel;
}

const MainPage = observer(function(props: MainPageProps) {
  const websiteModel = props.websiteModel;
  return (
    <div>
      <h1 className={style.header}>Hello World!</h1>
      <span>version: {websiteModel.version}</span>
    </div>
  );
});

export { MainPageProps, MainPage };
