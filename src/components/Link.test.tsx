const TestRenderer = require('react-test-renderer'); // 
import Link from './Link';

it('changes the class when hovered', () => {
  
  const testRenderer = TestRenderer.create(<Link page="http://www.facebook.com">Facebook</Link>,);
  const testInstance = testRenderer.root;
  
  // expect(root.toJSON()).toMatchSnapshot();
  // expect(testInstance.findByType(SubComponent).props.foo).toBe('bar');
  // expect(testInstance.findByProps({className: "sub"}).children).toEqual(['Sub']);

  // manually trigger the callback
  // 
});

