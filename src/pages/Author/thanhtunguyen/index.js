import { DATA_GLOBAL_SPREAD } from '~/components/assets/datas';
import Author from '~/layouts/components/Author';

function thanhtunguyen() {
    const Data_thanhtunguyen = DATA_GLOBAL_SPREAD.filter((data) => data.author.name.includes('Thành Tư Nguyễn'));
    return <Author datas={Data_thanhtunguyen} />;
}

export default thanhtunguyen;
