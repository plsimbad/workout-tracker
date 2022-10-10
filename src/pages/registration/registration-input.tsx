import { IonItem, IonLabel, IonInput } from "@ionic/react";
import { IRegForm } from "./registration";

interface IRegInput {
  label: string;
  setValue: (value: string, field: keyof IRegForm) => void;
  field: keyof IRegForm;
  value: string;
}

export const RegistrationInput: React.FC<IRegInput> = (props: IRegInput) => {
  const emitValue = (value: string) => {
    props.setValue(value, props.field);
  };

  return (
    <IonItem className="w-full">
      <IonLabel position="floating">{props.label}</IonLabel>
      <IonInput
        debounce={500}
        value={props.value}
        onIonInput={(e) => {
          emitValue(e.target.value as string);
        }}
        required
      />
    </IonItem>
  );
};
