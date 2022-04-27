import {useState, useEffect} from "react";
import {firebase} from "../firebase";

const collatedTasksExist = () => {}

export const useTasks = selectProject =>{
  const [tasks,setTasks] = useState([]);

  useEffect(()=>{
    let unsubscribe = firebase.firestore()
      .collection('tasks')
      .where('userId','==','0101010101');

    unsubscribe =
      selectProject && !collatedTasksExist(selectProject)
     ? (unsubscribe = unsubscribe.where('projectId','==',selectProject))
        :selectProject === 'TODAY'
    ?(unsubscribe = unsubscribe.where('date','==',moment().format('DD/MM/YYYY')))
        : selectProject === 'INBOX' || selectProject === 0
    ?(unsubscribe = unsubscribe.where('date','==',''))
          : unsubscribe

  },[selectProject])

}