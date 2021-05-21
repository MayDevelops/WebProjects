import React from 'react';

const FormEntry = () => {
    return (
        <div>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <form>
                <label>
                    Comment:
                    <input type="text" name="comment" />
                </label>
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default FormEntry;
