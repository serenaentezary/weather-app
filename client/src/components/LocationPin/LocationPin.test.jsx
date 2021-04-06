import LocationPin from '.';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});

describe('LocationPin', () => {
  const text = 'Boston';
  const onClickFunction = jest.fn();

  const wrapper = shallow(<LocationPin onClick={onClickFunction} text={text} />);
  const badWrapper = shallow(<LocationPin onClick={onClickFunction} text={''} />);

  it('should handle having no text', () => {
    expect(badWrapper.find('.pin-text')).toHaveLength(0);
  });

  it('should handle good data', () => {
    expect(wrapper.find('.pin-text')).toHaveLength(1);
    expect(wrapper.find('.pin-text').children().text()).toEqual('Boston');
  });
});