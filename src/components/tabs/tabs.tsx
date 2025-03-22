import {
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { barbell, barChartOutline, documentText } from "ionicons/icons";
import { Redirect, Route } from "react-router";
import { Registration } from "../../pages/registration/registration";
import { WorkoutOverview } from "../../pages/workout-overview/workout-overview";
import { WorkoutPlan } from "../../pages/workout-plan/workout-plan";
import { WorkoutTimer } from "../../pages/workout-timer/WorkoutTimer";
import { WorkoutTracker } from "../../pages/workout-tracker/workou-tracker";
import { Page, PageHelper } from "../page/page";

interface Routes {
  pageHelper: PageHelper;
  route: string;
}

interface Buttons {
  href: string;
  icon: string;
  tab: string;
}

export const Tabs: React.FC = () => {
  const user = localStorage.getItem("user");

  const defaultRoute: string = user ? "/tracker" : "/registration";

  const routes: Routes[] = [
    {
      pageHelper: { title: "registration", component: Registration },
      route: "/registration",
    },
    {
      pageHelper: { title: "timer", component: WorkoutTimer },
      route: "/timer",
    },
    {
      pageHelper: { title: "overview", component: WorkoutOverview },
      route: "/overview",
    },
    { pageHelper: { title: "plan", component: WorkoutPlan }, route: "/plan" },
    {
      pageHelper: { title: "tracker", component: WorkoutTracker },
      route: "/tracker",
    },
  ];

  const tabBtns: Buttons[] = [
    {
      tab: "overview",
      href: "/overview",
      icon: barChartOutline,
    },
    {
      tab: "plan",
      href: "/plan",
      icon: documentText,
    },
    {
      tab: "tracker",
      href: "/tracker",
      icon: barbell,
    },
  ];

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/">
            <Redirect to={defaultRoute} />
          </Route>
          {routes.map((x, i) => {
            return (
              <Route key={i} path={x.route} exact={true}>
                <Page {...x.pageHelper} />
              </Route>
            );
          })}
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          {tabBtns.map((x, i) => {
            return (
              <IonTabButton key={i} tab={x.tab} href={x.href}>
                <IonIcon icon={x.icon} />
              </IonTabButton>
            );
          })}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};
