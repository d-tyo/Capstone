module.exports={
    studentController: require('./studentController'),
    lessonController: require('./lessonController'),
    teacherController: require('./teacherController'),
    popStudentController:require('./popStudentController'),
    popTeacherController:require('./popTeacherController'),

    commentController:require('./commentController'),
    lessonStatusController:require('./lessonStatusController'),
    guestUserController:require('./guestUserController')
    }

//literally exporting different controllers to make life easier in importing the app
    