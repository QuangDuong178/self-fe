import {createBrowserRouter, Navigate } from "react-router-dom";
import {APP_ROUTE} from '@/constant/routes.ts';
import {LoginPage} from "@/pages/LoginPage";
import {HomePage} from '@/pages/HomePage';
import {AINewsPage} from "@/pages/AINewsPage";
import {AIAgentPage} from "@/pages/AIAgentPage";

export const router = createBrowserRouter(
    [
        {
            path: APP_ROUTE.LOGIN,
            element: <LoginPage/>
        },
        {
            path: APP_ROUTE.HOME,
            element: <HomePage/>
        },
        {
            path: APP_ROUTE.AI_NEWS,
            element: <AINewsPage/>
        },
        {
            path: APP_ROUTE.AI_AGENT,
            element: <AIAgentPage/>
        },
        {
            path: "*",
            element: <Navigate replace to={APP_ROUTE.HOME} />
        },
    ]
);