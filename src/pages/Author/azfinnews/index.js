import { DATA_GLOBAL_SPREAD } from '~/components/assets/datas';
import Author from '~/layouts/components/Author';

function azfinnews() {
    const Data_azfinnews = DATA_GLOBAL_SPREAD.filter((data) => data.author.name.includes('Azfin News'));
    return <Author datas={Data_azfinnews} />;
}

export default azfinnews;
