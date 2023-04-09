import DefaultFolder from '~/layouts/components/DefaultFolder';
import { DATA_GLOBAL } from '~/components/assets/datas';

function NewsDay() {
    const DATA_NewsDay = DATA_GLOBAL.find((data) => data.title.includes('Tin tức hàng ngày'));
    return <DefaultFolder datas={DATA_NewsDay} headerTitle="Tin Tức hàng ngày" />;
}

export default NewsDay;
