/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '.';

describe('Progress Indicators|Spinner', () => {
  describe('Given label', () => {
    it('Should add label after spinner', () => {
      given_label('Label Text');
      when_rendered();
      then_label_should_be('Label Text');
    });
  });

  describe('Given size of', () => {
    describe('sm', () => {
      it('Should be 16px tall', () => {
        given_size('sm');
        when_rendered();
        then_height_should_be('16px');
      });
    });

    describe('med', () => {
      it('should be 48px tall', () => {
        given_size('med');
        when_rendered();
        then_height_should_be('48px');
      });
    });

    describe('lg', () => {
      it('Should be 80px tall', () => {
        given_size('lg');
        when_rendered();
        then_height_should_be('80px');
      });
    });

    describe('(none)', () => {
      it('Should default to sm/small', () => {
        given_size(undefined);
        when_rendered();
        then_height_should_be('16px');
      });
    });
  });

  let props;
  let wrapper;

  beforeEach(() => {
    props = {};
    wrapper = null;
  });

  const given_size = (size) => {
    props.size = size;
  };
  const given_label = (label) => {
    props.label = label;
  };

  const when_rendered = () => {
    wrapper = shallow(<Spinner {...props} />);
  };

  const then_label_should_be = (expectedLabel) => {
    const label = wrapper.find('.ab-spinner-label');

    expect(label.text()).toBe(expectedLabel);
  };

  const then_height_should_be = (expectedHeight) => {
    const root = wrapper.find('.ab-spinner').parent();

    expect(root.props().style.height).toBe(expectedHeight);
  };
});
