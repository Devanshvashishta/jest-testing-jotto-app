import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Congrats from './congrats';
import { findByTestAttr } from './test/testUtils';


Enzyme.configure({adapter: new EnzymeAdapter() });

const setup = (props={}) => {return shallow(<Congrats {...props} />)}

test('renders without error',() => {
const wrapper = setup();
const component = findByTestAttr(wrapper, 'component-congrats');
expect(component.length).toBe(1);
});

test('renders no test when success props is false', () =>{
    const wrapper = setup({success: false});
    const component = findByTestAttr(wrapper,'component-congrats');
    expect(component.text()).toBe('')
});

test('renders non-empty congrats message when success props is true', () =>{
    const wrapper = setup({success: true});
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);

});