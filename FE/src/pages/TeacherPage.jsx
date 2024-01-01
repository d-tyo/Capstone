import React from 'react';
import TeacherList from '../components/TeacherList';
import { useData } from '../hooks/useData';
import { trobjarr } from '../data/data';

export default function TeacherPage() {

        const Teachers = useData('http://localhost:8080/api/teacher');
        
        trobjarr.rows = Teachers
      
        return (
            <>
                {Array.isArray(trobjarr.rows)?<TeacherList data={trobjarr} />:null}
            </>
        );
      }
