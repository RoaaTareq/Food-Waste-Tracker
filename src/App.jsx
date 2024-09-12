import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './Pages/Dashboard/dashboard';
import HospitalDashboard from './Pages/Hosiptal/hosiptal';
import EmployeeDashboard from './Pages/Employee/employee';
// import UserDashboard from './Pages/UserDashboard';
// import Login from './Pages/Login';
import ProtectedRoute from '../src/Route/ProtectedRoute';
import Home from './Pages/Home/Home'
import Category from './Pages/Dashboard/Category/Modeles/CreateCategory';

function App() {
  return (
<>
{/* <Home/> */}
<AdminDashboard/>
{/* <HospitalDashboard/> */}

</>
    // <Router>
    //   <Routes>
    //     {/* Admin routes */}
    //     <Route
    //       path="/admin/*"
    //       element={<ProtectedRoute allowedRoles={['admin']} component={AdminDashboard} />}
    //     />

    //     {/* Hospital routes */}
    //     <Route
    //       path="/hospital/*"
    //       element={<ProtectedRoute allowedRoles={['hospital']} component={HospitalDashboard} />}
    //     />

    //     {/* Employee routes */}
    //     <Route
    //       path="/employee/*"
    //       element={<ProtectedRoute allowedRoles={['employee']} component={EmployeeDashboard} />}
    //     />

       
    //     {/* <Route
    //       path="/user/*"
    //       element={<ProtectedRoute allowedRoles={['user']} component={UserDashboard} />}
    //     /> */}

    //     {/* Default Route */}
    //     {/* <Route path="/login" element={<Login />} /> */}
    //   </Routes>
    // </Router>
  );
}

export default App;
