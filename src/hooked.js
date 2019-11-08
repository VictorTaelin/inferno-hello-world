var stateOf = {};
const buildUseState = self => state => {
  const setState = newState => {
    stateOf[self._id] = newState;
    self.forceUpdate();
  };
  if (!self._id) {
    self._id = "x" + Math.floor(Math.random() * (2 ** 32));
    stateOf[self._id] = state;
  }
  return [stateOf[self._id], setState];
};

function Hooked(render) {
  class Self extends Component {
    constructor(props) {
      super(props)
    }
    componentDidMount() {
    }
    render() {
      return render({useState: buildUseState(this)});
    }
  };
  return Self;
};

module.exports = Hooked;
