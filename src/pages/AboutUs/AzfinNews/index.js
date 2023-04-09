import styles from './AzfinNews.module.scss';
import classNames from 'classnames/bind';
import DefaultFolder from '~/layouts/components/DefaultFolder';
import { DATA_GLOBAL } from '~/components/assets/datas';

const cx = classNames.bind(styles);

function AzfinNews() {
    const DATA_AZFINNEWS = DATA_GLOBAL.find((data) => data.kind.includes('News'));
    return <DefaultFolder datas={DATA_AZFINNEWS} headerTitle="Tin Tức Azfin" />;
}

export default AzfinNews;
