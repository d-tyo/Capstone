import React from 'react';
import StudentList from '../components/StudentList';
import { useData } from '../hooks/useData';
import { objarr } from '../data/data';

export default function StudentPage() {

        const students = useData('http://localhost:3000/students');
        // const columns = useData('http://localhost:3000/columns');
        objarr.rows = students
      
        return (
            <>
                {Array.isArray(objarr.rows)?<StudentList data={objarr} />:null}
            </>
        );
      }
