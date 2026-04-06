import axios from "axios";
import { useEffect, useState } from "react";

function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/admin/users").then(res => setUsers(res.data));
  }, []);

  return (
    <div>
      <h2>All Users</h2>
      {users.map(u => <p>{u.name} - {u.role}</p>)}
    </div>
  );
}

export default AdminDashboard;