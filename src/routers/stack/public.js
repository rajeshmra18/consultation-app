import React, { Suspense, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import {
    Login,
    Register
} from '../route/public'

// Scroll to Top
const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return children || null
})

function PublicStack() {
    return (
        <Router basename={"/themes/themeforest/react/docfind/"}>
            <Suspense fallback={<div></div>}>
                <ScrollToTop>
                    <Switch>
                        {/* Auth */}
                        <Route exact path="/" component={Login} />
                        <Route exact path="/register" component={Register} />
                    </Switch>
                </ScrollToTop>
            </Suspense>
        </Router>
    )
}

export default PublicStack