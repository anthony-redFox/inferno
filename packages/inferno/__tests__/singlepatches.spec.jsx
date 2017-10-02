import {render, Component} from 'inferno';
import sinon, {assert} from 'sinon';

describe('All single patch variations', () => {
  let templateRefSpy = sinon.spy();
  let container;
  let mountSpy;
  let updateSpy;
  let unmountSpy;

  beforeEach(function () {
    mountSpy.reset();
    updateSpy.reset();
    unmountSpy.reset();
    templateRefSpy.reset();
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(function () {
    render(null, container);
    container.innerHTML = "";
    document.body.removeChild(container);
  });

  function rTemplate(content) {
    return render(<div>{[content]}</div>, container);
  }

  function tearDown() {
    render(null, container);
    expect(container.innerHTML).toBe('');
  }

  class ComA extends Component {
    componentDidMount() {

    };

    componentWillMount() {

    };

    componentWillReceiveProps(nextProps, nextContext) {

    }

    shouldComponentUpdate(nextProps,
                          nextState,
                          nextContext) {
      return true;
    }

    componentWillUpdate(nextProps,
                        nextState,
                        nextContext) {

    }

    componentDidUpdate(prevProps,
                       prevState,
                       prevContext) {

    }

    componentWillUnmount() {

    }

    render({children}) {
      return children;
    }
  }

  mountSpy = sinon.spy(ComA.prototype, 'componentWillMount');
  updateSpy = sinon.spy(ComA.prototype, 'componentWillUpdate');
  unmountSpy = sinon.spy(ComA.prototype, 'componentWillUnmount');

  function ComB({children}) {
    return children;
  }

  describe('Text to', () => {
    let node;

    beforeEach(() => {
      rTemplate('text');
      expect(container.innerHTML).toEqual('<div>text</div>');
      node = container.firstChild.firstChild;
    });

    it('text', () => {
      rTemplate('more text');
      expect(container.innerHTML).toEqual('<div>more text</div>');

      expect(container.firstChild.firstChild).toBe(node);

      rTemplate('more text2');
      expect(container.innerHTML).toEqual('<div>more text2</div>');

      expect(container.firstChild.firstChild).toBe(node);
      tearDown();
    });

    it('invalid', () => {
      rTemplate(false);
      expect(container.innerHTML).toEqual('<div></div>');

      expect(container.firstChild.firstChild).toBe(null);

      rTemplate(null);
      expect(container.innerHTML).toEqual('<div></div>');

      expect(container.firstChild.firstChild).toBe(null);
      tearDown();
    });

    it('vNode (elem)', () => {
      const spy = sinon.spy();

      rTemplate(<span ref={spy}>1</span>);
      expect(container.innerHTML).toEqual('<div><span>1</span></div>');

      expect(spy.callCount).toBe(1);

      rTemplate(<span ref={spy}>2</span>);
      expect(container.innerHTML).toEqual('<div><span>2</span></div>');

      expect(spy.callCount).toBe(1);
      tearDown();
    });

    it('vNode (com)', () => {
      const spy = sinon.spy();

      rTemplate(<ComA ref={spy}>1</ComA>);
      expect(container.innerHTML).toEqual('<div>1</div>');
      expect(mountSpy.callCount).toBe(1);
      expect(updateSpy.callCount).toBe(0);
      expect(unmountSpy.callCount).toBe(0);
      expect(spy.callCount).toBe(1);


      rTemplate(<ComA ref={spy}>2</ComA>);
      expect(container.innerHTML).toEqual('<div>2</div>');
      expect(mountSpy.callCount).toBe(1);
      expect(updateSpy.callCount).toBe(1);
      expect(unmountSpy.callCount).toBe(0);
      expect(spy.callCount).toBe(1);

      tearDown();
    });

    it('Array', () => {
      const spy = sinon.spy();

      rTemplate([<ComA ref={spy}>1</ComA>, 'foo']);
      expect(container.innerHTML).toEqual('<div>1foo</div>');
      expect(mountSpy.callCount).toBe(1);
      expect(updateSpy.callCount).toBe(0);
      expect(unmountSpy.callCount).toBe(0);
      expect(spy.callCount).toBe(1);

      rTemplate([<ComA ref={spy}>2</ComA>, null]);
      expect(container.innerHTML).toEqual('<div>2</div>');
      expect(mountSpy.callCount).toBe(1);
      expect(updateSpy.callCount).toBe(1);
      expect(unmountSpy.callCount).toBe(0);
      expect(spy.callCount).toBe(1);

      tearDown();
    });
  });

  describe('Component to', () => {
    beforeEach(() => {
      rTemplate(<ComA ref={templateRefSpy}>first</ComA>);
      expect(templateRefSpy.callCount).toBe(1);
      templateRefSpy.reset();
      expect(container.innerHTML).toEqual('<div>first</div>');
      expect(unmountSpy.callCount).toBe(0);
      expect(mountSpy.callCount).toBe(1);
      expect(updateSpy.callCount).toBe(0);
    });

    it('text', () => {
      rTemplate('more text');
      expect(container.innerHTML).toEqual('<div>more text</div>');
      expect(unmountSpy.callCount).toBe(1);
      expect(mountSpy.callCount).toBe(1);
      expect(updateSpy.callCount).toBe(0);

      rTemplate('more text2');
      expect(container.innerHTML).toEqual('<div>more text2</div>');
      tearDown();
    });

    it('invalid', () => {
      rTemplate(false);
      expect(container.innerHTML).toEqual('<div></div>');
      expect(unmountSpy.callCount).toBe(1);
      expect(mountSpy.callCount).toBe(1);
      expect(updateSpy.callCount).toBe(0);

      expect(container.firstChild.firstChild).toBe(null);

      rTemplate(null);
      expect(container.innerHTML).toEqual('<div></div>');

      expect(container.firstChild.firstChild).toBe(null);
      tearDown();
    });

    it('vNode (elem)', () => {
      const spy = sinon.spy();
      expect(templateRefSpy.callCount).toBe(0);

      rTemplate(<div ref={spy} className="component2">
        Component 2 <br />
        <span id="clear">
              clear app
            </span>
      </div>);
      expect(templateRefSpy.callCount).toBe(1); // unmount
      expect(unmountSpy.callCount).toBe(1);
      expect(spy.callCount).toBe(1);
      expect(updateSpy.callCount).toBe(0);
      expect(container.innerHTML).toEqual('<div><div class="component2">Component 2 <br><span id="clear">clear app</span></div></div>');
      assert.callOrder(templateRefSpy, spy); // Unmount should happen before mount

      rTemplate(<span ref={spy}>2</span>);
      expect(container.innerHTML).toEqual('<div><span>2</span></div>');

      expect(spy.callCount).toBe(3); // mount, unmount, mount
      tearDown();
    });

    it('vNode (Com different)', () => {
      class ComC extends Component {

        componentWillMount() {

        }

        render({children}) {
          return children;
        }
      }

      const spy = sinon.spy(ComC.prototype, 'componentWillMount');

      rTemplate(<ComC>second</ComC>);

      assert.callOrder(unmountSpy, spy); // first unmount then mount


      tearDown();
    });
  });
});