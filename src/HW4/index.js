const students = ['Саша','Игорь','Лена','Ира','Алексей','Светлана'];
const pairOfStudents = function pair(name) {
    let pair =  [[name[0],name[2]],[name[1],name[3]],[name[4],name[5]]];
    return pair;
}
const homework4 = pairOfStudents(students).map(pair => pair.join(' и '));
export default homework4;