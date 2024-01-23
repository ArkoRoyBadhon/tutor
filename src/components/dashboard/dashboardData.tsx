import ManageTutor from "./manage/manageTutor";
import ManageUser from "./manage/manageUser";


export const DashboardData = [
    {
        id: 'all-user',
        element: <ManageUser /> 
    },
    {
        id: 'all-tutor',
        element: <ManageTutor /> 
    },
]