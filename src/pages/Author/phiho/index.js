import { DATA_GLOBAL_SPREAD } from '~/components/assets/datas';
import Author from '~/layouts/components/Author';

function phiho() {
    const Data_phiho = DATA_GLOBAL_SPREAD.filter((data) => data.author.name.includes('Phi Hổ'));
    return <Author datas={Data_phiho} />;
}

export default phiho;
