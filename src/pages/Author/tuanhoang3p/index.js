import { DATA_GLOBAL_SPREAD } from '~/components/assets/datas';
import Author from '~/layouts/components/Author';

function tuanhoang3p() {
    const Data_tuanhoang3p = DATA_GLOBAL_SPREAD.filter((data) => data.author.name.includes('Tuấn Hoàng 3P'));
    return <Author datas={Data_tuanhoang3p} />;
}

export default tuanhoang3p;
