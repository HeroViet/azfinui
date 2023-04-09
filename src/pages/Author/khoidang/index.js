import { DATA_GLOBAL_SPREAD } from '~/components/assets/datas';
import Author from '~/layouts/components/Author';

function khoidang() {
    const Data_khoidang = DATA_GLOBAL_SPREAD.filter((data) => data.author.name.includes('khoi dang'));
    return <Author datas={Data_khoidang} />;
}

export default khoidang;
