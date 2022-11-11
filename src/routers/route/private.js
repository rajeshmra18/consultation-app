import React from "react";

// Home
export const Home = React.lazy(() => import("../../components/pages/Home"));
export const Hometwo = React.lazy(() => import("../../components/pages/Hometwo"));
// Blog
export const Blog = React.lazy(() => import("../../components/pages/Blog"));
export const Blogstandard = React.lazy(() => import("../../components/pages/Blogstandard"));
export const Blogdetails = React.lazy(() => import("../../components/pages/Blogdetails"));
// About
export const About = React.lazy(() => import("../../components/pages/About"));
// Services
export const Services = React.lazy(() => import("../../components/pages/Services"));
export const Servicedetails = React.lazy(() => import("../../components/pages/Servicedetails"));
// FAQ's
export const Faqs = React.lazy(() => import("../../components/pages/Faqs"));
// Appointment
export const Appointment = React.lazy(() => import("../../components/pages/Appointment"));
// Clinics
export const Clinicgrid = React.lazy(() => import("../../components/pages/Clinicgrid"));
export const Cliniclist = React.lazy(() => import("../../components/pages/Cliniclist"));
export const Clinicdetails = React.lazy(() => import("../../components/pages/Clinicdetails"));
// Doctors
export const Doctorgrid = React.lazy(() => import("../../components/pages/Doctorgrid"));
export const Doctorlist = React.lazy(() => import("../../components/pages/Doctorlist"));
export const Doctordetails = React.lazy(() => import("../../components/pages/Doctordetails"));
// Contact
export const Contact = React.lazy(() => import("../../components/pages/Contact"));
// Extra
export const Errorpage = React.lazy(() => import("../../components/pages/Errorpage"));