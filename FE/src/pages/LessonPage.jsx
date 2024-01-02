import React from 'react';
import LessonList from '../components/LessonList';
import { useData } from '../hooks/useData';
import { lessobjarr } from '../data/data';
import UploadButton from '../components/UploadButton';

export default function LessonPage() {

        const Lessons = useData('http://localhost:8080/api/Lesson');
        
        lessobjarr.rows = Lessons
      
        return (
        
            <>

                {Array.isArray(lessobjarr.rows)?<LessonList data={lessobjarr} />:null}
                <UploadButton/>
            </>
        );
      }
