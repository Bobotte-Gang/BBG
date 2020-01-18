import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import App from './App';

describe('My Test Suite', () => {
  let renderer: TestRenderer.ReactTestRenderer;
  let instance: TestRenderer.ReactTestInstance;

  beforeAll(() => {
    renderer = TestRenderer.create(<App />);
    instance = renderer.root;
  });

  it('My Test Case', () => {
    expect(renderer.toJSON()).not.toBe(null);
  });
});
