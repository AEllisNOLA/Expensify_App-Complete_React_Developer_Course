import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This information is private. Please do not share.</p>}

            <WrappedComponent {...props} />
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)

// CHALLENGE - requireAuthentication

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
           
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                    <p>PLEASE LOG IN TO VIEW DETAILS</p>
                )}

        </div>
    )
}

const Authentication = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info='These are the secret details'/>, document.getElementById('app'))
ReactDOM.render(<Authentication isAuthenticated={true} info='Secret info here.' />, document.getElementById('app'))