import React from 'react';
import './App.css';
import FileUpload from './file_upload/FileUpload';
import Comments from './http/Comments';
import Users from './http/Users';
import DeleteEmp from './http_emps/DeleteEmp';
import GetEmps from './http_emps/GetEmps';
import PatchEmp from './http_emps/PatchEmp';
import PostEmp from './http_emps/PostEmp';
import PutEmp from './http_emps/PutEmp';
import Login from './login/Login';
import Tiffins from './multiple_checkbox/Tiffins';
// import EmployeesOperations from './multi_component_emps_operations/EmployeesOperations';
import Registration from './registration/Registration';
import Subscribe from './single_checkbox/Subscribe';
// import EmployeesOperations from './emps_operations_http/EmployeesOperations'
import EmployeesOperations from './emps_operations_http_service/EmployeesOperations'
import Toggle from './life_cycle_demo/Toggle';
import HitCount from './hooks/use_state/hit_count/HitCount';
import Toggling from './hooks/use_state/toggling/Toggling';
import LoginForm from './hooks/use_state/login_form/Login';
import TodoApp from './hooks/use_state/todo_app/TodoApp';
import UseRefDemoFun from './hooks/use_ref/UseRefDemoFun';
import UseRefDemoClass from './hooks/use_ref/UseRefDemoClass';
import Layout from './routing_demo/Layout';
import AnimalsApp from './router_demo_animals/AnimalsApp';
import LazyLayout from './routing_demo_lazy/LazyLayout';
import Component1 from './hooks/need_context_demo/Component1';
import ContextFunComponent from './hooks/use_context_fun/Component1';
import UseEffect from './hooks/use_effect_demo/UseEffect';
import EmployeesOperationsUseStateUseEffect from './hooks/emps_operations_http_service_use_state_use_effect/EmployeesOperations';
import CounterApp from './redux/counter_app/CounterApp';
// import AnimalsProgrNavApp from './router_demo_afun/AnimalsApp';

function App() {
  return (
    <div className="App container">
      {/* <Login></Login> */}
      {/* <Registration></Registration> */}
      {/* <Subscribe></Subscribe> */}
      {/* <Tiffins></Tiffins> */}
      {/* <EmployeesOperations/> */}
      {/* <Users></Users> */}
      {/* <Comments></Comments> */}
      {/* <PostEmp></PostEmp> */}
      {/* <PutEmp></PutEmp> */}
      {/* <GetEmps></GetEmps> */}
      {/* <DeleteEmp></DeleteEmp> */}
      {/* <EmployeesOperations/> */}
      {/* <Toggle></Toggle> */}
      {/* <HitCount></HitCount> */}
      {/* <Toggling></Toggling> */}
      {/* <LoginForm></LoginForm> */}
      {/* <TodoApp></TodoApp> */}
      {/* <UseRefDemoFun></UseRefDemoFun> */}
      {/* <UseRefDemoClass></UseRefDemoClass> */}
      {/* <Layout></Layout> */}
      {/* <AnimalsApp></AnimalsApp> */}
      {/* <LazyLayout></LazyLayout> */}
      {/* <AnimalsProgrNavApp></AnimalsProgrNavApp> */}
      {/* <Component1></Component1> */}
      {/* <ContextFunComponent></ContextFunComponent> */}
      {/* <UseEffect></UseEffect> */}
      {/* <EmployeesOperationsUseStateUseEffect></EmployeesOperationsUseStateUseEffect> */}
      <CounterApp></CounterApp>
    </div>
  );
  
}

export default App;
