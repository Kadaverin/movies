import React from 'react';
import { shallow } from 'enzyme';
import { MenuItem } from '@material-ui/core';
import Select from '../../../common/components/forms/select/select';

describe('common components', () => {
  describe('Select', () => {
    const onChange = jest.fn();

    test('renders correctly', () => {
      const select = shallow(<Select onChange={onChange} />);

      expect(select).toMatchSnapshot();
    });

    test('calls onChange prop when change event occures', () => {
      const onChange = jest.fn();
      const stubEvent = {};

      const select = shallow(<Select onChange={onChange} />);

      select.simulate('change', stubEvent);

      expect(onChange).toHaveBeenCalledWith(stubEvent);
    });

    test('renders placeholder disabled option when placeholder prop is passed', () => {
      const select = shallow(
        <Select onChange={onChange} placeholder="placeholder" />,
      );

      const options = select.find(MenuItem);
      expect(options.at(0).contains('placeholder')).toBe(true);
      expect(options.at(0).prop('disabled')).toBe(true);
    });

    describe('props.withNone is true', () => {
      test('renders none value option', () => {
        const NONE_VALUE = -1;

        const select = shallow(
          <Select
            onChange={onChange}
            withNone
            noneText="nothing"
            noneValue={NONE_VALUE}
          />,
        );

        const noneOption = select.find(MenuItem).at(0);

        expect(noneOption.contains('nothing')).toBe(true);
        expect(noneOption.prop('value')).toBe(NONE_VALUE);
      });

      test('sets correct default empty select value depending on props.multiple', () => {
        const select = shallow(<Select onChange={onChange} withNone />);

        const options = select.find(MenuItem);

        const multiSelect = shallow(
          <Select onChange={onChange} withNone multiple />,
        );

        const multiOptions = multiSelect.find(MenuItem);

        expect(options.at(0).prop('value')).toBe('');
        expect(multiOptions.at(0).prop('value')).toEqual([]);
      });

      test('renders options correctly', () => {
        const options = [{ value: '1', label: '1', name: '2', label: '2' }];

        const select = shallow(
          <Select onChange={onChange} options={options} />,
        );

        const renderedOptions = select.find(MenuItem);

        options.forEach(({ label }, index) => {
          expect(renderedOptions.at(index).contains(label));
        });
      });
    });
  });
});
