import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createHashRouter, RouterProvider } from 'react-router';
import DashboardLayout from './components/DashboardLayout';
import EmployeeList from './components/EmployeeList';
import EmployeeShow from './components/EmployeeShow';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import NotificationsProvider from './hooks/useNotifications/NotificationsProvider';
import DialogsProvider from './hooks/useDialogs/DialogsProvider';
import AppTheme from './shared-theme/AppTheme';
import {
  dataGridCustomizations,
  datePickersCustomizations,
  sidebarCustomizations,
  formInputCustomizations,
} from './theme/customizations';
import PostData from '../post/PostData';
import FeedChatbot from '../chatbot/FeedChatbot';
import ChatWithAI from '../chatbot/ChatWithAI';

const router = createHashRouter([
  {
    Component: DashboardLayout,
    children: [
      {
        path: '/post',
        Component: PostData,
      },
      {
        path: '/post/:status',
        Component: PostData,
      },
      {
        path: '/chatbot/feed',
        Component: FeedChatbot,
      },
      {
        path: '/chatbot/chat',
        Component: ChatWithAI,
      },
      {
        path: '*',
        Component: PostData,
      },
    ],
  },
]);

const themeComponents = {
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...sidebarCustomizations,
  ...formInputCustomizations,
};

export default function CrudDashboard(props) {
  return (
    <AppTheme {...props} themeComponents={themeComponents}>
      <CssBaseline enableColorScheme />
      <NotificationsProvider>
        <DialogsProvider>
          <RouterProvider router={router} />
        </DialogsProvider>
      </NotificationsProvider>
    </AppTheme>
  );
}
