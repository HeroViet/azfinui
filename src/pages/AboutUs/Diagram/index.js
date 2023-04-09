import styles from './Diagram.module.scss';
import classNames from 'classnames/bind';
import AboutUsTitle from '~/layouts/components/AboutUsTitle';

const cx = classNames.bind(styles);

function Diagram() {
    return (
        <div>
            <AboutUsTitle title="SƠ ĐỒ TỔ CHỨC" />
            <div className="w-screen h-[100px]"></div>
        </div>
    );
}

export default Diagram;
