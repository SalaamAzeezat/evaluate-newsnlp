import {checkForName} from '../client/js/nameChecker'

window.alert = jest.fn();

describe('checkForName', () => {
    it('should show alert if it equals names', () => {
        const names = ["Picard", "Janeway", "Kirk", "Archer", "Georgiou"]
        checkForName("Picard")
        expect(window.alert).toHaveBeenCalled()
    });
});
