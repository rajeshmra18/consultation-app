import React, { Suspense, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import {
    Home,
    Hometwo,
    Blog,
    Blogdetails,
    Blogstandard,
    About,
    Services,
    Servicedetails,
    Faqs,
    Appointment,
    Clinicgrid,
    Cliniclist,
    Clinicdetails,
    Doctorgrid,
    Doctorlist,
    Doctordetails,
    Contact,
    Errorpage,
} from '../route/private'

// Scroll to Top
const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return children || null
})

function PrivateStack() {
    return (
        <Router basename={"/themes/themeforest/react/docfind/"}>
            <Suspense fallback={<div></div>}>
                <ScrollToTop>
                    <Switch>
                        {/* Home */}
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home-v2" component={Hometwo} />
                        {/* Blog */}
                        <Route exact path="/blog/cat/:catId" component={props => (<Blog {...props} key={window.location.pathname} />)} />
                        <Route exact path="/blog/tag/:tagId" component={props => (<Blog {...props} key={window.location.pathname} />)} />
                        <Route exact path="/blog/search/:query" component={props => (<Blog {...props} key={window.location.pathname} />)} />
                        <Route exact path="/blog/author/:authorId" component={props => (<Blog {...props} key={window.location.pathname} />)} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/blog-standard" component={Blogstandard} />
                        <Route exact path="/blog-details/:id" component={props => (<Blogdetails {...props} key={window.location.pathname} />)} />
                        {/* About */}
                        <Route exact path="/about" component={About} />
                        {/* Services */}
                        <Route exact path="/service/cat/:catId" component={props => (<Services {...props} key={window.location.pathname} />)} />
                        <Route exact path="/services" component={Services} />
                        <Route exact path="/service-details/:id" component={props => (<Servicedetails {...props} key={window.location.pathname} />)} />
                        {/* FAQ's */}
                        <Route exact path="/faqs" component={Faqs} />
                        {/* Appointment */}
                        <Route exact path="/appointment" component={Appointment} />
                        {/* Clinics */}
                        <Route exact path="/clinic/cat/:catId" component={props => (<Clinicgrid {...props} key={window.location.pathname} />)} />
                        <Route exact path="/clinic-grid" component={Clinicgrid} />
                        <Route exact path="/clinic-list" component={Cliniclist} />
                        <Route exact path="/clinic-details/:id" component={props => (<Clinicdetails {...props} key={window.location.pathname} />)} />
                        {/* Doctors */}
                        <Route exact path="/doctor/cat/:catId" component={props => (<Doctorgrid {...props} key={window.location.pathname} />)} />
                        <Route exact path="/doctor-grid" component={Doctorgrid} />
                        <Route exact path="/doctor-list" component={Doctorlist} />
                        <Route exact path="/doctor-details/:id" component={props => (<Doctordetails {...props} key={window.location.pathname} />)} />
                        {/* Contact */}
                        <Route exact path="/contact" component={Contact} />
                        {/* Extra */}
                        <Route exact path="/error-page" component={Errorpage} />
                        <Route exact component={Errorpage} />
                    </Switch>
                </ScrollToTop>
            </Suspense>
        </Router>
    )
}

export default PrivateStack