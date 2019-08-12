import React from 'react';
import './style.css'

class Form extends React.Component {
    // constructor() {
    //     super()

    // }
    render() {
        return (

            <form className="form-traveler">
                <input type="text" className="fname" name="firstName" placeholder="First Name"/>

                <input type="text" className="lname" name="lastName" placeholder="Last Name"/>

                <label className="age" htmlFor="age">
                    <input type="number" name="age" placeholder="Age"/>
                </label>

                <label className="gender" htmlFor="gender">
                    <select name="gender">
                        <option value="male">Mr</option>
                        <option value="female">Ms</option>
                        <option value="female">Mrs</option>
                    </select>
                </label>

                <label className="location" htmlFor="location">
                    <select name="location">
                        <option value="Destination">Destination</option>
                        <option value="Sahara Desert">Sahara Desert</option>
                        <option value="Grand Canyon">Grand Canyon</option>
                        <option value="Mount Everest">Mount Everest</option>
                    </select>
                </label>

                <div className="diet">
                    Dietary Restrictions:
                    <br/>
                    <button>Kosher
                    </button>
                    <button>Vegetarian
                    </button>
                    <button>Dairy Free
                    </button>
                    <button>Halal
                    </button>

                </div>
            </form>
        )
    }
}

export default() => <div>
    <h1 styles={{
        color: 'black'
    }}>Welcome Traveler!</h1>

    <div className="flex">
        <Form/>
    </div>

</div>
