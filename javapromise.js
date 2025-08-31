
const prepareExam = () => {
    return new Promise((reslove , reject ) => {
        setTimeout(() =>{
            reslove ("ready for the exam ");
        } ,5000)
 
    })
}


const startStudy = async () => {
    console.log("Star to study");
    console.data = await prepareExam();
    
}
 startStudy();