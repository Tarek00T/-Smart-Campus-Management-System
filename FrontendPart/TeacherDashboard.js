import axios from "axios";
import { useEffect, useState } from "react";

function StudentDashboard() {
  const [attendance, setAttendance] = useState([]);
  const [grades, setGrades] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    axios.get("/api/student/attendance/1").then(res => setAttendance(res.data));
    axios.get("/api/student/grades/1").then(res => setGrades(res.data));
    axios.get("/api/student/materials").then(res => setMaterials(res.data));
    axios.get("/api/student/announcements").then(res => setAnnouncements(res.data));
  }, []);

  return (
    <div>
      <h2>Attendance</h2>
      {attendance.map(a => <p>{a.course} - {a.status}</p>)}

      <h2>Grades</h2>
      {grades.map(g => <p>{g.course} - {g.marks}</p>)}

      <h2>Materials</h2>
      {materials.map(m => <a href={m.fileUrl}>{m.title}</a>)}

      <h2>Announcements</h2>
      {announcements.map(a => <p>{a.message}</p>)}
    </div>
  );
}

export default StudentDashboard;