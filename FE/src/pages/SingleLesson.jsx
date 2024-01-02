import React from 'react'
import {useParams} from 'react-router-dom'
import SingleLessonComponent from '../components/SingleLessonComponent'
import { useData } from '../hooks/useData'

export default function SingleLesson() {
    const params = useParams()
    const lessonId = params.id
    const lesson = useData(`http://localhost:8080/api/lesson/${lessonId}`);
  return (
    <>
   {lesson[0] !={}? <SingleLessonComponent lesson = {lesson}/> : null} 
 
   </>
  )
}
