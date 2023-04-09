import { DATA_GLOBAL_SPREAD } from '~/components/assets/datas';
import Author from '~/layouts/components/Author';

function trinhtuanminh() {
    const Data_trinhtuanminh = DATA_GLOBAL_SPREAD.filter((data) => data.author.name.includes('Trịnh Tuấn Minh'));
    return <Author datas={Data_trinhtuanminh} />;
}

export default trinhtuanminh;
