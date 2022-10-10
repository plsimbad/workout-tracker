import { IonButton, IonIcon, IonSlide, IonSlides } from "@ionic/react";
import { checkmark } from "ionicons/icons";
import { useState } from "react";
import { useHistory } from "react-router";
import { RegistrationInput } from "./registration-input";

export interface IRegForm {
  email: string;
  name: string;
  height: string;
  weight: string;
}

export const Registration: React.FC = () => {
  const history = useHistory();
  const moveToApp = () => {
    history.push("/overview");
  };

  const [regForm, setRegForm] = useState<IRegForm>({
    email: "",
    name: "",
    height: "",
    weight: "",
  });

  const slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  const setValue = (value: string, field: keyof IRegForm): void => {
    regForm[field] = value;
    setRegForm({ ...regForm });
  };

  const register = () => {
    localStorage.setItem("user", JSON.stringify(regForm));
    moveToApp();
  };

  return (
    <IonSlides pager={true} options={slideOpts} className="h-full">
      <IonSlide>
        <RegistrationInput
          {...{
            label: "E-Mail",
            value: regForm.email,
            field: "email",
          }}
          setValue={setValue}
        />
      </IonSlide>
      <IonSlide>
        <RegistrationInput
          {...{
            label: "Name",
            value: regForm.name,
            field: "name",
          }}
          setValue={setValue}
        />
      </IonSlide>
      <IonSlide>
        <RegistrationInput
          {...{
            label: "Height",
            value: regForm.height,
            field: "height",
          }}
          setValue={setValue}
        />
      </IonSlide>
      <IonSlide>
        <div className="flex flex-col w-full">
          <div className="w-full">
            <RegistrationInput
              {...{
                label: "Weight",
                value: regForm.weight,
                field: "weight",
              }}
              setValue={setValue}
            />
          </div>
          <div className="absolute bottom-8 right-0">
            <IonButton className="ml-auto" shape="round" onClick={register}>
              <IonIcon icon={checkmark} />
            </IonButton>
          </div>
        </div>
      </IonSlide>
    </IonSlides>
  );
};
