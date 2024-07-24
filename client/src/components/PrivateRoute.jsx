import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';
import { getUser } from '../helpers/selectors';

export default function PrivateRoute() {
    const { currentUser } = useSelector(getUser);
  return (
     currentUser ? <Outlet /> : <Navigate to='/sign-in'/>
  )
}
