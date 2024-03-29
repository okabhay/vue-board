import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home';
import Login from '../views/Login';
import Register from '../views/Register';
import Dashboard from '../views/admin/Dashboard';

import DashboardPage from '../views/admin/dashboard/DashboardPage';
import Course from '../views/admin/course/Course';
import CreateCourse from '../views/admin/course/pages/Create';
import ManageCourse from '../views/admin/course/pages/Manage';

import Introduction from '../views/admin/course/components/manage/Introduction';
import CourseDetails from '../views/admin/course/components/manage/CourseDetails';
import Curriculums from '../views/admin/course/components/manage/Curriculums';
import Pricing from '../views/admin/course/components/manage/Pricing';
import Promotions from '../views/admin/course/components/manage/Promotions';
import Messages from '../views/admin/course/components/manage/Messages';


import QuizPage from '../views/admin/quiz/QuizPage';
import CategoryPage from '../views/admin/category/CategoryPage';
import StudentPage from '../views/admin/student/StudentPage';
import PaymentPage from '../views/admin/payment/PaymentPage';
import ChattingPage from '../views/admin/chatting/ChattingPage';
import ReviewPage from '../views/admin/review/ReviewPage';
import AnounsmentPage from '../views/admin/anounsment/AnounsmentPage';
import UserPage from '../views/admin/users/UserPage';

import AppSettingPage from '../views/admin/app/AppSettingPage';
import ProfilePage from '../views/admin/settings/ProfilePage';
import Sample from '../views/admin/Sample';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
        },
        {
            path: '/create/:step',
            name: 'course-create',
            component: CreateCourse,
        },
        {
            path: '/manage-course/:id',
            name: 'course-manage',
            component: ManageCourse,
            children: [
                {
                    path: '',
                    redirect: { name: 'Introduction' }
                },
                {
                    path: 'introduction',
                    name: 'Introduction',
                    component: Introduction
                },
                {
                    path: 'course-details',
                    name: 'CourseDetails',
                    component: CourseDetails,
                },
                {
                    path: 'curriculums',
                    name: 'Curriculums',
                    component: Curriculums
                },
                {
                    path: 'pricing',
                    name: 'Pricing',
                    component: Pricing
                },
                {
                    path: 'promotions',
                    name: 'Promotions',
                    component: Promotions
                },
                {
                    path: 'messages',
                    name: 'Messages',
                    component: Messages
                },
            ]
        },
        {
            path: '/admin',
            name: 'admin',
            component: Dashboard,
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: '/',
                    name: 'Dashboard',
                    component: DashboardPage
                },
                {
                    path: 'courses',
                    name: 'Course',
                    component: Course,
                },
                {
                    path: 'quizes',
                    name: 'Quizes',
                    component: QuizPage
                },
                {
                    path: 'categories',
                    name: 'Categories',
                    component: CategoryPage
                },
                {
                    path: 'students',
                    name: 'Students',
                    component: StudentPage
                },
                {
                    path: 'payments',
                    name: 'Payments',
                    component: PaymentPage
                },
                {
                    path: 'chatting',
                    name: 'Chatting',
                    component: ChattingPage
                },
                {
                    path: 'reviews',
                    name: 'Reviews',
                    component: ReviewPage
                },
                {
                    path: 'anounsment',
                    name: 'Anounsment',
                    component: AnounsmentPage
                },
                {
                    path: 'users',
                    name: 'Users',
                    component: UserPage
                },
                {
                    path: 'app-settings',
                    name: 'AppSettings',
                    component: AppSettingPage
                },
                {
                    path: 'profile',
                    name: 'Profile',
                    component: ProfilePage
                },
                {
                    path: 'sample',
                    name: 'Sample',
                    component: Sample
                },
            ]
        },
    ],
    mode: 'history'
});
