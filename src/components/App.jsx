import {useState} from 'react'
import {Feedback} from './Feedback/Feedback.jsx'
import {Statistics} from './Statistics/Statistics.jsx'
import {Notification} from './Notification/Notification.jsx'

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  }


  // useEffect(()=>{
  //   const handleClick = type => {
  //     switch(type){
  //       case 'good': setGood(good +1);
  //         break;
  //       case 'neutral': setNeutral(neutral +1);
  //         break;
  //       case 'bad': setBad(bad +1);
  //         break;
  //     }


  //     // setState(prevState => ({
  //     //   ...prevState,
  //     //   [type]: prevState[type] + 1,
  //     // }));
  //   };
  // })

  const handleClick = type => {
    switch(type){
      case 'good': setGood(good +1);
        break;
      case 'neutral': setNeutral(neutral +1);
        break;
      case 'bad': setBad(bad +1);
        break;
    }
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = ['good', 'neutral', 'bad'];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h1>React Homework 02: Feedback</h1>
      <Feedback             
        options={options}
        onLeaveFeedback={handleClick}
      />
      {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
    </div>
  );
};
