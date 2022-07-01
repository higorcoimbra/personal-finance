const { render } = require("@testing-library/react");
const { default: userEvent } = require("@testing-library/user-event");
const { default: NewRecord } = require("./NewRecord");

describe('new record', () => {
    describe('should be able to register the value of a new income', () => {
        let newRecord;
        let valueField;
        beforeEach(() => {
            newRecord = render(<NewRecord/>);
            valueField = newRecord.getByLabelText('Value');        
        })
        it('should accept values bigger than zero', () => {
            userEvent.type(valueField, '3123');
            expect(valueField).toBeValid();
        });
        it('should not accept values smaller than zero', () => {
            userEvent.type(valueField, '-1');
            expect(valueField).toBeInvalid();
        });
        it('should show an error message for invalid values', () => {
            userEvent.type(valueField, '-1');
            expect(valueField).toBeInvalid();
            newRecord.getByText('Value must be greater than or equal to 0.');
        })
    });
});