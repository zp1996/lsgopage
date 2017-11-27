import PC from './Container';
import Mobile from './Container.mobile';

const component = process.mobile ? Mobile : PC;

export default component;
