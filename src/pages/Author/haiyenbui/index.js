import { DATA_GLOBAL_SPREAD } from '~/components/assets/datas';
import Author from '~/layouts/components/Author';

function haiyenbui() {
    const Data_haiyenbui = DATA_GLOBAL_SPREAD.filter((data) => data.author.name.includes('Hai Yen Bui'));
    return <Author datas={Data_haiyenbui} />;
}

export default haiyenbui;
