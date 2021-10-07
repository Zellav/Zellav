import { NavLink } from 'react-router-dom'
import './admin.css'

const Admin = () => {
    return (
        <div className="admin">
            <div className="container">
                <ul className="admin__nav">
                    <li>
                        <NavLink to="/create">add card</NavLink>
                    </li>
                    <li>
                        <NavLink to="/update">edit card</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Admin;