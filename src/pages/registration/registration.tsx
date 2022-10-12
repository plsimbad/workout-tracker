import { IonButton, IonIcon } from "@ionic/react";
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

export interface IFormHelper {
  label: string;
  type: any;
  name: string;
}

export const Registration: React.FC = () => {
  const history = useHistory();
  const moveToApp = () => {
    history.push("/overview");
  };

  const formHelper: IFormHelper[] = [
    {
      label: "Email",
      type: "email",
      name: "email",
    },
    {
      label: "Name",
      type: "text",
      name: "name",
    },
    {
      label: "Height",
      type: "number",
      name: "height",
    },
    {
      label: "Weight",
      type: "number",
      name: "weight",
    },
  ];

  const [regForm, setRegForm] = useState<IRegForm>({
    email: "",
    name: "",
    height: "",
    weight: "",
  });

  const handleChange = (value: string, name: string) => {
    setRegForm((values) => ({ ...values, [name]: value }));
  };

  const register = (event: any) => {
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify(regForm));
    moveToApp();
  };

  return (
    <form
      onSubmit={register}
      className="h-full flex items-center justify-center gap-y-3 flex-col"
    >
      {formHelper.map((x) => (
        <RegistrationInput {...x} setValue={handleChange} />
      ))}

      <IonButton className="ml-auto" shape="round" type="submit">
        <IonIcon icon={checkmark} />
      </IonButton>
    </form>
  );
};
