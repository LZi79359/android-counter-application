import React, { useState } from 'react';
import { 
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  // state variables
  const [counter, setCounter] = useState<number>(0);
  const [revCounter, setRevCounter] = useState<number>(100);
  const [customCounter, setCustomCounter] = useState<number>(0);
  const [counterIncremental, setCounterIncremental] = useState<number>(1);

  // This function will increment counter variable by 1
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  
  // This function will decremnt counter variable by 1
  const handleDecrement = () => {
    setRevCounter(revCounter - 1);
  };

  // This function updates counterIncremental variable with the value of the user input [event.target.value]
  const handleUserInput = (event: any) => {
    let userInput = parseInt(event.target.value);
    setCounterIncremental(userInput);
  }

  // This function increments the counter based on what the user dictates
  const handleCustomIncrement = () => {
    setCustomCounter(customCounter + counterIncremental);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        
        {/* simple counter */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Simple Counter</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Counter value: {counter}</p>
            <IonButton onClick={handleIncrement} color={'primary'}>INCREMENT</IonButton>
          </IonCardContent>
        </IonCard>

        {/* reverse counter */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Reverse Counter</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Counter value: {revCounter}</p>
            <IonButton onClick={handleDecrement} color={'primary'}>DECREMENT</IonButton>
          </IonCardContent>
        </IonCard>

        {/* custom increment counter */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Custom Increment Counter</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Counter value: {customCounter}</p>
            <IonInput 
              label='Enter incremental' 
              value={counterIncremental}
              type='number'
              onIonInput = {handleUserInput}
            />
            <IonButton onClick={handleCustomIncrement} color={'primary'}>INCREMENT</IonButton>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Home;
