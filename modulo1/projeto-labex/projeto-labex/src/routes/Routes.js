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
            <Route path="viagens/" element={<ListTrips />} />
            <Route path="form/" element={<ApplicationForm />} />
            <Route path="admin-list/" element={<AdminHome />} />
            <Route path="admin-login/" element={<LoginPage />} />
            <Route path="criar-viagem/" element={<CreateTrip />}/>
            <Route path="detalhes/" element={<TripDetails />}/>

        </Routes>
        </BrowserRouter>
    )
}