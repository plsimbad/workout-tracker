import {
  IonButton,
  IonContent,
  IonDatetime,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPopover,
} from "@ionic/react";
import { add, save } from "ionicons/icons";
import { useState } from "react";

interface IExercise {
  name: string;
  reps: number;
  sets: number;
  weight: number;
}

export const WorkoutTracker: React.FC = () => {
  const defaultExercise: IExercise = {
    name: "",
    reps: 0,
    sets: 0,
    weight: 0,
  };
  const [date, setDate] = useState<Date>(new Date());
  const [newExercise, setNewExercise] = useState<IExercise>(defaultExercise);
  const [exercises, setExercises] = useState<IExercise[]>([]);

  let changeDate = (event: CustomEvent) => {
    setDate(new Date(event.detail.value));
  };
  return (
    <>
      <IonContent fullscreen={true}>
        <div className="flex justify-between">
          <IonButton id="open-datepicker">
            {date.toLocaleDateString()}
          </IonButton>
          <IonPopover trigger="open-datepicker">
            <IonContent>
              <IonDatetime
                presentation="date"
                value={date.toISOString()}
                onIonChange={changeDate}
                showDefaultButtons={true}
              ></IonDatetime>
            </IonContent>
          </IonPopover>

          <div>
            <IonButton className="float-right" onClick={() => {}}>
              <IonIcon icon={save} />
            </IonButton>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex-shrink">
            <IonItem>
              <IonLabel position="floating">exercise</IonLabel>
              <IonInput
                debounce={500}
                value={newExercise.name}
                onIonChange={(e) =>
                  setNewExercise({ ...newExercise, name: e.detail.value! })
                }
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">reps</IonLabel>
              <IonInput
                debounce={500}
                value={newExercise.reps}
                onIonChange={(e) =>
                  setNewExercise({ ...newExercise, reps: +e.detail.value! })
                }
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">sets</IonLabel>
              <IonInput
                debounce={500}
                value={newExercise.sets}
                onIonChange={(e) =>
                  setNewExercise({ ...newExercise, sets: +e.detail.value! })
                }
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">weight (kg)</IonLabel>
              <IonInput
                debounce={500}
                value={newExercise.weight}
                onIonChange={(e) =>
                  setNewExercise({ ...newExercise, weight: +e.detail.value! })
                }
              ></IonInput>
            </IonItem>
            <IonButton
              className="float-right"
              onClick={() => {
                setExercises([...exercises, newExercise]);
                setNewExercise({ ...defaultExercise });
              }}
            >
              <IonIcon icon={add} />
            </IonButton>
          </div>
          <div className="flex-grow overflow-y-auto">
            {exercises.map((exercise) => {
              return (
                <div className="grid grid-cols-3 gap-2">
                  <div>{exercise.name}</div>
                  <div>
                    {exercise.reps} x {exercise.sets}
                  </div>
                  <div>{exercise.weight} kg</div>
                </div>
              );
            })}
          </div>
        </div>
      </IonContent>
    </>
  );
};
