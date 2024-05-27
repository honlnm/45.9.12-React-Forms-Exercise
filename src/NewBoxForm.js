import React, { state } from 'react';
import Box from './Box';

function NewBoxForm({ addBox }) {
    const INITIAL_STATE = {
        boxHeight: '',
        boxWidth: '',
        boxBackgroundColor: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData, id: uuid() });
        setFormData(INITIAL_STATE)
    }

    return (
        <div>
            <form id="newBoxForm" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="newBoxHeight">Box Height</label>
                    <input
                        id="newBoxHeight"
                        type="text"
                        name="newBoxHeight"
                        value={formData.boxHeight}
                        min="1"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="newBoxWidth">Box Width</label>
                    <input
                        id="newBoxWidth"
                        type="text"
                        name="newBoxWidth"
                        value={formData.boxWidth}
                        min="1"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="newBoxBackgroundColor">Box Color</label>
                    <input
                        id="newBoxBackgroundColor"
                        type="text"
                        name="newBoxBackgroundColor"
                        value={formData.boxBackgroundColor}
                        onChange={handleChange}
                    />
                </div>
                <button id="newBoxButton" type="submit">Create New Box</button>
            </form>
        </div>
    )
};

export default NewBoxForm;