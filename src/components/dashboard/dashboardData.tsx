import AddTutor from "./manage/addTutor";
import AddUser from "./manage/addUser";
import ManageTutor from "./manage/manageTutor";
import ManageUser from "./manage/manageUser";

export const DashboardData = [
  {
    id: "add-user",
    element: <AddUser />,
  },
  {
    id: "all-user",
    element: <ManageUser />,
  },
  {
    id: "add-tutor",
    element: <AddTutor />,
  },
  {
    id: "all-tutor",
    element: <ManageTutor />,
  },
];
