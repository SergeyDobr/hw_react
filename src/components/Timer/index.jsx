import React, { useEffect, useState } from 'react'
import styles from './Timer.module.css'

const Timer = () => {
   const [seconds, setSeconds] = useState(57);
   const [minutes, setMinutes] = useState(0);
   const [isTimerRunning, setIsTimerRunning] = useState(true); // Добавляем состояние для отслеживания состояния таймера

   useEffect(() => {
      let timer;
      if (isTimerRunning) {
         timer = setInterval(() => {
            setSeconds(seconds => (seconds + 1) % 60); // Используем функцию обновления состояния для корректного обновления значений зависящих от предыдущего состояния
            if (seconds === 59) {
               setMinutes(minutes => minutes + 1);
            }
         }, 1000);
      }
      
      return () => clearInterval(timer);
   }, [isTimerRunning, seconds, minutes]); // Указываем зависимости в массиве зависимостей

   const restart = () => {
      setSeconds(0);
      setMinutes(0);
      setIsTimerRunning(true); // Запускаем таймер при рестарте
   }

   const stop = () => {
      setIsTimerRunning(false); // Останавливаем таймер
   }
   
   return (
      <div className={styles.timer}>
         <h1>Timer</h1>
         <h2 className={styles.board}>{minutes}:{seconds}</h2>
         <button onClick={restart}>Restart</button>
         <button onClick={stop}>Stop</button>
      </div>
   )
}

export default Timer
