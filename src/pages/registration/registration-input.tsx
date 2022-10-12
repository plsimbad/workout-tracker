import { IonInput, IonItem, IonLabel } from "@ionic/react";
import { IFormHelper } from "./registration";

interface IInput extends IFormHelper {
  setValue: (value: string, name: string) => void;
}

export const RegistrationInput: React.FC<IInput> = (props: IInput) => {
  const emitValue = (value: any) => {
    props.setValue(value.target.name, props.name);
  };

  return (
    <IonItem className="w-full">
      <IonLabel position="floating">{props.label}</IonLabel>
      <IonInput
        type={props.type}
        name={props.name}
        debounce={500}
        onIonChange={emitValue}
        required
      />
    </IonItem>
  );
};
