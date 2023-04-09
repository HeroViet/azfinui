import { DATA_GLOBAL_SPREAD } from '~/components/assets/datas';
import Author from '~/layouts/components/Author';

function azfineditor() {
    const Data_azfineditor = DATA_GLOBAL_SPREAD.filter((data) => data.author.name.includes('Azfin Editor'));
    return <Author datas={Data_azfineditor} />;
}

export default azfineditor;
