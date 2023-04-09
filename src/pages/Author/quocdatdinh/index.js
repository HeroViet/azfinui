import { DATA_GLOBAL_SPREAD } from '~/components/assets/datas';
import Author from '~/layouts/components/Author';

function quocdatdinh() {
    const Data_quocdatdinh = DATA_GLOBAL_SPREAD.filter((data) => data.author.name.includes('Quốc Đạt Đinh'));
    return <Author datas={Data_quocdatdinh} />;
}

export default quocdatdinh;
