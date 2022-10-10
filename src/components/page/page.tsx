import { IonContent } from "@ionic/react";

export interface PageHelper {
  title: string;
  component: any;
}

export const Page: React.FC<PageHelper> = (props: PageHelper) => {
  return (
    <IonContent fullscreen={true}>
      <div className="px-5 py-2 h-full">{props.component()}</div>
    </IonContent>
  );
};
