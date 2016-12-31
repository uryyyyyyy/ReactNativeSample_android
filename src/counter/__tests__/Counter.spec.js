import assert from 'assert';
import deepEqual from 'deep-equal';
import React from 'react';
import { shallow } from 'enzyme';
import {Counter} from '../Counter';
import {CounterState} from "../Entities";
import {spy} from "sinon";

describe('<Counter />', function () {

  it('rendering', () => {
    const actions = {};
    const state: CounterState = {num: 1};
    const wrapper = shallow(<Counter value={state} actions={actions} />);
    assert(wrapper.find('Text').at(0).prop('children') === 'Count: 1');
  });

  it('click increment button', () => {
    const spyCB = spy();
    const actions = {increment: spyCB};
    const state: CounterState = {num: 0};
    const wrapper = shallow(<Counter value={state} actions={actions} />);
    wrapper.find('Button').at(0).simulate('press');
    const calls = spyCB.getCalls();
    assert(calls.length === 1);
    assert(deepEqual(calls[0].args, [3]));
  });

  it('click decrement button', () => {
    const spyCB = spy();
    const actions = {decrement: spyCB};
    const state: CounterState = {num: 0};
    const wrapper = shallow(<Counter value={state} actions={actions} />);
    wrapper.find('Button').at(1).simulate('press');
    const calls = spyCB.getCalls();
    assert(calls.length === 1);
    assert(deepEqual(calls[0].args, [2]));
  });
});