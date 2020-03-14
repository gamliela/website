import * as React from "react";
import * as ReactDOM from "react-dom";
import { WebsiteModel } from "../WebsiteModel";
import { MainPage } from "./MainPage/MainPage";

// create our website model
const websiteModel: WebsiteModel = new WebsiteModel();

ReactDOM.render(
  <MainPage websiteModel={websiteModel} />,
  document.getElementById("website-root")
);
