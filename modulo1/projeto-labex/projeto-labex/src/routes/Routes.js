import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminHome from "../pages/AdminHomePage"
import ApplicationForm from "../pages/ApplicationFormPage"
import HomePage from "../pages/HomePage"
import ListTrips from "../pages/ListTripsPage"
import LoginPage from "../pages/LoginPage"
import CreateTrip from "../pages/CreateTripPage"
import TripDetails from "../pages/TripDetailsPage"

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />}/>
            <Route path="/trips/list" element={<ListTrips />} />
            <Route path="/trips/application" element={<ApplicationForm />} />
            <Route path="/admin/trips/list" element={<AdminHome />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin/trips/create" element={<CreateTrip />}/>
            <Route path="/admin/trips/:id" element={<TripDetails />}/>
        </Routes>
        </BrowserRouter>
    )
}