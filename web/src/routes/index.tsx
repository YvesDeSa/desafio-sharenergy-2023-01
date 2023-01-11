import React from "react";
import { Routes, Route } from "react-router-dom"

import { PrivateRoute } from "./Route";

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Dashboard } from '../pages/Dashboard';
import { Cat } from "../pages/Cat";
import { Dog } from "../pages/Dog";
import { Customers } from "../pages/Customers";

export const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={
        <PrivateRoute redirectTo="dashboard">
          <SignIn />
        </PrivateRoute>} />

      <Route path="/signup" element={
        <PrivateRoute redirectTo="/">
          <SignUp />
        </PrivateRoute>} />

      <Route path="/dashboard" element={
        <PrivateRoute isPrivate={true} redirectTo="/">
          <Dashboard />
        </PrivateRoute>} />

      <Route path="/cat" element={
        <PrivateRoute isPrivate={true} redirectTo="/">
          <Cat />
        </PrivateRoute>} />

      <Route path="/dog" element={
        <PrivateRoute isPrivate={true} redirectTo="/">
          <Dog />
        </PrivateRoute>} />

      <Route path="/customers" element={
        <PrivateRoute isPrivate={true} redirectTo="/">
          <Customers />
        </PrivateRoute>} />
    </Routes>
  );
};